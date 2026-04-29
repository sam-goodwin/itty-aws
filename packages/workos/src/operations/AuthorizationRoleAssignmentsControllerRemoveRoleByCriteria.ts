import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const AuthorizationRoleAssignmentsControllerRemoveRoleByCriteriaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_membership_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/authorization/organization_memberships/{organization_membership_id}/role_assignments",
    }),
  );
export type AuthorizationRoleAssignmentsControllerRemoveRoleByCriteriaInput =
  typeof AuthorizationRoleAssignmentsControllerRemoveRoleByCriteriaInput.Type;

// Output Schema
export const AuthorizationRoleAssignmentsControllerRemoveRoleByCriteriaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AuthorizationRoleAssignmentsControllerRemoveRoleByCriteriaOutput =
  typeof AuthorizationRoleAssignmentsControllerRemoveRoleByCriteriaOutput.Type;

// The operation
/**
 * Remove a role assignment
 *
 * Remove a role assignment by role slug and resource.
 *
 * @param organization_membership_id - The ID of the organization membership.
 */
export const AuthorizationRoleAssignmentsControllerRemoveRoleByCriteria =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      AuthorizationRoleAssignmentsControllerRemoveRoleByCriteriaInput,
    outputSchema:
      AuthorizationRoleAssignmentsControllerRemoveRoleByCriteriaOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
