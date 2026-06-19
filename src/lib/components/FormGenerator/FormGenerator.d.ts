import { type UseFormReturn } from "react-hook-form";
import type { FormGeneratorProps, FormValues } from "../../types/form.types";
export declare function runCustomValidation(values: any, validateSchema: Record<string, any>, currentPath?: string, errors?: Record<string, string>, rootValues?: any): Record<string, string>;
declare const FormGenerator: import("react").ForwardRefExoticComponent<FormGeneratorProps & import("react").RefAttributes<UseFormReturn<FormValues>>>;
export default FormGenerator;
