import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface UpdateNeonAuthUserRoleInput {
  project_id: string;
  branch_id: string;
  auth_user_id: string;
  roles: string[];
}
export const UpdateNeonAuthUserRoleInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    auth_user_id: Schema.String.pipe(T.PathParam()),
    roles: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}/role",
    }),
  ) as unknown as Schema.Codec<UpdateNeonAuthUserRoleInput>;

// Output Schema
export interface UpdateNeonAuthUserRoleOutput {
  id: string;
}
export const UpdateNeonAuthUserRoleOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
  }) as unknown as Schema.Codec<UpdateNeonAuthUserRoleOutput>;

// The operation
/**
 * Update auth user role
 *
 * Updates the role of a user in the Neon Auth user directory for the specified branch.
 * The role controls the user's level of access within the Neon Auth integration.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 * @param auth_user_id - The Neon user ID
 */
export const updateNeonAuthUserRole = /*@__PURE__*/ API.make(() => ({
  inputSchema: UpdateNeonAuthUserRoleInput,
  outputSchema: UpdateNeonAuthUserRoleOutput,
}));
