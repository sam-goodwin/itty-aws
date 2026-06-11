import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query workspacePolicySelectableDeploySources($sourceType: WorkspacePolicyDeploySourceType!, $workspaceId: String!) {\n  workspacePolicySelectableDeploySources(sourceType: $sourceType, workspaceId: $workspaceId) {\n    sourceIcon\n    sourceId\n    sourceName\n    sourceType\n  }\n}";

// Input Schema (GraphQL variables)
export const GetWorkspacePolicySelectableDeploySourcesInput = Schema.Struct({
  sourceType: Schema.Literals(["GITHUB_ORG"]),
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workspacePolicySelectableDeploySources",
    type: "query",
  }),
);
export type GetWorkspacePolicySelectableDeploySourcesInput =
  typeof GetWorkspacePolicySelectableDeploySourcesInput.Type;

// Output Schema (GraphQL selection set)
export const GetWorkspacePolicySelectableDeploySourcesOutput = Schema.Array(
  Schema.Struct({
    sourceIcon: Schema.NullOr(Schema.String),
    sourceId: Schema.String,
    sourceName: Schema.String,
    sourceType: Schema.Literals(["GITHUB_ORG"]),
  }),
).pipe(T.ResponsePath("workspacePolicySelectableDeploySources"));
export type GetWorkspacePolicySelectableDeploySourcesOutput =
  typeof GetWorkspacePolicySelectableDeploySourcesOutput.Type;

/**
 * List deploy sources that can be added to a workspace policy.
 */
export const getWorkspacePolicySelectableDeploySources = API.make(() => ({
  inputSchema: GetWorkspacePolicySelectableDeploySourcesInput,
  outputSchema: GetWorkspacePolicySelectableDeploySourcesOutput,
}));
