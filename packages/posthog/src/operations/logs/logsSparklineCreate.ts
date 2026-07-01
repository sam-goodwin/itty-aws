import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface LogsSparklineCreateInput {
  project_id: string;
  query?: {
    dateRange?: { date_from?: string | null; date_to?: string | null };
    severityLevels?: (
      | "trace"
      | "debug"
      | "info"
      | "warn"
      | "error"
      | "fatal"
    )[];
    serviceNames?: string[];
    searchTerm?: string;
    filterGroup?: {
      key?: string;
      type?: "log" | "log_attribute" | "log_resource_attribute";
      operator?:
        | "exact"
        | "is_not"
        | "icontains"
        | "not_icontains"
        | "regex"
        | "not_regex"
        | "gt"
        | "lt"
        | "is_date_exact"
        | "is_date_before"
        | "is_date_after"
        | "is_set"
        | "is_not_set";
      value?: unknown;
    }[];
    sparklineBreakdownBy?: "severity" | "service";
  };
}
export const LogsSparklineCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.optional(
      Schema.Struct({
        dateRange: Schema.optional(
          Schema.Struct({
            date_from: Schema.optional(Schema.NullOr(Schema.String)),
            date_to: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
        severityLevels: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
            ]),
          ),
        ),
        serviceNames: Schema.optional(Schema.Array(Schema.String)),
        searchTerm: Schema.optional(Schema.String),
        filterGroup: Schema.optional(
          Schema.Array(
            Schema.Struct({
              key: Schema.optional(Schema.String),
              type: Schema.optional(
                Schema.Literals([
                  "log",
                  "log_attribute",
                  "log_resource_attribute",
                ]),
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
              value: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
        sparklineBreakdownBy: Schema.optional(
          Schema.Literals(["severity", "service"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/logs/sparkline/",
    }),
  ) as unknown as Schema.Codec<LogsSparklineCreateInput>;

// Output Schema
export interface LogsSparklineCreateOutput {
  results?: {
    time?: string;
    severity?: string;
    service?: string;
    count?: number;
    bytes_uncompressed?: number;
  }[];
}
export const LogsSparklineCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          time: Schema.optional(Schema.String),
          severity: Schema.optional(Schema.String),
          service: Schema.optional(Schema.String),
          count: Schema.optional(Schema.Number),
          bytes_uncompressed: Schema.optional(Schema.Number),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LogsSparklineCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsSparklineCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogsSparklineCreateInput,
  outputSchema: LogsSparklineCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
