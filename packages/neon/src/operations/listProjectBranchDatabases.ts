import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface ListProjectBranchDatabasesInput {
  project_id: string;
  branch_id: string;
}
export const ListProjectBranchDatabasesInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/branches/{branch_id}/databases",
    }),
  ) as unknown as Schema.Codec<ListProjectBranchDatabasesInput>;

// Output Schema
export interface ListProjectBranchDatabasesOutput {
  databases: {
    id: number;
    branch_id: string;
    name: string;
    owner_name: string;
    created_at: string;
    updated_at: string;
  }[];
}
export const ListProjectBranchDatabasesOutput =
  /*@__PURE__*/ Schema.Struct({
    databases: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        branch_id: Schema.String,
        name: Schema.String,
        owner_name: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<ListProjectBranchDatabasesOutput>;

// The operation
/**
 * List databases
 *
 * Retrieves a list of databases for the specified branch.
 * A branch can have multiple databases.
 * For related information, see [Manage databases](https://neon.com/docs/manage/databases/).
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const listProjectBranchDatabases = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListProjectBranchDatabasesInput,
  outputSchema: ListProjectBranchDatabasesOutput,
  errors: [NotFound] as const,
}));
