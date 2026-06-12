import * as Schema from "effect/Schema";

export const ApprovalPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  action_key: Schema.optional(Schema.String),
  conditions: Schema.optional(Schema.Unknown),
  approver_config: Schema.optional(Schema.Unknown),
  allow_self_approve: Schema.optional(Schema.Boolean),
  bypass_org_membership_levels: Schema.optional(Schema.Unknown),
  bypass_roles: Schema.optional(Schema.Array(Schema.String)),
  expires_after: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
});
export const ChangeRequestSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  action_key: Schema.optional(Schema.String),
  action_version: Schema.optional(Schema.Number),
  resource_type: Schema.optional(Schema.String),
  resource_id: Schema.optional(Schema.NullOr(Schema.String)),
  intent: Schema.optional(Schema.Unknown),
  intent_display: Schema.optional(Schema.Unknown),
  policy_snapshot: Schema.optional(Schema.Unknown),
  validation_status: Schema.optional(
    Schema.Literals(["valid", "invalid", "expired", "stale"]),
  ),
  validation_errors: Schema.optional(Schema.NullOr(Schema.Unknown)),
  validated_at: Schema.optional(Schema.NullOr(Schema.String)),
  state: Schema.optional(
    Schema.Literals([
      "pending",
      "approved",
      "applied",
      "rejected",
      "expired",
      "failed",
    ]),
  ),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  applied_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  expires_at: Schema.optional(Schema.String),
  applied_at: Schema.optional(Schema.NullOr(Schema.String)),
  apply_error: Schema.optional(Schema.String),
  result_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
  approvals: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  can_approve: Schema.optional(Schema.Boolean),
  can_cancel: Schema.optional(Schema.Boolean),
  is_requester: Schema.optional(Schema.Boolean),
  user_decision: Schema.optional(Schema.NullOr(Schema.String)),
});
export const OrganizationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
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
});
export const RoleMembershipSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  role_id: Schema.optional(Schema.String),
  organization_member: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      user: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            id: Schema.optional(Schema.Number),
            uuid: Schema.optional(Schema.String),
            distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
            first_name: Schema.optional(Schema.String),
            last_name: Schema.optional(Schema.String),
            email: Schema.optional(Schema.String),
            is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
            hedgehog_config: Schema.optional(
              Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
            ),
            role_at_organization: Schema.optional(Schema.Unknown),
          }),
        ),
      ),
      level: Schema.optional(Schema.Literals([1, 8, 15])),
      joined_at: Schema.optional(Schema.String),
      updated_at: Schema.optional(Schema.String),
      is_2fa_enabled: Schema.optional(Schema.Boolean),
      has_social_auth: Schema.optional(Schema.Boolean),
      last_login: Schema.optional(Schema.String),
    }),
  ),
  user: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  joined_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  user_uuid: Schema.optional(Schema.String),
});
export const _WelcomeTeamMemberSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    avatar: Schema.optional(Schema.NullOr(Schema.String)),
    role: Schema.optional(Schema.String),
    last_active: Schema.optional(Schema.suspend(() => LastActiveEnumSchema)),
  });
export const LastActiveEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["today", "this_week", "inactive", "never"],
);
export const _WelcomeRecentActivitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    actor_name: Schema.optional(Schema.String),
    entity_name: Schema.optional(Schema.String),
    entity_url: Schema.optional(Schema.NullOr(Schema.String)),
    timestamp: Schema.optional(Schema.String),
  });
export const _WelcomePopularDashboardSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    team_id: Schema.optional(Schema.Number),
    url: Schema.optional(Schema.String),
  });
export const _WelcomeSuggestedStepSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    href: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    docs_href: Schema.optional(Schema.String),
    product_key: Schema.optional(Schema.String),
  });
export const ActivityLogSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  user: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  unread: Schema.optional(Schema.Boolean),
  organization_id: Schema.optional(Schema.NullOr(Schema.String)),
  was_impersonated: Schema.optional(Schema.NullOr(Schema.Boolean)),
  is_system: Schema.optional(Schema.NullOr(Schema.Boolean)),
  client: Schema.optional(Schema.NullOr(Schema.String)),
  activity: Schema.optional(Schema.String),
  item_id: Schema.optional(Schema.NullOr(Schema.String)),
  scope: Schema.optional(Schema.String),
  detail: Schema.optional(Schema.NullOr(Schema.Unknown)),
  created_at: Schema.optional(Schema.String),
});
