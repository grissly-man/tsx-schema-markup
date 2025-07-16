import { Product as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function Product(props: Props) {
  const schema: SchemaType = {
    "@type": "Product",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
