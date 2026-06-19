import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./lib-76v6NIEg.js";var r,i,a,o;e((()=>{n(),r={title:`Examples/Purchase Order Form`,component:t},i={args:{schema:[{type:`text`,name:`supplier`,label:`Supplier`},{type:`date`,name:`orderDate`,label:`Order Date`,initialValue:`2026-01-01`},{type:`select`,name:`status`,label:`Status`,initialValue:`DRAFT`,options:[{label:`Draft`,value:`DRAFT`},{label:`Submitted`,value:`SUBMITTED`},{label:`Approved`,value:`APPROVED`}]},{type:`array`,name:`items`,label:`Items`,fields:[{type:`text`,name:`itemName`,label:`Item Name`},{type:`number`,name:`quantity`,label:`Quantity`},{type:`number`,name:`unitPrice`,label:`Unit Price`}]}],validate:{supplier:({value:e})=>e?void 0:`Supplier is required`,orderDate:({value:e})=>e?void 0:`Order date is required`},onSubmit:e=>{alert(JSON.stringify(e,null,2))},onError:e=>{alert(JSON.stringify(e,null,2))}}},a={args:{schema:[{type:`text`,name:`supplier`,label:`Supplier`,initialValue:`ABC Supplies`},{type:`date`,name:`orderDate`,label:`Order Date`,initialValue:`2026-01-01`},{type:`object`,name:`shippingAddress`,label:`Shipping Address`,fields:[{type:`text`,name:`street`,label:`Street`,initialValue:`123 Main St`},{type:`text`,name:`city`,label:`City`,initialValue:`Chicago`},{type:`text`,name:`state`,label:`State`,initialValue:`IL`}]},{type:`array`,name:`items`,label:`Items`,initialValue:[{itemName:`Product A`,quantity:2,unitPrice:25}],fields:[{type:`text`,name:`itemName`,label:`Item Name`},{type:`number`,name:`quantity`,label:`Quantity`},{type:`number`,name:`unitPrice`,label:`Unit Price`}]},{type:`number`,name:`taxRate`,label:`Tax Rate %`,initialValue:8},{type:`number`,name:`shippingCost`,label:`Shipping Cost`,initialValue:10}],onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "text",
      name: "supplier",
      label: "Supplier"
    }, {
      type: "date",
      name: "orderDate",
      label: "Order Date",
      initialValue: "2026-01-01"
    }, {
      type: "select",
      name: "status",
      label: "Status",
      initialValue: "DRAFT",
      options: [{
        label: "Draft",
        value: "DRAFT"
      }, {
        label: "Submitted",
        value: "SUBMITTED"
      }, {
        label: "Approved",
        value: "APPROVED"
      }]
    }, {
      type: "array",
      name: "items",
      label: "Items",
      fields: [{
        type: "text",
        name: "itemName",
        label: "Item Name"
      }, {
        type: "number",
        name: "quantity",
        label: "Quantity"
      }, {
        type: "number",
        name: "unitPrice",
        label: "Unit Price"
      }]
    }],
    validate: {
      supplier: ({
        value
      }) => !value ? "Supplier is required" : undefined,
      orderDate: ({
        value
      }) => !value ? "Order date is required" : undefined
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    onError: errors => {
      alert(JSON.stringify(errors, null, 2));
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "text",
      name: "supplier",
      label: "Supplier",
      initialValue: "ABC Supplies"
    }, {
      type: "date",
      name: "orderDate",
      label: "Order Date",
      initialValue: "2026-01-01"
    }, {
      type: "object",
      name: "shippingAddress",
      label: "Shipping Address",
      fields: [{
        type: "text",
        name: "street",
        label: "Street",
        initialValue: "123 Main St"
      }, {
        type: "text",
        name: "city",
        label: "City",
        initialValue: "Chicago"
      }, {
        type: "text",
        name: "state",
        label: "State",
        initialValue: "IL"
      }]
    }, {
      type: "array",
      name: "items",
      label: "Items",
      initialValue: [{
        itemName: "Product A",
        quantity: 2,
        unitPrice: 25
      }],
      fields: [{
        type: "text",
        name: "itemName",
        label: "Item Name"
      }, {
        type: "number",
        name: "quantity",
        label: "Quantity"
      }, {
        type: "number",
        name: "unitPrice",
        label: "Unit Price"
      }]
    }, {
      type: "number",
      name: "taxRate",
      label: "Tax Rate %",
      initialValue: 8
    }, {
      type: "number",
      name: "shippingCost",
      label: "Shipping Cost",
      initialValue: 10
    }],
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  }
}`,...a.parameters?.docs?.source}}},o=[`Basic`,`WithShippingAndTotals`]}))();export{i as Basic,a as WithShippingAndTotals,o as __namedExportsOrder,r as default};