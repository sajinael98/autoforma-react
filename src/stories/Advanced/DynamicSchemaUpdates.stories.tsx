import type { Meta, StoryObj } from "@storybook/react";
import { FormGenerator } from "../../lib";

const meta: Meta<typeof FormGenerator> = {
  title: "Advanced/Dynamic Schema Updates",
  component: FormGenerator,
};

export default meta;

type Story = StoryObj<typeof FormGenerator>;

export const UpdateLabelBasedOnValue: Story = {
  args: {
    schema: [
      {
        type: "select",
        name: "customerType",
        label: "Customer Type",
        options: [
          { label: "Individual", value: "INDIVIDUAL" },
          { label: "Company", value: "COMPANY" },
        ],
      },
      {
        type: "text",
        name: "customerName",
        label: "Customer Name",
        dependsOn: ["customerType"],
      },
    ],
    updateFieldSchema: {
      customerName: ({ values }) => {
        if (values.customerType === "COMPANY") {
          return {
            label: "Company Name",
            meta: {
              placeholder: "Enter company name",
            },
          };
        }

        return {
          label: "Full Name",
          meta: {
            placeholder: "Enter full name",
          },
        };
      },
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};

export const HideFieldBasedOnValue: Story = {
  args: {
    schema: [
      {
        type: "checkbox",
        name: "hasDiscount",
        label: "Has Discount?",
      },
      {
        type: "number",
        name: "discountRate",
        label: "Discount Rate",
        dependsOn: ["hasDiscount"],
      },
    ],
    updateFieldSchema: {
      discountRate: ({ values }) => {
        return {
          visible: values.hasDiscount === true,
        };
      },
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};
