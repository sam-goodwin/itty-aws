import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AuthorizationOrganizationRolePermissionsControllerRemovePermissionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    slug: Schema.String.pipe(T.PathParam()),
    permissionSlug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/authorization/organizations/{organizationId}/roles/{slug}/permissions/{permissionSlug}",
    }),
  );
export type AuthorizationOrganizationRolePermissionsControllerRemovePermissionInput =
  typeof AuthorizationOrganizationRolePermissionsControllerRemovePermissionInput.Type;

// Output Schema
export const AuthorizationOrganizationRolePermissionsControllerRemovePermissionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String,
    object: Schema.String,
    id: Schema.String,
    name: Schema.String,
    description: Schema.NullOr(Schema.String),
    type: Schema.Literals(["EnvironmentRole", "OrganizationRole"]),
    resource_type_slug: Schema.String,
    permissions: Schema.Array(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type AuthorizationOrganizationRolePermissionsControllerRemovePermissionOutput =
  typeof AuthorizationOrganizationRolePermissionsControllerRemovePermissionOutput.Type;

// The operation
/**
 * Remove a permission from a custom role
 *
 * Remove a single permission from a custom role by its slug.
 *
 * @param organizationId - The ID of the organization.
 * @param slug - The slug of the role.
 * @param permissionSlug - The slug of the permission to remove.
 */
export const AuthorizationOrganizationRolePermissionsControllerRemovePermission =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      AuthorizationOrganizationRolePermissionsControllerRemovePermissionInput,
    outputSchema:
      AuthorizationOrganizationRolePermissionsControllerRemovePermissionOutput,
    errors: [Forbidden, NotFound] as const,
  }));
