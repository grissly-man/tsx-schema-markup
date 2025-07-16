import {
  Review as ReviewSchema,
  AggregateRating as AggregateRatingSchema,
} from "schema-dts";
import { StructuredData } from "./structured-data";

type WithoutType<T, Type extends string> = Omit<T, "@type"> & {
  "@type"?: Type;
};

export function Review(props: WithoutType<ReviewSchema, "Review">) {
  const schema: ReviewSchema = {
    "@type": "Review",
    ...props,
  };

  return <StructuredData thing={schema} />;
}

export function AggregateRating(
  props: WithoutType<AggregateRatingSchema, "AggregateRating">,
) {
  const schema: AggregateRatingSchema = {
    "@type": "AggregateRating",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
