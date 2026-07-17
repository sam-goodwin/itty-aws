import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface LogsServicesCreateInput {
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
  };
}
export const LogsServicesCreateInput =
  /*@__PURE__*/ Schema.Struct({
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
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/logs/services/",
    }),
  ) as unknown as Schema.Codec<LogsServicesCreateInput>;

// Output Schema
export interface LogsServicesCreateOutput {
  services?: {
    service_name?: string;
    log_count?: number;
    error_count?: number;
    error_rate?: number;
    volume_share_pct?: number;
    severity_breakdown?: {
      debug: number;
      info: number;
      warn: number;
      error: number;
    };
    active_rules?: {
      rule_id: string;
      rule_name: string;
      summary_string: string;
    }[];
  }[];
  sparkline?: { time?: string; service_name?: string; count?: number }[];
  summary?: {
    top_services_count: number;
    top_services_volume_share_pct: number;
  };
}
export const LogsServicesCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    services: Schema.optional(
      Schema.Array(
        Schema.Struct({
          service_name: Schema.optional(Schema.String),
          log_count: Schema.optional(Schema.Number),
          error_count: Schema.optional(Schema.Number),
          error_rate: Schema.optional(Schema.Number),
          volume_share_pct: Schema.optional(Schema.Number),
          severity_breakdown: Schema.optional(
            Schema.Struct({
              debug: Schema.Number,
              info: Schema.Number,
              warn: Schema.Number,
              error: Schema.Number,
            }),
          ),
          active_rules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                rule_id: Schema.String,
                rule_name: Schema.String,
                summary_string: Schema.String,
              }),
            ),
          ),
        }),
      ),
    ),
    sparkline: Schema.optional(
      Schema.Array(
        Schema.Struct({
          time: Schema.optional(Schema.String),
          service_name: Schema.optional(Schema.String),
          count: Schema.optional(Schema.Number),
        }),
      ),
    ),
    summary: Schema.optional(
      Schema.Struct({
        top_services_count: Schema.Number,
        top_services_volume_share_pct: Schema.Number,
      }),
    ),
  }) as unknown as Schema.Codec<LogsServicesCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsServicesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LogsServicesCreateInput,
  outputSchema: LogsServicesCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
