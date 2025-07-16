import {
  VideoObject as VideoObjectSchema,
  Clip as ClipSchema,
  BroadcastEvent as BroadcastEventSchema,
} from "schema-dts";
import { StructuredData } from "./structured-data";

type WithoutType<T, Type extends string> = Omit<T, "@type"> & {
  "@type"?: Type;
};

export function VideoObject(
  props: WithoutType<VideoObjectSchema, "VideoObject">,
) {
  const schema: VideoObjectSchema = {
    "@type": "VideoObject",
    ...props,
  };

  return <StructuredData thing={schema} />;
}

export function Clip(props: WithoutType<ClipSchema, "Clip">) {
  const schema: ClipSchema = {
    "@type": "Clip",
    ...props,
  };

  return <StructuredData thing={schema} />;
}

export function BroadcastEvent(
  props: WithoutType<BroadcastEventSchema, "BroadcastEvent">,
) {
  const schema: BroadcastEventSchema = {
    "@type": "BroadcastEvent",
    ...props,
  };

  return <StructuredData thing={schema} />;
}
