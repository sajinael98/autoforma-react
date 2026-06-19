import type { Meta, StoryObj } from "@storybook/react";
import { FormGenerator } from "../../lib";

const meta: Meta<typeof FormGenerator> = {
  title: "Fields/Time",
  component: FormGenerator,
};

export default meta;

type Story = StoryObj<typeof FormGenerator>;

export const Basic: Story = {
  args: {
    schema: [
      {
        type: "time",
        name: "startTime",
        label: "Start Time",
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
        type: "time",
        name: "startTime",
        label: "Start Time",
        initialValue: "09:00",
      },
    ],
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};