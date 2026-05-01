import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LogsAlertsSimulateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    filters: Schema.Unknown,
    threshold_count: Schema.Number,
    threshold_operator: Schema.Literals(["above", "below"]),
    window_minutes: Schema.Number,
    evaluation_periods: Schema.optional(Schema.Number),
    datapoints_to_alarm: Schema.optional(Schema.Number),
    cooldown_minutes: Schema.optional(Schema.Number),
    date_from: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/logs/alerts/simulate/",
    }),
  );
export type LogsAlertsSimulateCreateInput =
  typeof LogsAlertsSimulateCreateInput.Type;

// Output Schema
export const LogsAlertsSimulateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buckets: Schema.Array(
      Schema.Struct({
        timestamp: Schema.String,
        count: Schema.Number,
        threshold_breached: Schema.Boolean,
        state: Schema.String,
        notification: Schema.String,
        reason: Schema.String,
      }),
    ),
    fire_count: Schema.Number,
    resolve_count: Schema.Number,
    total_buckets: Schema.Number,
    threshold_count: Schema.Number,
    threshold_operator: Schema.String,
  });
export type LogsAlertsSimulateCreateOutput =
  typeof LogsAlertsSimulateCreateOutput.Type;

// The operation
/**
 * Simulate a logs alert on historical data using the full state machine. Read-only — no alert check records are created.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsAlertsSimulateCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LogsAlertsSimulateCreateInput,
    outputSchema: LogsAlertsSimulateCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
