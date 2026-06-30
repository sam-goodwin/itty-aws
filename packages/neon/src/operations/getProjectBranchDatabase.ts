import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface GetProjectBranchDatabaseInput {
  project_id: string;
  branch_id: string;
  database_name: string;
}
export const GetProjectBranchDatabaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    database_name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/branches/{branch_id}/databases/{database_name}",
    }),
  ) as unknown as Schema.Codec<GetProjectBranchDatabaseInput>;

// Output Schema
export interface GetProjectBranchDatabaseOutput {
  database: {
    id: number;
    branch_id: string;
    name: string;
    owner_name: string;
    created_at: string;
    updated_at: string;
  };
}
export const GetProjectBranchDatabaseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.Struct({
      id: Schema.Number,
      branch_id: Schema.String,
      name: Schema.String,
      owner_name: Schema.String,
      created_at: Schema.String,
      updated_at: Schema.String,
    }),
  }) as unknown as Schema.Codec<GetProjectBranchDatabaseOutput>;

// The operation
/**
 * Retrieve database details
 *
 * Retrieves information about the specified database.
 * For related information, see [Manage databases](https://neon.com/docs/manage/databases/).
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 * @param database_name - The database name
 */
export const getProjectBranchDatabase = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetProjectBranchDatabaseInput,
    outputSchema: GetProjectBranchDatabaseOutput,
    errors: [NotFound] as const,
  }),
);
