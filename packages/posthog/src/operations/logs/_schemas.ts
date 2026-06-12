import * as Schema from "effect/Schema";

export const LogsViewSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  short_id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  pinned: Schema.optional(Schema.Boolean),
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
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
});
export const LogsAlertConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    filters: Schema.optional(Schema.Unknown),
    threshold_count: Schema.optional(Schema.Number),
    threshold_operator: Schema.optional(Schema.Literals(["above", "below"])),
    window_minutes: Schema.optional(Schema.Number),
    check_interval_minutes: Schema.optional(Schema.Number),
    state: Schema.optional(
      Schema.Literals([
        "not_firing",
        "firing",
        "pending_resolve",
        "errored",
        "snoozed",
        "broken",
      ]),
    ),
    evaluation_periods: Schema.optional(Schema.Number),
    datapoints_to_alarm: Schema.optional(Schema.Number),
    cooldown_minutes: Schema.optional(Schema.Number),
    snooze_until: Schema.optional(Schema.NullOr(Schema.String)),
    next_check_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_notified_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_checked_at: Schema.optional(Schema.NullOr(Schema.String)),
    consecutive_failures: Schema.optional(Schema.Number),
    last_error_message: Schema.optional(Schema.NullOr(Schema.String)),
    state_timeline: Schema.optional(
      Schema.Array(Schema.suspend(() => LogsAlertStateIntervalSchema)),
    ),
    destination_types: Schema.optional(
      Schema.Array(Schema.suspend(() => NotificationDestinationTypeEnumSchema)),
    ),
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
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const LogsAlertStateIntervalSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    start: Schema.optional(Schema.String),
    end: Schema.optional(Schema.String),
    state: Schema.optional(
      Schema.Literals([
        "not_firing",
        "firing",
        "pending_resolve",
        "errored",
        "snoozed",
        "broken",
      ]),
    ),
    enabled: Schema.optional(Schema.Boolean),
  });
export const NotificationDestinationTypeEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["slack", "webhook"]);
export const LogsAlertEventSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
  kind: Schema.optional(
    Schema.Literals([
      "check",
      "reset",
      "enable",
      "disable",
      "snooze",
      "unsnooze",
      "threshold_change",
    ]),
  ),
  state_before: Schema.optional(Schema.String),
  state_after: Schema.optional(Schema.String),
  threshold_breached: Schema.optional(Schema.Boolean),
  result_count: Schema.optional(Schema.NullOr(Schema.Number)),
  error_message: Schema.optional(Schema.NullOr(Schema.String)),
  query_duration_ms: Schema.optional(Schema.NullOr(Schema.Number)),
});
export const LogsAlertSimulateBucketSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timestamp: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
    threshold_breached: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
    notification: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  });
export const _LogAttributeEntrySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    propertyFilterType: Schema.optional(Schema.String),
  });
export const SeverityLevelsEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "trace",
    "debug",
    "info",
    "warn",
    "error",
    "fatal",
  ]);
export const _LogPropertyFilterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals(["log", "log_attribute", "log_resource_attribute"]),
    ),
    operator: Schema.optional(
      Schema.Literals([
        "exact",
        "is_not",
        "icontains",
        "not_icontains",
        "regex",
        "not_regex",
        "gt",
        "lt",
        "is_date_exact",
        "is_date_before",
        "is_date_after",
        "is_set",
        "is_not_set",
      ]),
    ),
    value: Schema.optional(Schema.NullOr(Schema.Unknown)),
  });
export const _LogEntrySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uuid: Schema.optional(Schema.String),
  timestamp: Schema.optional(Schema.String),
  observed_timestamp: Schema.optional(Schema.String),
  body: Schema.optional(Schema.String),
  severity_text: Schema.optional(Schema.String),
  severity_number: Schema.optional(Schema.Number),
  level: Schema.optional(Schema.String),
  trace_id: Schema.optional(Schema.String),
  span_id: Schema.optional(Schema.String),
  trace_flags: Schema.optional(Schema.Number),
  attributes: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  resource_attributes: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  event_name: Schema.optional(Schema.String),
});
export const _LogsServiceAggregateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service_name: Schema.optional(Schema.String),
    log_count: Schema.optional(Schema.Number),
    error_count: Schema.optional(Schema.Number),
    error_rate: Schema.optional(Schema.Number),
  });
export const _LogsServicesSparklineBucketSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    time: Schema.optional(Schema.String),
    service_name: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
  });
export const _LogsSparklineBucketSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    time: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
  });
export const _LogAttributeValueSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  });
