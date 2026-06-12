import * as Schema from "effect/Schema";

export const EndpointResponseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    query: Schema.optional(Schema.Unknown),
    is_active: Schema.optional(Schema.Boolean),
    cache_age_seconds: Schema.optional(Schema.NullOr(Schema.Number)),
    endpoint_path: Schema.optional(Schema.String),
    url: Schema.optional(Schema.NullOr(Schema.String)),
    ui_url: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
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
    is_materialized: Schema.optional(Schema.Boolean),
    current_version: Schema.optional(Schema.Number),
    current_version_id: Schema.optional(Schema.NullOr(Schema.String)),
    versions_count: Schema.optional(Schema.Number),
    derived_from_insight: Schema.optional(Schema.NullOr(Schema.String)),
    last_executed_at: Schema.optional(Schema.NullOr(Schema.String)),
    materialization: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        can_materialize: Schema.optional(Schema.Boolean),
        reason: Schema.optional(Schema.NullOr(Schema.String)),
        last_materialized_at: Schema.optional(Schema.NullOr(Schema.String)),
        error: Schema.optional(Schema.String),
        sync_frequency: Schema.optional(Schema.NullOr(Schema.String)),
        saved_query_id: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    bucket_overrides: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    columns: Schema.optional(
      Schema.Array(Schema.suspend(() => EndpointColumnSchema)),
    ),
  },
);
export const EndpointColumnSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
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
export const EndpointRefreshModeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["cache", "force", "direct"]);
export const EndpointVersionResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    query: Schema.optional(Schema.Unknown),
    is_active: Schema.optional(Schema.Boolean),
    cache_age_seconds: Schema.optional(Schema.NullOr(Schema.Number)),
    endpoint_path: Schema.optional(Schema.String),
    url: Schema.optional(Schema.NullOr(Schema.String)),
    ui_url: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
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
    is_materialized: Schema.optional(Schema.Boolean),
    current_version: Schema.optional(Schema.Number),
    current_version_id: Schema.optional(Schema.NullOr(Schema.String)),
    versions_count: Schema.optional(Schema.Number),
    derived_from_insight: Schema.optional(Schema.NullOr(Schema.String)),
    last_executed_at: Schema.optional(Schema.NullOr(Schema.String)),
    materialization: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        can_materialize: Schema.optional(Schema.Boolean),
        reason: Schema.optional(Schema.NullOr(Schema.String)),
        last_materialized_at: Schema.optional(Schema.NullOr(Schema.String)),
        error: Schema.optional(Schema.String),
        sync_frequency: Schema.optional(Schema.NullOr(Schema.String)),
        saved_query_id: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    bucket_overrides: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    columns: Schema.optional(
      Schema.Array(Schema.suspend(() => EndpointColumnSchema)),
    ),
    version: Schema.optional(Schema.Number),
    version_id: Schema.optional(Schema.String),
    endpoint_is_active: Schema.optional(Schema.Boolean),
    version_created_at: Schema.optional(Schema.String),
    version_updated_at: Schema.optional(Schema.NullOr(Schema.String)),
    version_created_by: Schema.optional(
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
  });
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
