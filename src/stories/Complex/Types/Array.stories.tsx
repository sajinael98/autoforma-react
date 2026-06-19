import type { Meta, StoryObj } from "@storybook/react";
import { FormGenerator } from "../../../lib";

const meta: Meta<typeof FormGenerator> = {
  title: "Complex Types/Array",
  component: FormGenerator,
};

export default meta;

type Story = StoryObj<typeof FormGenerator>;

export const Basic: Story = {
  args: {
    schema: [
      {
        type: "array",
        name: "contacts",
        label: "Contacts",
        fields: [
          {
            type: "text",
            name: "name",
            label: "Name",
          },
          {
            type: "text",
            name: "phone",
            label: "Phone",
          },
        ],
      },
    ],
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};

export const NestedArrayItem: Story = {
  args: {
    schema: [
      {
        type: "array",
        name: "employees",
        label: "Employees",
        fields: [
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
            type: "select",
            name: "department",
            label: "Department",
            options: [
              { label: "Accounting", value: "ACCOUNTING" },
              { label: "Sales", value: "SALES" },
              { label: "IT", value: "IT" },
            ],
          },
        ],
      },
    ],
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};
