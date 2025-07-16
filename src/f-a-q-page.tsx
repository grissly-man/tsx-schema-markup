import {
  FAQPage as FAQPageSchema,
  Question as QuestionSchema,
  Answer as AnswerSchema,
} from "schema-dts";
import { StructuredData } from "./structured-data";

type WithoutType<T, Type extends string> = Omit<T, "@type"> & {
  "@type"?: Type;
};

export function FAQPage(props: WithoutType<FAQPageSchema, "FAQPage">) {
  const schema: FAQPageSchema = {
    "@type": "FAQPage",
    ...props,
  };

  return <StructuredData thing={schema} />;
}

export function Question(props: WithoutType<QuestionSchema, "Question">) {
  const schema: QuestionSchema = {
    "@type": "Question",
    ...props,
  };

  return <StructuredData thing={schema} />;
}

export function Answer(props: WithoutType<AnswerSchema, "Answer">) {
  const schema: AnswerSchema = {
    "@type": "Answer",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
