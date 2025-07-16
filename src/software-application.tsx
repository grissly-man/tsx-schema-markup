import { SoftwareApplication as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function SoftwareApplication(props: Props) {
  const schema: SchemaType = {
    "@type": "SoftwareApplication",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
