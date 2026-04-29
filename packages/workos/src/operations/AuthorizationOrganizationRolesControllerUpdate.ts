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
export const AuthorizationOrganizationRolesControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    slug: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/authorization/organizations/{organizationId}/roles/{slug}",
    }),
  );
export type AuthorizationOrganizationRolesControllerUpdateInput =
  typeof AuthorizationOrganizationRolesControllerUpdateInput.Type;

// Output Schema
export const AuthorizationOrganizationRolesControllerUpdateOutput =
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
export type AuthorizationOrganizationRolesControllerUpdateOutput =
  typeof AuthorizationOrganizationRolesControllerUpdateOutput.Type;

// The operation
/**
 * Update a custom role
 *
 * Update an existing custom role. Only the fields provided in the request body will be updated.
 *
 * @param organizationId - The ID of the organization.
 * @param slug - The slug of the role.
 */
export const AuthorizationOrganizationRolesControllerUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationOrganizationRolesControllerUpdateInput,
    outputSchema: AuthorizationOrganizationRolesControllerUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
