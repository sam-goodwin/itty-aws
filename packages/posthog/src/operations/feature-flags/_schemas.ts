import * as Schema from "effect/Schema";

export const FeatureFlagSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  key: Schema.optional(Schema.String),
  filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  deleted: Schema.optional(Schema.Boolean),
  active: Schema.optional(Schema.Boolean),
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
  version: Schema.optional(Schema.Number),
  last_modified_by: Schema.optional(
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
  ensure_experience_continuity: Schema.optional(Schema.NullOr(Schema.Boolean)),
  experiment_set: Schema.optional(Schema.Array(Schema.Number)),
  experiment_set_metadata: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  surveys: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  features: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  rollback_conditions: Schema.optional(Schema.NullOr(Schema.Unknown)),
  performed_rollback: Schema.optional(Schema.NullOr(Schema.Boolean)),
  can_edit: Schema.optional(Schema.Boolean),
  tags: Schema.optional(Schema.Array(Schema.Unknown)),
  evaluation_contexts: Schema.optional(Schema.Array(Schema.Unknown)),
  usage_dashboard: Schema.optional(Schema.Number),
  analytics_dashboards: Schema.optional(Schema.Array(Schema.Number)),
  has_enriched_analytics: Schema.optional(Schema.NullOr(Schema.Boolean)),
  user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
  creation_context: Schema.optional(
    Schema.Literals([
      "feature_flags",
      "experiments",
      "surveys",
      "early_access_features",
      "web_experiments",
      "product_tours",
    ]),
  ),
  is_remote_configuration: Schema.optional(Schema.NullOr(Schema.Boolean)),
  has_encrypted_payloads: Schema.optional(Schema.NullOr(Schema.Boolean)),
  status: Schema.optional(Schema.String),
  evaluation_runtime: Schema.optional(Schema.Unknown),
  bucketing_identifier: Schema.optional(Schema.Unknown),
  last_called_at: Schema.optional(Schema.NullOr(Schema.String)),
  _create_in_folder: Schema.optional(Schema.String),
  _should_create_usage_dashboard: Schema.optional(Schema.Boolean),
  is_used_in_replay_settings: Schema.optional(Schema.Boolean),
});
export const FeatureFlagConditionGroupSchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Array(Schema.suspend(() => FeatureFlagFilterPropertySchemaSchema)),
    ),
    rollout_percentage: Schema.optional(Schema.Number),
    variant: Schema.optional(Schema.NullOr(Schema.String)),
    aggregation_group_type_index: Schema.optional(Schema.NullOr(Schema.Number)),
  });
export const FeatureFlagFilterPropertySchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const FeatureFlagMultivariateVariantSchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    rollout_percentage: Schema.optional(Schema.Number),
  });
export const ActivityLogEntrySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    user: Schema.optional(Schema.NullOr(Schema.Unknown)),
    activity: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    item_id: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.suspend(() => DetailSchema)),
    created_at: Schema.optional(Schema.String),
  },
);
export const DetailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  changes: Schema.optional(Schema.Array(Schema.suspend(() => ChangeSchema))),
  merge: Schema.optional(Schema.suspend(() => MergeSchema)),
  trigger: Schema.optional(Schema.suspend(() => TriggerSchema)),
  name: Schema.optional(Schema.String),
  short_id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export const ChangeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  action: Schema.optional(Schema.String),
  field: Schema.optional(Schema.String),
  before: Schema.optional(Schema.Unknown),
  after: Schema.optional(Schema.Unknown),
});
export const MergeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  source: Schema.optional(Schema.Unknown),
  target: Schema.optional(Schema.Unknown),
});
export const TriggerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  job_type: Schema.optional(Schema.String),
  job_id: Schema.optional(Schema.String),
  payload: Schema.optional(Schema.Unknown),
});
export const DependentFlagSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Number),
  key: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
});
export const BulkUpdateTagsItemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    tags: Schema.optional(Schema.Array(Schema.String)),
  });
export const BulkUpdateTagsErrorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    reason: Schema.optional(Schema.String),
  });
export const MinimalFeatureFlagSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    team_id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    deleted: Schema.optional(Schema.Boolean),
    active: Schema.optional(Schema.Boolean),
    ensure_experience_continuity: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    has_encrypted_payloads: Schema.optional(Schema.NullOr(Schema.Boolean)),
    version: Schema.optional(Schema.NullOr(Schema.Number)),
    evaluation_runtime: Schema.optional(Schema.Unknown),
    bucketing_identifier: Schema.optional(Schema.Unknown),
    evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
  });
export const MyFlagsResponseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  feature_flag: Schema.optional(Schema.suspend(() => MinimalFeatureFlagSchema)),
  value: Schema.optional(Schema.Unknown),
});
