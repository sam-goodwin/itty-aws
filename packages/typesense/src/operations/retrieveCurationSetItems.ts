import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const RetrieveCurationSetItemsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    curationSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/curation_sets/{curationSetName}/items" }),
  );
export type RetrieveCurationSetItemsInput =
  typeof RetrieveCurationSetItemsInput.Type;

// Output Schema
export const RetrieveCurationSetItemsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      rule: Schema.Struct({
        tags: Schema.optional(Schema.Array(Schema.String)),
        query: Schema.optional(Schema.String),
        match: Schema.optional(Schema.Literals(["exact", "contains"])),
        filter_by: Schema.optional(Schema.String),
      }),
      includes: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            position: Schema.Number,
          }),
        ),
      ),
      excludes: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
          }),
        ),
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
    }),
  );
export type RetrieveCurationSetItemsOutput =
  typeof RetrieveCurationSetItemsOutput.Type;

// The operation
/**
 * List items in a curation set
 *
 * Retrieve all curation items in a set
 *
 * @param curationSetName - The name of the curation set to retrieve items for
 */
export const retrieveCurationSetItems = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RetrieveCurationSetItemsInput,
    outputSchema: RetrieveCurationSetItemsOutput,
    errors: [NotFound] as const,
  }),
);
