import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, Conflict } from "../errors.ts";

// Input Schema
export const PermissionsCreateRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    description: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/v2/permissions.createRole" }));
export type PermissionsCreateRoleInput = typeof PermissionsCreateRoleInput.Type;

// Output Schema
export const PermissionsCreateRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Struct({
      roleId: Schema.String,
    }),
  });
export type PermissionsCreateRoleOutput =
  typeof PermissionsCreateRoleOutput.Type;

// The operation
/**
 * Create role
 *
 * Create a new role to group related permissions for easier management. Roles enable consistent permission assignment across multiple API keys.
 * **Important:** Role names must be unique within the workspace. Once created, roles are immediately available for assignment.
 * **Required Permissions**
 * Your root key must have the following permission:
 * - `rbac.*.create_role`
 */
export const permissionsCreateRole = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PermissionsCreateRoleInput,
    outputSchema: PermissionsCreateRoleOutput,
    errors: [BadRequest, Forbidden, Conflict] as const,
  }),
);
