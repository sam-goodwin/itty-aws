import * as Schema from "effect/Schema";
import { OperationSchema, RoleSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, Conflict } from "../errors.ts";

// Input Schema
export const CreateProjectBranchRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    role: Schema.Struct({
      name: Schema.String,
      no_login: Schema.optional(Schema.Boolean),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branches/{branch_id}/roles",
    }),
  );
export type CreateProjectBranchRoleInput =
  typeof CreateProjectBranchRoleInput.Type;

// Output Schema
export const CreateProjectBranchRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.suspend(() => RoleSchema),
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
  });
export type CreateProjectBranchRoleOutput =
  typeof CreateProjectBranchRoleOutput.Type;

// The operation
/**
 * Create role
 *
 * Creates a Postgres role in the specified branch.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * You can obtain the `branch_id` by listing the project's branches.
 * For related information, see [Manage roles](https://neon.tech/docs/manage/roles/).
 * Connections established to the active compute endpoint will be dropped.
 * If the compute endpoint is idle, the endpoint becomes active for a short period of time and is suspended afterward.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const createProjectBranchRole = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateProjectBranchRoleInput,
    outputSchema: CreateProjectBranchRoleOutput,
    errors: [NotFound, Conflict] as const,
  }),
);
