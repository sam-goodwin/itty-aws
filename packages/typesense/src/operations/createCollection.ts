import * as Schema from "effect/Schema";
import {
  FieldSchema,
  VoiceQueryModelCollectionConfigSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Conflict } from "../errors.ts";

// Input Schema
export const CreateCollectionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}).pipe(T.Http({ method: "POST", path: "/collections" }));
export type CreateCollectionInput = typeof CreateCollectionInput.Type;

// Output Schema
export const CreateCollectionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type CreateCollectionOutput = typeof CreateCollectionOutput.Type;

// The operation
/**
 * Create a new collection
 *
 * When a collection is created, we give it a name and describe the fields that will be indexed from the documents added to the collection.
 */
export const createCollection = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateCollectionInput,
  outputSchema: CreateCollectionOutput,
  errors: [BadRequest, Conflict] as const,
}));
