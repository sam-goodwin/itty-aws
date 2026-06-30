import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

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
 * Fetch the logs for a task run as JSONL. If the run resumes from another (state.resume_from_run_id), each ancestor's log is concatenated first (oldest ancestor → ... → this run) so resume consumers see a single continuous history and can find the most recent git_checkpoint event regardless of which run emitted it.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsLogsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TasksRunsLogsRetrieveInput,
    outputSchema: TasksRunsLogsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
