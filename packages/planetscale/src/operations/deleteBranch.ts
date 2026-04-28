import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteBranchInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  delete_descendants: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}",
  }),
);
export type DeleteBranchInput = typeof DeleteBranchInput.Type;

// Output Schema
export const DeleteBranchOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteBranchOutput = typeof DeleteBranchOutput.Type;

// The operation
/**
 * Delete a branch
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 * @param delete_descendants - If true, recursively delete all descendant branches along with this branch
 */
export const deleteBranch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteBranchInput,
  outputSchema: DeleteBranchOutput,
  errors: [Forbidden, NotFound] as const,
}));
