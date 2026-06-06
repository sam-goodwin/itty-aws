import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, Conflict } from "../errors.ts";

// Input Schema
export const PermissionsCreatePermissionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    slug: Schema.String,
    description: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/v2/permissions.createPermission" }));
export type PermissionsCreatePermissionInput =
  typeof PermissionsCreatePermissionInput.Type;

// Output Schema
export const PermissionsCreatePermissionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Struct({
      permissionId: Schema.String,
    }),
  });
export type PermissionsCreatePermissionOutput =
  typeof PermissionsCreatePermissionOutput.Type;

// The operation
/**
 * Create permission
 *
 * Create a new permission to define specific actions or capabilities in your RBAC system. Permissions can be assigned directly to API keys or included in roles.
 * Use hierarchical naming patterns like `documents.read`, `admin.users.delete`, or `billing.invoices.create` for clear organization.
 * **Important:** Permission names must be unique within the workspace. Once created, permissions are immediately available for assignment.
 * **Required Permissions**
 * Your root key must have the following permission:
 * - `rbac.*.create_permission`
 */
export const permissionsCreatePermission = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PermissionsCreatePermissionInput,
    outputSchema: PermissionsCreatePermissionOutput,
    errors: [BadRequest, Forbidden, Conflict] as const,
  }),
);
