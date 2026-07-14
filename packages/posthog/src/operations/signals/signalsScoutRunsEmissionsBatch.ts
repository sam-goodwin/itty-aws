import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SignalsScoutRunsEmissionsBatchInput {
  project_id: string;
  run_ids: string[];
}
export const SignalsScoutRunsEmissionsBatchInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    run_ids: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/signals/scout/runs/emissions/batch/",
    }),
  ) as unknown as Schema.Codec<SignalsScoutRunsEmissionsBatchInput>;

// Output Schema
export type SignalsScoutRunsEmissionsBatchOutput = {
  id: string;
  run_id: string;
  finding_id: string;
  description: string;
  weight: number;
  confidence: number;
  severity: "P0" | "P1" | "P2" | "P3" | "P4" | null;
  tags: string[];
  source_id: string;
  emitted_at: string;
}[];
export const SignalsScoutRunsEmissionsBatchOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
      run_id: Schema.String,
      finding_id: Schema.String,
      description: Schema.String,
      weight: Schema.Number,
      confidence: Schema.Number,
      severity: Schema.NullOr(Schema.Literals(["P0", "P1", "P2", "P3", "P4"])),
      tags: Schema.Array(Schema.String),
      source_id: Schema.String,
      emitted_at: Schema.String,
    }),
  ) as unknown as Schema.Codec<SignalsScoutRunsEmissionsBatchOutput>;

// The operation
/**
 * List emitted findings for many runs at once
 *
 * Batched form of the per-run emissions endpoint: return the findings every requested `SignalScoutRun` emitted, flattened newest-first, in a single request. Each row carries its `run_id`, so the caller can regroup by run. The findings UI uses this to load the whole recent window in one round-trip instead of one request per run. Strictly team-scoped — run ids belonging to another team contribute no rows (no per-run 404; one stale id never fails the batch).
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsScoutRunsEmissionsBatch =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalsScoutRunsEmissionsBatchInput,
    outputSchema: SignalsScoutRunsEmissionsBatchOutput,
  }));
