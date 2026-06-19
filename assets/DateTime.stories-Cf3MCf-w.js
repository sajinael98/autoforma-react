import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./lib-76v6NIEg.js";var r,i,a,o;e((()=>{n(),r={title:`Fields/DateTime`,component:t},i={args:{schema:[{type:`datetime`,name:`appointment`,label:`Appointment`}],onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},a={args:{schema:[{type:`datetime`,name:`appointment`,label:`Appointment`,initialValue:`2026-01-01T12:00`}],onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "datetime",
      name: "appointment",
      label: "Appointment"
    }],
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "datetime",
      name: "appointment",
      label: "Appointment",
      initialValue: "2026-01-01T12:00"
    }],
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...a.parameters?.docs?.source}}},o=[`Basic`,`WithInitialValue`]}))();export{i as Basic,a as WithInitialValue,o as __namedExportsOrder,r as default};