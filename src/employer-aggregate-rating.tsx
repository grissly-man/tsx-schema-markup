import { EmployerAggregateRating as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function EmployerAggregateRating(props: Props) {
  const schema: SchemaType = {
    "@type": "EmployerAggregateRating",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
