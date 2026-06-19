import {
  Controller,
  useFieldArray,
  useFormContext,
  useWatch,
  type Control,
} from "react-hook-form";
import type { FieldRendererProps } from "./types";
import { Fragment, useEffect, useState } from "react";
import type { FormFieldSchema, FormValues } from "../../types/form.types";
import { useFormConfig } from "../FormGenerator/FormConfigContext";
import {
  generateInitialValues,
  normalizeFieldPath,
} from "../../utils/formHelpers";
import SchemaRenderer from "../SchemaRenderer";

export function normalizeDependsOn(
  dependsOnPath: string,
  currentFieldPath: string,
): string {
  const normalizedCurrent = normalizeFieldPath(currentFieldPath);
  const currentParts = currentFieldPath.split(".");
  const normalizedCurrentParts = normalizedCurrent.split(".");
  const dependsParts = dependsOnPath.split(".");
  const resolvedParts: string[] = [];
  let currentIdx = 0;

  for (let i = 0; i < dependsParts.length; i++) {
    const dependsPart = dependsParts[i];
    const normalizedPart = normalizedCurrentParts[currentIdx];

    if (dependsPart === normalizedPart) {
      resolvedParts.push(currentParts[currentIdx]);
      currentIdx++;

      while (
        currentParts[currentIdx] &&
        /^\d+$/.test(currentParts[currentIdx])
      ) {
        resolvedParts.push(currentParts[currentIdx]);
        currentIdx++;
      }
    } else {
      resolvedParts.push(dependsPart);
      const nextMatchIdx = normalizedCurrentParts.indexOf(
        dependsPart,
        currentIdx,
      );
      if (nextMatchIdx !== -1) {
        currentIdx = nextMatchIdx;
      } else {
        currentIdx++;
      }
    }
  }
  return resolvedParts.join(".");
}

const ObjectFieldRenderer = ({
  fieldSchema,
}: {
  fieldSchema: FormFieldSchema;
}) => {
  if (fieldSchema.type !== "object") return null;
  return (
    <SchemaRenderer
      schema={fieldSchema.fields.map((inner) => ({
        ...inner,
        name: `${fieldSchema.name}.${inner.name}`,
      }))}
    />
  );
};

const ArrayFieldRenderer = ({
  fieldSchema,
  control,
}: {
  fieldSchema: FormFieldSchema;
  control: Control<FormValues>;
}) => {
  const { fields, append, remove } = useFieldArray({
    name: fieldSchema.name,
    control,
  });

  if (fieldSchema.type !== "array") return null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div>
        {fields.map((item, index) => (
          <Fragment key={item.id}>
            <SchemaRenderer
              schema={fieldSchema.fields.map((inner) => ({
                ...inner,
                name: `${fieldSchema.name}.${index}.${inner.name}`,
              }))}
            />
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </Fragment>
        ))}
      </div>
      <button
        type="button"
        onClick={() => append(generateInitialValues(fieldSchema.fields))}
      >
        Add
      </button>
    </div>
  );
};

const SelectFieldRenderer = ({
  fieldSchema,
  field,
}: {
  fieldSchema: FormFieldSchema;
  field: any;
}) => {
  if (fieldSchema.type !== "select") return null;
  return (
    <select {...field}>
      <option value="">اختر...</option>
      {fieldSchema.options?.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

const BaseInputRenderer = ({
  fieldSchema,
  field,
}: {
  fieldSchema: FormFieldSchema;
  field: any;
}) => {
  const inputType =
    fieldSchema.type === "datetime" ? "datetime-local" : fieldSchema.type;
  return <input type={inputType} {...field} {...(inputType === 'checkbox' && {checked: field.value})} />;
};

interface FieldProps {
  fieldSchema: FormFieldSchema;
  control: Control<FormValues>;
}

const Field = (props: FieldProps) => {
  const { fieldSchema, control } = props;
  const { uiConfig } = useFormConfig();

  if (fieldSchema.visible === false) return null;

  const path = normalizeFieldPath(fieldSchema.name);

  const CustomNameRenderer = uiConfig?.renderersByName?.[path];
  if (CustomNameRenderer) {
    return <CustomNameRenderer control={control} fieldSchema={fieldSchema} />;
  }

  const CustomTypeRenderer = uiConfig?.renderersByType?.[fieldSchema.type];
  if (CustomTypeRenderer) {
    return <CustomTypeRenderer control={control} fieldSchema={fieldSchema} />;
  }

  return (
    <Controller
      name={fieldSchema.name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="field-container">
          {fieldSchema.label && <label>{fieldSchema.label}</label>}

          {fieldSchema.type === "object" && (
            <ObjectFieldRenderer fieldSchema={fieldSchema} />
          )}
          {fieldSchema.type === "array" && (
            <ArrayFieldRenderer fieldSchema={fieldSchema} control={control} />
          )}
          {fieldSchema.type === "select" && (
            <SelectFieldRenderer fieldSchema={fieldSchema} field={field} />
          )}
          {fieldSchema.type !== "object" &&
            fieldSchema.type !== "array" &&
            fieldSchema.type !== "select" && (
              <BaseInputRenderer fieldSchema={fieldSchema} field={field} />
            )}

          {error && <span className="error">{error.message}</span>}
        </div>
      )}
    />
  );
};

const FieldRenderer = (props: FieldRendererProps) => {
  const { fieldSchema } = props;
  const { dependsOn = [], name: currentFieldPath } = fieldSchema;

  const { updateFieldSchema } = useFormConfig();
  const { control, getValues } = useFormContext();
  const [currentFieldSchema, setCurrentFieldSchema] =
    useState<FormFieldSchema>(fieldSchema);

  const path = normalizeFieldPath(fieldSchema.name);

  const realPathsToWatch = dependsOn.map((depPath) =>
    normalizeDependsOn(depPath, currentFieldPath),
  );

  const watchedValues = useWatch({
    name: realPathsToWatch,
    control,
  });

  useEffect(() => {
    if (!updateFieldSchema) return;

    if (updateFieldSchema[path] && dependsOn.length === 0) {
      throw new Error(
        `[AutoForma Error]: The field "${fieldSchema.name}" is defined in "updateFieldSchema" but has an empty or missing "dependsOn" array.`,
      );
    }

    async function loadFieldSchema() {
      const handler = updateFieldSchema?.[path];
      if (!handler) return;

      const schemaUpdates = await handler({
        fieldSchema,
        path: fieldSchema.name,
        values: getValues(),
      });

      if (!schemaUpdates) return;

      const updatedSchema = {
        ...fieldSchema,
        ...schemaUpdates,
        name: fieldSchema.name,
        type: fieldSchema.type,
        ...("fields" in fieldSchema ? { fields: fieldSchema.fields } : {}),
      } as FormFieldSchema;

      setCurrentFieldSchema(updatedSchema);
    }

    loadFieldSchema();
  }, [
    fieldSchema,
    JSON.stringify(watchedValues),
    updateFieldSchema,
    path,
    getValues,
    dependsOn.length,
  ]);

  return <Field fieldSchema={currentFieldSchema} control={control} />;
};

export default FieldRenderer;
