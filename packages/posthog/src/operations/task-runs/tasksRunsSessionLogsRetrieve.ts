import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const TasksRunsSessionLogsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
    after: Schema.optional(Schema.String),
    event_types: Schema.optional(Schema.String),
    exclude_types: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/session_logs/",
    }),
  );
export type TasksRunsSessionLogsRetrieveInput =
  typeof TasksRunsSessionLogsRetrieveInput.Type;

// Output Schema
export const TasksRunsSessionLogsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TasksRunsSessionLogsRetrieveOutput =
  typeof TasksRunsSessionLogsRetrieveOutput.Type;

// The operation
/**
 * Get filtered task run session logs
 *
 * Fetch session log entries for a task run with optional filtering by timestamp, event type, and limit.
 *
 * @param after - Only return events after this ISO8601 timestamp
 * @param event_types - Comma-separated list of event types to include
 * @param exclude_types - Comma-separated list of event types to exclude
 * @param id - A UUID string identifying this task run.
 * @param limit - Maximum number of entries to return (default 1000, max 5000)
 * @param offset - Zero-based offset into the filtered log entries
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsSessionLogsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TasksRunsSessionLogsRetrieveInput,
    outputSchema: TasksRunsSessionLogsRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
