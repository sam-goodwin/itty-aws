import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const UnfollowProjectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id_or_slug: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/project/{id_or_slug}/follow" }));
export type UnfollowProjectInput = typeof UnfollowProjectInput.Type;

// Output Schema
export const UnfollowProjectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UnfollowProjectOutput = typeof UnfollowProjectOutput.Type;

// The operation
/**
 * Unfollow a project
 *
 * @param id_or_slug - The ID or slug of the project
 */
export const unfollowProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UnfollowProjectInput,
  outputSchema: UnfollowProjectOutput,
  errors: [BadRequest] as const,
}));
