import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SignalsScoutRunsRecentEmissionsInput {
  project_id: string;
  date_from?: string;
  date_to?: string;
  limit?: number;
  skill_name?: string;
}
export const SignalsScoutRunsRecentEmissionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    date_from: Schema.optional(Schema.String),
    date_to: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    skill_name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/scout/runs/emissions/recent/",
    }),
  ) as unknown as Schema.Codec<SignalsScoutRunsRecentEmissionsInput>;

// Output Schema
export type SignalsScoutRunsRecentEmissionsOutput = {
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
export const SignalsScoutRunsRecentEmissionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
  ) as unknown as Schema.Codec<SignalsScoutRunsRecentEmissionsOutput>;

// The operation
/**
 * List recent emitted findings across all runs
 *
 * Return the team's recently emitted scout findings across *every* run, newest first — the cross-run counterpart to the per-run `emissions` action. Each row carries its `run_id`, so you can regroup by run without first listing runs and fanning out one `emissions` call each. Pass `skill_name` to scope to a single scout, and `date_from` / `date_to` (a half-open window on `emitted_at`) to bound or paginate — set `date_to` to the oldest emission's `emitted_at` to walk back past the limit. Pure Postgres, no ClickHouse round-trip. Capped at 200 rows (default 50).
 *
 * @param date_from - ISO-8601 inclusive lower bound on `emitted_at`. Omit to skip the lower bound.
 * @param date_to - ISO-8601 exclusive upper bound on `emitted_at`. Pass to walk back past the result cap on subsequent calls (cursor-style: set to the `emitted_at` of the oldest emission from the prior page).
 * @param limit - Max rows to return (default 50, hard cap 200).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param skill_name - Exact-match filter on the emitting scout's skill (e.g. `signals-scout-errors`). Narrows to findings one specialist surfaced; omit to span every scout on the team.
 */
export const signalsScoutRunsRecentEmissions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SignalsScoutRunsRecentEmissionsInput,
    outputSchema: SignalsScoutRunsRecentEmissionsOutput,
  }));
