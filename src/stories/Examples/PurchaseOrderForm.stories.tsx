import type { Meta, StoryObj } from "@storybook/react";
import { FormGenerator } from "../../lib";

const meta: Meta<typeof FormGenerator> = {
  title: "Examples/Purchase Order Form",
  component: FormGenerator,
};

export default meta;

type Story = StoryObj<typeof FormGenerator>;

export const Basic: Story = {
  args: {
    schema: [
      {
        type: "text",
        name: "supplier",
        label: "Supplier",
      },
      {
        type: "date",
        name: "orderDate",
        label: "Order Date",
        initialValue: "2026-01-01",
      },
      {
        type: "select",
        name: "status",
        label: "Status",
        initialValue: "DRAFT",
        options: [
          { label: "Draft", value: "DRAFT" },
          { label: "Submitted", value: "SUBMITTED" },
          { label: "Approved", value: "APPROVED" },
        ],
      },
      {
        type: "array",
        name: "items",
        label: "Items",
        fields: [
          {
            type: "text",
            name: "itemName",
            label: "Item Name",
          },
          {
            type: "number",
            name: "quantity",
            label: "Quantity",
          },
          {
            type: "number",
            name: "unitPrice",
            label: "Unit Price",
          },
        ],
      },
    ],
    validate: {
      supplier: ({ value }) => (!value ? "Supplier is required" : undefined),
      orderDate: ({ value }) => (!value ? "Order date is required" : undefined),
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    onError: (errors) => {
      alert(JSON.stringify(errors, null, 2));
    },
  },
};

export const WithShippingAndTotals: Story = {
  args: {
    schema: [
      {
        type: "text",
        name: "supplier",
        label: "Supplier",
        initialValue: "ABC Supplies",
      },
      {
        type: "date",
        name: "orderDate",
        label: "Order Date",
        initialValue: "2026-01-01",
      },
      {
        type: "object",
        name: "shippingAddress",
        label: "Shipping Address",
        fields: [
          {
            type: "text",
            name: "street",
            label: "Street",
            initialValue: "123 Main St",
          },
          {
            type: "text",
            name: "city",
            label: "City",
            initialValue: "Chicago",
          },
          {
            type: "text",
            name: "state",
            label: "State",
            initialValue: "IL",
          },
        ],
      },
      {
        type: "array",
        name: "items",
        label: "Items",
        initialValue: [
          {
            itemName: "Product A",
            quantity: 2,
            unitPrice: 25,
          },
        ],
        fields: [
          {
            type: "text",
            name: "itemName",
            label: "Item Name",
          },
          {
            type: "number",
            name: "quantity",
            label: "Quantity",
          },
          {
            type: "number",
            name: "unitPrice",
            label: "Unit Price",
          },
        ],
      },
      {
        type: "number",
        name: "taxRate",
        label: "Tax Rate %",
        initialValue: 8,
      },
      {
        type: "number",
        name: "shippingCost",
        label: "Shipping Cost",
        initialValue: 10,
      },
    ],
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};
