import * as Schema from "effect/Schema";
import { DatabaseSchema, OperationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteProjectBranchDatabaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    database_name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/projects/{project_id}/branches/{branch_id}/databases/{database_name}",
    }),
  );
export type DeleteProjectBranchDatabaseInput =
  typeof DeleteProjectBranchDatabaseInput.Type;

// Output Schema
export const DeleteProjectBranchDatabaseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.suspend(() => DatabaseSchema),
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
  });
export type DeleteProjectBranchDatabaseOutput =
  typeof DeleteProjectBranchDatabaseOutput.Type;

// The operation
/**
 * Delete database
 *
 * Deletes the specified database from the branch.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * You can obtain the `branch_id` and `database_name` by listing the branch's databases.
 * For related information, see [Manage databases](https://neon.tech/docs/manage/databases/).
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 * @param database_name - The database name
 */
export const deleteProjectBranchDatabase = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteProjectBranchDatabaseInput,
    outputSchema: DeleteProjectBranchDatabaseOutput,
    errors: [NotFound] as const,
  }),
);
