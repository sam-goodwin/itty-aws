import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface LogsAlertsSimulateCreateInput {
  project_id: string;
  filters?: {
    filterGroup?: {
      type?: "AND" | "OR";
      values?: { type?: "AND" | "OR"; values?: unknown[] }[];
    } | null;
    serviceNames?: string[] | null;
    severityLevels?:
      | ("trace" | "debug" | "info" | "warn" | "error" | "fatal")[]
      | null;
  };
  threshold_count?: number;
  threshold_operator?: "above" | "below";
  window_minutes?: number;
  check_interval_minutes?: number;
  evaluation_periods?: number;
  datapoints_to_alarm?: number;
  cooldown_minutes?: number;
  date_from?: string;
}
export const LogsAlertsSimulateCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    filters: Schema.optional(
      Schema.Struct({
        filterGroup: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              type: Schema.optional(Schema.Literals(["AND", "OR"])),
              values: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    type: Schema.optional(Schema.Literals(["AND", "OR"])),
                    values: Schema.optional(Schema.Array(Schema.Unknown)),
                  }),
                ),
              ),
            }),
          ),
        ),
        serviceNames: Schema.optional(
          Schema.NullOr(Schema.Array(Schema.String)),
        ),
        severityLevels: Schema.optional(
          Schema.NullOr(
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
        ),
      }),
    ),
    threshold_count: Schema.optional(Schema.Number),
    threshold_operator: Schema.optional(Schema.Literals(["above", "below"])),
    window_minutes: Schema.optional(Schema.Number),
    check_interval_minutes: Schema.optional(Schema.Number),
    evaluation_periods: Schema.optional(Schema.Number),
    datapoints_to_alarm: Schema.optional(Schema.Number),
    cooldown_minutes: Schema.optional(Schema.Number),
    date_from: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/logs/alerts/simulate/",
    }),
  ) as unknown as Schema.Codec<LogsAlertsSimulateCreateInput>;

// Output Schema
export interface LogsAlertsSimulateCreateOutput {
  buckets?: {
    timestamp?: string;
    count?: number;
    threshold_breached?: boolean;
    state?: string;
    notification?: string;
    reason?: string;
  }[];
  fire_count?: number;
  resolve_count?: number;
  total_buckets?: number;
  threshold_count?: number;
  threshold_operator?: string;
}
export const LogsAlertsSimulateCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    buckets: Schema.optional(
      Schema.Array(
        Schema.Struct({
          timestamp: Schema.optional(Schema.String),
          count: Schema.optional(Schema.Number),
          threshold_breached: Schema.optional(Schema.Boolean),
          state: Schema.optional(Schema.String),
          notification: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
        }),
      ),
    ),
    fire_count: Schema.optional(Schema.Number),
    resolve_count: Schema.optional(Schema.Number),
    total_buckets: Schema.optional(Schema.Number),
    threshold_count: Schema.optional(Schema.Number),
    threshold_operator: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LogsAlertsSimulateCreateOutput>;

// The operation
/**
 * Simulate a logs alert on historical data using the full state machine. Read-only — no alert check records are created.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsAlertsSimulateCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LogsAlertsSimulateCreateInput,
  outputSchema: LogsAlertsSimulateCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
