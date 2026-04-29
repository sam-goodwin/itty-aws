import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AuthorizationRoleAssignmentsControllerRemoveRoleByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_membership_id: Schema.String.pipe(T.PathParam()),
    role_assignment_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/authorization/organization_memberships/{organization_membership_id}/role_assignments/{role_assignment_id}",
    }),
  );
export type AuthorizationRoleAssignmentsControllerRemoveRoleByIdInput =
  typeof AuthorizationRoleAssignmentsControllerRemoveRoleByIdInput.Type;

// Output Schema
export const AuthorizationRoleAssignmentsControllerRemoveRoleByIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AuthorizationRoleAssignmentsControllerRemoveRoleByIdOutput =
  typeof AuthorizationRoleAssignmentsControllerRemoveRoleByIdOutput.Type;

// The operation
/**
 * Remove a role assignment by ID
 *
 * Remove a role assignment using its ID.
 *
 * @param organization_membership_id - The ID of the organization membership.
 * @param role_assignment_id - The ID of the role assignment to remove.
 */
export const AuthorizationRoleAssignmentsControllerRemoveRoleById =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationRoleAssignmentsControllerRemoveRoleByIdInput,
    outputSchema: AuthorizationRoleAssignmentsControllerRemoveRoleByIdOutput,
    errors: [Forbidden, NotFound] as const,
  }));
