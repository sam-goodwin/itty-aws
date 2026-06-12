import * as Schema from "effect/Schema";
import { RoleWithIDSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ListRolesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v2/rbac/roles" }));
export type ListRolesInput = typeof ListRolesInput.Type;

// Output Schema
export const ListRolesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => RoleWithIDSchema),
);
export type ListRolesOutput = typeof ListRolesOutput.Type;

// The operation
/**
 * List all roles
 *
 * Retrieves all roles in the organization with their associated permissions and members.
 */
export const listRoles = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListRolesInput,
  outputSchema: ListRolesOutput,
}));
