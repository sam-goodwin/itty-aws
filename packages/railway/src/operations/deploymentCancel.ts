import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deploymentCancel($id: String!) {\n  deploymentCancel(id: $id)\n}";

// Input Schema (GraphQL variables)
export const DeploymentCancelInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentCancel",
    type: "mutation",
  }),
);
export type DeploymentCancelInput = typeof DeploymentCancelInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentCancelOutput = Schema.Boolean.pipe(
  T.ResponsePath("deploymentCancel"),
);
export type DeploymentCancelOutput = typeof DeploymentCancelOutput.Type;

/**
 * Cancels a deployment.
 */
export const deploymentCancel = API.make(() => ({
  inputSchema: DeploymentCancelInput,
  outputSchema: DeploymentCancelOutput,
}));
