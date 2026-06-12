import * as Schema from "effect/Schema";
import {
  AnnotationValueDataSchema,
  BranchCreateRequestEndpointOptionsSchema,
  BranchSchema,
  ConnectionDetailsSchema,
  DatabaseSchema,
  EndpointSchema,
  OperationSchema,
  RoleSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CreateProjectBranchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    endpoints: Schema.optional(
      Schema.Array(
        Schema.suspend(() => BranchCreateRequestEndpointOptionsSchema),
      ),
    ),
    branch: Schema.optional(
      Schema.Struct({
        parent_id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        parent_lsn: Schema.optional(Schema.String),
        parent_timestamp: Schema.optional(Schema.String),
        protected: Schema.optional(Schema.Boolean),
        archived: Schema.optional(Schema.Boolean),
        init_source: Schema.optional(Schema.String),
        expires_at: Schema.optional(Schema.String),
      }),
    ),
    annotation_value: Schema.optional(
      Schema.suspend(() => AnnotationValueDataSchema),
    ),
  }).pipe(T.Http({ method: "POST", path: "/projects/{project_id}/branches" }));
export type CreateProjectBranchInput = typeof CreateProjectBranchInput.Type;

// Output Schema
export const CreateProjectBranchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    branch: Schema.suspend(() => BranchSchema),
    endpoints: Schema.Array(Schema.suspend(() => EndpointSchema)),
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
    roles: Schema.Array(Schema.suspend(() => RoleSchema)),
    databases: Schema.Array(Schema.suspend(() => DatabaseSchema)),
    connection_uris: Schema.optional(
      Schema.Array(Schema.suspend(() => ConnectionDetailsSchema)),
    ),
  });
export type CreateProjectBranchOutput = typeof CreateProjectBranchOutput.Type;

// The operation
/**
 * Create branch
 *
 * Creates a branch in the specified project.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * This method does not require a request body, but you can specify one to create a compute endpoint for the branch or to select a non-default parent branch.
 * By default, the branch is created from the project's default branch with no compute endpoint, and the branch name is auto-generated.
 * To access the branch, you must add an endpoint object. A `read_write` endpoint allows you to perform read and write operations on the branch.
 * Each branch supports one read-write endpoint and multiple read-only endpoints.
 * For related information, see [Manage branches](https://neon.tech/docs/manage/branches/).
 *
 * @param project_id - The Neon project ID
 */
export const createProjectBranch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateProjectBranchInput,
  outputSchema: CreateProjectBranchOutput,
}));
