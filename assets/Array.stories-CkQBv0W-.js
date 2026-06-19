import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./lib-76v6NIEg.js";var r,i,a,o;e((()=>{n(),r={title:`Complex Types/Array`,component:t},i={args:{schema:[{type:`array`,name:`contacts`,label:`Contacts`,fields:[{type:`text`,name:`name`,label:`Name`},{type:`text`,name:`phone`,label:`Phone`}]}],onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},a={args:{schema:[{type:`array`,name:`employees`,label:`Employees`,fields:[{type:`text`,name:`firstName`,label:`First Name`},{type:`text`,name:`lastName`,label:`Last Name`},{type:`select`,name:`department`,label:`Department`,options:[{label:`Accounting`,value:`ACCOUNTING`},{label:`Sales`,value:`SALES`},{label:`IT`,value:`IT`}]}]}],onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "array",
      name: "contacts",
      label: "Contacts",
      fields: [{
        type: "text",
        name: "name",
        label: "Name"
      }, {
        type: "text",
        name: "phone",
        label: "Phone"
      }]
    }],
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "array",
      name: "employees",
      label: "Employees",
      fields: [{
        type: "text",
        name: "firstName",
        label: "First Name"
      }, {
        type: "text",
        name: "lastName",
        label: "Last Name"
      }, {
        type: "select",
        name: "department",
        label: "Department",
        options: [{
          label: "Accounting",
          value: "ACCOUNTING"
        }, {
          label: "Sales",
          value: "SALES"
        }, {
          label: "IT",
          value: "IT"
        }]
      }]
    }],
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...a.parameters?.docs?.source}}},o=[`Basic`,`NestedArrayItem`]}))();export{i as Basic,a as NestedArrayItem,o as __namedExportsOrder,r as default};