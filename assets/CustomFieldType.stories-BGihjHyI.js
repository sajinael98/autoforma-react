import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{i as n,n as r,t as i}from"./lib-76v6NIEg.js";var a,o,s,c,l;e((()=>{i(),a=t(),o=e=>(0,a.jsx)(r,{...e,schema:e.schema,uiConfig:{...e.uiConfig,renderersByName:{...e.uiConfig?.renderersByName},renderersByType:{positive:({control:e,fieldSchema:t})=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`label`,{children:t.label}),(0,a.jsx)(n,{name:t.name,control:e,render:({field:e})=>(0,a.jsx)(`input`,{...e,type:`number`,min:0,placeholder:`Enter a positive number`})})]}),...e.uiConfig?.renderersByType}}}),s={title:`Advanced/Custom Field Type`,component:o},c={args:{schema:[{type:`positive`,name:`amount`,label:`Amount`,initialValue:21}],validate:{amount:({value:e})=>{if(e===void 0||e===``)return`Amount is required`;if(Number(e)<0)return`Amount must be positive`}},onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "positive",
      name: "amount",
      label: "Amount",
      initialValue: 21
    }],
    validate: {
      amount: ({
        value
      }) => {
        if (value === undefined || value === "") {
          return "Amount is required";
        }
        if (Number(value) < 0) {
          return "Amount must be positive";
        }
        return undefined;
      }
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...c.parameters?.docs?.source}}},l=[`PositiveNumberField`]}))();export{c as PositiveNumberField,l as __namedExportsOrder,s as default};