import * as Schema from "effect/Schema";

export const AlertSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
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
  insight: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  subscribed_users: Schema.optional(Schema.Array(Schema.Number)),
  threshold: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      created_at: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      configuration: Schema.optional(
        Schema.Struct({
          bounds: Schema.optional(
            Schema.suspend(() => InsightsThresholdBoundsSchema),
          ),
          type: Schema.optional(
            Schema.suspend(() => InsightThresholdTypeSchema),
          ),
        }),
      ),
    }),
  ),
  condition: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        type: Schema.optional(Schema.suspend(() => AlertConditionTypeSchema)),
      }),
    ),
  ),
  state: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  last_notified_at: Schema.optional(Schema.NullOr(Schema.String)),
  last_checked_at: Schema.optional(Schema.NullOr(Schema.String)),
  next_check_at: Schema.optional(Schema.NullOr(Schema.String)),
  checks: Schema.optional(Schema.Array(Schema.suspend(() => AlertCheckSchema))),
  checks_total: Schema.optional(Schema.NullOr(Schema.Number)),
  config: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        check_ongoing_interval: Schema.optional(Schema.NullOr(Schema.Boolean)),
        series_index: Schema.optional(Schema.Number),
        type: Schema.optional(Schema.Literals(["TrendsAlertConfig"])),
      }),
    ),
  ),
  detector_config: Schema.optional(Schema.Unknown),
  calculation_interval: Schema.optional(
    Schema.Literals(["hourly", "daily", "weekly", "monthly"]),
  ),
  snoozed_until: Schema.optional(Schema.NullOr(Schema.String)),
  skip_weekend: Schema.optional(Schema.NullOr(Schema.Boolean)),
  schedule_restriction: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        blocked_windows: Schema.optional(
          Schema.Array(
            Schema.suspend(() => AlertScheduleRestrictionWindowSchema),
          ),
        ),
      }),
    ),
  ),
  last_value: Schema.optional(Schema.NullOr(Schema.Number)),
  investigation_agent_enabled: Schema.optional(Schema.Boolean),
  investigation_gates_notifications: Schema.optional(Schema.Boolean),
  investigation_inconclusive_action: Schema.optional(
    Schema.Literals(["notify", "suppress"]),
  ),
});
export const InsightsThresholdBoundsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lower: Schema.optional(Schema.NullOr(Schema.Number)),
    upper: Schema.optional(Schema.NullOr(Schema.Number)),
  });
export const InsightThresholdTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["absolute", "percentage"]);
export const AlertConditionTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "absolute_value",
    "relative_increase",
    "relative_decrease",
  ]);
export const AlertCheckSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
  calculated_value: Schema.optional(Schema.NullOr(Schema.Number)),
  state: Schema.optional(
    Schema.Literals(["Firing", "Not firing", "Errored", "Snoozed"]),
  ),
  targets_notified: Schema.optional(Schema.Boolean),
  anomaly_scores: Schema.optional(Schema.NullOr(Schema.Unknown)),
  triggered_points: Schema.optional(Schema.NullOr(Schema.Unknown)),
  triggered_dates: Schema.optional(Schema.NullOr(Schema.Unknown)),
  interval: Schema.optional(Schema.NullOr(Schema.String)),
  triggered_metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
  investigation_status: Schema.optional(Schema.Unknown),
  investigation_verdict: Schema.optional(Schema.Unknown),
  investigation_summary: Schema.optional(Schema.NullOr(Schema.String)),
  investigation_notebook_short_id: Schema.optional(
    Schema.NullOr(Schema.String),
  ),
  notification_sent_at: Schema.optional(Schema.NullOr(Schema.String)),
  notification_suppressed_by_agent: Schema.optional(Schema.Boolean),
});
export const AlertScheduleRestrictionWindowSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    start: Schema.optional(Schema.String),
    end: Schema.optional(Schema.String),
  });
export const BreakdownSimulationResultSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    data: Schema.optional(Schema.Array(Schema.Number)),
    dates: Schema.optional(Schema.Array(Schema.String)),
    scores: Schema.optional(Schema.Array(Schema.NullOr(Schema.Number))),
    triggered_indices: Schema.optional(Schema.Array(Schema.Number)),
    triggered_dates: Schema.optional(Schema.Array(Schema.String)),
    total_points: Schema.optional(Schema.Number),
    anomaly_count: Schema.optional(Schema.Number),
    sub_detector_scores: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  });
