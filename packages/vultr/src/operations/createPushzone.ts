import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreatePushzoneInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  label: Schema.String,
  vanity_domain: Schema.optional(Schema.String),
  ssl_cert: Schema.optional(Schema.String),
  ssl_cert_key: Schema.optional(Schema.String),
  cors: Schema.optional(Schema.Boolean),
  gzip: Schema.optional(Schema.Boolean),
  block_ai: Schema.optional(Schema.Boolean),
  block_bad_bots: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "POST", path: "/cdns/push-zones" }));
export type CreatePushzoneInput = typeof CreatePushzoneInput.Type;

// Output Schema
export const CreatePushzoneOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  push_zone: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
      label: Schema.optional(Schema.String),
      cdn_url: Schema.optional(Schema.String),
      vanity_domain: Schema.optional(Schema.String),
      cache_size: Schema.optional(Schema.Number),
      requests: Schema.optional(Schema.Number),
      in_bytes: Schema.optional(Schema.Number),
      out_bytes: Schema.optional(Schema.Number),
      packets_per_sec: Schema.optional(Schema.Number),
      cors: Schema.optional(Schema.Boolean),
      gzip: Schema.optional(Schema.Boolean),
      block_ai: Schema.optional(Schema.Boolean),
      block_bad_bots: Schema.optional(Schema.Boolean),
      regions: Schema.optional(Schema.Array(Schema.Unknown)),
    }),
  ),
});
export type CreatePushzoneOutput = typeof CreatePushzoneOutput.Type;

// The operation
/**
 * Create CDN Push Zones
 *
 * Create a new CDN Push Zone.
 */
export const createPushzone = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreatePushzoneInput,
  outputSchema: CreatePushzoneOutput,
  errors: [BadRequest, NotFound] as const,
}));
