import * as Schema from "effect/Schema";

export const SurveySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  type: Schema.optional(Schema.suspend(() => SurveyTypeSchema)),
  schedule: Schema.optional(Schema.NullOr(Schema.String)),
  linked_flag: Schema.optional(
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
  linked_flag_id: Schema.optional(Schema.NullOr(Schema.Number)),
  linked_insight_id: Schema.optional(Schema.NullOr(Schema.Number)),
  targeting_flag: Schema.optional(
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
  internal_targeting_flag: Schema.optional(
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
  questions: Schema.optional(Schema.NullOr(Schema.Unknown)),
  conditions: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  appearance: Schema.optional(Schema.NullOr(Schema.Unknown)),
  created_at: Schema.optional(Schema.String),
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
  start_date: Schema.optional(Schema.NullOr(Schema.String)),
  end_date: Schema.optional(Schema.NullOr(Schema.String)),
  archived: Schema.optional(Schema.Boolean),
  responses_limit: Schema.optional(Schema.NullOr(Schema.Number)),
  feature_flag_keys: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.NullOr(Schema.String))),
  ),
  iteration_count: Schema.optional(Schema.NullOr(Schema.Number)),
  iteration_frequency_days: Schema.optional(Schema.NullOr(Schema.Number)),
  iteration_start_dates: Schema.optional(
    Schema.NullOr(Schema.Array(Schema.NullOr(Schema.String))),
  ),
  current_iteration: Schema.optional(Schema.NullOr(Schema.Number)),
  current_iteration_start_date: Schema.optional(Schema.NullOr(Schema.String)),
  response_sampling_start_date: Schema.optional(Schema.NullOr(Schema.String)),
  response_sampling_interval_type: Schema.optional(Schema.Unknown),
  response_sampling_interval: Schema.optional(Schema.NullOr(Schema.Number)),
  response_sampling_limit: Schema.optional(Schema.NullOr(Schema.Number)),
  response_sampling_daily_limits: Schema.optional(
    Schema.NullOr(Schema.Unknown),
  ),
  enable_partial_responses: Schema.optional(Schema.NullOr(Schema.Boolean)),
  enable_iframe_embedding: Schema.optional(Schema.NullOr(Schema.Boolean)),
  translations: Schema.optional(Schema.NullOr(Schema.Unknown)),
  user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
  form_content: Schema.optional(Schema.NullOr(Schema.Unknown)),
});
export const SurveyTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "popover",
  "widget",
  "external_survey",
  "api",
]);
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
export const SurveyQuestionInputSchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const SurveyEventsConditionSchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repeatedActivation: Schema.optional(Schema.Boolean),
    values: Schema.optional(
      Schema.Array(Schema.suspend(() => SurveyConditionEventValueSchemaSchema)),
    ),
  });
export const SurveyConditionEventValueSchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  });
export const DeviceTypesEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Desktop", "Mobile", "Tablet"]);
export const DescriptionContentTypeEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["html", "text"]);
export const WidgetTypeEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["button", "tab", "selector"],
);
