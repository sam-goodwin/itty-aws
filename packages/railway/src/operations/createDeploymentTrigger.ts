import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deploymentTriggerCreate($input: DeploymentTriggerCreateInput!) {\n  deploymentTriggerCreate(input: $input) {\n    baseEnvironmentOverrideId\n    branch\n    checkSuites\n    environmentId\n    id\n    projectId\n    provider\n    repository\n    serviceId\n    validCheckSuites\n  }\n}";

// Input Schema (GraphQL variables)
export const CreateDeploymentTriggerInput = Schema.Struct({
  input: Schema.Struct({
    branch: Schema.String,
    checkSuites: Schema.optional(Schema.NullOr(Schema.Boolean)),
    environmentId: Schema.String,
    projectId: Schema.String,
    provider: Schema.String,
    repository: Schema.String,
    rootDirectory: Schema.optional(Schema.NullOr(Schema.String)),
    serviceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentTriggerCreate",
    type: "mutation",
  }),
);
export type CreateDeploymentTriggerInput =
  typeof CreateDeploymentTriggerInput.Type;

// Output Schema (GraphQL selection set)
export const CreateDeploymentTriggerOutput = Schema.Struct({
  baseEnvironmentOverrideId: Schema.NullOr(Schema.String),
  branch: Schema.String,
  checkSuites: Schema.Boolean,
  environmentId: Schema.String,
  id: Schema.String,
  projectId: Schema.String,
  provider: Schema.String,
  repository: Schema.String,
  serviceId: Schema.NullOr(Schema.String),
  validCheckSuites: Schema.Number,
}).pipe(T.ResponsePath("deploymentTriggerCreate"));
export type CreateDeploymentTriggerOutput =
  typeof CreateDeploymentTriggerOutput.Type;

/**
 * Creates a deployment trigger.
 */
export const createDeploymentTrigger = API.make(() => ({
  inputSchema: CreateDeploymentTriggerInput,
  outputSchema: CreateDeploymentTriggerOutput,
}));
