import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation createDeploymentInstanceExecution($input: DeploymentInstanceExecutionCreateInput!) {\n  deploymentInstanceExecutionCreate(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const CreateDeploymentInstanceExecutionInput = Schema.Struct({
  input: Schema.Struct({
    serviceInstanceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "createDeploymentInstanceExecution",
    type: "mutation",
  }),
);
export type CreateDeploymentInstanceExecutionInput =
  typeof CreateDeploymentInstanceExecutionInput.Type;

// Output Schema (GraphQL selection set)
export const CreateDeploymentInstanceExecutionOutput = Schema.Boolean.pipe(
  T.ResponsePath("deploymentInstanceExecutionCreate"),
);
export type CreateDeploymentInstanceExecutionOutput =
  typeof CreateDeploymentInstanceExecutionOutput.Type;

/**
 * Invoke a deployment instance execution.
 */
export const createDeploymentInstanceExecution = API.make(() => ({
  inputSchema: CreateDeploymentInstanceExecutionInput,
  outputSchema: CreateDeploymentInstanceExecutionOutput,
}));
