import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface TasksRunsRelayMessageCreateInput {
  id: string;
  project_id: string;
  task_id: string;
  text?: string;
}
export const TasksRunsRelayMessageCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
    text: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/relay_message/",
    }),
  ) as unknown as Schema.Codec<TasksRunsRelayMessageCreateInput>;

// Output Schema
export interface TasksRunsRelayMessageCreateOutput {
  status?: string;
  relay_id?: string;
}
export const TasksRunsRelayMessageCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    relay_id: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TasksRunsRelayMessageCreateOutput>;

// The operation
/**
 * Relay run message to Slack
 *
 * Queue a Slack relay workflow to post a run message into the mapped Slack thread.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsRelayMessageCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TasksRunsRelayMessageCreateInput,
    outputSchema: TasksRunsRelayMessageCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
