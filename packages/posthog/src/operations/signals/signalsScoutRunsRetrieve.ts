import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const SignalsScoutRunsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    run_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/scout/runs/{run_id}/",
    }),
  );
export type SignalsScoutRunsRetrieveInput =
  typeof SignalsScoutRunsRetrieveInput.Type;

// Output Schema
export const SignalsScoutRunsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    run_id: Schema.String,
    skill_name: Schema.String,
    skill_version: Schema.Number,
    status: Schema.String,
    created_at: Schema.String,
    started_at: Schema.String,
    completed_at: Schema.NullOr(Schema.String),
    task_id: Schema.optional(Schema.NullOr(Schema.String)),
    task_run_id: Schema.optional(Schema.NullOr(Schema.String)),
    task_url: Schema.optional(Schema.NullOr(Schema.String)),
    summary: Schema.String,
    error: Schema.optional(Schema.NullOr(Schema.String)),
    failure_reason: Schema.optional(Schema.NullOr(Schema.String)),
    emitted_count: Schema.Number,
    emitted_finding_ids: Schema.Array(Schema.String),
    emitted_report_ids: Schema.Array(Schema.String),
    edited_report_ids: Schema.Array(Schema.String),
  });
export type SignalsScoutRunsRetrieveOutput =
  typeof SignalsScoutRunsRetrieveOutput.Type;

// The operation
/**
 * Get a run by ID
 *
 * Return the full `SignalScoutRun` row. Status, timing, and error flow from the linked `tasks.TaskRun`. Strictly team-scoped — a UUID belonging to another team returns 404.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param run_id - UUID of the `SignalScoutRun` bridge row.
 */
export const signalsScoutRunsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsScoutRunsRetrieveInput,
    outputSchema: SignalsScoutRunsRetrieveOutput,
    errors: [NotFound] as const,
  }),
);
