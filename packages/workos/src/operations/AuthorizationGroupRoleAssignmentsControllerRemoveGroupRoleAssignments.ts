import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignmentsInput {
  group_id: string;
  role_slug: string;
  resource_id?: string;
  resource_external_id?: string;
  resource_type_slug?: string;
}
export const AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignmentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group_id: Schema.String.pipe(T.PathParam()),
    role_slug: Schema.String,
    resource_id: Schema.optional(Schema.String),
    resource_external_id: Schema.optional(Schema.String),
    resource_type_slug: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/authorization/groups/{group_id}/role_assignments",
    }),
  ) as unknown as Schema.Codec<AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignmentsInput>;

// Output Schema
export type AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignmentsOutput =
  void;
export const AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignmentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignmentsOutput>;

// The operation
/**
 * Remove group role assignments by criteria
 *
 * Remove role assignments from a group that match the provided criteria. Returns 404 when no matching active assignment is found.
 *
 * @param group_id - The ID of the group.
 */
export const AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignments =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignmentsInput,
    outputSchema:
      AuthorizationGroupRoleAssignmentsControllerRemoveGroupRoleAssignmentsOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
