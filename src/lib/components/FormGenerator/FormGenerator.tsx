import { useEffect, forwardRef, useImperativeHandle } from "react";
import { FormProvider, useForm, type UseFormReturn } from "react-hook-form";
import type { FormGeneratorProps, FormValues } from "../../types/form.types";
import {
  generateInitialValues,
  normalizeFieldPath,
} from "../../utils/formHelpers";
import SchemaRenderer from "../SchemaRenderer";
import { FormConfigProvider } from "./FormConfigContext";

function getValue(path: string, data: FormValues) {
  const isNumberString = (str: string) => /^\d+$/.test(str);
  const parts = path.split(".");

  let current = data;

  for (const part of parts) {
    if (current == null) return undefined;

    const key = isNumberString(part) ? Number(part) : part;
    current = current[key];
  }

  return current;
}

export function runCustomValidation(
  values: any,
  validateSchema: Record<string, any>,
  currentPath = "",
  errors: Record<string, string> = {},
  rootValues?: any,
): Record<string, string> {
  const mainValues = rootValues ?? values;

  if (Array.isArray(values)) {
    values.forEach((item, index) => {
      runCustomValidation(
        item,
        validateSchema,
        `${currentPath}.${index}`,
        errors,
        mainValues,
      );
    });
  } else if (values && typeof values === "object") {
    Object.keys(values).forEach((key) => {
      const nextPath = currentPath ? `${currentPath}.${key}` : key;
      runCustomValidation(
        values[key],
        validateSchema,
        nextPath,
        errors,
        mainValues,
      );
    });
  } else {
    const normalizedPath = normalizeFieldPath(currentPath);
    const validator = validateSchema[normalizedPath];

    if (validator) {
      const errorMessage = validator({ value: values, values: mainValues });
      if (errorMessage) {
        errors[currentPath] = errorMessage;
      }
    }
  }

  return errors;
}

const FormGenerator = forwardRef<UseFormReturn<FormValues>, FormGeneratorProps>(
  (props, ref) => {
    const {
      schema,
      onSubmit,
      values,
      submitButton = true,
      onFieldChange,
      uiConfig,
      updateFieldSchema,
      validate,
      onError,
      onDirty,
    } = props;

    const form = useForm({
      defaultValues: generateInitialValues(schema, values),
    });

    useImperativeHandle(ref, () => form, [form]);

    const handleOnSubmit = form.handleSubmit(async (formValues: FormValues) => {
      if (validate) {
        const validationErrors = runCustomValidation(
          formValues,
          validate,
          "",
          {},
        );
        const errorPaths = Object.keys(validationErrors);

        if (errorPaths.length > 0) {
          errorPaths.forEach((path) => {
            form.setError(path as any, {
              type: "custom",
              message: validationErrors[path],
            });
          });

          if (onError) {
            onError(validationErrors);
          }
          return;
        }
      }

      onSubmit(formValues);
    });

    useEffect(() => {
      if (!onFieldChange) return;

      const subscription = form.watch((formValues, meta) => {
        const path = meta.name as string;
        if (!path) return;

        const value = getValue(path, formValues);
        const normalizedPath = normalizeFieldPath(path);
        const handler = onFieldChange?.[normalizedPath];

        if (!handler) return;

        handler({
          path,
          value,
          setValue: form.setValue,
          setValues: form.setValues,
          getValues: form.getValues,
          setError: form.setError,
        });
      });

      return () => subscription.unsubscribe();
    }, [onFieldChange, form]);

    useEffect(() => {
      if (!onDirty) return;

      onDirty(form.formState.isDirty);
    }, [form.formState.isDirty, onDirty]);

    return (
      <FormProvider {...form}>
        <FormConfigProvider value={{ uiConfig, updateFieldSchema }}>
          <form onSubmit={handleOnSubmit}>
            <SchemaRenderer schema={schema} />

            {typeof submitButton === "boolean" && submitButton && (
              <button type="submit">Submit</button>
            )}
          </form>
        </FormConfigProvider>
      </FormProvider>
    );
  },
);

export default FormGenerator;
