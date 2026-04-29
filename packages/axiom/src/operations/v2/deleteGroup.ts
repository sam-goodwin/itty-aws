import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const DeleteGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v2/rbac/groups/{id}" }));
export type DeleteGroupInput = typeof DeleteGroupInput.Type;

// Output Schema
export const DeleteGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteGroupOutput = typeof DeleteGroupOutput.Type;

// The operation
/**
 * Delete group
 *
 * Permanently removes a group from the organization.
 *
 * @param id - Unique identifier of the group to delete
 */
export const deleteGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteGroupInput,
  outputSchema: DeleteGroupOutput,
  errors: [NotFound] as const,
}));
