import * as Schema from "effect/Schema";

export const DashboardFilterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  breakdown_filter: Schema.optional(
    Schema.suspend(() => BreakdownFilterSchema),
  ),
  date_from: Schema.optional(Schema.NullOr(Schema.String)),
  date_to: Schema.optional(Schema.NullOr(Schema.String)),
  explicitDate: Schema.optional(Schema.NullOr(Schema.Boolean)),
  properties: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
});
export const BreakdownFilterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  breakdown: Schema.optional(Schema.Unknown),
  breakdown_group_type_index: Schema.optional(Schema.NullOr(Schema.Number)),
  breakdown_hide_other_aggregation: Schema.optional(
    Schema.NullOr(Schema.Boolean),
  ),
  breakdown_histogram_bin_count: Schema.optional(Schema.NullOr(Schema.Number)),
  breakdown_limit: Schema.optional(Schema.NullOr(Schema.Number)),
  breakdown_normalize_url: Schema.optional(Schema.NullOr(Schema.Boolean)),
  breakdown_path_cleaning: Schema.optional(Schema.NullOr(Schema.Boolean)),
  breakdown_type: Schema.optional(Schema.suspend(() => BreakdownTypeSchema)),
  breakdowns: Schema.optional(
    Schema.NullOr(Schema.Array(Schema.suspend(() => BreakdownSchema))),
  ),
});
export const BreakdownTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "cohort",
  "person",
  "event",
  "event_metadata",
  "group",
  "session",
  "hogql",
  "data_warehouse",
  "data_warehouse_person_property",
  "revenue_analytics",
]);
export const BreakdownSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  group_type_index: Schema.optional(Schema.NullOr(Schema.Number)),
  histogram_bin_count: Schema.optional(Schema.NullOr(Schema.Number)),
  normalize_url: Schema.optional(Schema.NullOr(Schema.Boolean)),
  property: Schema.optional(Schema.Unknown),
  type: Schema.optional(Schema.suspend(() => MultipleBreakdownTypeSchema)),
});
export const MultipleBreakdownTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "cohort",
    "person",
    "event",
    "event_metadata",
    "group",
    "session",
    "hogql",
    "data_warehouse_person_property",
    "revenue_analytics",
  ]);
export const LimitContextSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "posthog_ai",
  "null",
]);
export const RefreshTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "async",
  "async_except_on_cache_miss",
  "blocking",
  "force_async",
  "force_blocking",
  "force_cache",
  "lazy_async",
]);
export const QueryStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  complete: Schema.optional(Schema.NullOr(Schema.Boolean)),
  dashboard_id: Schema.optional(Schema.NullOr(Schema.Number)),
  end_time: Schema.optional(Schema.NullOr(Schema.String)),
  error: Schema.optional(Schema.NullOr(Schema.Boolean)),
  error_message: Schema.optional(Schema.NullOr(Schema.String)),
  expiration_time: Schema.optional(Schema.NullOr(Schema.String)),
  id: Schema.optional(Schema.String),
  insight_id: Schema.optional(Schema.NullOr(Schema.Number)),
  labels: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  pickup_time: Schema.optional(Schema.NullOr(Schema.String)),
  query_async: Schema.optional(Schema.Literals(["true"])),
  query_progress: Schema.optional(
    Schema.suspend(() => ClickhouseQueryProgressSchema),
  ),
  results: Schema.optional(Schema.NullOr(Schema.Unknown)),
  start_time: Schema.optional(Schema.NullOr(Schema.String)),
  task_id: Schema.optional(Schema.NullOr(Schema.String)),
  team_id: Schema.optional(Schema.Number),
});
export const ClickhouseQueryProgressSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active_cpu_time: Schema.optional(Schema.Number),
    bytes_read: Schema.optional(Schema.Number),
    estimated_rows_total: Schema.optional(Schema.Number),
    rows_read: Schema.optional(Schema.Number),
    time_elapsed: Schema.optional(Schema.Number),
  });
