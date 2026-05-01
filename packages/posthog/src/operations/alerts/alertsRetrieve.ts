import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const AlertsRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
  checks_date_from: Schema.optional(Schema.String),
  checks_date_to: Schema.optional(Schema.String),
  checks_limit: Schema.optional(Schema.Number),
  checks_offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/alerts/{id}/" }),
);
export type AlertsRetrieveInput = typeof AlertsRetrieveInput.Type;

// Output Schema
export const AlertsRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
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
  created_at: Schema.String,
  insight: Schema.Number,
  name: Schema.optional(Schema.String),
  subscribed_users: Schema.Array(Schema.Number),
  threshold: Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    name: Schema.optional(Schema.String),
    configuration: Schema.Struct({
      bounds: Schema.optional(
        Schema.Struct({
          lower: Schema.optional(Schema.NullOr(Schema.Number)),
          upper: Schema.optional(Schema.NullOr(Schema.Number)),
        }),
      ),
      type: Schema.Literals(["absolute", "percentage"]),
    }),
  }),
  condition: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        type: Schema.Literals([
          "absolute_value",
          "relative_increase",
          "relative_decrease",
        ]),
      }),
    ),
  ),
  state: Schema.String,
  enabled: Schema.optional(Schema.Boolean),
  last_notified_at: Schema.NullOr(Schema.String),
  last_checked_at: Schema.NullOr(Schema.String),
  next_check_at: Schema.NullOr(Schema.String),
  checks: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      created_at: Schema.String,
      calculated_value: Schema.NullOr(Schema.Number),
      state: Schema.Literals(["Firing", "Not firing", "Errored", "Snoozed"]),
      targets_notified: Schema.Boolean,
      anomaly_scores: Schema.NullOr(Schema.Unknown),
      triggered_points: Schema.NullOr(Schema.Unknown),
      triggered_dates: Schema.NullOr(Schema.Unknown),
      interval: Schema.NullOr(Schema.String),
      triggered_metadata: Schema.NullOr(Schema.Unknown),
      investigation_status: Schema.Unknown,
      investigation_verdict: Schema.Unknown,
      investigation_summary: Schema.NullOr(Schema.String),
      investigation_notebook_short_id: Schema.NullOr(Schema.String),
      notification_sent_at: Schema.NullOr(Schema.String),
      notification_suppressed_by_agent: Schema.Boolean,
    }),
  ),
  checks_total: Schema.NullOr(Schema.Number),
  config: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        check_ongoing_interval: Schema.optional(Schema.NullOr(Schema.Boolean)),
        series_index: Schema.Number,
        type: Schema.optional(Schema.Literals(["TrendsAlertConfig"])),
      }),
    ),
  ),
  detector_config: Schema.optional(Schema.Unknown),
  calculation_interval: Schema.optional(
    Schema.Literals(["hourly", "daily", "weekly", "monthly"]),
  ),
  snoozed_until: Schema.optional(Schema.NullOr(Schema.String)),
  skip_weekend: Schema.optional(Schema.NullOr(Schema.Boolean)),
  schedule_restriction: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        blocked_windows: Schema.Array(
          Schema.Struct({
            start: Schema.String,
            end: Schema.String,
          }),
        ),
      }),
    ),
  ),
  last_value: Schema.NullOr(Schema.Number),
  investigation_agent_enabled: Schema.optional(Schema.Boolean),
  investigation_gates_notifications: Schema.optional(Schema.Boolean),
  investigation_inconclusive_action: Schema.optional(
    Schema.Literals(["notify", "suppress"]),
  ),
});
export type AlertsRetrieveOutput = typeof AlertsRetrieveOutput.Type;

// The operation
/**
 *
 * @param checks_date_from - Relative date string for the start of the check history window (e.g. '-24h', '-7d', '-14d'). Returns checks created after this time. Max retention is 14 days.
 * @param checks_date_to - Relative date string for the end of the check history window (e.g. '-1h', '-1d'). Defaults to now if not specified.
 * @param checks_limit - Maximum number of check results to return (default 5, max 500). Applied after date filtering.
 * @param checks_offset - Number of newest checks to skip (0-based). Use with checks_limit for pagination. Default 0.
 * @param id - A UUID string identifying this alert configuration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const alertsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AlertsRetrieveInput,
  outputSchema: AlertsRetrieveOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
