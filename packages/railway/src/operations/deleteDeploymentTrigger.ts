import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deleteDeploymentTrigger($id: String!) {\n  deploymentTriggerDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteDeploymentTriggerInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deleteDeploymentTrigger",
    type: "mutation",
  }),
);
export type DeleteDeploymentTriggerInput =
  typeof DeleteDeploymentTriggerInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteDeploymentTriggerOutput = Schema.Boolean.pipe(
  T.ResponsePath("deploymentTriggerDelete"),
);
export type DeleteDeploymentTriggerOutput =
  typeof DeleteDeploymentTriggerOutput.Type;

/**
 * Deletes a deployment trigger.
 */
export const deleteDeploymentTrigger = API.make(() => ({
  inputSchema: DeleteDeploymentTriggerInput,
  outputSchema: DeleteDeploymentTriggerOutput,
}));
