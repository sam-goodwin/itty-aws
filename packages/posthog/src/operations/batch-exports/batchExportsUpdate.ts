import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const BatchExportsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    model: Schema.optional(Schema.Literals(["events", "persons", "sessions"])),
    destination: Schema.Unknown,
    interval: Schema.Literals([
      "hour",
      "day",
      "week",
      "every 5 minutes",
      "every 15 minutes",
    ]),
    paused: Schema.optional(Schema.Boolean),
    hogql_query: Schema.optional(Schema.String),
    filters: Schema.optional(Schema.Unknown),
    timezone: Schema.optional(Schema.NullOr(Schema.String)),
    offset_day: Schema.optional(Schema.NullOr(Schema.Number)),
    offset_hour: Schema.optional(Schema.NullOr(Schema.Number)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/batch_exports/{id}/",
    }),
  );
export type BatchExportsUpdateInput = typeof BatchExportsUpdateInput.Type;

// Output Schema
export const BatchExportsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    team_id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    model: Schema.optional(Schema.Unknown),
    destination: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "S3",
            "AwsS3",
            "S3Compatible",
            "Snowflake",
            "Postgres",
            "Redshift",
            "BigQuery",
            "Databricks",
            "AzureBlob",
            "Workflows",
            "HTTP",
            "NoOp",
            "FileDownload",
          ]),
        ),
        config: Schema.optional(Schema.Unknown),
        integration: Schema.optional(Schema.NullOr(Schema.Number)),
        integration_id: Schema.optional(Schema.NullOr(Schema.Number)),
      }),
    ),
    interval: Schema.optional(
      Schema.Literals([
        "hour",
        "day",
        "week",
        "every 5 minutes",
        "every 15 minutes",
      ]),
    ),
    paused: Schema.optional(Schema.Boolean),
    created_at: Schema.optional(Schema.String),
    last_updated_at: Schema.optional(Schema.String),
    last_paused_at: Schema.optional(Schema.NullOr(Schema.String)),
    start_at: Schema.optional(Schema.NullOr(Schema.String)),
    end_at: Schema.optional(Schema.NullOr(Schema.String)),
    latest_runs: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
          batch_export: Schema.optional(Schema.NullOr(Schema.String)),
          batch_export_on_demand: Schema.optional(Schema.NullOr(Schema.String)),
          backfill: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
    hogql_query: Schema.optional(Schema.String),
    schema: Schema.optional(Schema.Unknown),
    filters: Schema.optional(Schema.Unknown),
    timezone: Schema.optional(Schema.Unknown),
    offset_day: Schema.optional(Schema.NullOr(Schema.Number)),
    offset_hour: Schema.optional(Schema.NullOr(Schema.Number)),
  });
export type BatchExportsUpdateOutput = typeof BatchExportsUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this batch export.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const batchExportsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BatchExportsUpdateInput,
  outputSchema: BatchExportsUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
