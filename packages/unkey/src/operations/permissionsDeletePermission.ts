import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const PermissionsDeletePermissionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permission: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/v2/permissions.deletePermission" }));
export type PermissionsDeletePermissionInput =
  typeof PermissionsDeletePermissionInput.Type;

// Output Schema
export const PermissionsDeletePermissionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Unknown,
  });
export type PermissionsDeletePermissionOutput =
  typeof PermissionsDeletePermissionOutput.Type;

// The operation
/**
 * Delete permission
 *
 * Remove a permission from your workspace. This also removes the permission from all API keys and roles.
 * **Important:** This operation cannot be undone and immediately affects all API keys and roles that had this permission assigned.
 * **Required Permissions**
 * Your root key must have the following permission:
 * - `rbac.*.delete_permission`
 */
export const permissionsDeletePermission = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PermissionsDeletePermissionInput,
    outputSchema: PermissionsDeletePermissionOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
