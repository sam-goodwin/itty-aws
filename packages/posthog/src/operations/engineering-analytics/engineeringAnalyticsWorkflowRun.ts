import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export interface EngineeringAnalyticsWorkflowRunInput {
  project_id: string;
  run_id: number;
  source_id?: string;
}
export const EngineeringAnalyticsWorkflowRunInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    run_id: Schema.Number,
    source_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/engineering_analytics/workflow_run/",
    }),
  ) as unknown as Schema.Codec<EngineeringAnalyticsWorkflowRunInput>;

// Output Schema
export interface EngineeringAnalyticsWorkflowRunOutput {
  repo: { provider: string; owner: string; name: string };
  id: number;
  workflow_name: string;
  head_sha: string;
  head_branch: string;
  status: string;
  conclusion: string | null;
  run_started_at: string | null;
  updated_at: string | null;
  duration_seconds: number | null;
  run_attempt: number;
  pr_number: number;
}
export const EngineeringAnalyticsWorkflowRunOutput =
  /*@__PURE__*/ Schema.Struct({
    repo: Schema.Struct({
      provider: Schema.String,
      owner: Schema.String,
      name: Schema.String,
    }),
    id: Schema.Number,
    workflow_name: Schema.String,
    head_sha: Schema.String,
    head_branch: Schema.String,
    status: Schema.String,
    conclusion: Schema.NullOr(Schema.String),
    run_started_at: Schema.NullOr(Schema.String),
    updated_at: Schema.NullOr(Schema.String),
    duration_seconds: Schema.NullOr(Schema.Number),
    run_attempt: Schema.Number,
    pr_number: Schema.Number,
  }) as unknown as Schema.Codec<EngineeringAnalyticsWorkflowRunOutput>;

// The operation
/**
 * A single workflow run: status, conclusion, duration, branch, attempt, and the attributed pull request. Run-level only — per-job and per-step detail are not tracked yet.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param run_id - GitHub Actions run id to inspect.
 * @param source_id - Connected GitHub data warehouse source to read from. Defaults to the oldest connected GitHub source when the team has more than one.
 */
export const engineeringAnalyticsWorkflowRun =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EngineeringAnalyticsWorkflowRunInput,
    outputSchema: EngineeringAnalyticsWorkflowRunOutput,
    errors: [BadRequest, NotFound] as const,
  }));
