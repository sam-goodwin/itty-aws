import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const SignalsScoutRunsEmissionReportsBatchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    run_ids: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/signals/scout/runs/emissions/reports/batch/",
    }),
  );
export type SignalsScoutRunsEmissionReportsBatchInput =
  typeof SignalsScoutRunsEmissionReportsBatchInput.Type;

// Output Schema
export const SignalsScoutRunsEmissionReportsBatchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      finding_id: Schema.String,
      source_id: Schema.String,
      report: Schema.Unknown,
    }),
  );
export type SignalsScoutRunsEmissionReportsBatchOutput =
  typeof SignalsScoutRunsEmissionReportsBatchOutput.Type;

// The operation
/**
 * List the inbox reports many runs' findings linked to
 *
 * Batched form of the per-run emission-reports endpoint. For every finding the requested runs emitted, resolve the inbox `SignalReport` (if any) its signal grouped into — all in a single ClickHouse round-trip rather than one query per run, which is what made the findings page slow to open. `report` is null when a finding hasn't grouped yet, was de-duplicated, or its signal was deleted. Strictly team-scoped — run ids belonging to another team contribute no rows.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsScoutRunsEmissionReportsBatch =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SignalsScoutRunsEmissionReportsBatchInput,
    outputSchema: SignalsScoutRunsEmissionReportsBatchOutput,
  }));
