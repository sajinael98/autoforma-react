import React, { createContext, useContext } from "react";
import type { FormGeneratorProps } from "../../types/form.types";

export interface FormConfigContextType {
  updateFieldSchema?: FormGeneratorProps["updateFieldSchema"];
  uiConfig?: FormGeneratorProps["uiConfig"];
}

const FormConfigContext = createContext<FormConfigContextType | null>(null);

export const FormConfigProvider: React.FC<{
  value: FormConfigContextType;
  children: React.ReactNode;
}> = ({ value, children }) => {
  return (
    <FormConfigContext.Provider value={value}>
      {children}
    </FormConfigContext.Provider>
  );
};

export const useFormConfig = () => {
  const context = useContext(FormConfigContext);
  if (!context) {
    throw new Error("useFormConfig must be used within a FormConfigProvider");
  }
  return context;
};
