import{i as e}from"./preload-helper-xPQekRTU.js";import{i as t}from"./react-zXy3uNUU.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{t as r}from"./mdx-react-shim-DpDFIH4k.js";function i(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:`getting-started`,children:`Getting Started`}),`
`,(0,o.jsx)(n.p,{children:`This guide will help you install AutoForma React and create your first form in just a few minutes.`}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`installation`,children:`Installation`}),`
`,(0,o.jsx)(n.p,{children:`Install AutoForma React together with its required dependencies.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-bash`,children:`npm install autoforma-react react-hook-form
`})}),`
`,(0,o.jsx)(n.h3,{id:`peer-dependencies`,children:`Peer Dependencies`}),`
`,(0,o.jsx)(n.p,{children:`AutoForma React requires:`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-txt`,children:`react >= 18\r
react-dom >= 18\r
react-hook-form >= 7
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`your-first-form`,children:`Your First Form`}),`
`,(0,o.jsx)(n.p,{children:`Create a simple form using a schema definition.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`import { FormGenerator } from "autoforma-react";\r
\r
export default function App() {\r
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
      ]}\r
      onSubmit={(values) => {\r
        console.log(values);\r
      }}\r
    />\r
  );\r
}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`understanding-the-basics`,children:`Understanding the Basics`}),`
`,(0,o.jsx)(n.p,{children:`Every form in AutoForma React is built using a schema.`}),`
`,(0,o.jsx)(n.p,{children:`Each field is represented by a JavaScript object.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`{\r
  type: "text",\r
  name: "firstName",\r
  label: "First Name",\r
}
`})}),`
`,(0,o.jsx)(n.h3,{id:`required-properties`,children:`Required Properties`}),`
`,(0,o.jsxs)(n.p,{children:[`| Property | Description                       |\r
| -------- | --------------------------------- |\r
| `,(0,o.jsx)(n.code,{children:`type`}),`   | The field type                    |\r
| `,(0,o.jsx)(n.code,{children:`name`}),`   | Unique field identifier           |\r
| `,(0,o.jsx)(n.code,{children:`label`}),`  | Field label displayed to the user |`]}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`handling-form-submission`,children:`Handling Form Submission`}),`
`,(0,o.jsxs)(n.p,{children:[`When the form is submitted successfully, AutoForma React passes all form values to the `,(0,o.jsx)(n.code,{children:`onSubmit`}),` callback.`]}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`<FormGenerator\r
  schema={schema}\r
  onSubmit={(values) => {\r
    console.log(values);\r
  }}\r
/>
`})}),`
`,(0,o.jsx)(n.p,{children:`Example result:`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-json`,children:`{\r
  "firstName": "John",\r
  "lastName": "Doe"\r
}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`setting-initial-values`,children:`Setting Initial Values`}),`
`,(0,o.jsx)(n.p,{children:`You can provide initial values directly in your schema.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`{\r
  type: "text",\r
  name: "firstName",\r
  label: "First Name",\r
  initialValue: "John",\r
}
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`built-in-field-types`,children:`Built-in Field Types`}),`
`,(0,o.jsx)(n.p,{children:`AutoForma React currently supports the following field types:`}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsx)(n.li,{children:`text`}),`
`,(0,o.jsx)(n.li,{children:`number`}),`
`,(0,o.jsx)(n.li,{children:`checkbox`}),`
`,(0,o.jsx)(n.li,{children:`date`}),`
`,(0,o.jsx)(n.li,{children:`datetime`}),`
`,(0,o.jsx)(n.li,{children:`time`}),`
`,(0,o.jsx)(n.li,{children:`select`}),`
`,(0,o.jsx)(n.li,{children:`object`}),`
`,(0,o.jsx)(n.li,{children:`array`}),`
`]}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`whats-next`,children:`What's Next?`}),`
`,(0,o.jsxs)(n.p,{children:[`Now that you've created your first form, continue to `,(0,o.jsx)(n.strong,{children:`Schema Overview`}),` to learn how schemas are structured and how AutoForma React handles complex form scenarios.`]})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;e((()=>{o=n(),r()}))();export{a as default};