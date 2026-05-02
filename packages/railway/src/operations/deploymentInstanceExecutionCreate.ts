import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deploymentInstanceExecutionCreate($input: DeploymentInstanceExecutionCreateInput!) {\n  deploymentInstanceExecutionCreate(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeploymentInstanceExecutionCreateInput = Schema.Struct({
  input: Schema.Struct({
    serviceInstanceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentInstanceExecutionCreate",
    type: "mutation",
  }),
);
export type DeploymentInstanceExecutionCreateInput =
  typeof DeploymentInstanceExecutionCreateInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentInstanceExecutionCreateOutput = Schema.Boolean.pipe(
  T.ResponsePath("deploymentInstanceExecutionCreate"),
);
export type DeploymentInstanceExecutionCreateOutput =
  typeof DeploymentInstanceExecutionCreateOutput.Type;

/**
 * Invoke a deployment instance execution.
 */
export const deploymentInstanceExecutionCreate = API.make(() => ({
  inputSchema: DeploymentInstanceExecutionCreateInput,
  outputSchema: DeploymentInstanceExecutionCreateOutput,
}));
