import * as Schema from "effect/Schema";
import { BranchSchema, OperationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const SetDefaultProjectBranchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branches/{branch_id}/set_as_default",
    }),
  );
export type SetDefaultProjectBranchInput =
  typeof SetDefaultProjectBranchInput.Type;

// Output Schema
export const SetDefaultProjectBranchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    branch: Schema.suspend(() => BranchSchema),
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
  });
export type SetDefaultProjectBranchOutput =
  typeof SetDefaultProjectBranchOutput.Type;

// The operation
/**
 * Set branch as default
 *
 * Sets the specified branch as the project's default branch.
 * The default designation is automatically removed from the previous default branch.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * You can obtain the `branch_id` by listing the project's branches.
 * For more information, see [Manage branches](https://neon.tech/docs/manage/branches/).
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const setDefaultProjectBranch = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SetDefaultProjectBranchInput,
    outputSchema: SetDefaultProjectBranchOutput,
    errors: [NotFound] as const,
  }),
);
