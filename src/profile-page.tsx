import { ProfilePage as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function ProfilePage(props: Props) {
  const schema: SchemaType = {
    "@type": "ProfilePage",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
