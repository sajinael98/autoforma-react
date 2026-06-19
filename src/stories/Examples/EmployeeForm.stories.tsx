import type { Meta, StoryObj } from "@storybook/react";
import { FormGenerator } from "../../lib";

const meta: Meta<typeof FormGenerator> = {
  title: "Examples/Employee Form",
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
        name: "department",
        label: "Department",
        options: [
          { label: "Accounting", value: "ACCOUNTING" },
          { label: "Sales", value: "SALES" },
          { label: "Operations", value: "OPERATIONS" },
          { label: "IT", value: "IT" },
        ],
      },
      {
        type: "select",
        name: "employmentType",
        label: "Employment Type",
        options: [
          { label: "Full Time", value: "FULL_TIME" },
          { label: "Part Time", value: "PART_TIME" },
          { label: "Contract", value: "CONTRACT" },
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

export const WithAddress: Story = {
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
        type: "object",
        name: "address",
        label: "Address",
        fields: [
          {
            type: "text",
            name: "street",
            label: "Street",
          },
          {
            type: "text",
            name: "city",
            label: "City",
          },
          {
            type: "text",
            name: "state",
            label: "State",
          },
          {
            type: "text",
            name: "zipCode",
            label: "Zip Code",
          },
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

export const WithDependents: Story = {
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
        type: "array",
        name: "dependents",
        label: "Dependents",
        fields: [
          {
            type: "text",
            name: "name",
            label: "Name",
          },
          {
            type: "text",
            name: "relationship",
            label: "Relationship",
          },
          {
            type: "date",
            name: "birthDate",
            label: "Birth Date",
          },
        ],
      },
    ],
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};
