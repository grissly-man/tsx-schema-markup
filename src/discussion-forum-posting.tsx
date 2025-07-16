import { DiscussionForumPosting as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function DiscussionForumPosting(props: Props) {
  const schema: SchemaType = {
    "@type": "DiscussionForumPosting",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
