import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ListPullzonesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/cdns/pull-zones" }));
export type ListPullzonesInput = typeof ListPullzonesInput.Type;

// Output Schema
export const ListPullzonesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pull_zones: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        label: Schema.optional(Schema.String),
        origin_scheme: Schema.optional(Schema.Literals(["http", "https"])),
        origin_domain: Schema.optional(Schema.String),
        cdn_url: Schema.optional(Schema.String),
        vanity_domain: Schema.optional(Schema.String),
        cache_size: Schema.optional(Schema.Number),
        requests: Schema.optional(Schema.Number),
        in_bytes: Schema.optional(Schema.Number),
        out_bytes: Schema.optional(Schema.Number),
        packets_per_sec: Schema.optional(Schema.Number),
        last_purge: Schema.optional(Schema.String),
        cors: Schema.optional(Schema.Boolean),
        gzip: Schema.optional(Schema.Boolean),
        block_ai: Schema.optional(Schema.Boolean),
        block_bad_bots: Schema.optional(Schema.Boolean),
        regions: Schema.optional(Schema.Array(Schema.Unknown)),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      total: Schema.optional(Schema.Number),
      links: Schema.optional(
        Schema.Struct({
          next: Schema.optional(Schema.String),
          prev: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
});
export type ListPullzonesOutput = typeof ListPullzonesOutput.Type;

// The operation
/**
 * List CDN Pull Zones
 */
export const listPullzones = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListPullzonesInput,
  outputSchema: ListPullzonesOutput,
  errors: [BadRequest, NotFound] as const,
}));
