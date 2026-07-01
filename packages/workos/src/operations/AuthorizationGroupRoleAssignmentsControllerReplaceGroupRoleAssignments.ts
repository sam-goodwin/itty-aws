import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface AuthorizationGroupRoleAssignmentsControllerReplaceGroupRoleAssignmentsInput {
  group_id: string;
  role_assignments: ReadonlyArray<{
    role_slug: string;
    resource_id?: string;
    resource_external_id?: string;
    resource_type_slug?: string;
  }>;
}
export const AuthorizationGroupRoleAssignmentsControllerReplaceGroupRoleAssignmentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group_id: Schema.String.pipe(T.PathParam()),
    role_assignments: Schema.Array(
      Schema.Struct({
        role_slug: Schema.String,
        resource_id: Schema.optional(Schema.String),
        resource_external_id: Schema.optional(Schema.String),
        resource_type_slug: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/authorization/groups/{group_id}/role_assignments",
    }),
  ) as unknown as Schema.Codec<AuthorizationGroupRoleAssignmentsControllerReplaceGroupRoleAssignmentsInput>;

// Output Schema
export interface AuthorizationGroupRoleAssignmentsControllerReplaceGroupRoleAssignmentsOutput {
  object: string;
  data: ReadonlyArray<{
    object: string;
    id: string;
    group_id: string;
    role: { slug?: string };
    resource: { id: string; external_id: string; resource_type_slug: string };
    created_at: string;
    updated_at: string;
  }>;
  list_metadata: { before: string | null; after: string | null };
}
export const AuthorizationGroupRoleAssignmentsControllerReplaceGroupRoleAssignmentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
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
      }),
    ),
    list_metadata: Schema.Struct({
      before: Schema.NullOr(Schema.String),
      after: Schema.NullOr(Schema.String),
    }),
  }) as unknown as Schema.Codec<AuthorizationGroupRoleAssignmentsControllerReplaceGroupRoleAssignmentsOutput>;

// The operation
/**
 * Replace all role assignments for a group
 *
 * Replace all role assignments for a group with the provided list. Existing assignments not in the list will be removed.
 *
 * @param group_id - The ID of the group.
 */
export const AuthorizationGroupRoleAssignmentsControllerReplaceGroupRoleAssignments =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      AuthorizationGroupRoleAssignmentsControllerReplaceGroupRoleAssignmentsInput,
    outputSchema:
      AuthorizationGroupRoleAssignmentsControllerReplaceGroupRoleAssignmentsOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
