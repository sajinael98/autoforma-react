import type { Meta, StoryObj } from "@storybook/react";
import { FormGenerator } from "../../lib";

const meta: Meta<typeof FormGenerator> = {
  title: "Fields/Number",
  component: FormGenerator,
};

export default meta;

type Story = StoryObj<typeof FormGenerator>;

export const Basic: Story = {
  args: {
    schema: [
      {
        type: "number",
        name: "quantity",
        label: "Quantity",
      },
    ],
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};

export const WithInitialValue: Story = {
  args: {
    schema: [
      {
        type: "number",
        name: "quantity",
        label: "Quantity",
        initialValue: 10,
      },
    ],
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};