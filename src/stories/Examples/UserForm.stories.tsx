import type { Meta, StoryObj } from "@storybook/react";
import { FormGenerator } from "../../lib";

const meta: Meta<typeof FormGenerator> = {
  title: "Examples/User Form",
  component: FormGenerator,
};

export default meta;

type Story = StoryObj<typeof FormGenerator>;

export const Basic: Story = {
  args: {
    schema: [
      {
        type: "text",
        name: "firstName",
        label: "First Name",
      },
      {
        type: "text",
        name: "lastName",
        label: "Last Name",
      },
      {
        type: "text",
        name: "email",
        label: "Email",
      },
      {
        type: "select",
        name: "role",
        label: "Role",
        options: [
          { label: "Admin", value: "ADMIN" },
          { label: "Manager", value: "MANAGER" },
          { label: "User", value: "USER" },
        ],
      },
      {
        type: "checkbox",
        name: "active",
        label: "Active",
        initialValue: true,
      },
    ],
    validate: {
      firstName: ({ value }) => {
        if (!value) return "First name is required";
        return undefined;
      },
      email: ({ value }) => {
        if (!value) return "Email is required";
        if (!String(value).includes("@")) return "Invalid email address";
        return undefined;
      },
      role: ({ value }) => {
        if (!value) return "Role is required";
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

export const EditUser: Story = {
  args: {
    schema: [
      {
        type: "text",
        name: "firstName",
        label: "First Name",
        initialValue: "Saji",
      },
      {
        type: "text",
        name: "lastName",
        label: "Last Name",
        initialValue: "Nael",
      },
      {
        type: "text",
        name: "email",
        label: "Email",
        initialValue: "saji@example.com",
      },
      {
        type: "select",
        name: "role",
        label: "Role",
        initialValue: "ADMIN",
        options: [
          { label: "Admin", value: "ADMIN" },
          { label: "Manager", value: "MANAGER" },
          { label: "User", value: "USER" },
        ],
      },
      {
        type: "checkbox",
        name: "active",
        label: "Active",
        initialValue: true,
      },
    ],
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};
