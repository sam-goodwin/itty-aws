import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const BenefitsgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/benefits/{id}" }));
export type BenefitsgetInput = typeof BenefitsgetInput.Type;

// Output Schema
export const BenefitsgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type BenefitsgetOutput = typeof BenefitsgetOutput.Type;

// The operation
/**
 * Get Benefit
 *
 * Get a benefit by ID.
 * **Scopes**: `benefits:read` `benefits:write`
 */
export const benefitsget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BenefitsgetInput,
  outputSchema: BenefitsgetOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
