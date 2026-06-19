import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./lib-76v6NIEg.js";var r,i,a,o,s;e((()=>{n(),r={title:`Fields/Text`,component:t,parameters:{docs:{description:{component:`The text field is used to capture short textual input from the user.`}}}},i={args:{schema:[{type:`text`,name:`firstName`,label:`First Name`}],onSubmit:e=>{alert(JSON.stringify(e))}}},a={args:{schema:[{type:`text`,name:`firstName`,label:`First Name`,initialValue:`John`}],onSubmit:e=>{alert(JSON.stringify(e))}}},o={args:{schema:[{type:`text`,name:`secret`,label:`Secret`,visible:!1}],onSubmit:e=>{alert(JSON.stringify(e))}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "text",
      name: "firstName",
      label: "First Name"
    }],
    onSubmit: values => {
      alert(JSON.stringify(values));
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "text",
      name: "firstName",
      label: "First Name",
      initialValue: "John"
    }],
    onSubmit: values => {
      alert(JSON.stringify(values));
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "text",
      name: "secret",
      label: "Secret",
      visible: false
    }],
    onSubmit: values => {
      alert(JSON.stringify(values));
    }
  }
}`,...o.parameters?.docs?.source}}},s=[`Basic`,`WithInitialValue`,`Hidden`]}))();export{i as Basic,o as Hidden,a as WithInitialValue,s as __namedExportsOrder,r as default};