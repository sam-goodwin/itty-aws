import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest } from "../../errors.ts";

// Input Schema
export interface EngineeringAnalyticsPrRunsInput {
  project_id: string;
  pr_number: number;
  repo: string;
  source_id?: string;
}
export const EngineeringAnalyticsPrRunsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    pr_number: Schema.Number,
    repo: Schema.String,
    source_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/engineering_analytics/pr_runs/",
    }),
  ) as unknown as Schema.Codec<EngineeringAnalyticsPrRunsInput>;

// Output Schema
export type EngineeringAnalyticsPrRunsOutput = {
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
export const EngineeringAnalyticsPrRunsOutput =
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
  ) as unknown as Schema.Codec<EngineeringAnalyticsPrRunsOutput>;

// The operation
/**
 * Every workflow run attributed to a pull request, across all its commits (grouped by head SHA client-side), newest first. Run-level only.
 *
 * @param pr_number - Pull request number whose runs to list.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param repo - 'owner/name' repository the pull request belongs to.
 * @param source_id - Connected GitHub data warehouse source to read from. Defaults to the oldest connected GitHub source when the team has more than one.
 */
export const engineeringAnalyticsPrRuns = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EngineeringAnalyticsPrRunsInput,
    outputSchema: EngineeringAnalyticsPrRunsOutput,
    errors: [BadRequest] as const,
  }),
);
