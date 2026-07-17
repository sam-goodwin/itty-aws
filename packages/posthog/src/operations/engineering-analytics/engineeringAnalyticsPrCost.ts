import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest } from "../../errors.ts";

// Input Schema
export interface EngineeringAnalyticsPrCostInput {
  project_id: string;
  pr_number: number;
  repo: string;
  source_id?: string;
}
export const EngineeringAnalyticsPrCostInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    pr_number: Schema.Number,
    repo: Schema.String,
    source_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/engineering_analytics/pr_cost/",
    }),
  ) as unknown as Schema.Codec<EngineeringAnalyticsPrCostInput>;

// Output Schema
export interface EngineeringAnalyticsPrCostOutput {
  by_workflow: {
    workflow_name: string;
    billable_minutes: number;
    estimated_cost_usd: number | null;
    costed_jobs: number;
    unsettled_jobs: number;
    excluded_jobs: number;
  }[];
  by_run: {
    run_id: number;
    run_attempt: number;
    billable_minutes: number;
    estimated_cost_usd: number | null;
  }[];
  jobs_available: boolean;
  billable_minutes: number;
  estimated_cost_usd: number | null;
  costed_jobs: number;
  unsettled_jobs: number;
  excluded_jobs: number;
}
export const EngineeringAnalyticsPrCostOutput =
  /*@__PURE__*/ Schema.Struct({
    by_workflow: Schema.Array(
      Schema.Struct({
        workflow_name: Schema.String,
        billable_minutes: Schema.Number,
        estimated_cost_usd: Schema.NullOr(Schema.Number),
        costed_jobs: Schema.Number,
        unsettled_jobs: Schema.Number,
        excluded_jobs: Schema.Number,
      }),
    ),
    by_run: Schema.Array(
      Schema.Struct({
        run_id: Schema.Number,
        run_attempt: Schema.Number,
        billable_minutes: Schema.Number,
        estimated_cost_usd: Schema.NullOr(Schema.Number),
      }),
    ),
    jobs_available: Schema.Boolean,
    billable_minutes: Schema.Number,
    estimated_cost_usd: Schema.NullOr(Schema.Number),
    costed_jobs: Schema.Number,
    unsettled_jobs: Schema.Number,
    excluded_jobs: Schema.Number,
  }) as unknown as Schema.Codec<EngineeringAnalyticsPrCostOutput>;

// The operation
/**
 * Estimated CI cost for a pull request, summed over the jobs of all its workflow runs. Billable self-hosted Linux runners only — provider-hosted (free GitHub-hosted) and non-Linux jobs are excluded. Every figure is zero/null with `jobs_available` false when the job-level source isn't synced yet.
 *
 * @param pr_number - Pull request number to estimate cost for.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param repo - 'owner/name' repository the pull request belongs to.
 * @param source_id - Connected GitHub data warehouse source to read from. Defaults to the oldest connected GitHub source when the team has more than one.
 */
export const engineeringAnalyticsPrCost = /*@__PURE__*/ API.make(() => ({
  inputSchema: EngineeringAnalyticsPrCostInput,
  outputSchema: EngineeringAnalyticsPrCostOutput,
  errors: [BadRequest] as const,
}));
