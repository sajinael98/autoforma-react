import type { Meta, StoryObj } from "@storybook/react";
import { FormGenerator } from "../../lib";

const meta: Meta<typeof FormGenerator> = {
  title: "Fields/DateTime",
  component: FormGenerator,
};

export default meta;

type Story = StoryObj<typeof FormGenerator>;

export const Basic: Story = {
  args: {
    schema: [
      {
        type: "datetime",
        name: "appointment",
        label: "Appointment",
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
        type: "datetime",
        name: "appointment",
        label: "Appointment",
        initialValue: "2026-01-01T12:00",
      },
    ],
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};