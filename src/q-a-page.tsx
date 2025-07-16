import { QAPage as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function QAPage(props: Props) {
  const schema: SchemaType = {
    "@type": "QAPage",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
