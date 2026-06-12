import * as Schema from "effect/Schema";
import { ProjectSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetProjectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/projects/{project_id}" }));
export type GetProjectInput = typeof GetProjectInput.Type;

// Output Schema
export const GetProjectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.suspend(() => ProjectSchema),
});
export type GetProjectOutput = typeof GetProjectOutput.Type;

// The operation
/**
 * Retrieve project details
 *
 * Retrieves information about the specified project.
 * You can obtain a `project_id` by listing the projects for an organization.
 *
 * @param project_id - The Neon project ID
 */
export const getProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetProjectInput,
  outputSchema: GetProjectOutput,
  errors: [BadRequest, NotFound] as const,
}));
