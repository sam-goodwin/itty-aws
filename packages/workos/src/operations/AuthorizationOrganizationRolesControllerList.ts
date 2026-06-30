import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AuthorizationOrganizationRolesControllerListInput {
  organizationId: string;
}
export const AuthorizationOrganizationRolesControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/authorization/organizations/{organizationId}/roles",
    }),
  ) as unknown as Schema.Codec<AuthorizationOrganizationRolesControllerListInput>;

// Output Schema
export interface AuthorizationOrganizationRolesControllerListOutput {
  object?: string;
  data?: {
    slug?: string;
    object?: string;
    id?: string;
    name?: string;
    description?: string | null;
    type?: "EnvironmentRole" | "OrganizationRole";
    resource_type_slug?: string;
    permissions?: string[];
    created_at?: string;
    updated_at?: string;
  }[];
}
export const AuthorizationOrganizationRolesControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AuthorizationOrganizationRolesControllerListOutput>;

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
