import * as Schema from "effect/Schema";
import {
  FacetCountsSchema,
  SearchGroupedHitSchema,
  SearchRequestParamsSchema,
  SearchResultConversationSchema,
  SearchResultHitSchema,
} from "./_schemas.ts";
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
      Schema.Array(Schema.suspend(() => FacetCountsSchema)),
    ),
    found: Schema.optional(Schema.Number),
    found_docs: Schema.optional(Schema.Number),
    search_time_ms: Schema.optional(Schema.Number),
    out_of: Schema.optional(Schema.Number),
    search_cutoff: Schema.optional(Schema.Boolean),
    page: Schema.optional(Schema.Number),
    grouped_hits: Schema.optional(
      Schema.Array(Schema.suspend(() => SearchGroupedHitSchema)),
    ),
    hits: Schema.optional(
      Schema.Array(Schema.suspend(() => SearchResultHitSchema)),
    ),
    request_params: Schema.optional(
      Schema.suspend(() => SearchRequestParamsSchema),
    ),
    conversation: Schema.optional(
      Schema.suspend(() => SearchResultConversationSchema),
    ),
    union_request_params: Schema.optional(
      Schema.Array(Schema.suspend(() => SearchRequestParamsSchema)),
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
