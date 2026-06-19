import type { Meta, StoryObj } from "@storybook/react";
import { FormGenerator } from "../../lib";

const meta: Meta<typeof FormGenerator> = {
  title: "Examples/Product Form",
  component: FormGenerator,
};

export default meta;

type Story = StoryObj<typeof FormGenerator>;

export const Basic: Story = {
  args: {
    schema: [
      {
        type: "text",
        name: "name",
        label: "Product Name",
      },
      {
        type: "text",
        name: "sku",
        label: "SKU",
      },
      {
        type: "select",
        name: "type",
        label: "Product Type",
        options: [
          { label: "Inventory", value: "INVENTORY" },
          { label: "Non Stock", value: "NONSTOCK" },
          { label: "Service", value: "SERVICE" },
        ],
      },
      {
        type: "number",
        name: "price",
        label: "Price",
      },
      {
        type: "checkbox",
        name: "active",
        label: "Active",
        initialValue: true,
      },
    ],
    validate: {
      name: ({ value }) => (!value ? "Product name is required" : undefined),
      sku: ({ value }) => (!value ? "SKU is required" : undefined),
      price: ({ value }) =>
        Number(value) <= 0 ? "Price must be greater than 0" : undefined,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    onError: (errors) => {
      alert(JSON.stringify(errors, null, 2));
    },
  },
};

export const WithInventoryDetails: Story = {
  args: {
    schema: [
      {
        type: "text",
        name: "name",
        label: "Product Name",
        initialValue: "Lattafa Yara",
      },
      {
        type: "text",
        name: "sku",
        label: "SKU",
        initialValue: "PRF-YARA-001",
      },
      {
        type: "select",
        name: "type",
        label: "Product Type",
        initialValue: "INVENTORY",
        options: [
          { label: "Inventory", value: "INVENTORY" },
          { label: "Non Stock", value: "NONSTOCK" },
          { label: "Service", value: "SERVICE" },
        ],
      },
      {
        type: "object",
        name: "inventory",
        label: "Inventory",
        fields: [
          {
            type: "number",
            name: "quantity",
            label: "Quantity",
            initialValue: 25,
          },
          {
            type: "select",
            name: "warehouse",
            label: "Warehouse",
            initialValue: "MAIN",
            options: [
              { label: "Main Warehouse", value: "MAIN" },
              { label: "Online Store", value: "ONLINE" },
            ],
          },
        ],
      },
      {
        type: "number",
        name: "price",
        label: "Price",
        initialValue: 30,
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