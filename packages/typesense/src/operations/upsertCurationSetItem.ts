import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface UpsertCurationSetItemInput {
  curationSetName: string;
  itemId: string;
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
}
export const UpsertCurationSetItemInput =
  /*@__PURE__*/ Schema.Struct({
    curationSetName: Schema.String.pipe(T.PathParam()),
    itemId: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/curation_sets/{curationSetName}/items/{itemId}",
    }),
  ) as unknown as Schema.Codec<UpsertCurationSetItemInput>;

// Output Schema
export interface UpsertCurationSetItemOutput {
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
  id: string;
}
export const UpsertCurationSetItemOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<UpsertCurationSetItemOutput>;

// The operation
/**
 * Create or update a curation set item
 *
 * Create or update a curation set item with the given id
 *
 * @param curationSetName - The name of the curation set
 * @param itemId - The id of the curation item to upsert
 */
export const upsertCurationSetItem = /*@__PURE__*/ API.make(() => ({
  inputSchema: UpsertCurationSetItemInput,
  outputSchema: UpsertCurationSetItemOutput,
  errors: [BadRequest] as const,
}));
