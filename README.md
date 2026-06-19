# AutoForma React

AutoForma React is a schema-driven form generator built on top of React Hook Form.

It helps developers build dynamic, reusable, and maintainable React forms using TypeScript schemas instead of manually creating every field, validation rule, and form interaction.

## Documentation

Interactive Storybook documentation:

https://sajinael98.github.io/autoforma-react

---

## Installation

```bash
npm install autoforma-react react-hook-form
```

### Peer Dependencies

```txt
react >= 18
react-dom >= 18
react-hook-form >= 7
```

---

## Quick Example

```tsx
import { FormGenerator } from "autoforma-react";

export default function App() {
  return (
    <FormGenerator
      schema={[
        {
          type: "text",
          name: "firstName",
          label: "First Name",
        },
        {
          type: "select",
          name: "status",
          label: "Status",
          options: [
            { label: "Active", value: "ACTIVE" },
            { label: "Inactive", value: "INACTIVE" },
          ],
        },
      ]}
      onSubmit={(values) => {
        console.log(values);
      }}
    />
  );
}
```

---

## Features

- Schema-based form rendering
- Built-in field types
- Select fields
- Nested object fields
- Array fields
- Custom renderers
- Custom field types
- Validation hooks
- Field change handlers
- Dynamic schema updates
- Dirty state tracking
- React Hook Form integration
- TypeScript support

---

## Built-in Field Types

```ts
"text";
"number";
"checkbox";
"date";
"datetime";
"time";
"select";
"object";
"array";
```

---

## Validation Example

```tsx
<FormGenerator
  schema={[
    {
      type: "text",
      name: "email",
      label: "Email",
    },
  ]}
  validate={{
    email: ({ value }) => {
      if (!value) return "Email is required";

      if (!String(value).includes("@")) {
        return "Invalid email address";
      }

      return undefined;
    },
  }}
  onSubmit={(values) => {
    console.log(values);
  }}
/>
```

---

## Custom Field Type Example

```tsx
import { Controller, FormGenerator } from "autoforma-react";

<FormGenerator
  schema={[
    {
      type: "positive",
      name: "amount",
      label: "Amount",
      initialValue: 10,
    },
  ]}
  uiConfig={{
    renderersByType: {
      positive: ({ control, fieldSchema }) => (
        <Controller
          name={fieldSchema.name}
          control={control}
          render={({ field }) => <input {...field} type="number" min={0} />}
        />
      ),
    },
  }}
  onSubmit={(values) => {
    console.log(values);
  }}
/>;
```

---

## Local Development

Install dependencies:

```bash
npm install
```

Run Storybook:

```bash
npm run storybook
```

Build the library:

```bash
npm run build
```

Build Storybook:

```bash
npm run build-storybook
```

---

## License

This project is source-available.

You may use the software for evaluation, learning, and testing purposes.

Modification, redistribution, commercial use, publishing modified versions, or creating derivative works requires prior written permission from the author.

See the LICENSE file for full details.

---

## Author

Saji Nael
