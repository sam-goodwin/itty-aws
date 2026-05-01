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
    slug: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    type: Schema.optional(
      Schema.Literals(["EnvironmentRole", "OrganizationRole"]),
    ),
    resource_type_slug: Schema.optional(Schema.String),
    permissions: Schema.optional(Schema.Array(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
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
