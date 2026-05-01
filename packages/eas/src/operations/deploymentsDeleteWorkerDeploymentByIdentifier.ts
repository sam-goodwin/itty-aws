import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deploymentsDeleteWorkerDeploymentByIdentifier($appId: ID!, $deploymentIdentifier: ID!) {\n  deployments {\n    deleteWorkerDeploymentByIdentifier(appId: $appId, deploymentIdentifier: $deploymentIdentifier) {\n      deploymentIdentifier\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const DeploymentsDeleteWorkerDeploymentByIdentifierInput = Schema.Struct(
  {
    appId: Schema.String,
    deploymentIdentifier: Schema.String,
  },
).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentsDeleteWorkerDeploymentByIdentifier",
    type: "mutation",
  }),
);
export type DeploymentsDeleteWorkerDeploymentByIdentifierInput =
  typeof DeploymentsDeleteWorkerDeploymentByIdentifierInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentsDeleteWorkerDeploymentByIdentifierOutput =
  Schema.Struct({
    deploymentIdentifier: Schema.Unknown,
    id: Schema.String,
  }).pipe(T.ResponsePath("deployments.deleteWorkerDeploymentByIdentifier"));
export type DeploymentsDeleteWorkerDeploymentByIdentifierOutput =
  typeof DeploymentsDeleteWorkerDeploymentByIdentifierOutput.Type;

export const deploymentsDeleteWorkerDeploymentByIdentifier = API.make(() => ({
  inputSchema: DeploymentsDeleteWorkerDeploymentByIdentifierInput,
  outputSchema: DeploymentsDeleteWorkerDeploymentByIdentifierOutput,
}));
