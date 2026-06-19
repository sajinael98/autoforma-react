import type { Meta, StoryObj } from "@storybook/react";
import { Controller, FormGenerator } from "../../lib";

const meta: Meta<typeof FormGenerator> = {
  title: "Advanced/Custom Renderers",
  component: FormGenerator,
};

export default meta;

type Story = StoryObj<typeof FormGenerator>;

export const RendererByType: Story = {
  args: {
    schema: [
      {
        type: "text",
        name: "notes",
        label: "Notes",
      },
    ],
    uiConfig: {
      renderersByType: {
        text: ({ fieldSchema, control }) => {
          return (
            <div>
              <label>{fieldSchema.label}</label>

              <Controller
                name={fieldSchema.name}
                control={control}
                render={({ field }) => (
                  <textarea {...field} placeholder="Custom textarea renderer" />
                )}
              />
            </div>
          );
        },
      },
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};

export const RendererByName: Story = {
  args: {
    schema: [
      {
        type: "text",
        name: "description",
        label: "Description",
      },
      {
        type: "text",
        name: "title",
        label: "Title",
      },
    ],
    uiConfig: {
      renderersByName: {
        description: ({ fieldSchema, control }) => {
          return (
            <div>
              <label>{fieldSchema.label}</label>

              <Controller
                name={fieldSchema.name}
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Custom renderer only for description"
                  />
                )}
              />
            </div>
          );
        },
      },
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};
