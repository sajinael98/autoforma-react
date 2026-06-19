import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./lib-76v6NIEg.js";var r,i,a,o;e((()=>{n(),r={title:`Fields/Checkbox`,component:t},i={args:{schema:[{type:`checkbox`,name:`active`,label:`Active`}],onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},a={args:{schema:[{type:`checkbox`,name:`active`,label:`Active`,initialValue:!0}],onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "checkbox",
      name: "active",
      label: "Active"
    }],
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "checkbox",
      name: "active",
      label: "Active",
      initialValue: true
    }],
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...a.parameters?.docs?.source}}},o=[`Basic`,`CheckedByDefault`]}))();export{i as Basic,a as CheckedByDefault,o as __namedExportsOrder,r as default};