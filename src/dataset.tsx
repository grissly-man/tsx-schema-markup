import {
  Dataset as DatasetSchema,
  DataCatalog as DataCatalogSchema,
  DataDownload as DataDownloadSchema,
} from "schema-dts";
import { StructuredData } from "./structured-data";

type WithoutType<T, Type extends string> = Omit<T, "@type"> & {
  "@type"?: Type;
};

export function Dataset(props: WithoutType<DatasetSchema, "Dataset">) {
  const schema: DatasetSchema = {
    "@type": "Dataset",
    ...props,
  };

  return <StructuredData thing={schema} />;
}

export function DataCatalog(
  props: WithoutType<DataCatalogSchema, "DataCatalog">,
) {
  const schema: DataCatalogSchema = {
    "@type": "DataCatalog",
    ...props,
  };

  return <StructuredData thing={schema} />;
}

export function DataDownload(
  props: WithoutType<DataDownloadSchema, "DataDownload">,
) {
  const schema: DataDownloadSchema = {
    "@type": "DataDownload",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
