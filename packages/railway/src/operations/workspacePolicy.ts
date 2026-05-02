import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query workspacePolicy($workspaceId: String!) {\n  workspacePolicy(workspaceId: $workspaceId) {\n    id\n    restrictPublicTcpProxies\n    restrictRailwayDomainGeneration\n  }\n}";

// Input Schema (GraphQL variables)
export const WorkspacePolicyInput = Schema.Struct({
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workspacePolicy",
    type: "query",
  }),
);
export type WorkspacePolicyInput = typeof WorkspacePolicyInput.Type;

// Output Schema (GraphQL selection set)
export const WorkspacePolicyOutput = Schema.NullOr(
  Schema.Struct({
    id: Schema.String,
    restrictPublicTcpProxies: Schema.Boolean,
    restrictRailwayDomainGeneration: Schema.Boolean,
  }),
).pipe(T.ResponsePath("workspacePolicy"));
export type WorkspacePolicyOutput = typeof WorkspacePolicyOutput.Type;

/**
 * Get the policies for a workspace
 */
export const workspacePolicy = API.make(() => ({
  inputSchema: WorkspacePolicyInput,
  outputSchema: WorkspacePolicyOutput,
}));
