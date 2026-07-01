import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface TasksRunsConnectionTokenRetrieveInput {
  id: string;
  project_id: string;
  task_id: string;
}
export const TasksRunsConnectionTokenRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/connection_token/",
    }),
  ) as unknown as Schema.Codec<TasksRunsConnectionTokenRetrieveInput>;

// Output Schema
export interface TasksRunsConnectionTokenRetrieveOutput {
  token?: string;
}
export const TasksRunsConnectionTokenRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TasksRunsConnectionTokenRetrieveOutput>;

// The operation
/**
 * Get sandbox connection token
 *
 * Generate a JWT token for direct connection to the sandbox. Valid for 24 hours.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsConnectionTokenRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TasksRunsConnectionTokenRetrieveInput,
    outputSchema: TasksRunsConnectionTokenRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
