import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const RemovePermissionFromOrganizationRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_role_id: Schema.String.pipe(T.PathParam()),
    permission_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organization_roles/{organization_role_id}/permissions/{permission_id}",
    }),
  );
export type RemovePermissionFromOrganizationRoleInput =
  typeof RemovePermissionFromOrganizationRoleInput.Type;

// Output Schema
export const RemovePermissionFromOrganizationRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["role"]),
    id: Schema.String,
    name: Schema.String,
    key: Schema.String,
    description: Schema.NullOr(Schema.String),
    is_creator_eligible: Schema.Boolean,
    permissions: Schema.Array(
      Schema.Struct({
        object: Schema.Literals(["permission"]),
        id: Schema.String,
        name: Schema.String,
        key: Schema.String,
        description: Schema.String,
        type: Schema.String,
        created_at: Schema.Number,
        updated_at: Schema.Number,
      }),
    ),
    created_at: Schema.Number,
    updated_at: Schema.Number,
  });
export type RemovePermissionFromOrganizationRoleOutput =
  typeof RemovePermissionFromOrganizationRoleOutput.Type;

// The operation
/**
 * Remove a permission from an organization role
 *
 * Removes a permission from an organization role
 *
 * @param organization_role_id - The ID of the organization role
 * @param permission_id - The ID of the permission to remove
 */
export const RemovePermissionFromOrganizationRole =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemovePermissionFromOrganizationRoleInput,
    outputSchema: RemovePermissionFromOrganizationRoleOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
