import { ImageObject as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function ImageObject(props: Props) {
  const schema: SchemaType = {
    "@type": "ImageObject",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
