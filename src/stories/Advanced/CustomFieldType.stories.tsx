import type { Meta, StoryObj } from "@storybook/react";
import {
  Controller,
  FormGenerator,
  type BaseFieldSchema,
  type FormFieldSchema,
  type FormGeneratorProps,
} from "../../lib";

interface PositiveFieldSchema extends Omit<BaseFieldSchema, "type"> {
  type: "positive";
}

type CustomFormFieldSchema = FormFieldSchema | PositiveFieldSchema;

interface CustomFormGeneratorProps extends Omit<FormGeneratorProps, "schema"> {
  schema: CustomFormFieldSchema[];
}

const CustomFormGenerator = (props: CustomFormGeneratorProps) => {
  return (
    <FormGenerator
      {...props}
      schema={props.schema as FormFieldSchema[]}
      uiConfig={{
        ...props.uiConfig,
        renderersByName: {
          ...props.uiConfig?.renderersByName,
        },
        renderersByType: {
          positive: ({ control, fieldSchema }) => {
            return (
              <div>
                <label>{fieldSchema.label}</label>

                <Controller
                  name={fieldSchema.name}
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="number"
                      min={0}
                      placeholder="Enter a positive number"
                    />
                  )}
                />
              </div>
            );
          },
          ...props.uiConfig?.renderersByType,
        },
      }}
    />
  );
};

const meta: Meta<typeof CustomFormGenerator> = {
  title: "Advanced/Custom Field Type",
  component: CustomFormGenerator,
};

export default meta;

type Story = StoryObj<typeof CustomFormGenerator>;

export const PositiveNumberField: Story = {
  args: {
    schema: [
      {
        type: "positive",
        name: "amount",
        label: "Amount",
        initialValue: 21,
      },
    ],
    validate: {
      amount: ({ value }) => {
        if (value === undefined || value === "") {
          return "Amount is required";
        }

        if (Number(value) < 0) {
          return "Amount must be positive";
        }

        return undefined;
      },
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};
