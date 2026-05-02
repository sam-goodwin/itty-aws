import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deploymentRollback($id: String!) {\n  deploymentRollback(id: $id)\n}";

// Input Schema (GraphQL variables)
export const DeploymentRollbackInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentRollback",
    type: "mutation",
  }),
);
export type DeploymentRollbackInput = typeof DeploymentRollbackInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentRollbackOutput = Schema.Boolean.pipe(
  T.ResponsePath("deploymentRollback"),
);
export type DeploymentRollbackOutput = typeof DeploymentRollbackOutput.Type;

/**
 * Rolls back to a deployment.
 */
export const deploymentRollback = API.make(() => ({
  inputSchema: DeploymentRollbackInput,
  outputSchema: DeploymentRollbackOutput,
}));
