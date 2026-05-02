import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deploymentRemove($id: String!) {\n  deploymentRemove(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeploymentRemoveInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentRemove",
    type: "mutation",
  }),
);
export type DeploymentRemoveInput = typeof DeploymentRemoveInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentRemoveOutput = Schema.Boolean.pipe(
  T.ResponsePath("deploymentRemove"),
);
export type DeploymentRemoveOutput = typeof DeploymentRemoveOutput.Type;

/**
 * Removes a deployment.
 */
export const deploymentRemove = API.make(() => ({
  inputSchema: DeploymentRemoveInput,
  outputSchema: DeploymentRemoveOutput,
}));
