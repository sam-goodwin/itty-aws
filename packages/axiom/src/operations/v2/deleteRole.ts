import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface DeleteRoleInput {
  id: string;
}
export const DeleteRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/v2/rbac/roles/{id}" }),
) as unknown as Schema.Codec<DeleteRoleInput>;

// Output Schema
export type DeleteRoleOutput = void;
export const DeleteRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteRoleOutput>;

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
