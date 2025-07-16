import { Recipe as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function Recipe(props: Props) {
  const schema: SchemaType = {
    "@type": "Recipe",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
