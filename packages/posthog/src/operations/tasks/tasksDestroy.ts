import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface TasksDestroyInput {
  id: string;
  project_id: string;
}
export const TasksDestroyInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/api/projects/{project_id}/tasks/{id}/" }),
) as unknown as Schema.Codec<TasksDestroyInput>;

// Output Schema
export type TasksDestroyOutput = void;
export const TasksDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TasksDestroyOutput>;

// The operation
/**
 * API for managing tasks within a project. Tasks represent units of work to be performed by an agent.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: TasksDestroyInput,
  outputSchema: TasksDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
