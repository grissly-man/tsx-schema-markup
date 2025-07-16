import { CreativeWork as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function CreativeWork(props: Props) {
  const schema: SchemaType = {
    "@type": "CreativeWork",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
