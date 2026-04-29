import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksRunsRelayMessageCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
    text: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/relay_message/",
    }),
  );
export type TasksRunsRelayMessageCreateInput =
  typeof TasksRunsRelayMessageCreateInput.Type;

// Output Schema
export const TasksRunsRelayMessageCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.String,
    relay_id: Schema.optional(Schema.String),
  });
export type TasksRunsRelayMessageCreateOutput =
  typeof TasksRunsRelayMessageCreateOutput.Type;

// The operation
/**
 * Relay run message to Slack
 *
 * Queue a Slack relay workflow to post a run message into the mapped Slack thread.
 *
 * @param id - A UUID string identifying this task run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsRelayMessageCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TasksRunsRelayMessageCreateInput,
    outputSchema: TasksRunsRelayMessageCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
