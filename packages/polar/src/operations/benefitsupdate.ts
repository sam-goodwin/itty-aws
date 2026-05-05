import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const BenefitsupdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
  Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    description: Schema.optional(Schema.Unknown),
    type: Schema.Literal("custom"),
    properties: Schema.optional(Schema.Unknown),
  }),
  Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    description: Schema.optional(Schema.Unknown),
    type: Schema.Literal("discord"),
    properties: Schema.optional(Schema.Unknown),
  }),
  Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    description: Schema.optional(Schema.Unknown),
    type: Schema.Literal("github_repository"),
    properties: Schema.optional(Schema.Unknown),
  }),
  Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    description: Schema.optional(Schema.Unknown),
    type: Schema.Literal("downloadables"),
    properties: Schema.optional(Schema.Unknown),
  }),
  Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    description: Schema.optional(Schema.Unknown),
    type: Schema.Literal("license_keys"),
    properties: Schema.optional(Schema.Unknown),
  }),
  Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    description: Schema.optional(Schema.Unknown),
    type: Schema.Literal("meter_credit"),
    properties: Schema.optional(Schema.Unknown),
  }),
  Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    description: Schema.optional(Schema.Unknown),
    type: Schema.Literal("feature_flag"),
    properties: Schema.optional(Schema.Unknown),
  }),
]).pipe(T.Http({ method: "PATCH", path: "/v1/benefits/{id}" }));
export type BenefitsupdateInput = typeof BenefitsupdateInput.Type;

// Output Schema
export const BenefitsupdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  created_at: Schema.String,
  modified_at: Schema.Unknown,
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
export type BenefitsupdateOutput = typeof BenefitsupdateOutput.Type;

// The operation
/**
 * Update Benefit
 *
 * Update a benefit.
 * **Scopes**: `benefits:write`
 */
export const benefitsupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BenefitsupdateInput,
  outputSchema: BenefitsupdateOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
