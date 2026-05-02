import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deploymentStop($id: String!) {\n  deploymentStop(id: $id)\n}";

// Input Schema (GraphQL variables)
export const DeploymentStopInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentStop",
    type: "mutation",
  }),
);
export type DeploymentStopInput = typeof DeploymentStopInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentStopOutput = Schema.Boolean.pipe(
  T.ResponsePath("deploymentStop"),
);
export type DeploymentStopOutput = typeof DeploymentStopOutput.Type;

/**
 * Stops a deployment.
 */
export const deploymentStop = API.make(() => ({
  inputSchema: DeploymentStopInput,
  outputSchema: DeploymentStopOutput,
}));
