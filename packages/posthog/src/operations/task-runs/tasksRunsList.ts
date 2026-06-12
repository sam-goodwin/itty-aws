import * as Schema from "effect/Schema";
import { TaskRunDetailSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksRunsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  task_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/projects/{project_id}/tasks/{task_id}/runs/",
  }),
);
export type TasksRunsListInput = typeof TasksRunsListInput.Type;

// Output Schema
export const TasksRunsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(Schema.suspend(() => TaskRunDetailSchema)),
  ),
});
export type TasksRunsListOutput = typeof TasksRunsListOutput.Type;

// The operation
/**
 * List task runs
 *
 * Get a list of runs for a specific task.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksRunsListInput,
  outputSchema: TasksRunsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
