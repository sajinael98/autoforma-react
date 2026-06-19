import FieldRenderer from "../FieldRenderer";
import type { SchemaRendererProps } from "./types";

const SchemaRenderer = (props: SchemaRendererProps) => {
  const { schema } = props;

  return schema.map((field) => (
    <FieldRenderer key={field.name} fieldSchema={field} />
  ));
};

export default SchemaRenderer;
