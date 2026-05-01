import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden } from "../../errors.ts";

// Input Schema
export const ListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/api/organizations/" }));
export type ListInput = typeof ListInput.Type;

// Output Schema
export const ListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
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
    }),
  ),
});
export type ListOutput = typeof ListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 */
export const list = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListInput,
  outputSchema: ListOutput,
  errors: [BadRequest, Forbidden] as const,
}));
