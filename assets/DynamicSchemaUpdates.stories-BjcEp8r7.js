import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./lib-76v6NIEg.js";var r,i,a,o;e((()=>{n(),r={title:`Advanced/Dynamic Schema Updates`,component:t},i={args:{schema:[{type:`select`,name:`customerType`,label:`Customer Type`,options:[{label:`Individual`,value:`INDIVIDUAL`},{label:`Company`,value:`COMPANY`}]},{type:`text`,name:`customerName`,label:`Customer Name`,dependsOn:[`customerType`]}],updateFieldSchema:{customerName:({values:e})=>e.customerType===`COMPANY`?{label:`Company Name`,meta:{placeholder:`Enter company name`}}:{label:`Full Name`,meta:{placeholder:`Enter full name`}}},onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},a={args:{schema:[{type:`checkbox`,name:`hasDiscount`,label:`Has Discount?`},{type:`number`,name:`discountRate`,label:`Discount Rate`,dependsOn:[`hasDiscount`]}],updateFieldSchema:{discountRate:({values:e})=>({visible:e.hasDiscount===!0})},onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "select",
      name: "customerType",
      label: "Customer Type",
      options: [{
        label: "Individual",
        value: "INDIVIDUAL"
      }, {
        label: "Company",
        value: "COMPANY"
      }]
    }, {
      type: "text",
      name: "customerName",
      label: "Customer Name",
      dependsOn: ["customerType"]
    }],
    updateFieldSchema: {
      customerName: ({
        values
      }) => {
        if (values.customerType === "COMPANY") {
          return {
            label: "Company Name",
            meta: {
              placeholder: "Enter company name"
            }
          };
        }
        return {
          label: "Full Name",
          meta: {
            placeholder: "Enter full name"
          }
        };
      }
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "checkbox",
      name: "hasDiscount",
      label: "Has Discount?"
    }, {
      type: "number",
      name: "discountRate",
      label: "Discount Rate",
      dependsOn: ["hasDiscount"]
    }],
    updateFieldSchema: {
      discountRate: ({
        values
      }) => {
        return {
          visible: values.hasDiscount === true
        };
      }
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...a.parameters?.docs?.source}}},o=[`UpdateLabelBasedOnValue`,`HideFieldBasedOnValue`]}))();export{a as HideFieldBasedOnValue,i as UpdateLabelBasedOnValue,o as __namedExportsOrder,r as default};