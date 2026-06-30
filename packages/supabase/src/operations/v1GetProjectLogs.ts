import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetProjectLogsInput {
  ref: string;
  sql?: string;
  iso_timestamp_start?: string;
  iso_timestamp_end?: string;
}
export const V1GetProjectLogsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
  sql: Schema.optional(Schema.String),
  iso_timestamp_start: Schema.optional(Schema.String),
  iso_timestamp_end: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/projects/{ref}/analytics/endpoints/logs",
  }),
) as unknown as Schema.Codec<V1GetProjectLogsInput>;

// Output Schema
export interface V1GetProjectLogsOutput {
  result?: unknown[];
  error?:
    | string
    | {
        code: number;
        errors: {
          domain: string;
          location: string;
          locationType: string;
          message: string;
          reason: string;
        }[];
        message: string;
        status: string;
      };
}
export const V1GetProjectLogsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    result: Schema.optional(Schema.Array(Schema.Unknown)),
    error: Schema.optional(
      Schema.Union([
        Schema.String,
        Schema.Struct({
          code: Schema.Number,
          errors: Schema.Array(
            Schema.Struct({
              domain: Schema.String,
              location: Schema.String,
              locationType: Schema.String,
              message: Schema.String,
              reason: Schema.String,
            }),
          ),
          message: Schema.String,
          status: Schema.String,
        }),
      ]),
    ),
  },
) as unknown as Schema.Codec<V1GetProjectLogsOutput>;

// The operation
/**
 * Gets all project's logs in a single log stream
 *
 * Executes an SQL or LQL query on the project's unified logs stream.
 * Either the `iso_timestamp_start` and `iso_timestamp_end` parameters must be provided.
 * If both are not provided, only the last 1 minute of logs will be queried.
 * The timestamp range must be no more than 24 hours and is rounded to the nearest minute. If the range is more than 24 hours, a validation error will be thrown.
 * Filter by the `source` column to specify specific log sources, such as edge_logs, postgres_logs, etc.
 * Note: SQL must be written in **ClickHouse SQL dialect**.
 *
 * @param ref - Project ref
 * @param sql - Custom SQL query to execute on the logs. See [querying logs](/docs/guides/telemetry/logs?queryGroups=product&product=postgres&queryGroups=source&source=edge_logs#querying-with-the-logs-explorer) for more details.
 */
export const v1GetProjectLogs = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1GetProjectLogsInput,
  outputSchema: V1GetProjectLogsOutput,
  errors: [Forbidden] as const,
}));
