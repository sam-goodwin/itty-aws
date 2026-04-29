import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const SearchCollectionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collectionName: Schema.String.pipe(T.PathParam()),
  searchParameters: Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/collections/{collectionName}/documents/search",
  }),
);
export type SearchCollectionInput = typeof SearchCollectionInput.Type;

// Output Schema
export const SearchCollectionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    facet_counts: Schema.optional(
      Schema.Array(
        Schema.Struct({
          counts: Schema.optional(
            Schema.Array(
              Schema.Struct({
                count: Schema.optional(Schema.Number),
                highlighted: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
                parent: Schema.optional(Schema.Unknown),
              }),
            ),
          ),
          field_name: Schema.optional(Schema.String),
          sampled: Schema.optional(Schema.Boolean),
          stats: Schema.optional(
            Schema.Struct({
              max: Schema.optional(Schema.Number),
              min: Schema.optional(Schema.Number),
              sum: Schema.optional(Schema.Number),
              total_values: Schema.optional(Schema.Number),
              avg: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    ),
    found: Schema.optional(Schema.Number),
    found_docs: Schema.optional(Schema.Number),
    search_time_ms: Schema.optional(Schema.Number),
    out_of: Schema.optional(Schema.Number),
    search_cutoff: Schema.optional(Schema.Boolean),
    page: Schema.optional(Schema.Number),
    grouped_hits: Schema.optional(
      Schema.Array(
        Schema.Struct({
          found: Schema.optional(Schema.Number),
          group_key: Schema.Array(Schema.Unknown),
          hits: Schema.Array(
            Schema.Struct({
              highlights: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    field: Schema.optional(Schema.String),
                    snippet: Schema.optional(Schema.String),
                    snippets: Schema.optional(Schema.Array(Schema.String)),
                    value: Schema.optional(Schema.String),
                    values: Schema.optional(Schema.Array(Schema.String)),
                    indices: Schema.optional(Schema.Array(Schema.Number)),
                    matched_tokens: Schema.optional(
                      Schema.Array(Schema.Unknown),
                    ),
                  }),
                ),
              ),
              highlight: Schema.optional(
                Schema.Record(Schema.String, Schema.Unknown),
              ),
              document: Schema.optional(
                Schema.Record(Schema.String, Schema.Unknown),
              ),
              text_match: Schema.optional(Schema.Number),
              text_match_info: Schema.optional(
                Schema.Struct({
                  best_field_score: Schema.optional(Schema.String),
                  best_field_weight: Schema.optional(Schema.Number),
                  fields_matched: Schema.optional(Schema.Number),
                  num_tokens_dropped: Schema.optional(Schema.Number),
                  score: Schema.optional(Schema.String),
                  tokens_matched: Schema.optional(Schema.Number),
                  typo_prefix_score: Schema.optional(Schema.Number),
                }),
              ),
              geo_distance_meters: Schema.optional(
                Schema.Record(Schema.String, Schema.Number),
              ),
              vector_distance: Schema.optional(Schema.Number),
              hybrid_search_info: Schema.optional(
                Schema.Struct({
                  rank_fusion_score: Schema.optional(Schema.Number),
                }),
              ),
              search_index: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    ),
    hits: Schema.optional(
      Schema.Array(
        Schema.Struct({
          highlights: Schema.optional(
            Schema.Array(
              Schema.Struct({
                field: Schema.optional(Schema.String),
                snippet: Schema.optional(Schema.String),
                snippets: Schema.optional(Schema.Array(Schema.String)),
                value: Schema.optional(Schema.String),
                values: Schema.optional(Schema.Array(Schema.String)),
                indices: Schema.optional(Schema.Array(Schema.Number)),
                matched_tokens: Schema.optional(Schema.Array(Schema.Unknown)),
              }),
            ),
          ),
          highlight: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          document: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          text_match: Schema.optional(Schema.Number),
          text_match_info: Schema.optional(
            Schema.Struct({
              best_field_score: Schema.optional(Schema.String),
              best_field_weight: Schema.optional(Schema.Number),
              fields_matched: Schema.optional(Schema.Number),
              num_tokens_dropped: Schema.optional(Schema.Number),
              score: Schema.optional(Schema.String),
              tokens_matched: Schema.optional(Schema.Number),
              typo_prefix_score: Schema.optional(Schema.Number),
            }),
          ),
          geo_distance_meters: Schema.optional(
            Schema.Record(Schema.String, Schema.Number),
          ),
          vector_distance: Schema.optional(Schema.Number),
          hybrid_search_info: Schema.optional(
            Schema.Struct({
              rank_fusion_score: Schema.optional(Schema.Number),
            }),
          ),
          search_index: Schema.optional(Schema.Number),
        }),
      ),
    ),
    request_params: Schema.optional(
      Schema.Struct({
        collection_name: Schema.String,
        first_q: Schema.optional(Schema.String),
        q: Schema.String,
        per_page: Schema.Number,
        voice_query: Schema.optional(
          Schema.Struct({
            transcribed_query: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    conversation: Schema.optional(
      Schema.Struct({
        answer: Schema.String,
        conversation_history: Schema.Array(Schema.Unknown),
        conversation_id: Schema.String,
        query: Schema.String,
      }),
    ),
    union_request_params: Schema.optional(
      Schema.Array(
        Schema.Struct({
          collection_name: Schema.String,
          first_q: Schema.optional(Schema.String),
          q: Schema.String,
          per_page: Schema.Number,
          voice_query: Schema.optional(
            Schema.Struct({
              transcribed_query: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  },
);
export type SearchCollectionOutput = typeof SearchCollectionOutput.Type;

// The operation
/**
 * Search for documents in a collection
 *
 * Search for documents in a collection that match the search criteria.
 *
 * @param collectionName - The name of the collection to search for the document under
 */
export const searchCollection = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SearchCollectionInput,
  outputSchema: SearchCollectionOutput,
  errors: [BadRequest, NotFound] as const,
}));
