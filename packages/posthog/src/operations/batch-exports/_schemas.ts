import * as Schema from "effect/Schema";

export const BatchExportSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  team_id: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  model: Schema.optional(Schema.Unknown),
  destination: Schema.optional(
    Schema.suspend(() => BatchExportDestinationSchema),
  ),
  interval: Schema.optional(Schema.suspend(() => IntervalEnumSchema)),
  paused: Schema.optional(Schema.Boolean),
  created_at: Schema.optional(Schema.String),
  last_updated_at: Schema.optional(Schema.String),
  last_paused_at: Schema.optional(Schema.NullOr(Schema.String)),
  start_at: Schema.optional(Schema.NullOr(Schema.String)),
  end_at: Schema.optional(Schema.NullOr(Schema.String)),
  latest_runs: Schema.optional(
    Schema.Array(Schema.suspend(() => BatchExportRunSchema)),
  ),
  hogql_query: Schema.optional(Schema.String),
  schema: Schema.optional(Schema.NullOr(Schema.Unknown)),
  filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
  timezone: Schema.optional(Schema.Unknown),
  offset_day: Schema.optional(Schema.NullOr(Schema.Number)),
  offset_hour: Schema.optional(Schema.NullOr(Schema.Number)),
});
export const BatchExportDestinationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(
      Schema.Literals([
        "S3",
        "Snowflake",
        "Postgres",
        "Redshift",
        "BigQuery",
        "Databricks",
        "AzureBlob",
        "Workflows",
        "HTTP",
        "NoOp",
      ]),
    ),
    config: Schema.optional(Schema.Unknown),
    integration: Schema.optional(Schema.NullOr(Schema.Number)),
    integration_id: Schema.optional(Schema.NullOr(Schema.Number)),
  });
export const IntervalEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "hour",
  "day",
  "week",
  "every 5 minutes",
  "every 15 minutes",
]);
export const BatchExportRunSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  status: Schema.optional(
    Schema.Literals([
      "Cancelled",
      "Completed",
      "ContinuedAsNew",
      "Failed",
      "FailedRetryable",
      "FailedBilling",
      "Terminated",
      "TimedOut",
      "Running",
      "Starting",
    ]),
  ),
  records_completed: Schema.optional(Schema.NullOr(Schema.Number)),
  records_failed: Schema.optional(Schema.NullOr(Schema.Number)),
  latest_error: Schema.optional(Schema.NullOr(Schema.String)),
  data_interval_start: Schema.optional(Schema.NullOr(Schema.String)),
  data_interval_end: Schema.optional(Schema.String),
  cursor: Schema.optional(Schema.NullOr(Schema.String)),
  created_at: Schema.optional(Schema.String),
  finished_at: Schema.optional(Schema.NullOr(Schema.String)),
  last_updated_at: Schema.optional(Schema.String),
  records_total_count: Schema.optional(Schema.NullOr(Schema.Number)),
  bytes_exported: Schema.optional(Schema.NullOr(Schema.Number)),
  batch_export: Schema.optional(Schema.String),
  backfill: Schema.optional(Schema.NullOr(Schema.String)),
});
export const BatchExportBackfillSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    progress: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          total_runs: Schema.optional(Schema.NullOr(Schema.Number)),
          finished_runs: Schema.optional(Schema.NullOr(Schema.Number)),
          progress: Schema.optional(Schema.NullOr(Schema.Number)),
        }),
      ),
    ),
    start_at: Schema.optional(Schema.NullOr(Schema.String)),
    end_at: Schema.optional(Schema.NullOr(Schema.String)),
    status: Schema.optional(
      Schema.Literals([
        "Cancelled",
        "Completed",
        "ContinuedAsNew",
        "Failed",
        "FailedRetryable",
        "Terminated",
        "TimedOut",
        "Running",
        "Starting",
      ]),
    ),
    created_at: Schema.optional(Schema.String),
    finished_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_updated_at: Schema.optional(Schema.String),
    total_records_count: Schema.optional(Schema.NullOr(Schema.Number)),
    adjusted_start_at: Schema.optional(Schema.NullOr(Schema.String)),
    team: Schema.optional(Schema.Number),
    batch_export: Schema.optional(Schema.String),
  });
