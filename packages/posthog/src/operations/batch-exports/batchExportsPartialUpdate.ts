import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface BatchExportsPartialUpdateInput {
  id: string;
  project_id: string;
  name?: string;
  model?: "events" | "persons" | "sessions";
  destination?:
    | {
        type: "Databricks";
        integration_id: number;
        config: {
          http_path: string;
          catalog: string;
          schema: string;
          table_name: string;
          use_variant_type?: boolean;
          use_automatic_schema_evolution?: boolean;
        };
      }
    | {
        type: "AzureBlob";
        integration_id: number;
        config: {
          container_name: string;
          prefix?: string;
          compression?: "brotli" | "gzip" | "lz4" | "snappy" | "zstd" | null;
          file_format?: "Parquet" | "JSONLines";
          max_file_size_mb?: number | null;
        };
      }
    | {
        type: "BigQuery";
        integration_id: number;
        config: {
          dataset_id: string;
          table_id?: string;
          use_json_type?: boolean;
        };
      }
    | {
        type: "Postgres";
        integration_id: number;
        config: {
          database: string;
          schema?: string;
          table_name?: string;
          has_self_signed_cert?: boolean;
        };
      }
    | {
        type: "AwsS3";
        integration_id?: number;
        config: {
          bucket_name: string;
          region: string;
          prefix: string;
          compression?: "brotli" | "gzip" | "lz4" | "snappy" | "zstd" | null;
          file_format?: "Parquet" | "JSONLines";
          max_file_size_mb?: number | null;
          encryption?: string | null;
          kms_key_id?: string | null;
        };
      }
    | {
        type: "S3Compatible";
        integration_id?: number;
        config: {
          bucket_name: string;
          region: string;
          prefix: string;
          compression?: "brotli" | "gzip" | "lz4" | "snappy" | "zstd" | null;
          file_format?: "Parquet" | "JSONLines";
          max_file_size_mb?: number | null;
          use_virtual_style_addressing?: boolean;
        };
      };
  interval?: "hour" | "day" | "week" | "every 5 minutes" | "every 15 minutes";
  paused?: boolean;
  hogql_query?: string;
  filters?: unknown;
  timezone?: string | null;
  offset_day?: number | null;
  offset_hour?: number | null;
}
export const BatchExportsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    model: Schema.optional(Schema.Literals(["events", "persons", "sessions"])),
    destination: Schema.optional(
      Schema.Union([
        Schema.Struct({
          type: Schema.Literals(["Databricks"]),
          integration_id: Schema.Number,
          config: Schema.Struct({
            http_path: Schema.String,
            catalog: Schema.String,
            schema: Schema.String,
            table_name: Schema.String,
            use_variant_type: Schema.optional(Schema.Boolean),
            use_automatic_schema_evolution: Schema.optional(Schema.Boolean),
          }),
        }),
        Schema.Struct({
          type: Schema.Literals(["AzureBlob"]),
          integration_id: Schema.Number,
          config: Schema.Struct({
            container_name: Schema.String,
            prefix: Schema.optional(Schema.String),
            compression: Schema.optional(
              Schema.NullOr(
                Schema.Literals(["brotli", "gzip", "lz4", "snappy", "zstd"]),
              ),
            ),
            file_format: Schema.optional(
              Schema.Literals(["Parquet", "JSONLines"]),
            ),
            max_file_size_mb: Schema.optional(Schema.NullOr(Schema.Number)),
          }),
        }),
        Schema.Struct({
          type: Schema.Literals(["BigQuery"]),
          integration_id: Schema.Number,
          config: Schema.Struct({
            dataset_id: Schema.String,
            table_id: Schema.optional(Schema.String),
            use_json_type: Schema.optional(Schema.Boolean),
          }),
        }),
        Schema.Struct({
          type: Schema.Literals(["Postgres"]),
          integration_id: Schema.Number,
          config: Schema.Struct({
            database: Schema.String,
            schema: Schema.optional(Schema.String),
            table_name: Schema.optional(Schema.String),
            has_self_signed_cert: Schema.optional(Schema.Boolean),
          }),
        }),
        Schema.Struct({
          type: Schema.Literals(["AwsS3"]),
          integration_id: Schema.optional(Schema.Number),
          config: Schema.Struct({
            bucket_name: Schema.String,
            region: Schema.String,
            prefix: Schema.String,
            compression: Schema.optional(
              Schema.NullOr(
                Schema.Literals(["brotli", "gzip", "lz4", "snappy", "zstd"]),
              ),
            ),
            file_format: Schema.optional(
              Schema.Literals(["Parquet", "JSONLines"]),
            ),
            max_file_size_mb: Schema.optional(Schema.NullOr(Schema.Number)),
            encryption: Schema.optional(Schema.NullOr(Schema.String)),
            kms_key_id: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        }),
        Schema.Struct({
          type: Schema.Literals(["S3Compatible"]),
          integration_id: Schema.optional(Schema.Number),
          config: Schema.Struct({
            bucket_name: Schema.String,
            region: Schema.String,
            prefix: Schema.String,
            compression: Schema.optional(
              Schema.NullOr(
                Schema.Literals(["brotli", "gzip", "lz4", "snappy", "zstd"]),
              ),
            ),
            file_format: Schema.optional(
              Schema.Literals(["Parquet", "JSONLines"]),
            ),
            max_file_size_mb: Schema.optional(Schema.NullOr(Schema.Number)),
            use_virtual_style_addressing: Schema.optional(Schema.Boolean),
          }),
        }),
      ]),
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
    hogql_query: Schema.optional(Schema.String),
    filters: Schema.optional(Schema.Unknown),
    timezone: Schema.optional(Schema.NullOr(Schema.String)),
    offset_day: Schema.optional(Schema.NullOr(Schema.Number)),
    offset_hour: Schema.optional(Schema.NullOr(Schema.Number)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/batch_exports/{id}/",
    }),
  ) as unknown as Schema.Codec<BatchExportsPartialUpdateInput>;

// Output Schema
export interface BatchExportsPartialUpdateOutput {
  id?: string;
  team_id?: number;
  name?: string;
  model?: "events" | "persons" | "sessions" | "" | null;
  destination?: {
    type?:
      | "S3"
      | "AwsS3"
      | "S3Compatible"
      | "Snowflake"
      | "Postgres"
      | "Redshift"
      | "BigQuery"
      | "Databricks"
      | "AzureBlob"
      | "Workflows"
      | "HTTP"
      | "NoOp"
      | "FileDownload";
    config?:
      | {
          http_path: string;
          catalog: string;
          schema: string;
          table_name: string;
          use_variant_type?: boolean;
          use_automatic_schema_evolution?: boolean;
        }
      | {
          container_name: string;
          prefix?: string;
          compression?: "brotli" | "gzip" | "lz4" | "snappy" | "zstd" | null;
          file_format?: "Parquet" | "JSONLines";
          max_file_size_mb?: number | null;
        }
      | { dataset_id: string; table_id?: string; use_json_type?: boolean }
      | {
          database: string;
          schema?: string;
          table_name?: string;
          has_self_signed_cert?: boolean;
        }
      | {
          bucket_name: string;
          region: string;
          prefix: string;
          compression?: "brotli" | "gzip" | "lz4" | "snappy" | "zstd" | null;
          file_format?: "Parquet" | "JSONLines";
          max_file_size_mb?: number | null;
          encryption?: string | null;
          kms_key_id?: string | null;
        }
      | {
          bucket_name: string;
          region: string;
          prefix: string;
          compression?: "brotli" | "gzip" | "lz4" | "snappy" | "zstd" | null;
          file_format?: "Parquet" | "JSONLines";
          max_file_size_mb?: number | null;
          use_virtual_style_addressing?: boolean;
        };
    integration?: number | null;
    integration_id?: number | null;
  };
  interval?: "hour" | "day" | "week" | "every 5 minutes" | "every 15 minutes";
  paused?: boolean;
  created_at?: string;
  last_updated_at?: string;
  last_paused_at?: string | null;
  start_at?: string | null;
  end_at?: string | null;
  latest_runs?: {
    id?: string;
    status?:
      | "Cancelled"
      | "Completed"
      | "ContinuedAsNew"
      | "Failed"
      | "FailedRetryable"
      | "FailedBilling"
      | "Terminated"
      | "TimedOut"
      | "Running"
      | "Starting";
    records_completed?: number | null;
    records_failed?: number | null;
    latest_error?: string | null;
    data_interval_start?: string | null;
    data_interval_end?: string;
    cursor?: string | null;
    created_at?: string;
    finished_at?: string | null;
    last_updated_at?: string;
    records_total_count?: number | null;
    bytes_exported?: number | null;
    batch_export?: string | null;
    batch_export_on_demand?: string | null;
    backfill?: string | null;
  }[];
  hogql_query?: string;
  schema?: unknown;
  filters?: unknown;
  timezone?: unknown;
  offset_day?: number | null;
  offset_hour?: number | null;
}
export const BatchExportsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    team_id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    model: Schema.optional(
      Schema.NullOr(
        Schema.Union([
          Schema.Literals(["events", "persons", "sessions"]),
          Schema.Literals([""]),
        ]),
      ),
    ),
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
        config: Schema.optional(
          Schema.Union([
            Schema.Struct({
              http_path: Schema.String,
              catalog: Schema.String,
              schema: Schema.String,
              table_name: Schema.String,
              use_variant_type: Schema.optional(Schema.Boolean),
              use_automatic_schema_evolution: Schema.optional(Schema.Boolean),
            }),
            Schema.Struct({
              container_name: Schema.String,
              prefix: Schema.optional(Schema.String),
              compression: Schema.optional(
                Schema.NullOr(
                  Schema.Literals(["brotli", "gzip", "lz4", "snappy", "zstd"]),
                ),
              ),
              file_format: Schema.optional(
                Schema.Literals(["Parquet", "JSONLines"]),
              ),
              max_file_size_mb: Schema.optional(Schema.NullOr(Schema.Number)),
            }),
            Schema.Struct({
              dataset_id: Schema.String,
              table_id: Schema.optional(Schema.String),
              use_json_type: Schema.optional(Schema.Boolean),
            }),
            Schema.Struct({
              database: Schema.String,
              schema: Schema.optional(Schema.String),
              table_name: Schema.optional(Schema.String),
              has_self_signed_cert: Schema.optional(Schema.Boolean),
            }),
            Schema.Struct({
              bucket_name: Schema.String,
              region: Schema.String,
              prefix: Schema.String,
              compression: Schema.optional(
                Schema.NullOr(
                  Schema.Literals(["brotli", "gzip", "lz4", "snappy", "zstd"]),
                ),
              ),
              file_format: Schema.optional(
                Schema.Literals(["Parquet", "JSONLines"]),
              ),
              max_file_size_mb: Schema.optional(Schema.NullOr(Schema.Number)),
              encryption: Schema.optional(Schema.NullOr(Schema.String)),
              kms_key_id: Schema.optional(Schema.NullOr(Schema.String)),
            }),
            Schema.Struct({
              bucket_name: Schema.String,
              region: Schema.String,
              prefix: Schema.String,
              compression: Schema.optional(
                Schema.NullOr(
                  Schema.Literals(["brotli", "gzip", "lz4", "snappy", "zstd"]),
                ),
              ),
              file_format: Schema.optional(
                Schema.Literals(["Parquet", "JSONLines"]),
              ),
              max_file_size_mb: Schema.optional(Schema.NullOr(Schema.Number)),
              use_virtual_style_addressing: Schema.optional(Schema.Boolean),
            }),
          ]),
        ),
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
  }) as unknown as Schema.Codec<BatchExportsPartialUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this batch export.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const batchExportsPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BatchExportsPartialUpdateInput,
    outputSchema: BatchExportsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
