import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface RetrieveCurationSetInput {
  curationSetName: string;
}
export const RetrieveCurationSetInput =
  /*@__PURE__*/ Schema.Struct({
    curationSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/curation_sets/{curationSetName}" }),
  ) as unknown as Schema.Codec<RetrieveCurationSetInput>;

// Output Schema
export interface RetrieveCurationSetOutput {
  items: {
    rule: {
      tags?: string[];
      query?: string;
      match?: "exact" | "contains";
      filter_by?: string;
    };
    includes?: { id: string; position: number }[];
    excludes?: { id: string }[];
    filter_by?: string;
    remove_matched_tokens?: boolean;
    metadata?: unknown;
    sort_by?: string;
    replace_query?: string;
    filter_curated_hits?: boolean;
    effective_from_ts?: number;
    effective_to_ts?: number;
    stop_processing?: boolean;
    id?: string;
  }[];
  description?: string;
  name: string;
}
export const RetrieveCurationSetOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<RetrieveCurationSetOutput>;

// The operation
/**
 * Retrieve a curation set
 *
 * Retrieve a specific curation set by its name
 *
 * @param curationSetName - The name of the curation set to retrieve
 */
export const retrieveCurationSet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RetrieveCurationSetInput,
  outputSchema: RetrieveCurationSetOutput,
  errors: [NotFound] as const,
}));
