import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest } from "../../errors.ts";

// Input Schema
export interface EngineeringAnalyticsWorkflowRunsInput {
  project_id: string;
  date_from?: string;
  date_to?: string;
  repo: string;
  source_id?: string;
  workflow_name: string;
}
export const EngineeringAnalyticsWorkflowRunsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    date_from: Schema.optional(Schema.String),
    date_to: Schema.optional(Schema.String),
    repo: Schema.String,
    source_id: Schema.optional(Schema.String),
    workflow_name: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/engineering_analytics/workflow_runs/",
    }),
  ) as unknown as Schema.Codec<EngineeringAnalyticsWorkflowRunsInput>;

// Output Schema
export type EngineeringAnalyticsWorkflowRunsOutput = {
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
}[];
export const EngineeringAnalyticsWorkflowRunsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
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
    }),
  ) as unknown as Schema.Codec<EngineeringAnalyticsWorkflowRunsOutput>;

// The operation
/**
 * Runs of a single workflow within a repo over a window (date_from default -30d), newest first. Each row is run-level — per-job and per-step detail are not tracked yet. Use this as the GitHub 'workflow' page between the workflow list and a single run.
 *
 * @param date_from - Window start: relative ('-30d', '-8w') or ISO8601. Defaults to -30d.
 * @param date_to - Window end: relative or ISO8601. Defaults to now.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param repo - 'owner/name' repository the workflow belongs to.
 * @param source_id - Connected GitHub data warehouse source to read from. Defaults to the oldest connected GitHub source when the team has more than one.
 * @param workflow_name - Workflow name to list runs for.
 */
export const engineeringAnalyticsWorkflowRuns =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EngineeringAnalyticsWorkflowRunsInput,
    outputSchema: EngineeringAnalyticsWorkflowRunsOutput,
    errors: [BadRequest] as const,
  }));
