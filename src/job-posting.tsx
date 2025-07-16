import { JobPosting as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function JobPosting(props: Props) {
  const schema: SchemaType = {
    "@type": "JobPosting",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
