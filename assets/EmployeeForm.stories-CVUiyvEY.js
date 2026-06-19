import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./lib-76v6NIEg.js";var r,i,a,o,s;e((()=>{n(),r={title:`Examples/Employee Form`,component:t},i={args:{schema:[{type:`text`,name:`firstName`,label:`First Name`},{type:`text`,name:`lastName`,label:`Last Name`},{type:`text`,name:`email`,label:`Email`},{type:`select`,name:`department`,label:`Department`,options:[{label:`Accounting`,value:`ACCOUNTING`},{label:`Sales`,value:`SALES`},{label:`Operations`,value:`OPERATIONS`},{label:`IT`,value:`IT`}]},{type:`select`,name:`employmentType`,label:`Employment Type`,options:[{label:`Full Time`,value:`FULL_TIME`},{label:`Part Time`,value:`PART_TIME`},{label:`Contract`,value:`CONTRACT`}]},{type:`checkbox`,name:`active`,label:`Active`,initialValue:!0}],onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},a={args:{schema:[{type:`text`,name:`firstName`,label:`First Name`},{type:`text`,name:`lastName`,label:`Last Name`},{type:`text`,name:`email`,label:`Email`},{type:`object`,name:`address`,label:`Address`,fields:[{type:`text`,name:`street`,label:`Street`},{type:`text`,name:`city`,label:`City`},{type:`text`,name:`state`,label:`State`},{type:`text`,name:`zipCode`,label:`Zip Code`}]},{type:`checkbox`,name:`active`,label:`Active`,initialValue:!0}],onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},o={args:{schema:[{type:`text`,name:`firstName`,label:`First Name`},{type:`text`,name:`lastName`,label:`Last Name`},{type:`array`,name:`dependents`,label:`Dependents`,fields:[{type:`text`,name:`name`,label:`Name`},{type:`text`,name:`relationship`,label:`Relationship`},{type:`date`,name:`birthDate`,label:`Birth Date`}]}],onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "text",
      name: "firstName",
      label: "First Name"
    }, {
      type: "text",
      name: "lastName",
      label: "Last Name"
    }, {
      type: "text",
      name: "email",
      label: "Email"
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
        label: "Operations",
        value: "OPERATIONS"
      }, {
        label: "IT",
        value: "IT"
      }]
    }, {
      type: "select",
      name: "employmentType",
      label: "Employment Type",
      options: [{
        label: "Full Time",
        value: "FULL_TIME"
      }, {
        label: "Part Time",
        value: "PART_TIME"
      }, {
        label: "Contract",
        value: "CONTRACT"
      }]
    }, {
      type: "checkbox",
      name: "active",
      label: "Active",
      initialValue: true
    }],
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "text",
      name: "firstName",
      label: "First Name"
    }, {
      type: "text",
      name: "lastName",
      label: "Last Name"
    }, {
      type: "text",
      name: "email",
      label: "Email"
    }, {
      type: "object",
      name: "address",
      label: "Address",
      fields: [{
        type: "text",
        name: "street",
        label: "Street"
      }, {
        type: "text",
        name: "city",
        label: "City"
      }, {
        type: "text",
        name: "state",
        label: "State"
      }, {
        type: "text",
        name: "zipCode",
        label: "Zip Code"
      }]
    }, {
      type: "checkbox",
      name: "active",
      label: "Active",
      initialValue: true
    }],
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "text",
      name: "firstName",
      label: "First Name"
    }, {
      type: "text",
      name: "lastName",
      label: "Last Name"
    }, {
      type: "array",
      name: "dependents",
      label: "Dependents",
      fields: [{
        type: "text",
        name: "name",
        label: "Name"
      }, {
        type: "text",
        name: "relationship",
        label: "Relationship"
      }, {
        type: "date",
        name: "birthDate",
        label: "Birth Date"
      }]
    }],
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...o.parameters?.docs?.source}}},s=[`Basic`,`WithAddress`,`WithDependents`]}))();export{i as Basic,a as WithAddress,o as WithDependents,s as __namedExportsOrder,r as default};