import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deploymentStop($id: String!) {\n  deploymentStop(id: $id)\n}";

// Input Schema (GraphQL variables)
export const StopDeploymentInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentStop",
    type: "mutation",
  }),
);
export type StopDeploymentInput = typeof StopDeploymentInput.Type;

// Output Schema (GraphQL selection set)
export const StopDeploymentOutput = Schema.Boolean.pipe(
  T.ResponsePath("deploymentStop"),
);
export type StopDeploymentOutput = typeof StopDeploymentOutput.Type;

/**
 * Stops a deployment.
 */
export const stopDeployment = API.make(() => ({
  inputSchema: StopDeploymentInput,
  outputSchema: StopDeploymentOutput,
}));
