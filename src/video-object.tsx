import { VideoObject as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function VideoObject(props: Props) {
  const schema: SchemaType = {
    "@type": "VideoObject",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
