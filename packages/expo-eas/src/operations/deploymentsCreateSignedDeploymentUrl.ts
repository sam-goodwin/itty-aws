import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deploymentsCreateSignedDeploymentUrl($appId: ID!, $deploymentIdentifier: ID) {\n  deployments {\n    createSignedDeploymentUrl(appId: $appId, deploymentIdentifier: $deploymentIdentifier) {\n      deploymentIdentifier\n      pendingWorkerDeploymentId\n      url\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const DeploymentsCreateSignedDeploymentUrlInput = Schema.Struct({
  appId: Schema.String,
  deploymentIdentifier: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentsCreateSignedDeploymentUrl",
    type: "mutation",
  }),
);
export type DeploymentsCreateSignedDeploymentUrlInput =
  typeof DeploymentsCreateSignedDeploymentUrlInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentsCreateSignedDeploymentUrlOutput = Schema.Struct({
  deploymentIdentifier: Schema.String,
  pendingWorkerDeploymentId: Schema.String,
  url: Schema.String,
}).pipe(T.ResponsePath("deployments.createSignedDeploymentUrl"));
export type DeploymentsCreateSignedDeploymentUrlOutput =
  typeof DeploymentsCreateSignedDeploymentUrlOutput.Type;

export const deploymentsCreateSignedDeploymentUrl = API.make(() => ({
  inputSchema: DeploymentsCreateSignedDeploymentUrlInput,
  outputSchema: DeploymentsCreateSignedDeploymentUrlOutput,
}));
