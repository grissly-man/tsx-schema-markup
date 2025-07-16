import { Article as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function Article(props: Props) {
  const schema: SchemaType = {
    "@type": "Article",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
