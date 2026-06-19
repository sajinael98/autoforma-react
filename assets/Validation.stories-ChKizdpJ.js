import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./lib-76v6NIEg.js";var r,i,a,o;e((()=>{n(),r={title:`Advanced/Validation`,component:t},i={args:{schema:[{type:`text`,name:`name`,label:`Name`}],validate:{name:({value:e})=>{if(!e)return`Name is required`}},onSubmit:e=>{alert(JSON.stringify(e,null,2))},onError:e=>{alert(JSON.stringify(e,null,2))}}},a={args:{schema:[{type:`text`,name:`email`,label:`Email`},{type:`number`,name:`age`,label:`Age`}],validate:{email:({value:e})=>{if(!e)return`Email is required`;if(!String(e).includes(`@`))return`Invalid email address`},age:({value:e})=>{if(!e)return`Age is required`;if(Number(e)<18)return`Age must be at least 18`}},onSubmit:e=>{alert(JSON.stringify(e,null,2))},onError:e=>{alert(JSON.stringify(e,null,2))}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    schema: [{
      type: "text",
      name: "name",
      label: "Name"
    }],
    validate: {
      name: ({
        value
      }) => {
        if (!value) return "Name is required";
        return undefined;
      }
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
      name: "email",
      label: "Email"
    }, {
      type: "number",
      name: "age",
      label: "Age"
    }],
    validate: {
      email: ({
        value
      }) => {
        if (!value) return "Email is required";
        if (!String(value).includes("@")) return "Invalid email address";
        return undefined;
      },
      age: ({
        value
      }) => {
        if (!value) return "Age is required";
        if (Number(value) < 18) return "Age must be at least 18";
        return undefined;
      }
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    onError: errors => {
      alert(JSON.stringify(errors, null, 2));
    }
  }
}`,...a.parameters?.docs?.source}}},o=[`RequiredField`,`MultipleFields`]}))();export{a as MultipleFields,i as RequiredField,o as __namedExportsOrder,r as default};