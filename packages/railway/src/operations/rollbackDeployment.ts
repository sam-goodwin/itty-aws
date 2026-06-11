import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation rollbackDeployment($id: String!) {\n  deploymentRollback(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const RollbackDeploymentInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "rollbackDeployment",
    type: "mutation",
  }),
);
export type RollbackDeploymentInput = typeof RollbackDeploymentInput.Type;

// Output Schema (GraphQL selection set)
export const RollbackDeploymentOutput = Schema.Boolean.pipe(
  T.ResponsePath("deploymentRollback"),
);
export type RollbackDeploymentOutput = typeof RollbackDeploymentOutput.Type;

/**
 * Rolls back to a deployment.
 */
export const rollbackDeployment = API.make(() => ({
  inputSchema: RollbackDeploymentInput,
  outputSchema: RollbackDeploymentOutput,
}));
