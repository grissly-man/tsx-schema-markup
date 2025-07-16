import { Thing, WithContext } from "schema-dts";

export type StructuredDataProps = {
  thing: Thing;
};

export function StructuredData({ thing }: StructuredDataProps) {
  let data: WithContext<Thing> | Thing = thing;

  if (thing && typeof thing === "object") {
    data = {
      "@context": "https://schema.org",
      ...thing,
    } as WithContext<Thing>;
  }

  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}
