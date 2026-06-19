import{i as e}from"./preload-helper-xPQekRTU.js";import{i as t}from"./react-zXy3uNUU.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{t as r}from"./mdx-react-shim-DpDFIH4k.js";function i(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:`uiconfig`,children:`UiConfig`}),`
`,(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:`UiConfig`}),` allows you to customize how fields are rendered.`]}),`
`,(0,o.jsx)(n.p,{children:`It provides hooks for replacing the built-in field components with your own React components.`}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`type-definition`,children:`Type Definition`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`type UiConfig = {\r
  renderersByName?: CustomRender;\r
  renderersByType?: CustomRender;\r
};
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`renderersbyname`,children:`renderersByName`}),`
`,(0,o.jsx)(n.p,{children:`Registers custom renderers for specific field names.`}),`
`,(0,o.jsx)(n.h3,{id:`type`,children:`Type`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`Record<string, React.ComponentType<CustomFieldRendererProps>>;
`})}),`
`,(0,o.jsx)(n.h3,{id:`example`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`uiConfig={{\r
  renderersByName: {\r
    description: DescriptionRenderer,\r
  },\r
}}
`})}),`
`,(0,o.jsxs)(n.p,{children:[`Only the field named `,(0,o.jsx)(n.code,{children:`description`}),` will use the custom renderer.`]}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`example-1`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`function DescriptionRenderer({ fieldSchema }: CustomFieldRendererProps) {\r
  return <textarea placeholder={fieldSchema.label} />;\r
}
`})}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`<FormGenerator\r
  schema={[\r
    {\r
      type: "text",\r
      name: "description",\r
      label: "Description",\r
    },\r
  ]}\r
  uiConfig={{\r
    renderersByName: {\r
      description: DescriptionRenderer,\r
    },\r
  }}\r
/>
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`renderersbytype`,children:`renderersByType`}),`
`,(0,o.jsx)(n.p,{children:`Registers custom renderers for an entire field type.`}),`
`,(0,o.jsx)(n.h3,{id:`type-1`,children:`Type`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`Record<string, React.ComponentType<CustomFieldRendererProps>>;
`})}),`
`,(0,o.jsx)(n.h3,{id:`example-2`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`uiConfig={{\r
  renderersByType: {\r
    text: TextRenderer,\r
  },\r
}}
`})}),`
`,(0,o.jsx)(n.p,{children:`All text fields will use the custom renderer.`}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`example-3`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`function TextRenderer({ fieldSchema }: CustomFieldRendererProps) {\r
  return <input placeholder={fieldSchema.label} />;\r
}
`})}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`<FormGenerator\r
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
  uiConfig={{\r
    renderersByType: {\r
      text: TextRenderer,\r
    },\r
  }}\r
/>
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`customfieldrendererprops`,children:`CustomFieldRendererProps`}),`
`,(0,o.jsx)(n.p,{children:`Custom renderers receive the following props.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`type CustomFieldRendererProps = {\r
  fieldSchema: FormFieldSchema;\r
  control: Control<FormValues>;\r
};
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`fieldschema`,children:`fieldSchema`}),`
`,(0,o.jsx)(n.p,{children:`Provides access to the current field configuration.`}),`
`,(0,o.jsx)(n.h3,{id:`example-4`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`fieldSchema.name;\r
fieldSchema.label;\r
fieldSchema.meta;
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`control`,children:`control`}),`
`,(0,o.jsx)(n.p,{children:`Provides access to React Hook Form's control object.`}),`
`,(0,o.jsx)(n.h3,{id:`example-5`,children:`Example`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`<Controller\r
  control={control}\r
  name={fieldSchema.name}\r
  render={({ field }) => <input {...field} />}\r
/>
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`renderer-resolution-order`,children:`Renderer Resolution Order`}),`
`,(0,o.jsx)(n.p,{children:`When rendering a field, AutoForma React resolves renderers in the following order:`}),`
`,(0,o.jsxs)(n.ol,{children:[`
`,(0,o.jsx)(n.li,{children:`renderersByName`}),`
`,(0,o.jsx)(n.li,{children:`renderersByType`}),`
`,(0,o.jsx)(n.li,{children:`Built-in renderer`}),`
`]}),`
`,(0,o.jsx)(n.p,{children:`This means field-specific renderers always take precedence over type renderers.`}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`best-practices`,children:`Best Practices`}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsxs)(n.li,{children:[`Use `,(0,o.jsx)(n.code,{children:`renderersByName`}),` for individual field customization.`]}),`
`,(0,o.jsxs)(n.li,{children:[`Use `,(0,o.jsx)(n.code,{children:`renderersByType`}),` for application-wide UI consistency.`]}),`
`,(0,o.jsxs)(n.li,{children:[`Always connect custom inputs to React Hook Form using `,(0,o.jsx)(n.code,{children:`control`}),`.`]}),`
`,(0,o.jsx)(n.li,{children:`Prefer reusable renderer components when possible.`}),`
`]}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h1,{id:`related-documentation`,children:`Related Documentation`}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsx)(n.li,{children:`FormGeneratorProps`}),`
`,(0,o.jsx)(n.li,{children:`FormFieldSchema`}),`
`,(0,o.jsx)(n.li,{children:`Custom Renderers`}),`
`]})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;e((()=>{o=n(),r()}))();export{a as default};