import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const RetrieveCurationSetsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/curation_sets" }),
  );
export type RetrieveCurationSetsInput = typeof RetrieveCurationSetsInput.Type;

// Output Schema
export const RetrieveCurationSetsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      items: Schema.Array(
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
          id: Schema.optional(Schema.String),
        }),
      ),
      description: Schema.optional(Schema.String),
      name: Schema.String,
    }),
  );
export type RetrieveCurationSetsOutput = typeof RetrieveCurationSetsOutput.Type;

// The operation
/**
 * List all curation sets
 *
 * Retrieve all curation sets
 */
export const retrieveCurationSets = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RetrieveCurationSetsInput,
    outputSchema: RetrieveCurationSetsOutput,
  }),
);
