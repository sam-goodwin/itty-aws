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
export const AuthorizationRolePermissionsControllerSetPermissionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
    permissions: Schema.Array(Schema.String),
  }).pipe(
    T.Http({ method: "PUT", path: "/authorization/roles/{slug}/permissions" }),
  );
export type AuthorizationRolePermissionsControllerSetPermissionsInput =
  typeof AuthorizationRolePermissionsControllerSetPermissionsInput.Type;

// Output Schema
export const AuthorizationRolePermissionsControllerSetPermissionsOutput =
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
export type AuthorizationRolePermissionsControllerSetPermissionsOutput =
  typeof AuthorizationRolePermissionsControllerSetPermissionsOutput.Type;

// The operation
/**
 * Set permissions for an environment role
 *
 * Replace all permissions on an environment role with the provided list.
 *
 * @param slug - The slug of the environment role.
 */
export const AuthorizationRolePermissionsControllerSetPermissions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationRolePermissionsControllerSetPermissionsInput,
    outputSchema: AuthorizationRolePermissionsControllerSetPermissionsOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
