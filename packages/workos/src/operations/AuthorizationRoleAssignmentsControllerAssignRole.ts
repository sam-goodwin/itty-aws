import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const AuthorizationRoleAssignmentsControllerAssignRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_membership_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/authorization/organization_memberships/{organization_membership_id}/role_assignments",
    }),
  );
export type AuthorizationRoleAssignmentsControllerAssignRoleInput =
  typeof AuthorizationRoleAssignmentsControllerAssignRoleInput.Type;

// Output Schema
export const AuthorizationRoleAssignmentsControllerAssignRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    role: Schema.Struct({
      slug: Schema.String,
    }),
    resource: Schema.Struct({
      id: Schema.String,
      external_id: Schema.String,
      resource_type_slug: Schema.String,
    }),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type AuthorizationRoleAssignmentsControllerAssignRoleOutput =
  typeof AuthorizationRoleAssignmentsControllerAssignRoleOutput.Type;

// The operation
/**
 * Assign a role
 *
 * Assign a role to an organization membership on a specific resource.
 *
 * @param organization_membership_id - The ID of the organization membership.
 */
export const AuthorizationRoleAssignmentsControllerAssignRole =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationRoleAssignmentsControllerAssignRoleInput,
    outputSchema: AuthorizationRoleAssignmentsControllerAssignRoleOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
