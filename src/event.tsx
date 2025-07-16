import { Event as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function Event(props: Props) {
  const schema: SchemaType = {
    "@type": "Event",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
