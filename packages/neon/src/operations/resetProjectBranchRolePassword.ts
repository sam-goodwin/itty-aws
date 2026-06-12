import * as Schema from "effect/Schema";
import { OperationSchema, RoleSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const ResetProjectBranchRolePasswordInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    role_name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reset_password",
    }),
  );
export type ResetProjectBranchRolePasswordInput =
  typeof ResetProjectBranchRolePasswordInput.Type;

// Output Schema
export const ResetProjectBranchRolePasswordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.suspend(() => RoleSchema),
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
  });
export type ResetProjectBranchRolePasswordOutput =
  typeof ResetProjectBranchRolePasswordOutput.Type;

// The operation
/**
 * Reset role password
 *
 * Resets the password for the specified Postgres role.
 * Returns a new password and operations. The new password is ready to use when the last operation finishes.
 * The old password remains valid until last operation finishes.
 * Connections to the compute endpoint are dropped. If idle,
 * the compute endpoint becomes active for a short period of time.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * You can obtain the `branch_id` by listing the project's branches.
 * You can obtain the `role_name` by listing the roles for a branch.
 * For related information, see [Manage roles](https://neon.tech/docs/manage/roles/).
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 * @param role_name - The role name
 */
export const resetProjectBranchRolePassword =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ResetProjectBranchRolePasswordInput,
    outputSchema: ResetProjectBranchRolePasswordOutput,
    errors: [NotFound] as const,
  }));
