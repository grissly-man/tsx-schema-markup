import { FAQPage as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function FAQPage(props: Props) {
  const schema: SchemaType = {
    "@type": "FAQPage",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
