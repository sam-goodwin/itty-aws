import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SignalsScoutRunsListInput {
  project_id: string;
  date_from?: string;
  date_to?: string;
  emitted?: string;
  limit?: number;
  skill_name?: string;
  skill_version?: number;
  text?: string;
}
export const SignalsScoutRunsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    date_from: Schema.optional(Schema.String),
    date_to: Schema.optional(Schema.String),
    emitted: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    skill_name: Schema.optional(Schema.String),
    skill_version: Schema.optional(Schema.Number),
    text: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/scout/runs/",
    }),
  ) as unknown as Schema.Codec<SignalsScoutRunsListInput>;

// Output Schema
export type SignalsScoutRunsListOutput = {
  run_id: string;
  skill_name: string;
  skill_version: number;
  status: string;
  created_at: string;
  started_at: string;
  completed_at: string | null;
  task_id?: string | null;
  task_run_id?: string | null;
  task_url?: string | null;
  summary: string;
  error?: string | null;
  failure_reason?: string | null;
  emitted_count: number;
  emitted_finding_ids: string[];
  emitted_report_ids: string[];
  edited_report_ids: string[];
}[];
export const SignalsScoutRunsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
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
    }),
  ) as unknown as Schema.Codec<SignalsScoutRunsListOutput>;

// The operation
/**
 * Search recent agent runs
 *
 * Return the most recent `SignalScoutRun` summaries for this project, newest first. Used by the headless scout to dedupe against work other runs already covered. ILIKE matches on `summary`. `date_from` / `date_to` are a half-open window on `created_at` (`>= date_from`, `< date_to`); pass `date_to` on subsequent calls to walk past the 100-row cap. Pass `emitted=true` to see only runs that surfaced at least one finding. Pass `skill_name` (optionally with `skill_version`) to scope to a single scout. Results capped at 100.
 *
 * @param date_from - ISO-8601 inclusive lower bound on `created_at`. Omit to skip the lower bound.
 * @param date_to - ISO-8601 exclusive upper bound on `created_at`. Pass to walk back past the result cap on subsequent calls (cursor-style: set to the `created_at` of the oldest run from the prior page).
 * @param emitted - Filter by emit outcome. `true` returns only runs that emitted at least one finding (`emitted_count > 0`); `false` returns only runs that emitted nothing. Omit for both.
 * @param limit - Max rows to return (default 20, hard cap 100).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param skill_name - Exact-match filter on the scout skill (e.g. `signals-scout-errors`). Narrows the run dump to a single scout — the primary scoping path when a specialist dedupes against its own past runs. Omit to span every scout on the team.
 * @param skill_version - Exact-match filter on the skill version. Pair with `skill_name` to pin one version; omit for all.
 * @param text - Case-insensitive substring match on the scout's end-of-run `summary`. Omit to skip the filter.
 */
export const signalsScoutRunsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsScoutRunsListInput,
    outputSchema: SignalsScoutRunsListOutput,
  }),
);
