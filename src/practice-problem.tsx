import { Quiz as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function PracticeProblem(props: Props) {
  const schema: SchemaType = {
    "@type": "Quiz",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
