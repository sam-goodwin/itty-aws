import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetPullzoneInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pullzoneId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/cdns/pull-zones/{pullzoneId}" }));
export type GetPullzoneInput = typeof GetPullzoneInput.Type;

// Output Schema
export const GetPullzoneOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pull_zone: Schema.optional(
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
});
export type GetPullzoneOutput = typeof GetPullzoneOutput.Type;

// The operation
/**
 * Get CDN Pull Zone
 *
 * Get information about a CDN Pull Zones
 *
 * @param pullzoneId - The [Pull Zone ID](#operation/list-pullzones).
 */
export const getPullzone = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetPullzoneInput,
  outputSchema: GetPullzoneOutput,
  errors: [BadRequest, NotFound] as const,
}));
