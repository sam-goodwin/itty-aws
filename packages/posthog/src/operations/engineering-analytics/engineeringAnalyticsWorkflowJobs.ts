import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest } from "../../errors.ts";

// Input Schema
export interface EngineeringAnalyticsWorkflowJobsInput {
  project_id: string;
  run_attempt?: number;
  run_id: number;
  source_id?: string;
}
export const EngineeringAnalyticsWorkflowJobsInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    run_attempt: Schema.optional(Schema.Number),
    run_id: Schema.Number,
    source_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/engineering_analytics/workflow_jobs/",
    }),
  ) as unknown as Schema.Codec<EngineeringAnalyticsWorkflowJobsInput>;

// Output Schema
export type EngineeringAnalyticsWorkflowJobsOutput = {
  id: number;
  run_id: number;
  name: string;
  status: string;
  conclusion: string | null;
  started_at: string | null;
  completed_at: string | null;
  duration_seconds: number | null;
  runner_provider: string;
  runner_label: string;
  estimated_cost_usd: number | null;
}[];
export const EngineeringAnalyticsWorkflowJobsOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.Number,
      run_id: Schema.Number,
      name: Schema.String,
      status: Schema.String,
      conclusion: Schema.NullOr(Schema.String),
      started_at: Schema.NullOr(Schema.String),
      completed_at: Schema.NullOr(Schema.String),
      duration_seconds: Schema.NullOr(Schema.Number),
      runner_provider: Schema.String,
      runner_label: Schema.String,
      estimated_cost_usd: Schema.NullOr(Schema.Number),
    }),
  ) as unknown as Schema.Codec<EngineeringAnalyticsWorkflowJobsOutput>;

// The operation
/**
 * Jobs of a single workflow run attempt, with per-job duration, runner tier, and estimated cost. Scoped to one run_attempt (the latest unless specified) so a re-run's attempts don't merge. Returns an empty list when the job-level source isn't synced yet.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param run_attempt - Which re-run attempt to scope jobs to. Omit to use the run's latest attempt; pass an explicit attempt to avoid mixing jobs across a re-run's attempts.
 * @param run_id - Workflow run id to list jobs for.
 * @param source_id - Connected GitHub data warehouse source to read from. Defaults to the oldest connected GitHub source when the team has more than one.
 */
export const engineeringAnalyticsWorkflowJobs =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EngineeringAnalyticsWorkflowJobsInput,
    outputSchema: EngineeringAnalyticsWorkflowJobsOutput,
    errors: [BadRequest] as const,
  }));
