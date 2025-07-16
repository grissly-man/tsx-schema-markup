import { ItemList as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function ItemList(props: Props) {
  const schema: SchemaType = {
    "@type": "ItemList",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
