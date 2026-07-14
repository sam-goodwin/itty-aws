import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  Forbidden,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export interface AuthorizationGroupRoleAssignmentsControllerCreateInput {
  group_id: string;
  role_slug: string;
  resource_id?: string;
  resource_external_id?: string;
  resource_type_slug?: string;
}
export const AuthorizationGroupRoleAssignmentsControllerCreateInput =
  /*@__PURE__*/ Schema.Struct({
    group_id: Schema.String.pipe(T.PathParam()),
    role_slug: Schema.String,
    resource_id: Schema.optional(Schema.String),
    resource_external_id: Schema.optional(Schema.String),
    resource_type_slug: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/authorization/groups/{group_id}/role_assignments",
    }),
  ) as unknown as Schema.Codec<AuthorizationGroupRoleAssignmentsControllerCreateInput>;

// Output Schema
export interface AuthorizationGroupRoleAssignmentsControllerCreateOutput {
  object: string;
  id: string;
  group_id: string;
  role: { slug?: string };
  resource: { id: string; external_id: string; resource_type_slug: string };
  created_at: string;
  updated_at: string;
}
export const AuthorizationGroupRoleAssignmentsControllerCreateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AuthorizationGroupRoleAssignmentsControllerCreateOutput>;

// The operation
/**
 * Assign a role to a group
 *
 * Assign a role to a group on a specific resource.
 *
 * @param group_id - The ID of the group.
 */
export const AuthorizationGroupRoleAssignmentsControllerCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationGroupRoleAssignmentsControllerCreateInput,
    outputSchema: AuthorizationGroupRoleAssignmentsControllerCreateOutput,
    errors: [Forbidden, NotFound, Conflict, UnprocessableEntity] as const,
  }));
