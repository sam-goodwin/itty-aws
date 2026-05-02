import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deploymentApprove($id: String!) {\n  deploymentApprove(id: $id)\n}";

// Input Schema (GraphQL variables)
export const DeploymentApproveInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentApprove",
    type: "mutation",
  }),
);
export type DeploymentApproveInput = typeof DeploymentApproveInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentApproveOutput = Schema.Boolean.pipe(
  T.ResponsePath("deploymentApprove"),
);
export type DeploymentApproveOutput = typeof DeploymentApproveOutput.Type;

/**
 * Approves a deployment.
 */
export const deploymentApprove = API.make(() => ({
  inputSchema: DeploymentApproveInput,
  outputSchema: DeploymentApproveOutput,
}));
