import * as Schema from "effect/Schema";

export const ErrorTrackingAssignmentRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    filters: Schema.optional(Schema.Unknown),
    assignee: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          type: Schema.optional(Schema.Literals(["user", "role"])),
          id: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    order_key: Schema.optional(Schema.Number),
    disabled_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export const FilterLogicalOperatorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["AND", "OR"]);
export const ErrorTrackingFingerprintSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    issue_id: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
  });
export const ErrorTrackingGroupingRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    filters: Schema.optional(Schema.Unknown),
    assignee: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          type: Schema.optional(Schema.Literals(["user", "role"])),
          id: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    issue: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
    order_key: Schema.optional(Schema.Number),
    disabled_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export const ErrorTrackingIssueFullSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.suspend(() => ErrorTrackingIssueFullStatusEnumSchema),
    ),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    first_seen: Schema.optional(Schema.String),
    assignee: Schema.optional(
      Schema.suspend(() => ErrorTrackingIssueAssignmentSchema),
    ),
    external_issues: Schema.optional(
      Schema.Array(
        Schema.suspend(() => ErrorTrackingExternalReferenceResultSchema),
      ),
    ),
    cohort: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          name: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export const ErrorTrackingIssueFullStatusEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "archived",
    "active",
    "resolved",
    "pending_release",
    "suppressed",
  ]);
export const ErrorTrackingIssueAssignmentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Unknown),
    type: Schema.optional(Schema.String),
  });
export const ErrorTrackingExternalReferenceResultSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    integration: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        kind: Schema.optional(Schema.String),
        display_name: Schema.optional(Schema.String),
      }),
    ),
    integration_id: Schema.optional(Schema.Number),
    config: Schema.optional(Schema.Unknown),
    issue: Schema.optional(Schema.String),
    external_url: Schema.optional(Schema.String),
  });
export const ErrorTrackingIssueSplitFingerprintSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  });
export const ErrorTrackingRecommendationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    meta: Schema.optional(Schema.Unknown),
    computed_at: Schema.optional(Schema.NullOr(Schema.String)),
    dismissed_at: Schema.optional(Schema.NullOr(Schema.String)),
    next_refresh_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export const ErrorTrackingSpikeDetectionConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snooze_duration_minutes: Schema.optional(Schema.Number),
    multiplier: Schema.optional(Schema.Number),
    threshold: Schema.optional(Schema.Number),
  });
export const ErrorTrackingSpikeEventSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    issue: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.NullOr(Schema.String)),
        description: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    detected_at: Schema.optional(Schema.String),
    computed_baseline: Schema.optional(Schema.Number),
    current_bucket_value: Schema.optional(Schema.Number),
  });
export const ErrorTrackingStackFrameSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    raw_id: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    contents: Schema.optional(Schema.Unknown),
    resolved: Schema.optional(Schema.Boolean),
    context: Schema.optional(Schema.NullOr(Schema.Unknown)),
    symbol_set_ref: Schema.optional(Schema.String),
    release: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        hash_id: Schema.optional(Schema.String),
        team_id: Schema.optional(Schema.Number),
        created_at: Schema.optional(Schema.String),
        metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
        version: Schema.optional(Schema.String),
        project: Schema.optional(Schema.String),
      }),
    ),
  });
export const ErrorTrackingSuppressionRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    filters: Schema.optional(Schema.Unknown),
    order_key: Schema.optional(Schema.Number),
    disabled_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
    sampling_rate: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export const ErrorTrackingReleaseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    hash_id: Schema.optional(Schema.String),
    team_id: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
    version: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
  });
export const ErrorTrackingSymbolSetSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    ref: Schema.optional(Schema.String),
    team_id: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    last_used: Schema.optional(Schema.NullOr(Schema.String)),
    storage_ptr: Schema.optional(Schema.NullOr(Schema.String)),
    failure_reason: Schema.optional(Schema.NullOr(Schema.String)),
    release: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  });
