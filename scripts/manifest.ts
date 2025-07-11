import { HttpClient, HttpClientResponse } from "@effect/platform";
import { Effect, Schema } from "effect";

const OperationShape = Schema.Struct({
  type: Schema.Literal("operation"),
  input: Schema.Struct({ target: Schema.String }),
  errors: Schema.optional(Schema.Array(Schema.Struct({ target: Schema.String }))),
});

const ServiceShape = Schema.Struct({
  type: Schema.Literal("service"),
  traits: Schema.Struct({
    "aws.api#service": Schema.Struct({ sdkId: Schema.String }),
  }),
});

const BooleanShape = Schema.Struct({ type: Schema.Literal("boolean") });
const IntegerShape = Schema.Struct({ type: Schema.Literal("integer") });
const DoubleShape = Schema.Struct({ type: Schema.Literal("double") });
const FloatShape = Schema.Struct({ type: Schema.Literal("float") });
const LongShape = Schema.Struct({ type: Schema.Literal("long") });
const StringShape = Schema.Struct({ type: Schema.Literal("string") });
const TimestampShape = Schema.Struct({ type: Schema.Literal("timestamp") });
const EnumShape = Schema.Struct({ type: Schema.Literal("enum") });
const ListShape = Schema.Struct({ type: Schema.Literal("list") });
const StructureShape = Schema.Struct({ type: Schema.Literal("structure") });
const ResourceShape = Schema.Struct({ type: Schema.Literal("resource") });
const BlobShape = Schema.Struct({ type: Schema.Literal("blob") });
const MapShape = Schema.Struct({ type: Schema.Literal("map") });
const DocumentShape = Schema.Struct({ type: Schema.Literal("document") });
const UnionShape = Schema.Struct({ type: Schema.Literal("union") });

const Shape = Schema.Union(
  OperationShape,
  ServiceShape,
  BooleanShape,
  IntegerShape,
  DoubleShape,
  FloatShape,
  LongShape,
  StringShape,
  TimestampShape,
  EnumShape,
  ListShape,
  StructureShape,
  ResourceShape,
  BlobShape,
  MapShape,
  DocumentShape,
  UnionShape,
);
export type Shape = Schema.Schema.Type<typeof Shape>;

export class Manifest extends Schema.Class<Manifest>("Manifest")({
  shapes: Schema.Record({ key: Schema.String, value: Shape }),
}) {}

export const fetchSdkManifest = (awsServiceName: string) =>
  Effect.gen(function*() {
    const client = yield* HttpClient.HttpClient;
    return yield* client.get(
      `https://raw.githubusercontent.com/aws/aws-sdk-js-v3/main/codegen/sdk-codegen/aws-models/${awsServiceName}.json`,
    ).pipe(
      Effect.flatMap(HttpClientResponse.schemaBodyJson(Manifest)),
      Effect.scoped,
    );
  });
