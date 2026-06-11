import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation restartDeployment($id: String!) {\n  deploymentRestart(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const RestartDeploymentInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "restartDeployment",
    type: "mutation",
  }),
);
export type RestartDeploymentInput = typeof RestartDeploymentInput.Type;

// Output Schema (GraphQL selection set)
export const RestartDeploymentOutput = Schema.Boolean.pipe(
  T.ResponsePath("deploymentRestart"),
);
export type RestartDeploymentOutput = typeof RestartDeploymentOutput.Type;

/**
 * Restarts a deployment.
 */
export const restartDeployment = API.make(() => ({
  inputSchema: RestartDeploymentInput,
  outputSchema: RestartDeploymentOutput,
}));
