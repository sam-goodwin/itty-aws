import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AuthorizationGroupRoleAssignmentsControllerGetInput {
  group_id: string;
  role_assignment_id: string;
}
export const AuthorizationGroupRoleAssignmentsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group_id: Schema.String.pipe(T.PathParam()),
    role_assignment_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/authorization/groups/{group_id}/role_assignments/{role_assignment_id}",
    }),
  ) as unknown as Schema.Codec<AuthorizationGroupRoleAssignmentsControllerGetInput>;

// Output Schema
export interface AuthorizationGroupRoleAssignmentsControllerGetOutput {
  object: string;
  id: string;
  group_id: string;
  role: { slug?: string };
  resource: { id: string; external_id: string; resource_type_slug: string };
  created_at: string;
  updated_at: string;
}
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
  }) as unknown as Schema.Codec<AuthorizationGroupRoleAssignmentsControllerGetOutput>;

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
