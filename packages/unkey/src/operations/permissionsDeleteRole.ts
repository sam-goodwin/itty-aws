import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const PermissionsDeleteRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/v2/permissions.deleteRole" }));
export type PermissionsDeleteRoleInput = typeof PermissionsDeleteRoleInput.Type;

// Output Schema
export const PermissionsDeleteRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Unknown,
  });
export type PermissionsDeleteRoleOutput =
  typeof PermissionsDeleteRoleOutput.Type;

// The operation
/**
 * Delete role
 *
 * Remove a role from your workspace. This also removes the role from all assigned API keys.
 * **Important:** This operation cannot be undone and immediately affects all API keys that had this role assigned.
 * **Required Permissions**
 * Your root key must have the following permission:
 * - `rbac.*.delete_role`
 */
export const permissionsDeleteRole = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PermissionsDeleteRoleInput,
    outputSchema: PermissionsDeleteRoleOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
