import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const DeleteCollectionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collectionName: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/collections/{collectionName}" }));
export type DeleteCollectionInput = typeof DeleteCollectionInput.Type;

// Output Schema
export const DeleteCollectionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String,
    fields: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        type: Schema.String,
        optional: Schema.optional(Schema.Boolean),
        facet: Schema.optional(Schema.Boolean),
        index: Schema.optional(Schema.Boolean),
        locale: Schema.optional(Schema.String),
        sort: Schema.optional(Schema.Boolean),
        infix: Schema.optional(Schema.Boolean),
        reference: Schema.optional(Schema.String),
        async_reference: Schema.optional(Schema.Boolean),
        num_dim: Schema.optional(Schema.Number),
        drop: Schema.optional(Schema.Boolean),
        store: Schema.optional(Schema.Boolean),
        vec_dist: Schema.optional(Schema.String),
        range_index: Schema.optional(Schema.Boolean),
        stem: Schema.optional(Schema.Boolean),
        stem_dictionary: Schema.optional(Schema.String),
        token_separators: Schema.optional(Schema.Array(Schema.String)),
        symbols_to_index: Schema.optional(Schema.Array(Schema.String)),
        embed: Schema.optional(
          Schema.Struct({
            from: Schema.Array(Schema.String),
            model_config: Schema.Struct({
              model_name: Schema.String,
              api_key: Schema.optional(SensitiveString),
              url: Schema.optional(Schema.String),
              access_token: Schema.optional(SensitiveString),
              refresh_token: Schema.optional(SensitiveString),
              client_id: Schema.optional(Schema.String),
              client_secret: Schema.optional(SensitiveString),
              project_id: Schema.optional(Schema.String),
              indexing_prefix: Schema.optional(Schema.String),
              query_prefix: Schema.optional(Schema.String),
            }),
          }),
        ),
      }),
    ),
    default_sorting_field: Schema.optional(Schema.String),
    token_separators: Schema.optional(Schema.Array(Schema.String)),
    synonym_sets: Schema.optional(Schema.Array(Schema.String)),
    enable_nested_fields: Schema.optional(Schema.Boolean),
    symbols_to_index: Schema.optional(Schema.Array(Schema.String)),
    voice_query_model: Schema.optional(
      Schema.Struct({
        model_name: Schema.optional(Schema.String),
      }),
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
