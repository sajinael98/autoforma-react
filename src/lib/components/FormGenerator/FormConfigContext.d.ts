import React from "react";
import type { FormGeneratorProps } from "../../types/form.types";
export interface FormConfigContextType {
    updateFieldSchema?: FormGeneratorProps["updateFieldSchema"];
    uiConfig?: FormGeneratorProps["uiConfig"];
}
export declare const FormConfigProvider: React.FC<{
    value: FormConfigContextType;
    children: React.ReactNode;
}>;
export declare const useFormConfig: () => FormConfigContextType;
