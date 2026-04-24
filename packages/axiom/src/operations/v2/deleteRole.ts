import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound } from "../../errors";

// Input Schema
export const DeleteRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v2/rbac/roles/{id}" }));
export type DeleteRoleInput = typeof DeleteRoleInput.Type;

// Output Schema
export const DeleteRoleOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteRoleOutput = typeof DeleteRoleOutput.Type;

// The operation
/**
 * Delete role
 *
 * Permanently removes a role from the organization.
 *
 * @param id - Unique identifier of the role to delete
 */
export const deleteRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteRoleInput,
  outputSchema: DeleteRoleOutput,
  errors: [NotFound] as const,
}));
