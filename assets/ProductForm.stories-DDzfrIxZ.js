import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./lib-76v6NIEg.js";var r,i,a,o;e((()=>{n(),r={title:`Examples/Product Form`,component:t},i={args:{schema:[{type:`text`,name:`name`,label:`Product Name`},{type:`text`,name:`sku`,label:`SKU`},{type:`select`,name:`type`,label:`Product Type`,options:[{label:`Inventory`,value:`INVENTORY`},{label:`Non Stock`,value:`NONSTOCK`},{label:`Service`,value:`SERVICE`}]},{type:`number`,name:`price`,label:`Price`},{type:`checkbox`,name:`active`,label:`Active`,initialValue:!0}],validate:{name:({value:e})=>e?void 0:`Product name is required`,sku:({value:e})=>e?void 0:`SKU is required`,price:({value:e})=>Number(e)<=0?`Price must be greater than 0`:void 0},onSubmit:e=>{alert(JSON.stringify(e,null,2))},onError:e=>{alert(JSON.stringify(e,null,2))}}},a={args:{schema:[{type:`text`,name:`name`,label:`Product Name`,initialValue:`Lattafa Yara`},{type:`text`,name:`sku`,label:`SKU`,initialValue:`PRF-YARA-001`},{type:`select`,name:`type`,label:`Product Type`,initialValue:`INVENTORY`,options:[{label:`Inventory`,value:`INVENTORY`},{label:`Non Stock`,value:`NONSTOCK`},{label:`Service`,value:`SERVICE`}]},{type:`object`,name:`inventory`,label:`Inventory`,fields:[{type:`number`,name:`quantity`,label:`Quantity`,initialValue:25},{type:`select`,name:`warehouse`,label:`Warehouse`,initialValue:`MAIN`,options:[{label:`Main Warehouse`,value:`MAIN`},{label:`Online Store`,value:`ONLINE`}]}]},{type:`number`,name:`price`,label:`Price`,initialValue:30},{type:`checkbox`,name:`active`,label:`Active`,initialValue:!0}],onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "text",
      name: "name",
      label: "Product Name"
    }, {
      type: "text",
      name: "sku",
      label: "SKU"
    }, {
      type: "select",
      name: "type",
      label: "Product Type",
      options: [{
        label: "Inventory",
        value: "INVENTORY"
      }, {
        label: "Non Stock",
        value: "NONSTOCK"
      }, {
        label: "Service",
        value: "SERVICE"
      }]
    }, {
      type: "number",
      name: "price",
      label: "Price"
    }, {
      type: "checkbox",
      name: "active",
      label: "Active",
      initialValue: true
    }],
    validate: {
      name: ({
        value
      }) => !value ? "Product name is required" : undefined,
      sku: ({
        value
      }) => !value ? "SKU is required" : undefined,
      price: ({
        value
      }) => Number(value) <= 0 ? "Price must be greater than 0" : undefined
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
      name: "name",
      label: "Product Name",
      initialValue: "Lattafa Yara"
    }, {
      type: "text",
      name: "sku",
      label: "SKU",
      initialValue: "PRF-YARA-001"
    }, {
      type: "select",
      name: "type",
      label: "Product Type",
      initialValue: "INVENTORY",
      options: [{
        label: "Inventory",
        value: "INVENTORY"
      }, {
        label: "Non Stock",
        value: "NONSTOCK"
      }, {
        label: "Service",
        value: "SERVICE"
      }]
    }, {
      type: "object",
      name: "inventory",
      label: "Inventory",
      fields: [{
        type: "number",
        name: "quantity",
        label: "Quantity",
        initialValue: 25
      }, {
        type: "select",
        name: "warehouse",
        label: "Warehouse",
        initialValue: "MAIN",
        options: [{
          label: "Main Warehouse",
          value: "MAIN"
        }, {
          label: "Online Store",
          value: "ONLINE"
        }]
      }]
    }, {
      type: "number",
      name: "price",
      label: "Price",
      initialValue: 30
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
}`,...a.parameters?.docs?.source}}},o=[`Basic`,`WithInventoryDetails`]}))();export{i as Basic,a as WithInventoryDetails,o as __namedExportsOrder,r as default};