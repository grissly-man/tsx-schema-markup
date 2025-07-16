import {
  Article as ArticleSchema,
  NewsArticle as NewsArticleSchema,
  BlogPosting as BlogPostingSchema,
} from "schema-dts";
import { StructuredData } from "./structured-data";

type WithoutType<T, Type extends string> = Omit<T, "@type"> & {
  "@type"?: Type;
};

export function Article(props: WithoutType<ArticleSchema, "Article">) {
  const schema: ArticleSchema = {
    "@type": "Article",
    ...props,
  };

  return <StructuredData thing={schema} />;
}

export function NewsArticle(
  props: WithoutType<NewsArticleSchema, "NewsArticle">,
) {
  const schema: NewsArticleSchema = {
    "@type": "NewsArticle",
    ...props,
  };

  return <StructuredData thing={schema} />;
}

export function BlogPosting(
  props: WithoutType<BlogPostingSchema, "BlogPosting">,
) {
  const schema: BlogPostingSchema = {
    "@type": "BlogPosting",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
