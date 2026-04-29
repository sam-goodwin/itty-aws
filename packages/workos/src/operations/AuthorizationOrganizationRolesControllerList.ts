import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AuthorizationOrganizationRolesControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/authorization/organizations/{organizationId}/roles",
    }),
  );
export type AuthorizationOrganizationRolesControllerListInput =
  typeof AuthorizationOrganizationRolesControllerListInput.Type;

// Output Schema
export const AuthorizationOrganizationRolesControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  });
export type AuthorizationOrganizationRolesControllerListOutput =
  typeof AuthorizationOrganizationRolesControllerListOutput.Type;

// The operation
/**
 * List custom roles
 *
 * Get a list of all roles that apply to an organization. This includes both environment roles and custom roles, returned in priority order.
 *
 * @param organizationId - The ID of the organization.
 */
export const AuthorizationOrganizationRolesControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationOrganizationRolesControllerListInput,
    outputSchema: AuthorizationOrganizationRolesControllerListOutput,
    errors: [Forbidden, NotFound] as const,
  }));
