import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const RetrieveCurationSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    curationSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/curation_sets/{curationSetName}" }));
export type RetrieveCurationSetInput = typeof RetrieveCurationSetInput.Type;

// Output Schema
export const RetrieveCurationSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RetrieveCurationSetOutput = typeof RetrieveCurationSetOutput.Type;

// The operation
/**
 * Retrieve a curation set
 *
 * Retrieve a specific curation set by its name
 *
 * @param curationSetName - The name of the curation set to retrieve
 */
export const retrieveCurationSet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RetrieveCurationSetInput,
  outputSchema: RetrieveCurationSetOutput,
  errors: [NotFound] as const,
}));
