import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const UpdateCollectionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collectionName: Schema.String.pipe(T.PathParam()),
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
  synonym_sets: Schema.optional(Schema.Array(Schema.String)),
  metadata: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "PATCH", path: "/collections/{collectionName}" }));
export type UpdateCollectionInput = typeof UpdateCollectionInput.Type;

// Output Schema
export const UpdateCollectionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
    synonym_sets: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Unknown),
  },
);
export type UpdateCollectionOutput = typeof UpdateCollectionOutput.Type;

// The operation
/**
 * Update a collection
 *
 * Update a collection's schema to modify the fields and their types.
 *
 * @param collectionName - The name of the collection to update
 */
export const updateCollection = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateCollectionInput,
  outputSchema: UpdateCollectionOutput,
  errors: [BadRequest, NotFound] as const,
}));
