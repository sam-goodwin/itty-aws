import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export interface AuthorizationOrganizationRolePermissionsControllerAddPermissionInput {
  organizationId: string;
  slug: string;
}
export const AuthorizationOrganizationRolePermissionsControllerAddPermissionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/authorization/organizations/{organizationId}/roles/{slug}/permissions",
    }),
  ) as unknown as Schema.Codec<AuthorizationOrganizationRolePermissionsControllerAddPermissionInput>;

// Output Schema
export interface AuthorizationOrganizationRolePermissionsControllerAddPermissionOutput {
  slug: string;
  object: string;
  id: string;
  name: string;
  description: string | null;
  type: "EnvironmentRole" | "OrganizationRole";
  resource_type_slug: string;
  permissions: ReadonlyArray<string>;
  created_at: string;
  updated_at: string;
}
export const AuthorizationOrganizationRolePermissionsControllerAddPermissionOutput =
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
  }) as unknown as Schema.Codec<AuthorizationOrganizationRolePermissionsControllerAddPermissionOutput>;

// The operation
/**
 * Add a permission to a custom role
 *
 * Add a single permission to a custom role. If the permission is already assigned to the role, this operation has no effect.
 *
 * @param organizationId - The ID of the organization.
 * @param slug - The slug of the role.
 */
export const AuthorizationOrganizationRolePermissionsControllerAddPermission =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      AuthorizationOrganizationRolePermissionsControllerAddPermissionInput,
    outputSchema:
      AuthorizationOrganizationRolePermissionsControllerAddPermissionOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
