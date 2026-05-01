import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LogsAlertsEventsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/logs/alerts/{id}/events/",
    }),
  );
export type LogsAlertsEventsListInput = typeof LogsAlertsEventsListInput.Type;

// Output Schema
export const LogsAlertsEventsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        kind: Schema.Literals([
          "check",
          "reset",
          "enable",
          "disable",
          "snooze",
          "unsnooze",
          "threshold_change",
        ]),
        state_before: Schema.String,
        state_after: Schema.String,
        threshold_breached: Schema.Boolean,
        result_count: Schema.NullOr(Schema.Number),
        error_message: Schema.NullOr(Schema.String),
        query_duration_ms: Schema.NullOr(Schema.Number),
      }),
    ),
  });
export type LogsAlertsEventsListOutput = typeof LogsAlertsEventsListOutput.Type;

// The operation
/**
 * Paginated event history for this alert, newest first. Returns state transitions, errored checks, and user-initiated control-plane rows (reset, enable/disable, snooze/unsnooze, threshold change) — quiet no-op check rows (where state didn't change and there was no error) are filtered out since only the last 10 are kept and they carry no forensic value. Optional `?kind=...` narrows to a single kind.
 *
 * @param id - A UUID string identifying this logs alert configuration.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsAlertsEventsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LogsAlertsEventsListInput,
    outputSchema: LogsAlertsEventsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
