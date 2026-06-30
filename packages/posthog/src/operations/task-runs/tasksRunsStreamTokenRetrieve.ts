import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const TasksRunsStreamTokenRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/stream_token/",
    }),
  );
export type TasksRunsStreamTokenRetrieveInput =
  typeof TasksRunsStreamTokenRetrieveInput.Type;

// Output Schema
export const TasksRunsStreamTokenRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String,
    stream_base_url: Schema.NullOr(Schema.String),
  });
export type TasksRunsStreamTokenRetrieveOutput =
  typeof TasksRunsStreamTokenRetrieveOutput.Type;

// The operation
/**
 * Get task run stream read token
 *
 * Generate a run-scoped JWT that authorizes reading this task run's live event stream via the agent-proxy.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsStreamTokenRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TasksRunsStreamTokenRetrieveInput,
    outputSchema: TasksRunsStreamTokenRetrieveOutput,
    errors: [NotFound] as const,
  }));
