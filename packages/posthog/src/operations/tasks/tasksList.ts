import * as Schema from "effect/Schema";
import { TaskSchema } from "./_schemas.ts";
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
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(Schema.Array(Schema.suspend(() => TaskSchema))),
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
