import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface TasksRepositoriesRetrieveInput {
  project_id: string;
}
export const TasksRepositoriesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/tasks/repositories/",
    }),
  ) as unknown as Schema.Codec<TasksRepositoriesRetrieveInput>;

// Output Schema
export interface TasksRepositoriesRetrieveOutput {
  repositories?: string[];
}
export const TasksRepositoriesRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    repositories: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<TasksRepositoriesRetrieveOutput>;

// The operation
/**
 * List distinct task repositories
 *
 * Return the set of repositories referenced by non-deleted, non-internal tasks in the current project. Used to populate repository filter pickers without being constrained by task list pagination.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRepositoriesRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: TasksRepositoriesRetrieveInput,
  outputSchema: TasksRepositoriesRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
