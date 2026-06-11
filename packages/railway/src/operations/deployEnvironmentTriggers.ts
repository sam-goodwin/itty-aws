import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation environmentTriggersDeploy($input: EnvironmentTriggersDeployInput!) {\n  environmentTriggersDeploy(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeployEnvironmentTriggersInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    projectId: Schema.String,
    serviceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environmentTriggersDeploy",
    type: "mutation",
  }),
);
export type DeployEnvironmentTriggersInput =
  typeof DeployEnvironmentTriggersInput.Type;

// Output Schema (GraphQL selection set)
export const DeployEnvironmentTriggersOutput = Schema.Boolean.pipe(
  T.ResponsePath("environmentTriggersDeploy"),
);
export type DeployEnvironmentTriggersOutput =
  typeof DeployEnvironmentTriggersOutput.Type;

/**
 * Deploys all connected triggers for an environment.
 */
export const deployEnvironmentTriggers = API.make(() => ({
  inputSchema: DeployEnvironmentTriggersInput,
  outputSchema: DeployEnvironmentTriggersOutput,
}));
