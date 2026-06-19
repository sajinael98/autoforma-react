// src/lib/index.ts

export { default as FormGenerator } from "./components/FormGenerator/FormGenerator";

export type {
  FormGeneratorProps,
  FormGeneratorRef,
  FormFieldSchema,
  FormValues,
  BaseFieldSchema,
  AnyFieldSchema,
  CustomFieldRendererProps,
  ArrayFieldSchema,
  ObjectFieldSchema,
  SelectFieldSchema,
  CustomRender,
  UiConfig,
  BuiltInFieldType,
} from "./types/form.types";

export { generateInitialValues, normalizeFieldPath } from "./utils/formHelpers";
export { Controller, useFormContext } from "react-hook-form";
