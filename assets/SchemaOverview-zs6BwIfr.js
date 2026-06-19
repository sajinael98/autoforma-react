import{i as e}from"./preload-helper-xPQekRTU.js";import{i as t}from"./react-zXy3uNUU.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{t as r}from"./mdx-react-shim-DpDFIH4k.js";function i(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:`schema-overview`,children:`Schema Overview`}),`
`,(0,o.jsx)(n.p,{children:`A schema defines the structure and behavior of a form.`}),`
`,(0,o.jsx)(n.p,{children:`Every form in AutoForma React is built from a collection of field schemas.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`<FormGenerator\r
  schema={[\r
    {\r
      type: "text",\r
      name: "firstName",\r
      label: "First Name",\r
    },\r
  ]}\r
  onSubmit={console.log}\r
/>
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`what-is-a-field-schema`,children:`What Is a Field Schema?`}),`
`,(0,o.jsx)(n.p,{children:`A field schema describes a single field inside the form.`}),`
`,(0,o.jsx)(n.p,{children:`Example:`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`{\r
  type: "text",\r
  name: "firstName",\r
  label: "First Name",\r
}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`common-properties`,children:`Common Properties`}),`
`,(0,o.jsx)(n.p,{children:`All field types share a common set of properties.`}),`
`,(0,o.jsx)(n.h3,{id:`type`,children:`type`}),`
`,(0,o.jsx)(n.p,{children:`Defines the field type.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`type: "text"
`})}),`
`,(0,o.jsx)(n.h3,{id:`name`,children:`name`}),`
`,(0,o.jsx)(n.p,{children:`Unique identifier used to store and retrieve values.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`name: "firstName"
`})}),`
`,(0,o.jsx)(n.h3,{id:`label`,children:`label`}),`
`,(0,o.jsx)(n.p,{children:`Text displayed to the user.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`label: "First Name"
`})}),`
`,(0,o.jsx)(n.h3,{id:`initialvalue`,children:`initialValue`}),`
`,(0,o.jsx)(n.p,{children:`Provides the initial value of the field.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`initialValue: "John"
`})}),`
`,(0,o.jsx)(n.h3,{id:`visible`,children:`visible`}),`
`,(0,o.jsx)(n.p,{children:`Controls whether the field is displayed.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`visible: true
`})}),`
`,(0,o.jsx)(n.h3,{id:`dependson`,children:`dependsOn`}),`
`,(0,o.jsx)(n.p,{children:`Defines field dependencies.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`dependsOn: ["country"]
`})}),`
`,(0,o.jsx)(n.h3,{id:`meta`,children:`meta`}),`
`,(0,o.jsx)(n.p,{children:`Stores custom field metadata.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`meta: {\r
  placeholder: "Enter your first name"\r
}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`basefieldschema`,children:`BaseFieldSchema`}),`
`,(0,o.jsxs)(n.p,{children:[`All field types inherit from `,(0,o.jsx)(n.code,{children:`BaseFieldSchema`}),`.`]}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`interface BaseFieldSchema {\r
  type: BuiltInFieldType;\r
  name: string;\r
  label: string;\r
  initialValue?: any;\r
  visible?: boolean;\r
  dependsOn?: string[];\r
  meta?: Record<string, any>;\r
}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`selectfieldschema`,children:`SelectFieldSchema`}),`
`,(0,o.jsx)(n.p,{children:`Used to display a dropdown list.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`{\r
  type: "select",\r
  name: "status",\r
  label: "Status",\r
  options: [\r
    {\r
      label: "Active",\r
      value: "ACTIVE",\r
    },\r
    {\r
      label: "Inactive",\r
      value: "INACTIVE",\r
    },\r
  ],\r
}
`})}),`
`,(0,o.jsx)(n.h3,{id:`additional-properties`,children:`Additional Properties`}),`
`,(0,o.jsx)(n.p,{children:`| Property | Description              |\r
| -------- | ------------------------ |\r
| options  | Available select options |`}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`objectfieldschema`,children:`ObjectFieldSchema`}),`
`,(0,o.jsx)(n.p,{children:`Used to group related fields together.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`{\r
  type: "object",\r
  name: "address",\r
  label: "Address",\r
  fields: [\r
    {\r
      type: "text",\r
      name: "city",\r
      label: "City",\r
    },\r
    {\r
      type: "text",\r
      name: "country",\r
      label: "Country",\r
    },\r
  ],\r
}
`})}),`
`,(0,o.jsx)(n.h3,{id:`additional-properties-1`,children:`Additional Properties`}),`
`,(0,o.jsx)(n.p,{children:`| Property | Description             |\r
| -------- | ----------------------- |\r
| fields   | Child field definitions |`}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`arrayfieldschema`,children:`ArrayFieldSchema`}),`
`,(0,o.jsx)(n.p,{children:`Used for repeatable groups of fields.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`{\r
  type: "array",\r
  name: "contacts",\r
  label: "Contacts",\r
  fields: [\r
    {\r
      type: "text",\r
      name: "name",\r
      label: "Name",\r
    },\r
    {\r
      type: "text",\r
      name: "phone",\r
      label: "Phone",\r
    },\r
  ],\r
}
`})}),`
`,(0,o.jsx)(n.h3,{id:`additional-properties-2`,children:`Additional Properties`}),`
`,(0,o.jsx)(n.p,{children:`| Property | Description                       |\r
| -------- | --------------------------------- |\r
| fields   | Template used for each array item |`}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`schema-types`,children:`Schema Types`}),`
`,(0,o.jsx)(n.p,{children:`AutoForma React currently supports four schema types:`}),`
`,(0,o.jsx)(n.p,{children:`| Type              | Description            |\r
| ----------------- | ---------------------- |\r
| BaseFieldSchema   | Standard fields        |\r
| SelectFieldSchema | Dropdown fields        |\r
| ObjectFieldSchema | Nested objects         |\r
| ArrayFieldSchema  | Repeatable collections |`}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`typescript-types`,children:`TypeScript Types`}),`
`,(0,o.jsx)(n.p,{children:`The main schema type used by AutoForma React is:`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`type FormFieldSchema =\r
  | BaseFieldSchema\r
  | SelectFieldSchema\r
  | ObjectFieldSchema\r
  | ArrayFieldSchema;
`})}),`
`,(0,o.jsx)(n.p,{children:`This allows a single schema array to contain different field types.`}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`example-form`,children:`Example Form`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`<FormGenerator\r
  schema={[\r
    {\r
      type: "text",\r
      name: "firstName",\r
      label: "First Name",\r
    },\r
    {\r
      type: "select",\r
      name: "status",\r
      label: "Status",\r
      options: [\r
        {\r
          label: "Active",\r
          value: "ACTIVE",\r
        },\r
      ],\r
    },\r
  ]}\r
  onSubmit={console.log}\r
/>
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`whats-next`,children:`What's Next?`}),`
`,(0,o.jsxs)(n.p,{children:[`Continue to the `,(0,o.jsx)(n.strong,{children:`Field Types`}),` section to learn about each field type in detail and see live examples.`]})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;e((()=>{o=n(),r()}))();export{a as default};