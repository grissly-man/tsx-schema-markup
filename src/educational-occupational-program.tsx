import { EducationalOccupationalProgram as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function EducationalOccupationalProgram(props: Props) {
  const schema: SchemaType = {
    "@type": "EducationalOccupationalProgram",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
