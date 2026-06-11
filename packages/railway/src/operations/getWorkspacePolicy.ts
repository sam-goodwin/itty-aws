import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query workspacePolicy($workspaceId: String!) {\n  workspacePolicy(workspaceId: $workspaceId) {\n    id\n    restrictDeploysToAllowedSources\n    restrictPublicTcpProxies\n    restrictRailwayDomainGeneration\n  }\n}";

// Input Schema (GraphQL variables)
export const GetWorkspacePolicyInput = Schema.Struct({
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workspacePolicy",
    type: "query",
  }),
);
export type GetWorkspacePolicyInput = typeof GetWorkspacePolicyInput.Type;

// Output Schema (GraphQL selection set)
export const GetWorkspacePolicyOutput = Schema.NullOr(
  Schema.Struct({
    id: Schema.String,
    restrictDeploysToAllowedSources: Schema.Boolean,
    restrictPublicTcpProxies: Schema.Boolean,
    restrictRailwayDomainGeneration: Schema.Boolean,
  }),
).pipe(T.ResponsePath("workspacePolicy"));
export type GetWorkspacePolicyOutput = typeof GetWorkspacePolicyOutput.Type;

/**
 * Get the policies for a workspace
 */
export const getWorkspacePolicy = API.make(() => ({
  inputSchema: GetWorkspacePolicyInput,
  outputSchema: GetWorkspacePolicyOutput,
}));
