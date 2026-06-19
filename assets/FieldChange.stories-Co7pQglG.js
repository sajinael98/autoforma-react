import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./lib-76v6NIEg.js";var r,i,a,o;e((()=>{n(),r={title:`Advanced/Field Change Events`,component:t},i={args:{schema:[{type:`text`,name:`firstName`,label:`First Name`},{type:`text`,name:`displayName`,label:`Display Name`}],onFieldChange:{firstName:({value:e,setValue:t})=>{t(`displayName`,e)}},onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},a={args:{schema:[{type:`number`,name:`quantity`,label:`Quantity`,initialValue:1},{type:`number`,name:`unitPrice`,label:`Unit Price`,initialValue:10},{type:`number`,name:`total`,label:`Total`,initialValue:10}],onFieldChange:{quantity:({getValues:e,setValue:t})=>{t(`total`,Number(e(`quantity`)||0)*Number(e(`unitPrice`)||0))},unitPrice:({getValues:e,setValue:t})=>{t(`total`,Number(e(`quantity`)||0)*Number(e(`unitPrice`)||0))}},onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "text",
      name: "firstName",
      label: "First Name"
    }, {
      type: "text",
      name: "displayName",
      label: "Display Name"
    }],
    onFieldChange: {
      firstName: ({
        value,
        setValue
      }) => {
        setValue("displayName", value);
      }
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "number",
      name: "quantity",
      label: "Quantity",
      initialValue: 1
    }, {
      type: "number",
      name: "unitPrice",
      label: "Unit Price",
      initialValue: 10
    }, {
      type: "number",
      name: "total",
      label: "Total",
      initialValue: 10
    }],
    onFieldChange: {
      quantity: ({
        getValues,
        setValue
      }) => {
        const quantity = Number(getValues("quantity") || 0);
        const unitPrice = Number(getValues("unitPrice") || 0);
        setValue("total", quantity * unitPrice);
      },
      unitPrice: ({
        getValues,
        setValue
      }) => {
        const quantity = Number(getValues("quantity") || 0);
        const unitPrice = Number(getValues("unitPrice") || 0);
        setValue("total", quantity * unitPrice);
      }
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...a.parameters?.docs?.source}}},o=[`AutoFillField`,`CalculateTotal`]}))();export{i as AutoFillField,a as CalculateTotal,o as __namedExportsOrder,r as default};