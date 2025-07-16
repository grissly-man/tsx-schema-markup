import { BreadcrumbList as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function BreadcrumbList(props: Props) {
  const schema: SchemaType = {
    "@type": "BreadcrumbList",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
