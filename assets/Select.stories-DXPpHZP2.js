import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./lib-76v6NIEg.js";var r,i,a,o;e((()=>{n(),r={title:`Fields/Select`,component:t},i={args:{schema:[{type:`select`,name:`status`,label:`Status`,options:[{label:`Active`,value:`ACTIVE`},{label:`Inactive`,value:`INACTIVE`},{label:`Pending`,value:`PENDING`}]}],onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},a={args:{schema:[{type:`select`,name:`status`,label:`Status`,initialValue:`ACTIVE`,options:[{label:`Active`,value:`ACTIVE`},{label:`Inactive`,value:`INACTIVE`},{label:`Pending`,value:`PENDING`}]}],onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "select",
      name: "status",
      label: "Status",
      options: [{
        label: "Active",
        value: "ACTIVE"
      }, {
        label: "Inactive",
        value: "INACTIVE"
      }, {
        label: "Pending",
        value: "PENDING"
      }]
    }],
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "select",
      name: "status",
      label: "Status",
      initialValue: "ACTIVE",
      options: [{
        label: "Active",
        value: "ACTIVE"
      }, {
        label: "Inactive",
        value: "INACTIVE"
      }, {
        label: "Pending",
        value: "PENDING"
      }]
    }],
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...a.parameters?.docs?.source}}},o=[`Basic`,`WithInitialValue`]}))();export{i as Basic,a as WithInitialValue,o as __namedExportsOrder,r as default};