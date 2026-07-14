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
export interface AuthorizationRolePermissionsControllerAddPermissionInput {
  slug: string;
}
export const AuthorizationRolePermissionsControllerAddPermissionInput =
  /*@__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/authorization/roles/{slug}/permissions" }),
  ) as unknown as Schema.Codec<AuthorizationRolePermissionsControllerAddPermissionInput>;

// Output Schema
export interface AuthorizationRolePermissionsControllerAddPermissionOutput {
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
export const AuthorizationRolePermissionsControllerAddPermissionOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AuthorizationRolePermissionsControllerAddPermissionOutput>;

// The operation
/**
 * Add a permission to an environment role
 *
 * Add a single permission to an environment role. If the permission is already assigned to the role, this operation has no effect.
 *
 * @param slug - The slug of the environment role.
 */
export const AuthorizationRolePermissionsControllerAddPermission =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationRolePermissionsControllerAddPermissionInput,
    outputSchema: AuthorizationRolePermissionsControllerAddPermissionOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
