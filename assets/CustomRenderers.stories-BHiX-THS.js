import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{i as n,n as r,t as i}from"./lib-76v6NIEg.js";var a,o,s,c,l;e((()=>{i(),a=t(),o={title:`Advanced/Custom Renderers`,component:r},s={args:{schema:[{type:`text`,name:`notes`,label:`Notes`}],uiConfig:{renderersByType:{text:({fieldSchema:e,control:t})=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`label`,{children:e.label}),(0,a.jsx)(n,{name:e.name,control:t,render:({field:e})=>(0,a.jsx)(`textarea`,{...e,placeholder:`Custom textarea renderer`})})]})}},onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},c={args:{schema:[{type:`text`,name:`description`,label:`Description`},{type:`text`,name:`title`,label:`Title`}],uiConfig:{renderersByName:{description:({fieldSchema:e,control:t})=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`label`,{children:e.label}),(0,a.jsx)(n,{name:e.name,control:t,render:({field:e})=>(0,a.jsx)(`textarea`,{...e,placeholder:`Custom renderer only for description`})})]})}},onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "text",
      name: "notes",
      label: "Notes"
    }],
    uiConfig: {
      renderersByType: {
        text: ({
          fieldSchema,
          control
        }) => {
          return <div>\r
              <label>{fieldSchema.label}</label>\r
\r
              <Controller name={fieldSchema.name} control={control} render={({
              field
            }) => <textarea {...field} placeholder="Custom textarea renderer" />} />\r
            </div>;
        }
      }
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "text",
      name: "description",
      label: "Description"
    }, {
      type: "text",
      name: "title",
      label: "Title"
    }],
    uiConfig: {
      renderersByName: {
        description: ({
          fieldSchema,
          control
        }) => {
          return <div>\r
              <label>{fieldSchema.label}</label>\r
\r
              <Controller name={fieldSchema.name} control={control} render={({
              field
            }) => <textarea {...field} placeholder="Custom renderer only for description" />} />\r
            </div>;
        }
      }
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...c.parameters?.docs?.source}}},l=[`RendererByType`,`RendererByName`]}))();export{c as RendererByName,s as RendererByType,l as __namedExportsOrder,o as default};