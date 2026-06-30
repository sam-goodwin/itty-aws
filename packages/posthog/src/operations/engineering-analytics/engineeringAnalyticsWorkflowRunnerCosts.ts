import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest } from "../../errors.ts";

// Input Schema
export interface EngineeringAnalyticsWorkflowRunnerCostsInput {
  project_id: string;
  date_from?: string;
  date_to?: string;
  repo: string;
  source_id?: string;
  workflow_name: string;
}
export const EngineeringAnalyticsWorkflowRunnerCostsInput =
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
      path: "/api/projects/{project_id}/engineering_analytics/workflow_runner_costs/",
    }),
  ) as unknown as Schema.Codec<EngineeringAnalyticsWorkflowRunnerCostsInput>;

// Output Schema
export type EngineeringAnalyticsWorkflowRunnerCostsOutput = {
  provider: string;
  runner_label: string;
  job_count: number;
  billable_minutes: number;
  estimated_cost_usd: number | null;
}[];
export const EngineeringAnalyticsWorkflowRunnerCostsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      provider: Schema.String,
      runner_label: Schema.String,
      job_count: Schema.Number,
      billable_minutes: Schema.Number,
      estimated_cost_usd: Schema.NullOr(Schema.Number),
    }),
  ) as unknown as Schema.Codec<EngineeringAnalyticsWorkflowRunnerCostsOutput>;

// The operation
/**
 * A workflow's estimated CI cost broken down by runner tier over a window (date_from default -30d), highest spend first. Returns an empty list when the job-level source isn't synced.
 *
 * @param date_from - Window start: relative ('-30d', '-8w') or ISO8601. Defaults to -30d.
 * @param date_to - Window end: relative or ISO8601. Defaults to now.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param repo - 'owner/name' repository the workflow belongs to.
 * @param source_id - Connected GitHub data warehouse source to read from. Defaults to the oldest connected GitHub source when the team has more than one.
 * @param workflow_name - Workflow name to break down cost for.
 */
export const engineeringAnalyticsWorkflowRunnerCosts =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EngineeringAnalyticsWorkflowRunnerCostsInput,
    outputSchema: EngineeringAnalyticsWorkflowRunnerCostsOutput,
    errors: [BadRequest] as const,
  }));
