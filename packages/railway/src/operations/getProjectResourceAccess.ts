import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getProjectResourceAccess($projectId: String!) {\n  projectResourceAccess(projectId: $projectId) {\n    customDomain {\n      disallowed\n    }\n    databaseDeployment {\n      disallowed\n    }\n    deployment {\n      disallowed\n    }\n    environment {\n      disallowed\n    }\n    plugin {\n      disallowed\n    }\n    sandbox {\n      disallowed\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetProjectResourceAccessInput = Schema.Struct({
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getProjectResourceAccess",
    type: "query",
  }),
);
export type GetProjectResourceAccessInput =
  typeof GetProjectResourceAccessInput.Type;

// Output Schema (GraphQL selection set)
export const GetProjectResourceAccessOutput = Schema.Struct({
  customDomain: Schema.Struct({
    disallowed: Schema.NullOr(Schema.String),
  }),
  databaseDeployment: Schema.Struct({
    disallowed: Schema.NullOr(Schema.String),
  }),
  deployment: Schema.Struct({
    disallowed: Schema.NullOr(Schema.String),
  }),
  environment: Schema.Struct({
    disallowed: Schema.NullOr(Schema.String),
  }),
  plugin: Schema.Struct({
    disallowed: Schema.NullOr(Schema.String),
  }),
  sandbox: Schema.Struct({
    disallowed: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("projectResourceAccess"));
export type GetProjectResourceAccessOutput =
  typeof GetProjectResourceAccessOutput.Type;

/**
 * Get resource access rules for project-specific actions
 */
export const getProjectResourceAccess = API.make(() => ({
  inputSchema: GetProjectResourceAccessInput,
  outputSchema: GetProjectResourceAccessOutput,
}));
