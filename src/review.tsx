import { Review as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function Review(props: Props) {
  const schema: SchemaType = {
    "@type": "Review",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
