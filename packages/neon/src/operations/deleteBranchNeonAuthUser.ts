import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteBranchNeonAuthUserInput {
  project_id: string;
  branch_id: string;
  auth_user_id: string;
}
export const DeleteBranchNeonAuthUserInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    auth_user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}",
    }),
  ) as unknown as Schema.Codec<DeleteBranchNeonAuthUserInput>;

// Output Schema
export type DeleteBranchNeonAuthUserOutput = void;
export const DeleteBranchNeonAuthUserOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteBranchNeonAuthUserOutput>;

// The operation
/**
 * Delete auth user
 *
 * Deletes the specified user from the Neon Auth user directory for the specified branch.
 * Removes the user record from `neon_auth.users_sync`. This action cannot be undone.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 * @param auth_user_id - The Neon user ID
 */
export const deleteBranchNeonAuthUser = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteBranchNeonAuthUserInput,
  outputSchema: DeleteBranchNeonAuthUserOutput,
}));
