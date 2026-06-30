import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const SignalsScoutRunsEmissionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    run_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/scout/runs/{run_id}/emissions/",
    }),
  );
export type SignalsScoutRunsEmissionsInput =
  typeof SignalsScoutRunsEmissionsInput.Type;

// Output Schema
export const SignalsScoutRunsEmissionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
      run_id: Schema.String,
      finding_id: Schema.String,
      description: Schema.String,
      weight: Schema.Number,
      confidence: Schema.Number,
      severity: Schema.Unknown,
      tags: Schema.Array(Schema.String),
      source_id: Schema.String,
      emitted_at: Schema.String,
    }),
  );
export type SignalsScoutRunsEmissionsOutput =
  typeof SignalsScoutRunsEmissionsOutput.Type;

// The operation
/**
 * List a run's emitted findings
 *
 * Return the findings a `SignalScoutRun` emitted to the inbox, newest first — one row per emit with its `description` (the finding text as surfaced), `weight`, `confidence`, `severity`, and the deterministic `source_id` that joins back to the underlying signal. Lets a team and its agents see *what* a run surfaced without parsing `emitted_finding_ids` or scanning the signal store. Strictly team-scoped — a run UUID belonging to another team returns 404.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param run_id - UUID of the `SignalScoutRun` bridge row.
 */
export const signalsScoutRunsEmissions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsScoutRunsEmissionsInput,
    outputSchema: SignalsScoutRunsEmissionsOutput,
    errors: [NotFound] as const,
  }),
);
