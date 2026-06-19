import type { Meta, StoryObj } from "@storybook/react";
import { FormGenerator } from "../../../lib";

const meta: Meta<typeof FormGenerator> = {
  title: "Complex Types/Object",
  component: FormGenerator,
};

export default meta;

type Story = StoryObj<typeof FormGenerator>;

export const Basic: Story = {
  args: {
    schema: [
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
            type: "select",
            name: "country",
            label: "Country",
            options: [
              { label: "United States", value: "US" },
              { label: "Canada", value: "CA" },
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

export const WithInitialValues: Story = {
  args: {
    schema: [
      {
        type: "object",
        name: "address",
        label: "Address",
        initialValue: {
          street: "123 Main St",
          city: "Chicago",
          country: "US",
        },
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
            type: "select",
            name: "country",
            label: "Country",
            options: [
              { label: "United States", value: "US" },
              { label: "Canada", value: "CA" },
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
