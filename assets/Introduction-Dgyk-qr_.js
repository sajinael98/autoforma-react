import{i as e}from"./preload-helper-xPQekRTU.js";import{i as t}from"./react-zXy3uNUU.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{t as r}from"./mdx-react-shim-DpDFIH4k.js";function i(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:`autoforma-react`,children:`AutoForma React`}),`
`,(0,o.jsx)(n.p,{children:`AutoForma React is a schema-driven form generator built on top of React Hook Form.`}),`
`,(0,o.jsx)(n.p,{children:`It helps developers build dynamic, maintainable, and reusable forms using TypeScript schemas instead of manually creating every field, validation rule, and UI interaction.`}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`overview`,children:`Overview`}),`
`,(0,o.jsx)(n.p,{children:`Modern applications often contain dozens of forms with similar patterns and behaviors. Writing and maintaining those forms manually can quickly become repetitive and difficult to scale.`}),`
`,(0,o.jsx)(n.p,{children:`AutoForma React solves this problem by allowing forms to be defined declaratively through schemas.`}),`
`,(0,o.jsx)(n.p,{children:`Instead of building forms field-by-field, you describe the structure of the form and let AutoForma handle rendering, state management, validation, nested objects, arrays, and dynamic behaviors.`}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,o.jsx)(n.h3,{id:`schema-based-forms`,children:`Schema-Based Forms`}),`
`,(0,o.jsx)(n.p,{children:`Build forms using TypeScript objects.`}),`
`,(0,o.jsx)(n.h3,{id:`built-in-field-types`,children:`Built-in Field Types`}),`
`,(0,o.jsx)(n.p,{children:`Supported field types:`}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsx)(n.li,{children:`text`}),`
`,(0,o.jsx)(n.li,{children:`number`}),`
`,(0,o.jsx)(n.li,{children:`checkbox`}),`
`,(0,o.jsx)(n.li,{children:`date`}),`
`,(0,o.jsx)(n.li,{children:`datetime`}),`
`,(0,o.jsx)(n.li,{children:`time`}),`
`,(0,o.jsx)(n.li,{children:`select`}),`
`]}),`
`,(0,o.jsx)(n.h3,{id:`nested-objects`,children:`Nested Objects`}),`
`,(0,o.jsx)(n.p,{children:`Create complex hierarchical forms using object fields.`}),`
`,(0,o.jsx)(n.h3,{id:`array-fields`,children:`Array Fields`}),`
`,(0,o.jsx)(n.p,{children:`Support repeatable form sections and collections of data.`}),`
`,(0,o.jsx)(n.h3,{id:`custom-field-renderers`,children:`Custom Field Renderers`}),`
`,(0,o.jsx)(n.p,{children:`Replace default components with your own React components.`}),`
`,(0,o.jsx)(n.h3,{id:`validation`,children:`Validation`}),`
`,(0,o.jsx)(n.p,{children:`Attach custom validation rules to individual fields.`}),`
`,(0,o.jsx)(n.h3,{id:`field-change-events`,children:`Field Change Events`}),`
`,(0,o.jsx)(n.p,{children:`Respond to user input and update other fields dynamically.`}),`
`,(0,o.jsx)(n.h3,{id:`dynamic-schema-updates`,children:`Dynamic Schema Updates`}),`
`,(0,o.jsx)(n.p,{children:`Modify field behavior, visibility, labels, and metadata at runtime.`}),`
`,(0,o.jsx)(n.h3,{id:`react-hook-form-integration`,children:`React Hook Form Integration`}),`
`,(0,o.jsx)(n.p,{children:`Built on top of React Hook Form for excellent performance and developer experience.`}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`basic-example`,children:`Basic Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`import { FormGenerator } from "autoforma-react";\r
\r
export default function Example() {\r
  return (\r
    <FormGenerator\r
      schema={[\r
        {\r
          type: "text",\r
          name: "firstName",\r
          label: "First Name",\r
        },\r
        {\r
          type: "text",\r
          name: "lastName",\r
          label: "Last Name",\r
        },\r
        {\r
          type: "select",\r
          name: "status",\r
          label: "Status",\r
          options: [\r
            { label: "Active", value: "ACTIVE" },\r
            { label: "Inactive", value: "INACTIVE" },\r
          ],\r
        },\r
      ]}\r
      onSubmit={(values) => {\r
        console.log(values);\r
      }}\r
    />\r
  );\r
}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`typical-use-cases`,children:`Typical Use Cases`}),`
`,(0,o.jsx)(n.p,{children:`AutoForma React is ideal for:`}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsx)(n.li,{children:`ERP Systems`}),`
`,(0,o.jsx)(n.li,{children:`CRM Platforms`}),`
`,(0,o.jsx)(n.li,{children:`Internal Business Applications`}),`
`,(0,o.jsx)(n.li,{children:`Admin Panels`}),`
`,(0,o.jsx)(n.li,{children:`Back Office Systems`}),`
`,(0,o.jsx)(n.li,{children:`Dynamic Form Builders`}),`
`,(0,o.jsx)(n.li,{children:`Enterprise Applications`}),`
`]}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`philosophy`,children:`Philosophy`}),`
`,(0,o.jsx)(n.p,{children:`AutoForma React is built around four principles:`}),`
`,(0,o.jsxs)(n.ol,{children:[`
`,(0,o.jsx)(n.li,{children:`Reduce boilerplate code.`}),`
`,(0,o.jsx)(n.li,{children:`Keep forms declarative.`}),`
`,(0,o.jsx)(n.li,{children:`Support complex data structures.`}),`
`,(0,o.jsx)(n.li,{children:`Remain fully customizable.`}),`
`]}),`
`,(0,o.jsx)(n.p,{children:`You should never be forced to choose between productivity and flexibility. AutoForma aims to provide both.`}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`whats-next`,children:`What's Next?`}),`
`,(0,o.jsx)(n.p,{children:`Continue through the documentation to learn more about:`}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsx)(n.li,{children:`Getting Started`}),`
`,(0,o.jsx)(n.li,{children:`Field Types`}),`
`,(0,o.jsx)(n.li,{children:`Object Fields`}),`
`,(0,o.jsx)(n.li,{children:`Array Fields`}),`
`,(0,o.jsx)(n.li,{children:`Validation`}),`
`,(0,o.jsx)(n.li,{children:`Custom Renderers`}),`
`,(0,o.jsx)(n.li,{children:`Field Change Events`}),`
`,(0,o.jsx)(n.li,{children:`Dynamic Schema Updates`}),`
`,(0,o.jsx)(n.li,{children:`API Reference`}),`
`]})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;e((()=>{o=n(),r()}))();export{a as default};