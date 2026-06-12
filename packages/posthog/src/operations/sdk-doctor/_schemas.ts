import * as Schema from "effect/Schema";

export const SdkAssessmentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lib: Schema.optional(Schema.String),
  readable_name: Schema.optional(Schema.String),
  latest_version: Schema.optional(Schema.String),
  needs_updating: Schema.optional(Schema.Boolean),
  is_outdated: Schema.optional(Schema.Boolean),
  is_old: Schema.optional(Schema.Boolean),
  severity: Schema.optional(Schema.Literals(["none", "warning", "danger"])),
  reason: Schema.optional(Schema.String),
  banners: Schema.optional(Schema.Array(Schema.String)),
  releases: Schema.optional(
    Schema.Array(Schema.suspend(() => SdkReleaseAssessmentSchema)),
  ),
  outdated_traffic_alerts: Schema.optional(
    Schema.Array(Schema.suspend(() => OutdatedTrafficAlertSchema)),
  ),
});
export const SdkReleaseAssessmentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
    max_timestamp: Schema.optional(Schema.String),
    release_date: Schema.optional(Schema.NullOr(Schema.String)),
    days_since_release: Schema.optional(Schema.NullOr(Schema.Number)),
    released_ago: Schema.optional(Schema.NullOr(Schema.String)),
    is_outdated: Schema.optional(Schema.Boolean),
    is_old: Schema.optional(Schema.Boolean),
    needs_updating: Schema.optional(Schema.Boolean),
    is_current_or_newer: Schema.optional(Schema.Boolean),
    status_reason: Schema.optional(Schema.String),
    sql_query: Schema.optional(Schema.String),
    activity_page_url: Schema.optional(Schema.String),
  });
export const OutdatedTrafficAlertSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    threshold_percent: Schema.optional(Schema.Number),
  });
