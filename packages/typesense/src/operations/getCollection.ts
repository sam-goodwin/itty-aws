import * as Schema from "effect/Schema";
import {
  FieldSchema,
  VoiceQueryModelCollectionConfigSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetCollectionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collectionName: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/collections/{collectionName}" }));
export type GetCollectionInput = typeof GetCollectionInput.Type;

// Output Schema
export const GetCollectionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  fields: Schema.Array(Schema.suspend(() => FieldSchema)),
  default_sorting_field: Schema.optional(Schema.String),
  token_separators: Schema.optional(Schema.Array(Schema.String)),
  synonym_sets: Schema.optional(Schema.Array(Schema.String)),
  enable_nested_fields: Schema.optional(Schema.Boolean),
  symbols_to_index: Schema.optional(Schema.Array(Schema.String)),
  voice_query_model: Schema.optional(
    Schema.suspend(() => VoiceQueryModelCollectionConfigSchema),
  ),
  metadata: Schema.optional(Schema.Unknown),
  num_documents: Schema.Number,
  created_at: Schema.Number,
});
export type GetCollectionOutput = typeof GetCollectionOutput.Type;

// The operation
/**
 * Retrieve a single collection
 *
 * Retrieve the details of a collection, given its name.
 *
 * @param collectionName - The name of the collection to retrieve
 */
export const getCollection = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetCollectionInput,
  outputSchema: GetCollectionOutput,
  errors: [NotFound] as const,
}));
