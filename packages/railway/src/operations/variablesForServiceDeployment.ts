import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query variablesForServiceDeployment($environmentId: String!, $projectId: String!, $serviceId: String!) {\n  variablesForServiceDeployment(environmentId: $environmentId, projectId: $projectId, serviceId: $serviceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const VariablesForServiceDeploymentInput = Schema.Struct({
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
export type VariablesForServiceDeploymentInput =
  typeof VariablesForServiceDeploymentInput.Type;

// Output Schema (GraphQL selection set)
export const VariablesForServiceDeploymentOutput = Schema.Unknown.pipe(
  T.ResponsePath("variablesForServiceDeployment"),
);
export type VariablesForServiceDeploymentOutput =
  typeof VariablesForServiceDeploymentOutput.Type;

/**
 * All rendered variables that are required for a service deployment.
 */
export const variablesForServiceDeployment = API.make(() => ({
  inputSchema: VariablesForServiceDeploymentInput,
  outputSchema: VariablesForServiceDeploymentOutput,
}));
