import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const PermissionsGetPermissionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permission: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/v2/permissions.getPermission" }));
export type PermissionsGetPermissionInput =
  typeof PermissionsGetPermissionInput.Type;

// Output Schema
export const PermissionsGetPermissionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      slug: Schema.String,
      description: Schema.optional(Schema.String),
    }),
  });
export type PermissionsGetPermissionOutput =
  typeof PermissionsGetPermissionOutput.Type;

// The operation
/**
 * Get permission
 *
 * Retrieve details about a specific permission including its name, description, and metadata.
 * **Required Permissions**
 * Your root key must have the following permission:
 * - `rbac.*.read_permission`
 */
export const permissionsGetPermission = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PermissionsGetPermissionInput,
    outputSchema: PermissionsGetPermissionOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
