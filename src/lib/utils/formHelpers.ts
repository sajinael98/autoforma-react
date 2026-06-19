import type { FormFieldSchema, FormValues } from "../types/form.types";

export function normalizeFieldPath(path: string): string {
  return path.replace(/\.\d+\./g, ".");
}

export function generateInitialValues(
  schema: FormFieldSchema[],
  values: FormValues | undefined = {},
): FormValues {
  const initialValues: FormValues = {};

  schema.forEach((field) => {
    const externalValue = values?.[field.name];

    if (field.type === "object") {
      initialValues[field.name] = generateInitialValues(
        field.fields,
        externalValue as FormValues | undefined,
      );
    } else if (field.type === "array") {
      initialValues[field.name] = Array.isArray(externalValue)
        ? externalValue
        : (field.initialValue ?? []);
    } else {
      initialValues[field.name] =
        externalValue !== undefined
          ? externalValue
          : (field.initialValue ?? undefined);
    }
  });

  return initialValues;
}
