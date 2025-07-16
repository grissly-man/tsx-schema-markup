import { Dataset as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function Dataset(props: Props) {
  const schema: SchemaType = {
    "@type": "Dataset",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
