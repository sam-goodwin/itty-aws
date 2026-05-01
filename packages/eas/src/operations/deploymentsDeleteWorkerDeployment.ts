import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deploymentsDeleteWorkerDeployment($workerDeploymentId: ID!) {\n  deployments {\n    deleteWorkerDeployment(workerDeploymentId: $workerDeploymentId) {\n      deploymentIdentifier\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const DeploymentsDeleteWorkerDeploymentInput = Schema.Struct({
  workerDeploymentId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentsDeleteWorkerDeployment",
    type: "mutation",
  }),
);
export type DeploymentsDeleteWorkerDeploymentInput =
  typeof DeploymentsDeleteWorkerDeploymentInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentsDeleteWorkerDeploymentOutput = Schema.Struct({
  deploymentIdentifier: Schema.Unknown,
  id: Schema.String,
}).pipe(T.ResponsePath("deployments.deleteWorkerDeployment"));
export type DeploymentsDeleteWorkerDeploymentOutput =
  typeof DeploymentsDeleteWorkerDeploymentOutput.Type;

export const deploymentsDeleteWorkerDeployment = API.make(() => ({
  inputSchema: DeploymentsDeleteWorkerDeploymentInput,
  outputSchema: DeploymentsDeleteWorkerDeploymentOutput,
}));
