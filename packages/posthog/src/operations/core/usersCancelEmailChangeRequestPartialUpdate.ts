import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden } from "../../errors.ts";
import { SensitiveString } from "../../sensitive.ts";

// Input Schema
export const UsersCancelEmailChangeRequestPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date_joined: Schema.optional(Schema.String),
    uuid: Schema.optional(Schema.String),
    distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
    first_name: Schema.optional(Schema.String),
    last_name: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    pending_email: Schema.optional(Schema.NullOr(Schema.String)),
    is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
    notification_settings: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    anonymize_data: Schema.optional(Schema.NullOr(Schema.Boolean)),
    allow_impersonation: Schema.optional(Schema.NullOr(Schema.Boolean)),
    toolbar_mode: Schema.optional(Schema.Unknown),
    has_password: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.Number),
    is_staff: Schema.optional(Schema.Boolean),
    is_impersonated: Schema.optional(Schema.NullOr(Schema.Boolean)),
    is_impersonated_until: Schema.optional(Schema.NullOr(Schema.String)),
    is_impersonated_read_only: Schema.optional(Schema.NullOr(Schema.Boolean)),
    sensitive_session_expires_at: Schema.optional(Schema.NullOr(Schema.String)),
    team: Schema.optional(
      Schema.Struct({
        id: Schema.Number,
        uuid: Schema.String,
        organization: Schema.String,
        project_id: Schema.Number,
        api_token: SensitiveString,
        name: Schema.String,
        completed_snippet_onboarding: Schema.Boolean,
        has_completed_onboarding_for: Schema.NullOr(Schema.Unknown),
        ingested_event: Schema.Boolean,
        is_demo: Schema.Boolean,
        timezone: Schema.Struct({}),
        access_control: Schema.Boolean,
      }),
    ),
    organization: Schema.optional(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        slug: Schema.String,
        logo_media_id: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.String,
        updated_at: Schema.String,
        membership_level: Schema.Struct({}),
        plugins_access_level: Schema.Struct({}),
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
    organizations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.String,
          name: Schema.String,
          slug: Schema.String,
          logo_media_id: Schema.NullOr(Schema.String),
          membership_level: Schema.Struct({}),
          members_can_use_personal_api_keys: Schema.optional(Schema.Boolean),
          is_active: Schema.optional(Schema.NullOr(Schema.Boolean)),
          is_not_active_reason: Schema.optional(Schema.NullOr(Schema.String)),
          is_pending_deletion: Schema.optional(Schema.NullOr(Schema.Boolean)),
        }),
      ),
    ),
    set_current_organization: Schema.optional(Schema.String),
    set_current_team: Schema.optional(Schema.String),
    password: Schema.optional(SensitiveString),
    current_password: Schema.optional(SensitiveString),
    events_column_config: Schema.optional(Schema.Unknown),
    is_2fa_enabled: Schema.optional(Schema.Boolean),
    has_social_auth: Schema.optional(Schema.Boolean),
    has_sso_enforcement: Schema.optional(Schema.Boolean),
    has_seen_product_intro_for: Schema.optional(Schema.NullOr(Schema.Unknown)),
    scene_personalisation: Schema.optional(
      Schema.Array(
        Schema.Struct({
          scene: Schema.String,
          dashboard: Schema.optional(Schema.NullOr(Schema.Number)),
        }),
      ),
    ),
    theme_mode: Schema.optional(Schema.Unknown),
    hedgehog_config: Schema.optional(Schema.NullOr(Schema.Unknown)),
    allow_sidebar_suggestions: Schema.optional(Schema.NullOr(Schema.Boolean)),
    shortcut_position: Schema.optional(Schema.Unknown),
    role_at_organization: Schema.optional(
      Schema.Literals([
        "engineering",
        "data",
        "product",
        "founder",
        "leadership",
        "marketing",
        "sales",
        "other",
      ]),
    ),
    passkeys_enabled_for_2fa: Schema.optional(Schema.NullOr(Schema.Boolean)),
    is_organization_first_user: Schema.optional(Schema.NullOr(Schema.Boolean)),
    pending_invites: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.String,
          target_email: Schema.String,
          organization_id: Schema.String,
          organization_name: Schema.String,
          created_at: Schema.String,
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/users/cancel_email_change_request/",
    }),
  );
export type UsersCancelEmailChangeRequestPartialUpdateInput =
  typeof UsersCancelEmailChangeRequestPartialUpdateInput.Type;

// Output Schema
export const UsersCancelEmailChangeRequestPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UsersCancelEmailChangeRequestPartialUpdateOutput =
  typeof UsersCancelEmailChangeRequestPartialUpdateOutput.Type;

// The operation
export const usersCancelEmailChangeRequestPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UsersCancelEmailChangeRequestPartialUpdateInput,
    outputSchema: UsersCancelEmailChangeRequestPartialUpdateOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
