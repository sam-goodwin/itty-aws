import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetDomainInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domain_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/domains/{domain_id}" }));
export type GetDomainInput = typeof GetDomainInput.Type;

// Output Schema
export const GetDomainOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  status: Schema.optional(
    Schema.Literals([
      "pending",
      "verified",
      "failed",
      "not_started",
      "partially_verified",
      "partially_failed",
    ]),
  ),
  created_at: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
  open_tracking: Schema.optional(Schema.Boolean),
  click_tracking: Schema.optional(Schema.Boolean),
  tracking_subdomain: Schema.optional(Schema.String),
  capabilities: Schema.optional(
    Schema.Struct({
      sending: Schema.optional(Schema.Literals(["enabled", "disabled"])),
      receiving: Schema.optional(Schema.Literals(["enabled", "disabled"])),
    }),
  ),
  records: Schema.optional(
    Schema.Array(
      Schema.Struct({
        record: Schema.optional(
          Schema.Literals([
            "SPF",
            "DKIM",
            "Receiving",
            "Tracking",
            "TrackingCAA",
          ]),
        ),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["MX", "TXT", "CNAME", "CAA"])),
        ttl: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals([
            "pending",
            "verified",
            "failed",
            "temporary_failure",
            "not_started",
          ]),
        ),
        value: Schema.optional(Schema.String),
        priority: Schema.optional(Schema.Number),
      }),
    ),
  ),
});
export type GetDomainOutput = typeof GetDomainOutput.Type;

// The operation
/**
 * Retrieve a single domain
 *
 * @param domain_id - The ID of the domain.
 */
export const getDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDomainInput,
  outputSchema: GetDomainOutput,
  errors: [NotFound] as const,
}));
