import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface SignalsScoutRunsEmissionReportsInput {
  project_id: string;
  run_id: string;
}
export const SignalsScoutRunsEmissionReportsInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    run_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/scout/runs/{run_id}/emissions/reports/",
    }),
  ) as unknown as Schema.Codec<SignalsScoutRunsEmissionReportsInput>;

// Output Schema
export type SignalsScoutRunsEmissionReportsOutput = {
  finding_id: string;
  source_id: string;
  report: { id: string; title: string | null; status: string } | null;
}[];
export const SignalsScoutRunsEmissionReportsOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      finding_id: Schema.String,
      source_id: Schema.String,
      report: Schema.NullOr(
        Schema.Struct({
          id: Schema.String,
          title: Schema.NullOr(Schema.String),
          status: Schema.String,
        }),
      ),
    }),
  ) as unknown as Schema.Codec<SignalsScoutRunsEmissionReportsOutput>;

// The operation
/**
 * List the inbox reports a run's findings linked to
 *
 * Best-effort reverse of the report -> signals link. For each finding the run emitted, resolve the inbox `SignalReport` (if any) its underlying signal grouped into by walking the deterministic `source_id` back through the signal store. `report` is null when the finding hasn't grouped into a report yet, was de-duplicated away, or its signal was deleted. Lets the scout UI surface which inbox report a finding contributed to — the reverse of the report's evidence list. Strictly team-scoped — a run UUID belonging to another team returns 404.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param run_id - UUID of the `SignalScoutRun` bridge row.
 */
export const signalsScoutRunsEmissionReports =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalsScoutRunsEmissionReportsInput,
    outputSchema: SignalsScoutRunsEmissionReportsOutput,
    errors: [NotFound] as const,
  }));
