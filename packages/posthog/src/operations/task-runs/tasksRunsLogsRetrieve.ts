import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const TasksRunsLogsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/logs/",
    }),
  );
export type TasksRunsLogsRetrieveInput = typeof TasksRunsLogsRetrieveInput.Type;

// Output Schema
export const TasksRunsLogsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TasksRunsLogsRetrieveOutput =
  typeof TasksRunsLogsRetrieveOutput.Type;

// The operation
/**
 * Get task run logs
 *
 * Fetch the logs for a task run. Returns JSONL formatted log entries.
 *
 * @param id - A UUID string identifying this task run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsLogsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TasksRunsLogsRetrieveInput,
    outputSchema: TasksRunsLogsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
