import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getDeploymentSnapshot($deploymentId: String!) {\n  deploymentSnapshot(deploymentId: $deploymentId) {\n    createdAt\n    id\n    updatedAt\n    variables\n  }\n}";

// Input Schema (GraphQL variables)
export const GetDeploymentSnapshotInput = Schema.Struct({
  deploymentId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getDeploymentSnapshot",
    type: "query",
  }),
);
export type GetDeploymentSnapshotInput = typeof GetDeploymentSnapshotInput.Type;

// Output Schema (GraphQL selection set)
export const GetDeploymentSnapshotOutput = Schema.NullOr(
  Schema.Struct({
    createdAt: Schema.String,
    id: Schema.String,
    updatedAt: Schema.String,
    variables: Schema.Unknown,
  }),
).pipe(T.ResponsePath("deploymentSnapshot"));
export type GetDeploymentSnapshotOutput =
  typeof GetDeploymentSnapshotOutput.Type;

/**
 * Find a single DeploymentSnapshot
 */
export const getDeploymentSnapshot = API.make(() => ({
  inputSchema: GetDeploymentSnapshotInput,
  outputSchema: GetDeploymentSnapshotOutput,
}));
