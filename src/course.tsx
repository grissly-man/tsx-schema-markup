import { Course as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function Course(props: Props) {
  const schema: SchemaType = {
    "@type": "Course",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
