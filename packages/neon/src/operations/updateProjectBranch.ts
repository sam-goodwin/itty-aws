import * as Schema from "effect/Schema";
import { BranchSchema, OperationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const UpdateProjectBranchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    branch: Schema.Struct({
      name: Schema.optional(Schema.String),
      protected: Schema.optional(Schema.Boolean),
      expires_at: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/projects/{project_id}/branches/{branch_id}",
    }),
  );
export type UpdateProjectBranchInput = typeof UpdateProjectBranchInput.Type;

// Output Schema
export const UpdateProjectBranchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    branch: Schema.suspend(() => BranchSchema),
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
  });
export type UpdateProjectBranchOutput = typeof UpdateProjectBranchOutput.Type;

// The operation
/**
 * Update branch
 *
 * Updates the specified branch.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * You can obtain the `branch_id` by listing the project's branches.
 * For more information, see [Manage branches](https://neon.tech/docs/manage/branches/).
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const updateProjectBranch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateProjectBranchInput,
  outputSchema: UpdateProjectBranchOutput,
  errors: [BadRequest, NotFound] as const,
}));
