import{i as e}from"./preload-helper-xPQekRTU.js";import{i as t}from"./react-zXy3uNUU.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{t as r}from"./mdx-react-shim-DpDFIH4k.js";function i(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:`formfieldschema`,children:`FormFieldSchema`}),`
`,(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:`FormFieldSchema`}),` defines a single field within a form.`]}),`
`,(0,o.jsx)(n.p,{children:`Every field rendered by AutoForma React is represented by a schema object.`}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`type-definition`,children:`Type Definition`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`type FormFieldSchema =\r
  | BaseFieldSchema\r
  | SelectFieldSchema\r
  | ObjectFieldSchema\r
  | ArrayFieldSchema;
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`basefieldschema`,children:`BaseFieldSchema`}),`
`,(0,o.jsx)(n.p,{children:`The foundation for all field types.`}),`
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
`,(0,o.jsx)(n.h2,{id:`type`,children:`type`}),`
`,(0,o.jsx)(n.p,{children:`Specifies the field type.`}),`
`,(0,o.jsx)(n.h3,{id:`supported-values`,children:`Supported Values`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`"text"\r
"number"\r
"checkbox"\r
"date"\r
"datetime"\r
"time"
`})}),`
`,(0,o.jsx)(n.h3,{id:`example`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`{\r
  type: "text",\r
  name: "firstName",\r
  label: "First Name",\r
}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`name`,children:`name`}),`
`,(0,o.jsx)(n.p,{children:`Unique field identifier.`}),`
`,(0,o.jsx)(n.h3,{id:`example-1`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`name: "email"
`})}),`
`,(0,o.jsx)(n.p,{children:`Nested fields:`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`name: "address.city"
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`label`,children:`label`}),`
`,(0,o.jsx)(n.p,{children:`Text displayed to users.`}),`
`,(0,o.jsx)(n.h3,{id:`example-2`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`label: "Email Address"
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`initialvalue`,children:`initialValue`}),`
`,(0,o.jsx)(n.p,{children:`Sets the initial field value.`}),`
`,(0,o.jsx)(n.h3,{id:`example-3`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`initialValue: "John"
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`visible`,children:`visible`}),`
`,(0,o.jsx)(n.p,{children:`Controls field visibility.`}),`
`,(0,o.jsx)(n.h3,{id:`example-4`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`visible: false
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`dependson`,children:`dependsOn`}),`
`,(0,o.jsx)(n.p,{children:`Declares field dependencies.`}),`
`,(0,o.jsx)(n.p,{children:`Used together with dynamic field updates.`}),`
`,(0,o.jsx)(n.h3,{id:`example-5`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`dependsOn: ["customerType"]
`})}),`
`,(0,o.jsx)(n.p,{children:`Multiple dependencies:`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`dependsOn: [\r
  "customerType",\r
  "country",\r
]
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`meta`,children:`meta`}),`
`,(0,o.jsx)(n.p,{children:`Stores custom field metadata.`}),`
`,(0,o.jsx)(n.h3,{id:`example-6`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`meta: {\r
  placeholder: "Enter your email",\r
  maxLength: 100,\r
}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`selectfieldschema`,children:`SelectFieldSchema`}),`
`,(0,o.jsx)(n.p,{children:`Represents a dropdown field.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`interface SelectFieldSchema\r
  extends Omit<BaseFieldSchema, "type"> {\r
  type: "select";\r
\r
  options: {\r
    label: string;\r
    value: string;\r
  }[];\r
}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`options`,children:`options`}),`
`,(0,o.jsx)(n.p,{children:`Available dropdown choices.`}),`
`,(0,o.jsx)(n.h3,{id:`example-7`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`options: [\r
  {\r
    label: "Active",\r
    value: "ACTIVE",\r
  },\r
  {\r
    label: "Inactive",\r
    value: "INACTIVE",\r
  },\r
]
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`objectfieldschema`,children:`ObjectFieldSchema`}),`
`,(0,o.jsx)(n.p,{children:`Represents a nested object.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`interface ObjectFieldSchema\r
  extends Omit<BaseFieldSchema, "type"> {\r
  type: "object";\r
\r
  fields: FormFieldSchema[];\r
}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`example-8`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`{\r
  type: "object",\r
  name: "address",\r
  label: "Address",\r
\r
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
`,(0,o.jsx)(n.p,{children:`Result:`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-json`,children:`{\r
  "address": {\r
    "city": "Chicago",\r
    "country": "USA"\r
  }\r
}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`arrayfieldschema`,children:`ArrayFieldSchema`}),`
`,(0,o.jsx)(n.p,{children:`Represents a repeatable collection of items.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`interface ArrayFieldSchema\r
  extends Omit<BaseFieldSchema, "type"> {\r
  type: "array";\r
\r
  fields: FormFieldSchema[];\r
}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`example-9`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`{\r
  type: "array",\r
  name: "contacts",\r
  label: "Contacts",\r
\r
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
`,(0,o.jsx)(n.p,{children:`Result:`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-json`,children:`{\r
  "contacts": [\r
    {\r
      "name": "John",\r
      "phone": "123456"\r
    },\r
    {\r
      "name": "Jane",\r
      "phone": "987654"\r
    }\r
  ]\r
}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`choosing-the-right-schema-type`,children:`Choosing the Right Schema Type`}),`
`,(0,o.jsx)(n.p,{children:`| Schema Type       | Purpose                |\r
| ----------------- | ---------------------- |\r
| BaseFieldSchema   | Standard fields        |\r
| SelectFieldSchema | Dropdown selections    |\r
| ObjectFieldSchema | Nested objects         |\r
| ArrayFieldSchema  | Repeatable collections |`}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`related-documentation`,children:`Related Documentation`}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsx)(n.li,{children:`FormGeneratorProps`}),`
`,(0,o.jsx)(n.li,{children:`UiConfig`}),`
`,(0,o.jsx)(n.li,{children:`Validation`}),`
`,(0,o.jsx)(n.li,{children:`Dynamic Schema Updates`}),`
`,(0,o.jsx)(n.li,{children:`Custom Renderers`}),`
`]})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;e((()=>{o=n(),r()}))();export{a as default};