import type { Meta, StoryObj } from "@storybook/react";
import { FormGenerator } from "../../lib";

const meta: Meta<typeof FormGenerator> = {
  title: "Fields/Date",
  component: FormGenerator,
};

export default meta;

type Story = StoryObj<typeof FormGenerator>;

export const Basic: Story = {
  args: {
    schema: [
      {
        type: "date",
        name: "birthDate",
        label: "Birth Date",
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
        type: "date",
        name: "birthDate",
        label: "Birth Date",
        initialValue: "2026-01-01",
      },
    ],
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};