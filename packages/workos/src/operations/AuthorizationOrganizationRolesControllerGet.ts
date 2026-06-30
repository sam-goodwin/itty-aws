import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AuthorizationOrganizationRolesControllerGetInput {
  organizationId: string;
  slug: string;
}
export const AuthorizationOrganizationRolesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/authorization/organizations/{organizationId}/roles/{slug}",
    }),
  ) as unknown as Schema.Codec<AuthorizationOrganizationRolesControllerGetInput>;

// Output Schema
export interface AuthorizationOrganizationRolesControllerGetOutput {
  slug: string;
  object: string;
  id: string;
  name: string;
  description: string | null;
  type: "EnvironmentRole" | "OrganizationRole";
  resource_type_slug: string;
  permissions: string[];
  created_at: string;
  updated_at: string;
}
export const AuthorizationOrganizationRolesControllerGetOutput =
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
  }) as unknown as Schema.Codec<AuthorizationOrganizationRolesControllerGetOutput>;

// The operation
/**
 * Get a custom role
 *
 * Retrieve a role that applies to an organization by its slug. This can return either an environment role or a custom role.
 *
 * @param organizationId - The ID of the organization.
 * @param slug - The slug of the role.
 */
export const AuthorizationOrganizationRolesControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationOrganizationRolesControllerGetInput,
    outputSchema: AuthorizationOrganizationRolesControllerGetOutput,
    errors: [Forbidden, NotFound] as const,
  }));
