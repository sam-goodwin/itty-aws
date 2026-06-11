import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deploymentTriggerUpdate($id: String!, $input: DeploymentTriggerUpdateInput!) {\n  deploymentTriggerUpdate(id: $id, input: $input) {\n    baseEnvironmentOverrideId\n    branch\n    checkSuites\n    environmentId\n    id\n    projectId\n    provider\n    repository\n    serviceId\n    validCheckSuites\n  }\n}";

// Input Schema (GraphQL variables)
export const UpdateDeploymentTriggerInput = Schema.Struct({
  id: Schema.String,
  input: Schema.Struct({
    branch: Schema.optional(Schema.NullOr(Schema.String)),
    checkSuites: Schema.optional(Schema.NullOr(Schema.Boolean)),
    repository: Schema.optional(Schema.NullOr(Schema.String)),
    rootDirectory: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentTriggerUpdate",
    type: "mutation",
  }),
);
export type UpdateDeploymentTriggerInput =
  typeof UpdateDeploymentTriggerInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateDeploymentTriggerOutput = Schema.Struct({
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
}).pipe(T.ResponsePath("deploymentTriggerUpdate"));
export type UpdateDeploymentTriggerOutput =
  typeof UpdateDeploymentTriggerOutput.Type;

/**
 * Updates a deployment trigger.
 */
export const updateDeploymentTrigger = API.make(() => ({
  inputSchema: UpdateDeploymentTriggerInput,
  outputSchema: UpdateDeploymentTriggerOutput,
}));
