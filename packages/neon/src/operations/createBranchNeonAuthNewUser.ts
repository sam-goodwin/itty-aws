import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CreateBranchNeonAuthNewUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    email: Schema.String,
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branches/{branch_id}/auth/users",
    }),
  );
export type CreateBranchNeonAuthNewUserInput =
  typeof CreateBranchNeonAuthNewUserInput.Type;

// Output Schema
export const CreateBranchNeonAuthNewUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  });
export type CreateBranchNeonAuthNewUserOutput =
  typeof CreateBranchNeonAuthNewUserOutput.Type;

// The operation
/**
 * Create new auth user
 *
 * Creates a new user in the Neon Auth user directory for the specified branch.
 * The user is created in the `neon_auth.users_sync` table and can immediately authenticate
 * using the branch's configured auth providers.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const createBranchNeonAuthNewUser = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateBranchNeonAuthNewUserInput,
    outputSchema: CreateBranchNeonAuthNewUserOutput,
  }),
);
