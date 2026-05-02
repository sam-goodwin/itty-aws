import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query projectResourceAccess($projectId: String!) {\n  projectResourceAccess(projectId: $projectId) {\n    customDomain {\n      disallowed\n    }\n    databaseDeployment {\n      disallowed\n    }\n    deployment {\n      disallowed\n    }\n    environment {\n      disallowed\n    }\n    plugin {\n      disallowed\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const ProjectResourceAccessInput = Schema.Struct({
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectResourceAccess",
    type: "query",
  }),
);
export type ProjectResourceAccessInput = typeof ProjectResourceAccessInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectResourceAccessOutput = Schema.Struct({
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
}).pipe(T.ResponsePath("projectResourceAccess"));
export type ProjectResourceAccessOutput =
  typeof ProjectResourceAccessOutput.Type;

/**
 * Get resource access rules for project-specific actions
 */
export const projectResourceAccess = API.make(() => ({
  inputSchema: ProjectResourceAccessInput,
  outputSchema: ProjectResourceAccessOutput,
}));
