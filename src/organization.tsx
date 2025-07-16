import { Organization as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function Organization(props: Props) {
  const schema: SchemaType = {
    "@type": "Organization",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
