import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LogsAlertsResetCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/logs/alerts/{id}/reset/",
    }),
  );
export type LogsAlertsResetCreateInput = typeof LogsAlertsResetCreateInput.Type;

// Output Schema
export const LogsAlertsResetCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    enabled: Schema.optional(Schema.Boolean),
    filters: Schema.Unknown,
    threshold_count: Schema.Number,
    threshold_operator: Schema.optional(Schema.Literals(["above", "below"])),
    window_minutes: Schema.optional(Schema.Number),
    check_interval_minutes: Schema.Number,
    state: Schema.Literals([
      "not_firing",
      "firing",
      "pending_resolve",
      "errored",
      "snoozed",
      "broken",
    ]),
    evaluation_periods: Schema.optional(Schema.Number),
    datapoints_to_alarm: Schema.optional(Schema.Number),
    cooldown_minutes: Schema.optional(Schema.Number),
    snooze_until: Schema.optional(Schema.NullOr(Schema.String)),
    next_check_at: Schema.NullOr(Schema.String),
    last_notified_at: Schema.NullOr(Schema.String),
    last_checked_at: Schema.NullOr(Schema.String),
    consecutive_failures: Schema.Number,
    last_error_message: Schema.NullOr(Schema.String),
    state_timeline: Schema.Array(
      Schema.Struct({
        start: Schema.String,
        end: Schema.String,
        state: Schema.Literals([
          "not_firing",
          "firing",
          "pending_resolve",
          "errored",
          "snoozed",
          "broken",
        ]),
        enabled: Schema.Boolean,
      }),
    ),
    destination_types: Schema.Array(Schema.Literals(["slack", "webhook"])),
    created_at: Schema.String,
    created_by: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.String,
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    updated_at: Schema.NullOr(Schema.String),
  });
export type LogsAlertsResetCreateOutput =
  typeof LogsAlertsResetCreateOutput.Type;

// The operation
/**
 * Reset a broken alert. Clears the consecutive-failure counter and schedules an immediate recheck.
 *
 * @param id - A UUID string identifying this logs alert configuration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsAlertsResetCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LogsAlertsResetCreateInput,
    outputSchema: LogsAlertsResetCreateOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
