import { LocalBusiness as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function LocalBusiness(props: Props) {
  const schema: SchemaType = {
    "@type": "LocalBusiness",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
