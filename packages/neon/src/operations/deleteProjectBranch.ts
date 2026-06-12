import * as Schema from "effect/Schema";
import { BranchSchema, OperationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteProjectBranchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/projects/{project_id}/branches/{branch_id}",
    }),
  );
export type DeleteProjectBranchInput = typeof DeleteProjectBranchInput.Type;

// Output Schema
export const DeleteProjectBranchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    branch: Schema.suspend(() => BranchSchema),
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
  });
export type DeleteProjectBranchOutput = typeof DeleteProjectBranchOutput.Type;

// The operation
/**
 * Delete branch
 *
 * Deletes the specified branch from a project, and places
 * all compute endpoints into an idle state, breaking existing client connections.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * You can obtain a `branch_id` by listing the project's branches.
 * For related information, see [Manage branches](https://neon.tech/docs/manage/branches/).
 * When a successful response status is received, the compute endpoints are still active,
 * and the branch is not yet deleted from storage.
 * The deletion occurs after all operations finish.
 * You cannot delete a project's root or default branch, and you cannot delete a branch that has a child branch.
 * A project must have at least one branch.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const deleteProjectBranch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteProjectBranchInput,
  outputSchema: DeleteProjectBranchOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
