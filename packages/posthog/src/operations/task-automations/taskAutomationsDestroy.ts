import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TaskAutomationsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/task_automations/{id}/",
    }),
  );
export type TaskAutomationsDestroyInput =
  typeof TaskAutomationsDestroyInput.Type;

// Output Schema
export const TaskAutomationsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TaskAutomationsDestroyOutput =
  typeof TaskAutomationsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this task automation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const taskAutomationsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TaskAutomationsDestroyInput,
    outputSchema: TaskAutomationsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
