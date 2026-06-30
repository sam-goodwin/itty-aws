import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AuthorizationGroupRoleAssignmentsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group_id: Schema.String.pipe(T.PathParam()),
    role_assignment_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/authorization/groups/{group_id}/role_assignments/{role_assignment_id}",
    }),
  );
export type AuthorizationGroupRoleAssignmentsControllerGetInput =
  typeof AuthorizationGroupRoleAssignmentsControllerGetInput.Type;

// Output Schema
export const AuthorizationGroupRoleAssignmentsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    group_id: Schema.String,
    role: Schema.Struct({
      slug: Schema.optional(Schema.String),
    }),
    resource: Schema.Struct({
      id: Schema.String,
      external_id: Schema.String,
      resource_type_slug: Schema.String,
    }),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type AuthorizationGroupRoleAssignmentsControllerGetOutput =
  typeof AuthorizationGroupRoleAssignmentsControllerGetOutput.Type;

// The operation
/**
 * Get a group role assignment
 *
 * Get a specific role assignment for a group by its ID.
 *
 * @param group_id - The ID of the group.
 * @param role_assignment_id - The ID of the group role assignment.
 */
export const AuthorizationGroupRoleAssignmentsControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationGroupRoleAssignmentsControllerGetInput,
    outputSchema: AuthorizationGroupRoleAssignmentsControllerGetOutput,
    errors: [Forbidden, NotFound] as const,
  }));
