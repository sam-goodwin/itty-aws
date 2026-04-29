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
export const AuthorizationRolePermissionsControllerAddPermissionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/authorization/roles/{slug}/permissions" }),
  );
export type AuthorizationRolePermissionsControllerAddPermissionInput =
  typeof AuthorizationRolePermissionsControllerAddPermissionInput.Type;

// Output Schema
export const AuthorizationRolePermissionsControllerAddPermissionOutput =
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
export type AuthorizationRolePermissionsControllerAddPermissionOutput =
  typeof AuthorizationRolePermissionsControllerAddPermissionOutput.Type;

// The operation
/**
 * Add a permission to an environment role
 *
 * Add a single permission to an environment role. If the permission is already assigned to the role, this operation has no effect.
 *
 * @param slug - The slug of the environment role.
 */
export const AuthorizationRolePermissionsControllerAddPermission =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationRolePermissionsControllerAddPermissionInput,
    outputSchema: AuthorizationRolePermissionsControllerAddPermissionOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
