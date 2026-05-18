import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const DeleteProjectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id_or_slug: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/project/{id_or_slug}" }));
export type DeleteProjectInput = typeof DeleteProjectInput.Type;

// Output Schema
export const DeleteProjectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteProjectOutput = typeof DeleteProjectOutput.Type;

// The operation
/**
 * Delete a project
 *
 * @param id_or_slug - The ID or slug of the project
 */
export const deleteProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteProjectInput,
  outputSchema: DeleteProjectOutput,
  errors: [BadRequest] as const,
}));
