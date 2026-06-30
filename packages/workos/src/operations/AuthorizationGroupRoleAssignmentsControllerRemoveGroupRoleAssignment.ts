import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignmentInput {
  group_id: string;
  role_assignment_id: string;
}
export const AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group_id: Schema.String.pipe(T.PathParam()),
    role_assignment_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/authorization/groups/{group_id}/role_assignments/{role_assignment_id}",
    }),
  ) as unknown as Schema.Codec<AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignmentInput>;

// Output Schema
export type AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignmentOutput =
  void;
export const AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignmentOutput>;

// The operation
/**
 * Remove a group role assignment
 *
 * Remove a specific role assignment from a group by its ID.
 *
 * @param group_id - The ID of the group.
 * @param role_assignment_id - The ID of the group role assignment to remove.
 */
export const AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignmentInput,
    outputSchema:
      AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignmentOutput,
    errors: [Forbidden, NotFound] as const,
  }));
