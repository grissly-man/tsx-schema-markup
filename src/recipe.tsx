import {
  Recipe as RecipeSchema,
  HowTo as HowToSchema,
  ItemList as ItemListSchema,
} from "schema-dts";
import { StructuredData } from "./structured-data";

type WithoutType<T, Type extends string> = Omit<T, "@type"> & {
  "@type"?: Type;
};

export function Recipe(props: WithoutType<RecipeSchema, "Recipe">) {
  const schema: RecipeSchema = {
    "@type": "Recipe",
    ...props,
  };

  return <StructuredData thing={schema} />;
}

export function HowTo(props: WithoutType<HowToSchema, "HowTo">) {
  const schema: HowToSchema = {
    "@type": "HowTo",
    ...props,
  };

  return <StructuredData thing={schema} />;
}

export function ItemList(props: WithoutType<ItemListSchema, "ItemList">) {
  const schema: ItemListSchema = {
    "@type": "ItemList",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
