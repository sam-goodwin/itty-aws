import { HttpClient, HttpClientResponse } from "@effect/platform";
import { Effect, Schema } from "effect";

// Base trait schema for common Smithy traits
const TraitValue = Schema.Union(
  Schema.String,
  Schema.Boolean,
  Schema.Number,
  Schema.Null,
  Schema.Record({ key: Schema.String, value: Schema.Unknown }),
  Schema.Struct({}),
);

const Traits = Schema.Record({ key: Schema.String, value: TraitValue });

// Member definition for structures and unions
const Member = Schema.Struct({
  target: Schema.String,
  traits: Schema.optional(Traits),
});

const Members = Schema.Record({ key: Schema.String, value: Member });

// Enhanced shape definitions with members support
const OperationShape = Schema.Struct({
  type: Schema.Literal("operation"),
  input: Schema.optional(Schema.Struct({ target: Schema.String })),
  output: Schema.optional(Schema.Struct({ target: Schema.String })),
  errors: Schema.optional(Schema.Array(Schema.Struct({ target: Schema.String }))),
  traits: Schema.optional(Traits),
});

const ServiceShape = Schema.Struct({
  type: Schema.Literal("service"),
  traits: Schema.optional(Traits),
});

const StructureShape = Schema.Struct({
  type: Schema.Literal("structure"),
  members: Schema.optional(Members),
  traits: Schema.optional(Traits),
});

const UnionShape = Schema.Struct({
  type: Schema.Literal("union"),
  members: Schema.optional(Members),
  traits: Schema.optional(Traits),
});

const EnumShape = Schema.Struct({
  type: Schema.Literal("enum"),
  members: Schema.optional(Members),
  traits: Schema.optional(Traits),
});

const ListShape = Schema.Struct({
  type: Schema.Literal("list"),
  member: Schema.optional(Schema.Struct({ target: Schema.String })),
  traits: Schema.optional(Traits),
});

const MapShape = Schema.Struct({
  type: Schema.Literal("map"),
  key: Schema.optional(Schema.Struct({ target: Schema.String })),
  value: Schema.optional(Schema.Struct({ target: Schema.String })),
  traits: Schema.optional(Traits),
});

// Simple shapes with traits support
const BooleanShape = Schema.Struct({ 
  type: Schema.Literal("boolean"),
  traits: Schema.optional(Traits),
});
const IntegerShape = Schema.Struct({ 
  type: Schema.Literal("integer"),
  traits: Schema.optional(Traits),
});
const DoubleShape = Schema.Struct({ 
  type: Schema.Literal("double"),
  traits: Schema.optional(Traits),
});
const FloatShape = Schema.Struct({ 
  type: Schema.Literal("float"),
  traits: Schema.optional(Traits),
});
const LongShape = Schema.Struct({ 
  type: Schema.Literal("long"),
  traits: Schema.optional(Traits),
});
const StringShape = Schema.Struct({ 
  type: Schema.Literal("string"),
  traits: Schema.optional(Traits),
});
const TimestampShape = Schema.Struct({ 
  type: Schema.Literal("timestamp"),
  traits: Schema.optional(Traits),
});
const ResourceShape = Schema.Struct({ 
  type: Schema.Literal("resource"),
  traits: Schema.optional(Traits),
});
const BlobShape = Schema.Struct({ 
  type: Schema.Literal("blob"),
  traits: Schema.optional(Traits),
});
const DocumentShape = Schema.Struct({ 
  type: Schema.Literal("document"),
  traits: Schema.optional(Traits),
});

const Shape = Schema.Union(
  OperationShape,
  ServiceShape,
  StructureShape,
  UnionShape,
  EnumShape,
  ListShape,
  MapShape,
  BooleanShape,
  IntegerShape,
  DoubleShape,
  FloatShape,
  LongShape,
  StringShape,
  TimestampShape,
  ResourceShape,
  BlobShape,
  DocumentShape,
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
