import * as Schema from "effect/Schema";
import { DataAPISettingsSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CreateProjectBranchDataAPIInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    database_name: Schema.String.pipe(T.PathParam()),
    auth_provider: Schema.optional(Schema.Literals(["neon_auth", "external"])),
    jwks_url: Schema.optional(Schema.String),
    provider_name: Schema.optional(Schema.String),
    jwt_audience: Schema.optional(Schema.String),
    add_default_grants: Schema.optional(Schema.Boolean),
    skip_auth_schema: Schema.optional(Schema.Boolean),
    settings: Schema.optional(Schema.suspend(() => DataAPISettingsSchema)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branches/{branch_id}/data-api/{database_name}",
    }),
  );
export type CreateProjectBranchDataAPIInput =
  typeof CreateProjectBranchDataAPIInput.Type;

// Output Schema
export const CreateProjectBranchDataAPIOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.String,
  });
export type CreateProjectBranchDataAPIOutput =
  typeof CreateProjectBranchDataAPIOutput.Type;

// The operation
/**
 * Create Neon Data API
 *
 * Creates a new instance of Neon Data API in the specified branch.
 * You can obtain the `project_id` and `branch_id` by listing the projects and branches for your Neon account.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 * @param database_name - The database name
 */
export const createProjectBranchDataAPI = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateProjectBranchDataAPIInput,
    outputSchema: CreateProjectBranchDataAPIOutput,
  }),
);
