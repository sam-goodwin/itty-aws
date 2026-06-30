import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const EngineeringAnalyticsWorkflowRunInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    run_id: Schema.Number,
    source_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/engineering_analytics/workflow_run/",
    }),
  );
export type EngineeringAnalyticsWorkflowRunInput =
  typeof EngineeringAnalyticsWorkflowRunInput.Type;

// Output Schema
export const EngineeringAnalyticsWorkflowRunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type EngineeringAnalyticsWorkflowRunOutput =
  typeof EngineeringAnalyticsWorkflowRunOutput.Type;

// The operation
/**
 * A single workflow run: status, conclusion, duration, branch, attempt, and the attributed pull request. Run-level only — per-job and per-step detail are not tracked yet.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param run_id - GitHub Actions run id to inspect.
 * @param source_id - Connected GitHub data warehouse source to read from. Defaults to the oldest connected GitHub source when the team has more than one.
 */
export const engineeringAnalyticsWorkflowRun =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EngineeringAnalyticsWorkflowRunInput,
    outputSchema: EngineeringAnalyticsWorkflowRunOutput,
    errors: [BadRequest, NotFound] as const,
  }));
