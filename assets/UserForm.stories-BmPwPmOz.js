import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./lib-76v6NIEg.js";var r,i,a,o;e((()=>{n(),r={title:`Examples/User Form`,component:t},i={args:{schema:[{type:`text`,name:`firstName`,label:`First Name`},{type:`text`,name:`lastName`,label:`Last Name`},{type:`text`,name:`email`,label:`Email`},{type:`select`,name:`role`,label:`Role`,options:[{label:`Admin`,value:`ADMIN`},{label:`Manager`,value:`MANAGER`},{label:`User`,value:`USER`}]},{type:`checkbox`,name:`active`,label:`Active`,initialValue:!0}],validate:{firstName:({value:e})=>{if(!e)return`First name is required`},email:({value:e})=>{if(!e)return`Email is required`;if(!String(e).includes(`@`))return`Invalid email address`},role:({value:e})=>{if(!e)return`Role is required`}},onSubmit:e=>{alert(JSON.stringify(e,null,2))},onError:e=>{alert(JSON.stringify(e,null,2))}}},a={args:{schema:[{type:`text`,name:`firstName`,label:`First Name`,initialValue:`Saji`},{type:`text`,name:`lastName`,label:`Last Name`,initialValue:`Nael`},{type:`text`,name:`email`,label:`Email`,initialValue:`saji@example.com`},{type:`select`,name:`role`,label:`Role`,initialValue:`ADMIN`,options:[{label:`Admin`,value:`ADMIN`},{label:`Manager`,value:`MANAGER`},{label:`User`,value:`USER`}]},{type:`checkbox`,name:`active`,label:`Active`,initialValue:!0}],onSubmit:e=>{alert(JSON.stringify(e,null,2))}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      name: "role",
      label: "Role",
      options: [{
        label: "Admin",
        value: "ADMIN"
      }, {
        label: "Manager",
        value: "MANAGER"
      }, {
        label: "User",
        value: "USER"
      }]
    }, {
      type: "checkbox",
      name: "active",
      label: "Active",
      initialValue: true
    }],
    validate: {
      firstName: ({
        value
      }) => {
        if (!value) return "First name is required";
        return undefined;
      },
      email: ({
        value
      }) => {
        if (!value) return "Email is required";
        if (!String(value).includes("@")) return "Invalid email address";
        return undefined;
      },
      role: ({
        value
      }) => {
        if (!value) return "Role is required";
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
      name: "firstName",
      label: "First Name",
      initialValue: "Saji"
    }, {
      type: "text",
      name: "lastName",
      label: "Last Name",
      initialValue: "Nael"
    }, {
      type: "text",
      name: "email",
      label: "Email",
      initialValue: "saji@example.com"
    }, {
      type: "select",
      name: "role",
      label: "Role",
      initialValue: "ADMIN",
      options: [{
        label: "Admin",
        value: "ADMIN"
      }, {
        label: "Manager",
        value: "MANAGER"
      }, {
        label: "User",
        value: "USER"
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
}`,...a.parameters?.docs?.source}}},o=[`Basic`,`EditUser`]}))();export{i as Basic,a as EditUser,o as __namedExportsOrder,r as default};