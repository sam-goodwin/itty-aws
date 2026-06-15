import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateDomainInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  region: Schema.optional(
    Schema.Literals(["us-east-1", "eu-west-1", "sa-east-1", "ap-northeast-1"]),
  ),
  custom_return_path: Schema.optional(Schema.String),
  open_tracking: Schema.optional(Schema.Boolean),
  click_tracking: Schema.optional(Schema.Boolean),
  tls: Schema.optional(Schema.Literals(["opportunistic", "enforced"])),
  capabilities: Schema.optional(
    Schema.Struct({
      sending: Schema.optional(Schema.Literals(["enabled", "disabled"])),
      receiving: Schema.optional(Schema.Literals(["enabled", "disabled"])),
    }),
  ),
  tracking_subdomain: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/domains" }));
export type CreateDomainInput = typeof CreateDomainInput.Type;

// Output Schema
export const CreateDomainOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
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
  region: Schema.optional(Schema.String),
  open_tracking: Schema.optional(Schema.Boolean),
  click_tracking: Schema.optional(Schema.Boolean),
  tracking_subdomain: Schema.optional(Schema.String),
});
export type CreateDomainOutput = typeof CreateDomainOutput.Type;

// The operation
/**
 * Create a new domain
 */
export const createDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateDomainInput,
  outputSchema: CreateDomainOutput,
  errors: [Forbidden, UnprocessableEntity] as const,
}));
