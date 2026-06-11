import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deploymentCancel($id: String!) {\n  deploymentCancel(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const CancelDeploymentInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentCancel",
    type: "mutation",
  }),
);
export type CancelDeploymentInput = typeof CancelDeploymentInput.Type;

// Output Schema (GraphQL selection set)
export const CancelDeploymentOutput = Schema.Boolean.pipe(
  T.ResponsePath("deploymentCancel"),
);
export type CancelDeploymentOutput = typeof CancelDeploymentOutput.Type;

/**
 * Cancels a deployment.
 */
export const cancelDeployment = API.make(() => ({
  inputSchema: CancelDeploymentInput,
  outputSchema: CancelDeploymentOutput,
}));
