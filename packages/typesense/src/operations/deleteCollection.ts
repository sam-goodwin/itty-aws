import * as Schema from "effect/Schema";
import {
  FieldSchema,
  VoiceQueryModelCollectionConfigSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteCollectionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collectionName: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/collections/{collectionName}" }));
export type DeleteCollectionInput = typeof DeleteCollectionInput.Type;

// Output Schema
export const DeleteCollectionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
export type DeleteCollectionOutput = typeof DeleteCollectionOutput.Type;

// The operation
/**
 * Delete a collection
 *
 * Permanently drops a collection. This action cannot be undone. For large collections, this might have an impact on read latencies.
 *
 * @param collectionName - The name of the collection to delete
 */
export const deleteCollection = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteCollectionInput,
  outputSchema: DeleteCollectionOutput,
  errors: [NotFound] as const,
}));
