import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const AuthorizationOrganizationRolesControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    slug: Schema.optional(Schema.String),
    name: Schema.String,
    description: Schema.optional(Schema.NullOr(Schema.String)),
    resource_type_slug: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/authorization/organizations/{organizationId}/roles",
    }),
  );
export type AuthorizationOrganizationRolesControllerCreateInput =
  typeof AuthorizationOrganizationRolesControllerCreateInput.Type;

// Output Schema
export const AuthorizationOrganizationRolesControllerCreateOutput =
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
export type AuthorizationOrganizationRolesControllerCreateOutput =
  typeof AuthorizationOrganizationRolesControllerCreateOutput.Type;

// The operation
/**
 * Create a custom role
 *
 * Create a new custom role for this organization.
 *
 * @param organizationId - The ID of the organization.
 */
export const AuthorizationOrganizationRolesControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationOrganizationRolesControllerCreateInput,
    outputSchema: AuthorizationOrganizationRolesControllerCreateOutput,
    errors: [
      BadRequest,
      Forbidden,
      NotFound,
      Conflict,
      UnprocessableEntity,
    ] as const,
  }));
