import type { Meta, StoryObj } from "@storybook/react";
import { FormGenerator } from "../../lib";

const meta: Meta<typeof FormGenerator> = {
  title: "Advanced/Field Change Events",
  component: FormGenerator,
};

export default meta;

type Story = StoryObj<typeof FormGenerator>;

export const AutoFillField: Story = {
  args: {
    schema: [
      {
        type: "text",
        name: "firstName",
        label: "First Name",
      },
      {
        type: "text",
        name: "displayName",
        label: "Display Name",
      },
    ],
    onFieldChange: {
      firstName: ({ value, setValue }) => {
        setValue("displayName", value);
      },
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};

export const CalculateTotal: Story = {
  args: {
    schema: [
      {
        type: "number",
        name: "quantity",
        label: "Quantity",
        initialValue: 1,
      },
      {
        type: "number",
        name: "unitPrice",
        label: "Unit Price",
        initialValue: 10,
      },
      {
        type: "number",
        name: "total",
        label: "Total",
        initialValue: 10,
      },
    ],
    onFieldChange: {
      quantity: ({ getValues, setValue }) => {
        const quantity = Number(getValues("quantity") || 0);
        const unitPrice = Number(getValues("unitPrice") || 0);

        setValue("total", quantity * unitPrice);
      },
      unitPrice: ({ getValues, setValue }) => {
        const quantity = Number(getValues("quantity") || 0);
        const unitPrice = Number(getValues("unitPrice") || 0);

        setValue("total", quantity * unitPrice);
      },
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};
