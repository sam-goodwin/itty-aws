import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deploymentTriggerDelete($id: String!) {\n  deploymentTriggerDelete(id: $id)\n}";

// Input Schema (GraphQL variables)
export const DeploymentTriggerDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentTriggerDelete",
    type: "mutation",
  }),
);
export type DeploymentTriggerDeleteInput =
  typeof DeploymentTriggerDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentTriggerDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("deploymentTriggerDelete"),
);
export type DeploymentTriggerDeleteOutput =
  typeof DeploymentTriggerDeleteOutput.Type;

/**
 * Deletes a deployment trigger.
 */
export const deploymentTriggerDelete = API.make(() => ({
  inputSchema: DeploymentTriggerDeleteInput,
  outputSchema: DeploymentTriggerDeleteOutput,
}));
