import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface TaskAutomationsDestroyInput {
  id: string;
  project_id: string;
}
export const TaskAutomationsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/task_automations/{id}/",
    }),
  ) as unknown as Schema.Codec<TaskAutomationsDestroyInput>;

// Output Schema
export type TaskAutomationsDestroyOutput = void;
export const TaskAutomationsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TaskAutomationsDestroyOutput>;

// The operation
/**
 * API for managing scheduled task automations.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const taskAutomationsDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: TaskAutomationsDestroyInput,
  outputSchema: TaskAutomationsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
