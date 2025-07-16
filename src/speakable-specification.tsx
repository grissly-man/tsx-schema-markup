import { SpeakableSpecification as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function SpeakableSpecification(props: Props) {
  const schema: SchemaType = {
    "@type": "SpeakableSpecification",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
