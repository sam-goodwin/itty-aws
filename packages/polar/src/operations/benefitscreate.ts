import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const BenefitscreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
  Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    type: Schema.Literal("custom"),
    description: Schema.String,
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    properties: Schema.Struct({
      note: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  }),
  Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    type: Schema.Literal("discord"),
    description: Schema.String,
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    properties: Schema.Struct({
      guild_token: Schema.String,
      role_id: Schema.String,
      kick_member: Schema.Boolean,
    }),
  }),
  Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    type: Schema.Literal("github_repository"),
    description: Schema.String,
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    properties: Schema.Struct({
      repository_owner: Schema.String,
      repository_name: Schema.String,
      permission: Schema.Literals([
        "pull",
        "triage",
        "push",
        "maintain",
        "admin",
      ]),
    }),
  }),
  Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    type: Schema.Literal("downloadables"),
    description: Schema.String,
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    properties: Schema.Struct({
      archived: Schema.optional(Schema.Record(Schema.String, Schema.Boolean)),
      files: Schema.Array(Schema.String),
    }),
  }),
  Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    type: Schema.Literal("license_keys"),
    description: Schema.String,
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    properties: Schema.Struct({
      prefix: Schema.optional(Schema.NullOr(Schema.String)),
      expires: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            ttl: Schema.Number,
            timeframe: Schema.Literals(["year", "month", "day"]),
          }),
        ),
      ),
      activations: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            limit: Schema.Number,
            enable_customer_admin: Schema.Boolean,
          }),
        ),
      ),
      limit_usage: Schema.optional(Schema.NullOr(Schema.Number)),
    }),
  }),
  Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    type: Schema.Literal("meter_credit"),
    description: Schema.String,
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    properties: Schema.Struct({
      units: Schema.Number,
      rollover: Schema.Boolean,
      meter_id: Schema.String,
    }),
  }),
  Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    type: Schema.Literal("feature_flag"),
    description: Schema.String,
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    properties: Schema.Struct({}),
  }),
]).pipe(T.Http({ method: "POST", path: "/v1/benefits/" }));
export type BenefitscreateInput = typeof BenefitscreateInput.Type;

// Output Schema
export const BenefitscreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  created_at: Schema.String,
  modified_at: Schema.NullOr(Schema.String),
  type: Schema.Literals([
    "custom",
    "discord",
    "github_repository",
    "downloadables",
    "license_keys",
    "meter_credit",
    "feature_flag",
  ]),
  description: Schema.String,
  selectable: Schema.Boolean,
  deletable: Schema.Boolean,
  is_deleted: Schema.Boolean,
  organization_id: Schema.String,
  metadata: Schema.Record(Schema.String, Schema.Unknown),
  properties: Schema.Record(Schema.String, Schema.Unknown),
});
export type BenefitscreateOutput = typeof BenefitscreateOutput.Type;

// The operation
/**
 * Create Benefit
 *
 * Create a benefit.
 * **Scopes**: `benefits:write`
 */
export const benefitscreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BenefitscreateInput,
  outputSchema: BenefitscreateOutput,
  errors: [UnprocessableEntity] as const,
}));
