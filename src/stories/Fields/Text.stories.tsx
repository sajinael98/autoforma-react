import type { Meta, StoryObj } from "@storybook/react";
import { FormGenerator } from "../../lib";

const meta: Meta<typeof FormGenerator> = {
  title: "Fields/Text",
  component: FormGenerator,
  parameters: {
    docs: {
      description: {
        component:
          "The text field is used to capture short textual input from the user.",
      },
    },
  },
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
    ],
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  },
};

export const WithInitialValue: Story = {
  args: {
    schema: [
      {
        type: "text",
        name: "firstName",
        label: "First Name",
        initialValue: "John",
      },
    ],
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  },
};

export const Hidden: Story = {
  args: {
    schema: [
      {
        type: "text",
        name: "secret",
        label: "Secret",
        visible: false,
      },
    ],
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  },
};
