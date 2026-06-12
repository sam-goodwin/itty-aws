import * as Schema from "effect/Schema";
import { ProjectSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteProjectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/projects/{project_id}" }));
export type DeleteProjectInput = typeof DeleteProjectInput.Type;

// Output Schema
export const DeleteProjectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.suspend(() => ProjectSchema),
});
export type DeleteProjectOutput = typeof DeleteProjectOutput.Type;

// The operation
/**
 * Delete project
 *
 * Deletes the specified project.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * Deleting a project is a permanent action.
 * Deleting a project also deletes endpoints, branches, databases, and users that belong to the project.
 *
 * @param project_id - The Neon project ID
 */
export const deleteProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteProjectInput,
  outputSchema: DeleteProjectOutput,
  errors: [NotFound] as const,
}));
