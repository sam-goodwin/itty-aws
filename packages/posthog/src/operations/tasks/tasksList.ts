import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  created_by: Schema.optional(Schema.Number),
  internal: Schema.optional(Schema.Boolean),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  organization: Schema.optional(Schema.String),
  origin_product: Schema.optional(Schema.String),
  repository: Schema.optional(Schema.String),
  search: Schema.optional(Schema.String),
  stage: Schema.optional(Schema.String),
  status: Schema.optional(
    Schema.Literals([
      "not_started",
      "queued",
      "in_progress",
      "completed",
      "failed",
      "cancelled",
    ]),
  ),
}).pipe(T.Http({ method: "GET", path: "/api/projects/{project_id}/tasks/" }));
export type TasksListInput = typeof TasksListInput.Type;

// Output Schema
export const TasksListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      task_number: Schema.NullOr(Schema.Number),
      slug: Schema.String,
      title: Schema.optional(Schema.String),
      title_manually_set: Schema.optional(Schema.Boolean),
      description: Schema.optional(Schema.String),
      origin_product: Schema.optional(
        Schema.Literals([
          "error_tracking",
          "eval_clusters",
          "user_created",
          "automation",
          "slack",
          "support_queue",
          "session_summaries",
          "signal_report",
        ]),
      ),
      repository: Schema.optional(Schema.NullOr(Schema.String)),
      github_integration: Schema.optional(Schema.NullOr(Schema.Number)),
      signal_report: Schema.optional(Schema.NullOr(Schema.String)),
      signal_report_task_relationship: Schema.optional(
        Schema.Literals(["implementation"]),
      ),
      json_schema: Schema.optional(Schema.NullOr(Schema.Unknown)),
      internal: Schema.optional(Schema.Boolean),
      latest_run: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
      created_at: Schema.String,
      updated_at: Schema.String,
      created_by: Schema.Struct({
        id: Schema.Number,
        uuid: Schema.String,
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.String,
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.NullOr(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
      ci_prompt: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  ),
});
export type TasksListOutput = typeof TasksListOutput.Type;

// The operation
/**
 * List tasks
 *
 * Get a list of tasks for the current project, with optional filtering by origin product, stage, organization, repository, and created_by.
 *
 * @param created_by - Filter by creator user ID
 * @param internal - Filter by internal flag. Defaults to excluding internal tasks when not specified.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param organization - Filter by repository organization
 * @param origin_product - Filter by origin product
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param repository - Filter by repository name (can include org/repo format)
 * @param search - Case-insensitive substring search over task title and description. A numeric value also matches the task number. An empty value disables the filter.
 * @param stage - Filter by task run stage
 * @param status - Filter tasks by the status of their most recent run.

* `not_started` - not_started
* `queued` - queued
* `in_progress` - in_progress
* `completed` - completed
* `failed` - failed
* `cancelled` - cancelled
 */
export const tasksList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksListInput,
  outputSchema: TasksListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
