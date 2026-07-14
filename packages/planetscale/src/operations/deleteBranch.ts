import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface DeleteBranchInput {
  organization: string;
  database: string;
  branch: string;
  delete_descendants?: boolean;
}
export const DeleteBranchInput = /*@__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  delete_descendants: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}",
  }),
) as unknown as Schema.Codec<DeleteBranchInput>;

// Output Schema
export type DeleteBranchOutput = void;
export const DeleteBranchOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteBranchOutput>;

// The operation
/**
 * Delete a branch
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 * @param delete_descendants - If true, recursively delete all descendant branches along with this branch
 */
export const deleteBranch = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteBranchInput,
  outputSchema: DeleteBranchOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
