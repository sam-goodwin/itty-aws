import * as Schema from "effect/Schema";

export const ExperimentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  start_date: Schema.optional(Schema.NullOr(Schema.String)),
  end_date: Schema.optional(Schema.NullOr(Schema.String)),
  feature_flag_key: Schema.optional(Schema.String),
  feature_flag: Schema.optional(
    Schema.Struct({
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
    }),
  ),
  holdout: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.Number),
      name: Schema.optional(Schema.String),
      description: Schema.optional(Schema.NullOr(Schema.String)),
      filters: Schema.optional(Schema.Unknown),
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
      updated_at: Schema.optional(Schema.String),
    }),
  ),
  holdout_id: Schema.optional(Schema.NullOr(Schema.Number)),
  exposure_cohort: Schema.optional(Schema.NullOr(Schema.Number)),
  parameters: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        feature_flag_variants: Schema.optional(
          Schema.NullOr(
            Schema.Array(Schema.suspend(() => ExperimentVariantSchema)),
          ),
        ),
        minimum_detectable_effect: Schema.optional(
          Schema.NullOr(Schema.Number),
        ),
        rollout_percentage: Schema.optional(Schema.NullOr(Schema.Number)),
      }),
    ),
  ),
  secondary_metrics: Schema.optional(Schema.NullOr(Schema.Unknown)),
  saved_metrics: Schema.optional(
    Schema.Array(Schema.suspend(() => ExperimentToSavedMetricSchema)),
  ),
  saved_metrics_ids: Schema.optional(
    Schema.NullOr(Schema.Array(Schema.Unknown)),
  ),
  filters: Schema.optional(Schema.Unknown),
  archived: Schema.optional(Schema.Boolean),
  deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
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
  updated_at: Schema.optional(Schema.String),
  type: Schema.optional(Schema.Unknown),
  exposure_criteria: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        exposure_config: Schema.optional(
          Schema.suspend(() => ExperimentApiExposureConfigSchema),
        ),
        filterTestAccounts: Schema.optional(Schema.NullOr(Schema.Boolean)),
      }),
    ),
  ),
  metrics: Schema.optional(
    Schema.NullOr(
      Schema.Array(Schema.suspend(() => ExperimentApiMetricSchema)),
    ),
  ),
  metrics_secondary: Schema.optional(
    Schema.NullOr(
      Schema.Array(Schema.suspend(() => ExperimentApiMetricSchema)),
    ),
  ),
  stats_config: Schema.optional(Schema.NullOr(Schema.Unknown)),
  scheduling_config: Schema.optional(Schema.NullOr(Schema.Unknown)),
  allow_unknown_events: Schema.optional(Schema.Boolean),
  _create_in_folder: Schema.optional(Schema.String),
  conclusion: Schema.optional(Schema.Unknown),
  conclusion_comment: Schema.optional(Schema.NullOr(Schema.String)),
  primary_metrics_ordered_uuids: Schema.optional(Schema.NullOr(Schema.Unknown)),
  secondary_metrics_ordered_uuids: Schema.optional(
    Schema.NullOr(Schema.Unknown),
  ),
  only_count_matured_users: Schema.optional(Schema.Boolean),
  update_feature_flag_params: Schema.optional(Schema.Boolean),
  status: Schema.optional(Schema.Unknown),
  user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
});
export const ExperimentVariantSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    rollout_percentage: Schema.optional(Schema.NullOr(Schema.Number)),
    split_percent: Schema.optional(Schema.NullOr(Schema.Number)),
  });
export const ExperimentToSavedMetricSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    experiment: Schema.optional(Schema.Number),
    saved_metric: Schema.optional(Schema.Number),
    metadata: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    query: Schema.optional(Schema.Unknown),
    name: Schema.optional(Schema.String),
  });
export const ExperimentApiExposureConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.Literals(["ExperimentEventExposureConfig"])),
    properties: Schema.optional(
      Schema.Array(Schema.suspend(() => EventPropertyFilterSchema)),
    ),
  });
export const EventPropertyFilterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    label: Schema.optional(Schema.NullOr(Schema.String)),
    operator: Schema.optional(Schema.suspend(() => PropertyOperatorSchema)),
    type: Schema.optional(Schema.Literals(["event"])),
    value: Schema.optional(Schema.Unknown),
  });
export const PropertyOperatorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "exact",
    "is_not",
    "icontains",
    "not_icontains",
    "regex",
    "not_regex",
    "gt",
    "gte",
    "lt",
    "lte",
    "is_set",
    "is_not_set",
    "is_date_exact",
    "is_date_before",
    "is_date_after",
    "between",
    "not_between",
    "min",
    "max",
    "in",
    "not_in",
    "is_cleaned_path_exact",
    "flag_evaluates_to",
    "semver_eq",
    "semver_neq",
    "semver_gt",
    "semver_gte",
    "semver_lt",
    "semver_lte",
    "semver_tilde",
    "semver_caret",
    "semver_wildcard",
    "icontains_multi",
    "not_icontains_multi",
  ]);
export const ExperimentApiMetricSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    completion_event: Schema.optional(
      Schema.suspend(() => ExperimentApiEventSourceSchema),
    ),
    conversion_window: Schema.optional(Schema.NullOr(Schema.Number)),
    denominator: Schema.optional(
      Schema.suspend(() => ExperimentApiEventSourceSchema),
    ),
    goal: Schema.optional(Schema.suspend(() => ExperimentMetricGoalSchema)),
    kind: Schema.optional(Schema.Literals(["ExperimentMetric"])),
    metric_type: Schema.optional(
      Schema.suspend(() => ExperimentMetricTypeSchema),
    ),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    numerator: Schema.optional(
      Schema.suspend(() => ExperimentApiEventSourceSchema),
    ),
    retention_window_end: Schema.optional(Schema.NullOr(Schema.Number)),
    retention_window_start: Schema.optional(Schema.NullOr(Schema.Number)),
    retention_window_unit: Schema.optional(
      Schema.suspend(() => FunnelConversionWindowTimeUnitSchema),
    ),
    series: Schema.optional(
      Schema.NullOr(
        Schema.Array(Schema.suspend(() => ExperimentApiEventSourceSchema)),
      ),
    ),
    source: Schema.optional(
      Schema.suspend(() => ExperimentApiEventSourceSchema),
    ),
    start_event: Schema.optional(
      Schema.suspend(() => ExperimentApiEventSourceSchema),
    ),
    start_handling: Schema.optional(Schema.suspend(() => StartHandlingSchema)),
    uuid: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const ExperimentApiEventSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.NullOr(Schema.String)),
    id: Schema.optional(Schema.NullOr(Schema.Number)),
    kind: Schema.optional(Schema.suspend(() => KindSchema)),
    properties: Schema.optional(
      Schema.NullOr(
        Schema.Array(Schema.suspend(() => EventPropertyFilterSchema)),
      ),
    ),
  });
export const KindSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "EventsNode",
  "ActionsNode",
]);
export const ExperimentMetricGoalSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["increase", "decrease"]);
export const ExperimentMetricTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "funnel",
    "mean",
    "ratio",
    "retention",
  ]);
export const FunnelConversionWindowTimeUnitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
  ]);
export const StartHandlingSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "first_seen",
  "last_seen",
]);
