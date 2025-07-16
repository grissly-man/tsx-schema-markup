import { LodgingBusiness as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function LodgingBusiness(props: Props) {
  const schema: SchemaType = {
    "@type": "LodgingBusiness",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
