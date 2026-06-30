import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface ListProjectBranchRolesInput {
  project_id: string;
  branch_id: string;
}
export const ListProjectBranchRolesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/branches/{branch_id}/roles",
    }),
  ) as unknown as Schema.Codec<ListProjectBranchRolesInput>;

// Output Schema
export interface ListProjectBranchRolesOutput {
  roles: {
    branch_id: string;
    name: string;
    password?: Redacted.Redacted<string>;
    protected?: boolean;
    authentication_method?: string;
    created_at: string;
    updated_at: string;
  }[];
}
export const ListProjectBranchRolesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    roles: Schema.Array(
      Schema.Struct({
        branch_id: Schema.String,
        name: Schema.String,
        password: Schema.optional(SensitiveOutputString),
        protected: Schema.optional(Schema.Boolean),
        authentication_method: Schema.optional(Schema.String),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<ListProjectBranchRolesOutput>;

// The operation
/**
 * List roles
 *
 * Retrieves a list of Postgres roles from the specified branch.
 * For related information, see [Manage roles](https://neon.com/docs/manage/roles/).
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const listProjectBranchRoles = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListProjectBranchRolesInput,
    outputSchema: ListProjectBranchRolesOutput,
    errors: [NotFound] as const,
  }),
);
