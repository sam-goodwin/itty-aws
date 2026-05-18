import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const FollowProjectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id_or_slug: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/project/{id_or_slug}/follow" }));
export type FollowProjectInput = typeof FollowProjectInput.Type;

// Output Schema
export const FollowProjectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FollowProjectOutput = typeof FollowProjectOutput.Type;

// The operation
/**
 * Follow a project
 *
 * @param id_or_slug - The ID or slug of the project
 */
export const followProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FollowProjectInput,
  outputSchema: FollowProjectOutput,
  errors: [BadRequest] as const,
}));
