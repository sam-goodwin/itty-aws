import * as Schema from "effect/Schema";
import { AnnotationDataSchema, BranchSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetProjectBranchInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  branch_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/projects/{project_id}/branches/{branch_id}",
  }),
);
export type GetProjectBranchInput = typeof GetProjectBranchInput.Type;

// Output Schema
export const GetProjectBranchOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    branch: Schema.suspend(() => BranchSchema),
    annotation: Schema.suspend(() => AnnotationDataSchema),
  },
);
export type GetProjectBranchOutput = typeof GetProjectBranchOutput.Type;

// The operation
/**
 * Retrieve branch details
 *
 * Retrieves information about the specified branch.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * You can obtain a `branch_id` by listing the project's branches.
 * A `branch_id` value has a `br-` prefix.
 * Each Neon project is initially created with a root and default branch named `main`.
 * A project can contain one or more branches.
 * A parent branch is identified by a `parent_id` value, which is the `id` of the parent branch.
 * For related information, see [Manage branches](https://neon.tech/docs/manage/branches/).
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const getProjectBranch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetProjectBranchInput,
  outputSchema: GetProjectBranchOutput,
  errors: [NotFound] as const,
}));
