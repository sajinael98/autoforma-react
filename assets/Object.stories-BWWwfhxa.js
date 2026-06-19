import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./lib-76v6NIEg.js";var r,i,a,o;e((()=>{n(),r={title:`Complex Types/Object`,component:t},i={args:{schema:[{type:`object`,name:`address`,label:`Address`,fields:[{type:`text`,name:`street`,label:`Street`},{type:`text`,name:`city`,label:`City`},{type:`select`,name:`country`,label:`Country`,options:[{label:`United States`,value:`US`},{label:`Canada`,value:`CA`}]}]}],onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},a={args:{schema:[{type:`object`,name:`address`,label:`Address`,initialValue:{street:`123 Main St`,city:`Chicago`,country:`US`},fields:[{type:`text`,name:`street`,label:`Street`},{type:`text`,name:`city`,label:`City`},{type:`select`,name:`country`,label:`Country`,options:[{label:`United States`,value:`US`},{label:`Canada`,value:`CA`}]}]}],onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
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
        type: "select",
        name: "country",
        label: "Country",
        options: [{
          label: "United States",
          value: "US"
        }, {
          label: "Canada",
          value: "CA"
        }]
      }]
    }],
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "object",
      name: "address",
      label: "Address",
      initialValue: {
        street: "123 Main St",
        city: "Chicago",
        country: "US"
      },
      fields: [{
        type: "text",
        name: "street",
        label: "Street"
      }, {
        type: "text",
        name: "city",
        label: "City"
      }, {
        type: "select",
        name: "country",
        label: "Country",
        options: [{
          label: "United States",
          value: "US"
        }, {
          label: "Canada",
          value: "CA"
        }]
      }]
    }],
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...a.parameters?.docs?.source}}},o=[`Basic`,`WithInitialValues`]}))();export{i as Basic,a as WithInitialValues,o as __namedExportsOrder,r as default};