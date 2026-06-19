import type { Meta, StoryObj } from "@storybook/react";
import { FormGenerator } from "../../lib";

const meta: Meta<typeof FormGenerator> = {
  title: "Advanced/Validation",
  component: FormGenerator,
};

export default meta;

type Story = StoryObj<typeof FormGenerator>;

export const RequiredField: Story = {
  args: {
    schema: [
      {
        type: "text",
        name: "name",
        label: "Name",
      },
    ],
    validate: {
      name: ({ value }) => {
        if (!value) return "Name is required";
        return undefined;
      },
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    onError: (errors) => {
      alert(JSON.stringify(errors, null, 2));
    },
  },
};

export const MultipleFields: Story = {
  args: {
    schema: [
      {
        type: "text",
        name: "email",
        label: "Email",
      },
      {
        type: "number",
        name: "age",
        label: "Age",
      },
    ],
    validate: {
      email: ({ value }) => {
        if (!value) return "Email is required";
        if (!String(value).includes("@")) return "Invalid email address";
        return undefined;
      },
      age: ({ value }) => {
        if (!value) return "Age is required";
        if (Number(value) < 18) return "Age must be at least 18";
        return undefined;
      },
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    onError: (errors) => {
      alert(JSON.stringify(errors, null, 2));
    },
  },
};
