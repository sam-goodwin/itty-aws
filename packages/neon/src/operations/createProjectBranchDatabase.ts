import * as Schema from "effect/Schema";
import { DatabaseSchema, OperationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const CreateProjectBranchDatabaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    database: Schema.Struct({
      name: Schema.String,
      owner_name: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branches/{branch_id}/databases",
    }),
  );
export type CreateProjectBranchDatabaseInput =
  typeof CreateProjectBranchDatabaseInput.Type;

// Output Schema
export const CreateProjectBranchDatabaseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.suspend(() => DatabaseSchema),
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
  });
export type CreateProjectBranchDatabaseOutput =
  typeof CreateProjectBranchDatabaseOutput.Type;

// The operation
/**
 * Create database
 *
 * Creates a database in the specified branch.
 * A branch can have multiple databases.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * You can obtain the `branch_id` by listing the project's branches.
 * For related information, see [Manage databases](https://neon.tech/docs/manage/databases/).
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const createProjectBranchDatabase = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateProjectBranchDatabaseInput,
    outputSchema: CreateProjectBranchDatabaseOutput,
    errors: [BadRequest, NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
