import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AuthorizationRolesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/authorization/roles/{slug}" }));
export type AuthorizationRolesControllerGetInput =
  typeof AuthorizationRolesControllerGetInput.Type;

// Output Schema
export const AuthorizationRolesControllerGetOutput =
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
export type AuthorizationRolesControllerGetOutput =
  typeof AuthorizationRolesControllerGetOutput.Type;

// The operation
/**
 * Get an environment role
 *
 * Get an environment role by its slug.
 *
 * @param slug - The slug of the environment role.
 */
export const AuthorizationRolesControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationRolesControllerGetInput,
    outputSchema: AuthorizationRolesControllerGetOutput,
    errors: [Forbidden, NotFound] as const,
  }));
