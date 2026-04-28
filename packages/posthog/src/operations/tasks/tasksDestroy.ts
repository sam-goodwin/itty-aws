import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const TasksDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/api/projects/{project_id}/tasks/{id}/" }),
);
export type TasksDestroyInput = typeof TasksDestroyInput.Type;

// Output Schema
export const TasksDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TasksDestroyOutput = typeof TasksDestroyOutput.Type;

// The operation
/**
 * API for managing tasks within a project. Tasks represent units of work to be performed by an agent.
 *
 * @param id - A UUID string identifying this task.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksDestroyInput,
  outputSchema: TasksDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
