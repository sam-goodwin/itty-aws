import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksRunsCommandCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
    jsonrpc: Schema.Literals(["2.0"]),
    method: Schema.Literals([
      "user_message",
      "cancel",
      "close",
      "permission_response",
      "set_config_option",
    ]),
    params: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/command/",
    }),
  );
export type TasksRunsCommandCreateInput =
  typeof TasksRunsCommandCreateInput.Type;

// Output Schema
export const TasksRunsCommandCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jsonrpc: Schema.String,
    id: Schema.optional(Schema.Unknown),
    result: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  });
export type TasksRunsCommandCreateOutput =
  typeof TasksRunsCommandCreateOutput.Type;

// The operation
/**
 * Send command to agent server
 *
 * Forward a JSON-RPC command to the agent server running in the sandbox. Supports user_message, cancel, close, permission_response, and set_config_option commands.
 *
 * @param id - A UUID string identifying this task run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsCommandCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TasksRunsCommandCreateInput,
    outputSchema: TasksRunsCommandCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
