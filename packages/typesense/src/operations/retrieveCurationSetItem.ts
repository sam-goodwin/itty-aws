import * as Schema from "effect/Schema";
import {
  CurationExcludeSchema,
  CurationIncludeSchema,
  CurationRuleSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const RetrieveCurationSetItemInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    curationSetName: Schema.String.pipe(T.PathParam()),
    itemId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/curation_sets/{curationSetName}/items/{itemId}",
    }),
  );
export type RetrieveCurationSetItemInput =
  typeof RetrieveCurationSetItemInput.Type;

// Output Schema
export const RetrieveCurationSetItemOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rule: Schema.suspend(() => CurationRuleSchema),
    includes: Schema.optional(
      Schema.Array(Schema.suspend(() => CurationIncludeSchema)),
    ),
    excludes: Schema.optional(
      Schema.Array(Schema.suspend(() => CurationExcludeSchema)),
    ),
    filter_by: Schema.optional(Schema.String),
    remove_matched_tokens: Schema.optional(Schema.Boolean),
    metadata: Schema.optional(Schema.Unknown),
    sort_by: Schema.optional(Schema.String),
    replace_query: Schema.optional(Schema.String),
    filter_curated_hits: Schema.optional(Schema.Boolean),
    effective_from_ts: Schema.optional(Schema.Number),
    effective_to_ts: Schema.optional(Schema.Number),
    stop_processing: Schema.optional(Schema.Boolean),
    id: Schema.String,
  });
export type RetrieveCurationSetItemOutput =
  typeof RetrieveCurationSetItemOutput.Type;

// The operation
/**
 * Retrieve a curation set item
 *
 * Retrieve a specific curation item by its id
 *
 * @param curationSetName - The name of the curation set
 * @param itemId - The id of the curation item to retrieve
 */
export const retrieveCurationSetItem = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RetrieveCurationSetItemInput,
    outputSchema: RetrieveCurationSetItemOutput,
    errors: [NotFound] as const,
  }),
);
