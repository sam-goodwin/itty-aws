import * as Schema from "effect/Schema";
import { OperationSchema, RoleSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteProjectBranchRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    role_name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/projects/{project_id}/branches/{branch_id}/roles/{role_name}",
    }),
  );
export type DeleteProjectBranchRoleInput =
  typeof DeleteProjectBranchRoleInput.Type;

// Output Schema
export const DeleteProjectBranchRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.suspend(() => RoleSchema),
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
  });
export type DeleteProjectBranchRoleOutput =
  typeof DeleteProjectBranchRoleOutput.Type;

// The operation
/**
 * Delete role
 *
 * Deletes the specified Postgres role from the branch.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * You can obtain the `branch_id` by listing the project's branches.
 * You can obtain the `role_name` by listing the roles for a branch.
 * For related information, see [Manage roles](https://neon.tech/docs/manage/roles/).
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 * @param role_name - The role name
 */
export const deleteProjectBranchRole = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteProjectBranchRoleInput,
    outputSchema: DeleteProjectBranchRoleOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);
