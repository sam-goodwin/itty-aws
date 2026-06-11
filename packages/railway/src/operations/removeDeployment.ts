import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation removeDeployment($id: String!) {\n  deploymentRemove(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const RemoveDeploymentInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "removeDeployment",
    type: "mutation",
  }),
);
export type RemoveDeploymentInput = typeof RemoveDeploymentInput.Type;

// Output Schema (GraphQL selection set)
export const RemoveDeploymentOutput = Schema.Boolean.pipe(
  T.ResponsePath("deploymentRemove"),
);
export type RemoveDeploymentOutput = typeof RemoveDeploymentOutput.Type;

/**
 * Removes a deployment.
 */
export const removeDeployment = API.make(() => ({
  inputSchema: RemoveDeploymentInput,
  outputSchema: RemoveDeploymentOutput,
}));
