import type { FormFieldSchema, FormValues } from "../types/form.types";
export declare function normalizeFieldPath(path: string): string;
export declare function generateInitialValues(schema: FormFieldSchema[], values?: FormValues | undefined): FormValues;
