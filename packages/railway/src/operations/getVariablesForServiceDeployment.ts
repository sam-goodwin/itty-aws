import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query variablesForServiceDeployment($environmentId: String!, $projectId: String!, $serviceId: String!) {\n  variablesForServiceDeployment(environmentId: $environmentId, projectId: $projectId, serviceId: $serviceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const GetVariablesForServiceDeploymentInput = Schema.Struct({
  environmentId: Schema.String,
  projectId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "variablesForServiceDeployment",
    type: "query",
  }),
);
export type GetVariablesForServiceDeploymentInput =
  typeof GetVariablesForServiceDeploymentInput.Type;

// Output Schema (GraphQL selection set)
export const GetVariablesForServiceDeploymentOutput = Schema.Unknown.pipe(
  T.ResponsePath("variablesForServiceDeployment"),
);
export type GetVariablesForServiceDeploymentOutput =
  typeof GetVariablesForServiceDeploymentOutput.Type;

/**
 * All rendered variables that are required for a service deployment.
 */
export const getVariablesForServiceDeployment = API.make(() => ({
  inputSchema: GetVariablesForServiceDeploymentInput,
  outputSchema: GetVariablesForServiceDeploymentOutput,
}));
