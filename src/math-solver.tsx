import { MathSolver as SchemaType } from "schema-dts";
import { StructuredData } from "./structured-data";

type Props = Omit<SchemaType, "@type">;

export function MathSolver(props: Props) {
  const schema: SchemaType = {
    "@type": "MathSolver",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
