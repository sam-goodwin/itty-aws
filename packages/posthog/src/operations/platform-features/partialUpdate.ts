import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PartialUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  slug: Schema.optional(Schema.String),
  logo_media_id: Schema.optional(Schema.NullOr(Schema.String)),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  membership_level: Schema.optional(Schema.NullOr(Schema.Literals([1, 8, 15]))),
  plugins_access_level: Schema.optional(Schema.Literals([0, 3, 6, 9])),
  teams: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  projects: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  available_product_features: Schema.optional(
    Schema.NullOr(Schema.Array(Schema.Unknown)),
  ),
  is_member_join_email_enabled: Schema.optional(Schema.Boolean),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  customer_id: Schema.optional(Schema.NullOr(Schema.String)),
  enforce_2fa: Schema.optional(Schema.NullOr(Schema.Boolean)),
  members_can_invite: Schema.optional(Schema.NullOr(Schema.Boolean)),
  members_can_use_personal_api_keys: Schema.optional(Schema.Boolean),
  allow_publicly_shared_resources: Schema.optional(Schema.Boolean),
  member_count: Schema.optional(Schema.Number),
  is_ai_data_processing_approved: Schema.optional(
    Schema.NullOr(Schema.Boolean),
  ),
  default_experiment_stats_method: Schema.optional(Schema.Unknown),
  default_anonymize_ips: Schema.optional(Schema.Boolean),
  default_role_id: Schema.optional(Schema.NullOr(Schema.String)),
  is_active: Schema.optional(Schema.NullOr(Schema.Boolean)),
  is_not_active_reason: Schema.optional(Schema.NullOr(Schema.String)),
  is_pending_deletion: Schema.optional(Schema.NullOr(Schema.Boolean)),
}).pipe(T.Http({ method: "PATCH", path: "/api/organizations/{id}/" }));
export type PartialUpdateInput = typeof PartialUpdateInput.Type;

// Output Schema
export const PartialUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  slug: Schema.String,
  logo_media_id: Schema.optional(Schema.NullOr(Schema.String)),
  created_at: Schema.String,
  updated_at: Schema.String,
  membership_level: Schema.NullOr(Schema.Literals([1, 8, 15])),
  plugins_access_level: Schema.Literals([0, 3, 6, 9]),
  teams: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  projects: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  available_product_features: Schema.NullOr(Schema.Array(Schema.Unknown)),
  is_member_join_email_enabled: Schema.Boolean,
  metadata: Schema.Record(Schema.String, Schema.String),
  customer_id: Schema.NullOr(Schema.String),
  enforce_2fa: Schema.optional(Schema.NullOr(Schema.Boolean)),
  members_can_invite: Schema.optional(Schema.NullOr(Schema.Boolean)),
  members_can_use_personal_api_keys: Schema.optional(Schema.Boolean),
  allow_publicly_shared_resources: Schema.optional(Schema.Boolean),
  member_count: Schema.Number,
  is_ai_data_processing_approved: Schema.optional(
    Schema.NullOr(Schema.Boolean),
  ),
  default_experiment_stats_method: Schema.optional(Schema.Unknown),
  default_anonymize_ips: Schema.optional(Schema.Boolean),
  default_role_id: Schema.optional(Schema.NullOr(Schema.String)),
  is_active: Schema.NullOr(Schema.Boolean),
  is_not_active_reason: Schema.NullOr(Schema.String),
  is_pending_deletion: Schema.NullOr(Schema.Boolean),
});
export type PartialUpdateOutput = typeof PartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this organization.
 */
export const partialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PartialUpdateInput,
  outputSchema: PartialUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
