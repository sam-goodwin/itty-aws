import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deploymentRestart($id: String!) {\n  deploymentRestart(id: $id)\n}";

// Input Schema (GraphQL variables)
export const DeploymentRestartInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentRestart",
    type: "mutation",
  }),
);
export type DeploymentRestartInput = typeof DeploymentRestartInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentRestartOutput = Schema.Boolean.pipe(
  T.ResponsePath("deploymentRestart"),
);
export type DeploymentRestartOutput = typeof DeploymentRestartOutput.Type;

/**
 * Restarts a deployment.
 */
export const deploymentRestart = API.make(() => ({
  inputSchema: DeploymentRestartInput,
  outputSchema: DeploymentRestartOutput,
}));
