import{i as e}from"./preload-helper-xPQekRTU.js";import{i as t}from"./react-zXy3uNUU.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{t as r}from"./mdx-react-shim-DpDFIH4k.js";function i(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:`formgeneratorprops`,children:`FormGeneratorProps`}),`
`,(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:`FormGenerator`}),` is the main component of AutoForma React.`]}),`
`,(0,o.jsx)(n.p,{children:`It renders a form from a schema definition and provides hooks for validation, field changes, dynamic field updates, and UI customization.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`<FormGenerator {...props} />
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`type-definition`,children:`Type Definition`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`interface FormGeneratorProps {\r
  schema: FormFieldSchema[];\r
  onSubmit: SubmitHandler<FormValues>;\r
  values?: FormValues;\r
  submitButton?: boolean | React.ReactNode;\r
  uiConfig?: UiConfig;\r
\r
  validate?: Record<\r
    string,\r
    (args: { value: any; values: FormValues }) => string | undefined\r
  >;\r
\r
  onError?: (errors: Record<string, string>) => void;\r
\r
  onDirty?: (isDirty: boolean) => void;\r
\r
  onFieldChange?: Record<\r
    string,\r
    (helpers: {\r
      path: string;\r
      value: any;\r
      setValue: UseFormSetValue<FormValues>;\r
      setValues: UseFormSetValues<FormValues>;\r
      setError: UseFormSetError<FormValues>;\r
      getValues: UseFormGetValues<FormValues>;\r
    }) => void\r
  >;\r
\r
  updateFieldSchema?: {\r
    [key: string]: (args: {\r
      path: string;\r
      fieldSchema: Readonly<FormFieldSchema>;\r
      values: FormValues;\r
    }) =>\r
      | (Partial<Omit<FormFieldSchema, "type" | "name" | "fields">> &\r
          Record<string, any>)\r
      | Promise<\r
          Partial<Omit<FormFieldSchema, "type" | "name" | "fields">> &\r
            Record<string, any>\r
        >;\r
  };\r
}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`schema`,children:`schema`}),`
`,(0,o.jsx)(n.p,{children:`Defines the structure of the form.`}),`
`,(0,o.jsx)(n.h3,{id:`type`,children:`Type`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`FormFieldSchema[]
`})}),`
`,(0,o.jsx)(n.h3,{id:`required`,children:`Required`}),`
`,(0,o.jsx)(n.p,{children:`Yes`}),`
`,(0,o.jsx)(n.h3,{id:`example`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`schema={[\r
  {\r
    type: "text",\r
    name: "firstName",\r
    label: "First Name",\r
  },\r
]}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`onsubmit`,children:`onSubmit`}),`
`,(0,o.jsx)(n.p,{children:`Called when the form is submitted successfully.`}),`
`,(0,o.jsx)(n.h3,{id:`type-1`,children:`Type`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`SubmitHandler<FormValues>;
`})}),`
`,(0,o.jsx)(n.h3,{id:`required-1`,children:`Required`}),`
`,(0,o.jsx)(n.p,{children:`Yes`}),`
`,(0,o.jsx)(n.h3,{id:`example-1`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`onSubmit={(values) => {\r
  console.log(values);\r
}}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`values`,children:`values`}),`
`,(0,o.jsx)(n.p,{children:`Provides external values to the form.`}),`
`,(0,o.jsx)(n.h3,{id:`type-2`,children:`Type`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`FormValues;
`})}),`
`,(0,o.jsx)(n.h3,{id:`required-2`,children:`Required`}),`
`,(0,o.jsx)(n.p,{children:`No`}),`
`,(0,o.jsx)(n.h3,{id:`example-2`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`values={{\r
  firstName: "John",\r
  lastName: "Doe",\r
}}
`})}),`
`,(0,o.jsx)(n.h3,{id:`common-use-cases`,children:`Common Use Cases`}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsx)(n.li,{children:`Loading data from an API`}),`
`,(0,o.jsx)(n.li,{children:`Editing existing records`}),`
`,(0,o.jsx)(n.li,{children:`Synchronizing form state with external state`}),`
`]}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`submitbutton`,children:`submitButton`}),`
`,(0,o.jsx)(n.p,{children:`Controls submit button rendering.`}),`
`,(0,o.jsx)(n.h3,{id:`type-3`,children:`Type`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`boolean | React.ReactNode;
`})}),`
`,(0,o.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`true;
`})}),`
`,(0,o.jsx)(n.h3,{id:`disable-built-in-submit-button`,children:`Disable Built-in Submit Button`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`submitButton={false}
`})}),`
`,(0,o.jsx)(n.h3,{id:`custom-submit-button`,children:`Custom Submit Button`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`submitButton={<button type="submit">Save</button>}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`uiconfig`,children:`uiConfig`}),`
`,(0,o.jsx)(n.p,{children:`Provides custom UI renderers.`}),`
`,(0,o.jsx)(n.h3,{id:`type-4`,children:`Type`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`UiConfig;
`})}),`
`,(0,o.jsx)(n.h3,{id:`example-3`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`uiConfig={{\r
  renderersByType: {},\r
  renderersByName: {},\r
}}
`})}),`
`,(0,o.jsxs)(n.p,{children:[`See the `,(0,o.jsx)(n.strong,{children:`Custom Renderers`}),` section for detailed examples.`]}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`validate`,children:`validate`}),`
`,(0,o.jsx)(n.p,{children:`Registers field-level validation rules.`}),`
`,(0,o.jsx)(n.h3,{id:`type-5`,children:`Type`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`Record<\r
  string,\r
  (args: { value: any; values: FormValues }) => string | undefined\r
>;
`})}),`
`,(0,o.jsx)(n.h3,{id:`example-4`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`validate={{\r
  email: ({ value }) => {\r
    if (!value) {\r
      return "Email is required";\r
    }\r
\r
    if (!value.includes("@")) {\r
      return "Invalid email address";\r
    }\r
\r
    return undefined;\r
  },\r
}}
`})}),`
`,(0,o.jsx)(n.h3,{id:`return-values`,children:`Return Values`}),`
`,(0,o.jsx)(n.p,{children:`| Return Value | Meaning           |\r
| ------------ | ----------------- |\r
| undefined    | Validation passed |\r
| string       | Validation failed |`}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`onerror`,children:`onError`}),`
`,(0,o.jsx)(n.p,{children:`Called when one or more validation rules fail.`}),`
`,(0,o.jsx)(n.h3,{id:`type-6`,children:`Type`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`(errors: Record<string, string>) => void
`})}),`
`,(0,o.jsx)(n.h3,{id:`example-5`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`onError={(errors) => {\r
  console.log(errors);\r
}}
`})}),`
`,(0,o.jsx)(n.p,{children:`Example output:`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-json`,children:`{\r
  "email": "Invalid email address"\r
}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`ondirty`,children:`onDirty`}),`
`,(0,o.jsx)(n.p,{children:`Called whenever the form dirty state changes.`}),`
`,(0,o.jsx)(n.h3,{id:`type-7`,children:`Type`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`(isDirty: boolean) => void
`})}),`
`,(0,o.jsx)(n.h3,{id:`example-6`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`onDirty={(isDirty) => {\r
  console.log(isDirty);\r
}}
`})}),`
`,(0,o.jsx)(n.h3,{id:`common-use-cases-1`,children:`Common Use Cases`}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsx)(n.li,{children:`Unsaved changes warnings`}),`
`,(0,o.jsx)(n.li,{children:`Enable/disable save buttons`}),`
`,(0,o.jsx)(n.li,{children:`Navigation guards`}),`
`]}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`onfieldchange`,children:`onFieldChange`}),`
`,(0,o.jsx)(n.p,{children:`Registers handlers that execute when specific field values change.`}),`
`,(0,o.jsx)(n.h3,{id:`type-8`,children:`Type`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`Record<string, FieldChangeHandler>;
`})}),`
`,(0,o.jsx)(n.h3,{id:`example-7`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`onFieldChange={{\r
  firstName: ({ value, setValue }) => {\r
    setValue("displayName", value);\r
  },\r
}}
`})}),`
`,(0,o.jsx)(n.h3,{id:`available-helpers`,children:`Available Helpers`}),`
`,(0,o.jsx)(n.p,{children:`| Helper    | Description                |\r
| --------- | -------------------------- |\r
| path      | Current field path         |\r
| value     | Current field value        |\r
| setValue  | Update a single field      |\r
| setValues | Update multiple fields     |\r
| setError  | Set a field error          |\r
| getValues | Access current form values |`}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`updatefieldschema`,children:`updateFieldSchema`}),`
`,(0,o.jsx)(n.p,{children:`Allows field configuration to be updated dynamically at runtime.`}),`
`,(0,o.jsx)(n.h3,{id:`type-9`,children:`Type`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`Record<string, UpdateFieldSchemaHandler>;
`})}),`
`,(0,o.jsx)(n.h3,{id:`example-8`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`updateFieldSchema={{\r
  customerName: ({ values }) => {\r
    return {\r
      label:\r
        values.customerType === "COMPANY"\r
          ? "Company Name"\r
          : "Full Name",\r
    };\r
  },\r
}}
`})}),`
`,(0,o.jsx)(n.h3,{id:`common-use-cases-2`,children:`Common Use Cases`}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsx)(n.li,{children:`Dynamic labels`}),`
`,(0,o.jsx)(n.li,{children:`Dynamic visibility`}),`
`,(0,o.jsx)(n.li,{children:`Dynamic placeholders`}),`
`,(0,o.jsx)(n.li,{children:`Runtime field configuration`}),`
`,(0,o.jsx)(n.li,{children:`Conditional form behavior`}),`
`]}),`
`,(0,o.jsx)(n.h3,{id:`async-support`,children:`Async Support`}),`
`,(0,o.jsx)(n.p,{children:`Field schema updates may be asynchronous.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`updateFieldSchema={{\r
  customerName: async ({ values }) => {\r
    const metadata = await fetchMetadata(values.customerType);\r
\r
    return {\r
      label: metadata.label,\r
    };\r
  },\r
}}
`})})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;e((()=>{o=n(),r()}))();export{a as default};