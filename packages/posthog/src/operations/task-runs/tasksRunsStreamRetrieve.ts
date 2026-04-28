import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const TasksRunsStreamRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/stream/",
    }),
  );
export type TasksRunsStreamRetrieveInput =
  typeof TasksRunsStreamRetrieveInput.Type;

// Output Schema
export const TasksRunsStreamRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TasksRunsStreamRetrieveOutput =
  typeof TasksRunsStreamRetrieveOutput.Type;

// The operation
/**
 * API for managing task runs. Each run represents an execution of a task.
 *
 * @param id - A UUID string identifying this task run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsStreamRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TasksRunsStreamRetrieveInput,
    outputSchema: TasksRunsStreamRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
