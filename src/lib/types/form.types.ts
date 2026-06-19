import type React from "react";
import type {
  Control,
  SubmitHandler,
  UseFormGetValues,
  UseFormReturn,
  UseFormSetError,
  UseFormSetValue,
  UseFormSetValues,
} from "react-hook-form";

export type BuiltInFieldType =
  | "text"
  | "number"
  | "checkbox"
  | "date"
  | "datetime"
  | "time";

export type FormValues = Record<string, any>;

export type FormGeneratorRef = UseFormReturn<FormValues>;

export interface AnyFieldSchema {
  type: string;
  name: string;
  label: string;
  initialValue?: any;
  visible?: boolean;
  dependsOn?: string[];
  meta?: Record<string, any>;
}

export interface BaseFieldSchema extends AnyFieldSchema {
  type: BuiltInFieldType;
}

export interface SelectFieldSchema extends Omit<BaseFieldSchema, "type"> {
  type: "select";
  options: { label: string; value: string }[];
}

export interface ObjectFieldSchema extends Omit<BaseFieldSchema, "type"> {
  type: "object";
  fields: FormFieldSchema[];
}

export interface ArrayFieldSchema extends Omit<BaseFieldSchema, "type"> {
  type: "array";
  fields: FormFieldSchema[];
}

export type FormFieldSchema =
  | BaseFieldSchema
  | SelectFieldSchema
  | ObjectFieldSchema
  | ArrayFieldSchema;

export type CustomFieldRendererProps = {
  fieldSchema: FormFieldSchema;
  control: Control<FormValues>;
};

export type CustomRender = Record<
  string,
  React.ComponentType<CustomFieldRendererProps>
>;

export type UiConfig = {
  renderersByName?: CustomRender;
  renderersByType?: CustomRender;
};

export interface FormGeneratorProps<
  TFieldSchema extends AnyFieldSchema = FormFieldSchema,
> {
  schema: TFieldSchema[];
  onSubmit: SubmitHandler<FormValues>;
  values?: FormValues;
  submitButton?: boolean | React.ReactNode;
  uiConfig?: UiConfig;

  validate?: Record<
    string,
    (args: { value: any; values: FormValues }) => string | undefined
  >;

  onError?: (errors: Record<string, string>) => void;
  onDirty?: (isDirty: boolean) => void;

  onFieldChange?: Record<
    string,
    (helpers: {
      path: string;
      value: any;
      setValue: UseFormSetValue<FormValues>;
      setValues: UseFormSetValues<FormValues>;
      setError: UseFormSetError<FormValues>;
      getValues: UseFormGetValues<FormValues>;
    }) => void
  >;

  updateFieldSchema?: {
    [key: string]: (args: {
      path: string;
      fieldSchema: Readonly<FormFieldSchema>;
      values: FormValues;
    }) =>
      | (Partial<Omit<FormFieldSchema, "type" | "name" | "fields">> &
          Record<string, any>)
      | Promise<
          Partial<Omit<FormFieldSchema, "type" | "name" | "fields">> &
            Record<string, any>
        >;
  };
}
