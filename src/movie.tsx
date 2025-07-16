import { Movie as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function Movie(props: Props) {
  const schema: SchemaType = {
    "@type": "Movie",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
