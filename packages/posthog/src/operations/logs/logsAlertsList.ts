import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LogsAlertsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/logs/alerts/" }),
);
export type LogsAlertsListInput = typeof LogsAlertsListInput.Type;

// Output Schema
export const LogsAlertsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        enabled: Schema.optional(Schema.Boolean),
        filters: Schema.optional(Schema.Unknown),
        threshold_count: Schema.optional(Schema.Number),
        threshold_operator: Schema.optional(
          Schema.Literals(["above", "below"]),
        ),
        window_minutes: Schema.optional(Schema.Number),
        check_interval_minutes: Schema.optional(Schema.Number),
        state: Schema.optional(
          Schema.Literals([
            "not_firing",
            "firing",
            "pending_resolve",
            "errored",
            "snoozed",
            "broken",
          ]),
        ),
        evaluation_periods: Schema.optional(Schema.Number),
        datapoints_to_alarm: Schema.optional(Schema.Number),
        cooldown_minutes: Schema.optional(Schema.Number),
        snooze_until: Schema.optional(Schema.NullOr(Schema.String)),
        next_check_at: Schema.optional(Schema.NullOr(Schema.String)),
        last_notified_at: Schema.optional(Schema.NullOr(Schema.String)),
        last_checked_at: Schema.optional(Schema.NullOr(Schema.String)),
        consecutive_failures: Schema.optional(Schema.Number),
        last_error_message: Schema.optional(Schema.NullOr(Schema.String)),
        state_timeline: Schema.optional(
          Schema.Array(
            Schema.Struct({
              start: Schema.optional(Schema.String),
              end: Schema.optional(Schema.String),
              state: Schema.optional(
                Schema.Literals([
                  "not_firing",
                  "firing",
                  "pending_resolve",
                  "errored",
                  "snoozed",
                  "broken",
                ]),
              ),
              enabled: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
        destination_types: Schema.optional(
          Schema.Array(Schema.Literals(["slack", "webhook"])),
        ),
        created_at: Schema.optional(Schema.String),
        created_by: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              id: Schema.optional(Schema.Number),
              uuid: Schema.optional(Schema.String),
              distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
              first_name: Schema.optional(Schema.String),
              last_name: Schema.optional(Schema.String),
              email: Schema.optional(Schema.String),
              is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
              hedgehog_config: Schema.optional(
                Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
              ),
              role_at_organization: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
        updated_at: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  ),
});
export type LogsAlertsListOutput = typeof LogsAlertsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsAlertsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogsAlertsListInput,
  outputSchema: LogsAlertsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
