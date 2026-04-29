import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const AuthorizationOrganizationRolePermissionsControllerSetPermissionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    slug: Schema.String.pipe(T.PathParam()),
    permissions: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/authorization/organizations/{organizationId}/roles/{slug}/permissions",
    }),
  );
export type AuthorizationOrganizationRolePermissionsControllerSetPermissionsInput =
  typeof AuthorizationOrganizationRolePermissionsControllerSetPermissionsInput.Type;

// Output Schema
export const AuthorizationOrganizationRolePermissionsControllerSetPermissionsOutput =
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
export type AuthorizationOrganizationRolePermissionsControllerSetPermissionsOutput =
  typeof AuthorizationOrganizationRolePermissionsControllerSetPermissionsOutput.Type;

// The operation
/**
 * Set permissions for a custom role
 *
 * Replace all permissions on a custom role with the provided list.
 *
 * @param organizationId - The ID of the organization.
 * @param slug - The slug of the role.
 */
export const AuthorizationOrganizationRolePermissionsControllerSetPermissions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      AuthorizationOrganizationRolePermissionsControllerSetPermissionsInput,
    outputSchema:
      AuthorizationOrganizationRolePermissionsControllerSetPermissionsOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
