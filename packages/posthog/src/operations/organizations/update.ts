import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface UpdateInput {
  id: string;
  name?: string;
  slug?: string;
  logo_media_id?: string | null;
  created_at?: string;
  updated_at?: string;
  membership_level?: 1 | 8 | 15;
  plugins_access_level?: 0 | 3 | 6 | 9;
  teams?: Record<string, unknown>[];
  projects?: Record<string, unknown>[];
  available_product_features?: unknown[] | null;
  is_member_join_email_enabled?: boolean;
  metadata?: Record<string, string>;
  customer_id?: string | null;
  enforce_2fa?: boolean | null;
  members_can_invite?: boolean | null;
  members_can_create_projects?: boolean | null;
  members_can_use_personal_api_keys?: boolean;
  allow_publicly_shared_resources?: boolean;
  member_count?: number;
  is_ai_data_processing_approved?: boolean | null;
  is_ai_training_opted_in?: boolean | null;
  is_ai_training_locked?: boolean | null;
  is_ai_training_cta_shown?: boolean | null;
  is_hipaa?: boolean | null;
  default_experiment_stats_method?: "bayesian" | "frequentist" | "" | null;
  default_anonymize_ips?: boolean;
  default_role_id?: string | null;
  is_active?: boolean | null;
  is_not_active_reason?: string | null;
  is_pending_deletion?: boolean | null;
}
export const UpdateInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  slug: Schema.optional(Schema.String),
  logo_media_id: Schema.optional(Schema.NullOr(Schema.String)),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  membership_level: Schema.optional(Schema.Literals([1, 8, 15])),
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
  members_can_create_projects: Schema.optional(Schema.NullOr(Schema.Boolean)),
  members_can_use_personal_api_keys: Schema.optional(Schema.Boolean),
  allow_publicly_shared_resources: Schema.optional(Schema.Boolean),
  member_count: Schema.optional(Schema.Number),
  is_ai_data_processing_approved: Schema.optional(
    Schema.NullOr(Schema.Boolean),
  ),
  is_ai_training_opted_in: Schema.optional(Schema.NullOr(Schema.Boolean)),
  is_ai_training_locked: Schema.optional(Schema.NullOr(Schema.Boolean)),
  is_ai_training_cta_shown: Schema.optional(Schema.NullOr(Schema.Boolean)),
  is_hipaa: Schema.optional(Schema.NullOr(Schema.Boolean)),
  default_experiment_stats_method: Schema.optional(
    Schema.NullOr(
      Schema.Union([
        Schema.Literals(["bayesian", "frequentist"]),
        Schema.Literals([""]),
      ]),
    ),
  ),
  default_anonymize_ips: Schema.optional(Schema.Boolean),
  default_role_id: Schema.optional(Schema.NullOr(Schema.String)),
  is_active: Schema.optional(Schema.NullOr(Schema.Boolean)),
  is_not_active_reason: Schema.optional(Schema.NullOr(Schema.String)),
  is_pending_deletion: Schema.optional(Schema.NullOr(Schema.Boolean)),
}).pipe(
  T.Http({ method: "PUT", path: "/api/organizations/{id}/" }),
) as unknown as Schema.Codec<UpdateInput>;

// Output Schema
export interface UpdateOutput {
  id?: string;
  name?: string;
  slug?: string;
  logo_media_id?: string | null;
  created_at?: string;
  updated_at?: string;
  membership_level?: 1 | 8 | 15;
  plugins_access_level?: 0 | 3 | 6 | 9;
  teams?: Record<string, unknown>[];
  projects?: Record<string, unknown>[];
  available_product_features?: unknown[] | null;
  is_member_join_email_enabled?: boolean;
  metadata?: Record<string, string>;
  customer_id?: string | null;
  enforce_2fa?: boolean | null;
  members_can_invite?: boolean | null;
  members_can_create_projects?: boolean | null;
  members_can_use_personal_api_keys?: boolean;
  allow_publicly_shared_resources?: boolean;
  member_count?: number;
  is_ai_data_processing_approved?: boolean | null;
  is_ai_training_opted_in?: boolean | null;
  is_ai_training_locked?: boolean | null;
  is_ai_training_cta_shown?: boolean | null;
  is_hipaa?: boolean | null;
  default_experiment_stats_method?: "bayesian" | "frequentist" | "" | null;
  default_anonymize_ips?: boolean;
  default_role_id?: string | null;
  is_active?: boolean | null;
  is_not_active_reason?: string | null;
  is_pending_deletion?: boolean | null;
}
export const UpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  slug: Schema.optional(Schema.String),
  logo_media_id: Schema.optional(Schema.NullOr(Schema.String)),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  membership_level: Schema.optional(Schema.Literals([1, 8, 15])),
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
  members_can_create_projects: Schema.optional(Schema.NullOr(Schema.Boolean)),
  members_can_use_personal_api_keys: Schema.optional(Schema.Boolean),
  allow_publicly_shared_resources: Schema.optional(Schema.Boolean),
  member_count: Schema.optional(Schema.Number),
  is_ai_data_processing_approved: Schema.optional(
    Schema.NullOr(Schema.Boolean),
  ),
  is_ai_training_opted_in: Schema.optional(Schema.NullOr(Schema.Boolean)),
  is_ai_training_locked: Schema.optional(Schema.NullOr(Schema.Boolean)),
  is_ai_training_cta_shown: Schema.optional(Schema.NullOr(Schema.Boolean)),
  is_hipaa: Schema.optional(Schema.NullOr(Schema.Boolean)),
  default_experiment_stats_method: Schema.optional(
    Schema.NullOr(
      Schema.Union([
        Schema.Literals(["bayesian", "frequentist"]),
        Schema.Literals([""]),
      ]),
    ),
  ),
  default_anonymize_ips: Schema.optional(Schema.Boolean),
  default_role_id: Schema.optional(Schema.NullOr(Schema.String)),
  is_active: Schema.optional(Schema.NullOr(Schema.Boolean)),
  is_not_active_reason: Schema.optional(Schema.NullOr(Schema.String)),
  is_pending_deletion: Schema.optional(Schema.NullOr(Schema.Boolean)),
}) as unknown as Schema.Codec<UpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this organization.
 */
export const update = /*@__PURE__*/ API.make(() => ({
  inputSchema: UpdateInput,
  outputSchema: UpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
