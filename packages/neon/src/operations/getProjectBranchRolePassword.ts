import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetProjectBranchRolePasswordInput {
  project_id: string;
  branch_id: string;
  role_name: string;
}
export const GetProjectBranchRolePasswordInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    role_name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reveal_password",
    }),
  ) as unknown as Schema.Codec<GetProjectBranchRolePasswordInput>;

// Output Schema
export interface GetProjectBranchRolePasswordOutput {
  password: Redacted.Redacted<string>;
}
export const GetProjectBranchRolePasswordOutput =
  /*@__PURE__*/ Schema.Struct({
    password: SensitiveOutputString,
  }) as unknown as Schema.Codec<GetProjectBranchRolePasswordOutput>;

// The operation
/**
 * Retrieve role password
 *
 * Retrieves the password for the specified Postgres role, if possible.
 * For related information, see [Manage roles](https://neon.com/docs/manage/roles/).
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 * @param role_name - The role name
 */
export const getProjectBranchRolePassword =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetProjectBranchRolePasswordInput,
    outputSchema: GetProjectBranchRolePasswordOutput,
    errors: [NotFound] as const,
  }));
