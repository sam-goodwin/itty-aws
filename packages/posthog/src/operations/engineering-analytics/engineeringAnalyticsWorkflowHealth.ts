import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest } from "../../errors.ts";

// Input Schema
export interface EngineeringAnalyticsWorkflowHealthInput {
  project_id: string;
  branch?: string;
  date_from?: string;
  date_to?: string;
  source_id?: string;
}
export const EngineeringAnalyticsWorkflowHealthInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch: Schema.optional(Schema.String),
    date_from: Schema.optional(Schema.String),
    date_to: Schema.optional(Schema.String),
    source_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/engineering_analytics/workflow_health/",
    }),
  ) as unknown as Schema.Codec<EngineeringAnalyticsWorkflowHealthInput>;

// Output Schema
export type EngineeringAnalyticsWorkflowHealthOutput = {
  repo: { provider: string; owner: string; name: string };
  buckets: {
    bucket_start: string;
    run_count: number;
    completed: number;
    successes: number;
    failures: number;
  }[];
  workflow_name: string;
  run_count: number;
  success_rate: number | null;
  p50_seconds: number | null;
  p95_seconds: number | null;
  last_failure_at: string | null;
  latest_run_failed: boolean | null;
  latest_run_conclusion: string | null;
  granularity: string;
  billable_minutes?: number | null;
  estimated_cost_usd?: number | null;
}[];
export const EngineeringAnalyticsWorkflowHealthOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      repo: Schema.Struct({
        provider: Schema.String,
        owner: Schema.String,
        name: Schema.String,
      }),
      buckets: Schema.Array(
        Schema.Struct({
          bucket_start: Schema.String,
          run_count: Schema.Number,
          completed: Schema.Number,
          successes: Schema.Number,
          failures: Schema.Number,
        }),
      ),
      workflow_name: Schema.String,
      run_count: Schema.Number,
      success_rate: Schema.NullOr(Schema.Number),
      p50_seconds: Schema.NullOr(Schema.Number),
      p95_seconds: Schema.NullOr(Schema.Number),
      last_failure_at: Schema.NullOr(Schema.String),
      latest_run_failed: Schema.NullOr(Schema.Boolean),
      latest_run_conclusion: Schema.NullOr(Schema.String),
      granularity: Schema.String,
      billable_minutes: Schema.optional(Schema.NullOr(Schema.Number)),
      estimated_cost_usd: Schema.optional(Schema.NullOr(Schema.Number)),
    }),
  ) as unknown as Schema.Codec<EngineeringAnalyticsWorkflowHealthOutput>;

// The operation
/**
 * Per-workflow CI health over a window (default last 24 hours, maximum 366 days): run count, success rate, p50/p95 duration over completed runs, last failure time, latest-run status, and a zero-filled run history bucketed by hour/day/week to fit the window. Optionally scope to a single git branch via `branch`. Use this for 'is CI getting slower' and 'which workflow is the long pole'; compare two windows to get a trend.
 *
 * @param branch - Optional exact git branch (head_branch) to scope workflow health to, e.g. 'main'. Omit or leave blank to aggregate across all branches.
 * @param date_from - Window start: relative ('-24h', '-7d') or ISO8601. Defaults to -24h.
 * @param date_to - Window end: relative or ISO8601. Defaults to now.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param source_id - Connected GitHub data warehouse source to read from. Defaults to the oldest connected GitHub source when the team has more than one.
 */
export const engineeringAnalyticsWorkflowHealth =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EngineeringAnalyticsWorkflowHealthInput,
    outputSchema: EngineeringAnalyticsWorkflowHealthOutput,
    errors: [BadRequest] as const,
  }));
