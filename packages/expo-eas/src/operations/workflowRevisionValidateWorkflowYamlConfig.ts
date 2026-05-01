import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation workflowRevisionValidateWorkflowYamlConfig($appId: ID!, $yamlConfig: String!) {\n  workflowRevision {\n    validateWorkflowYamlConfig(appId: $appId, yamlConfig: $yamlConfig) {\n      __typename\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const WorkflowRevisionValidateWorkflowYamlConfigInput = Schema.Struct({
  appId: Schema.String,
  yamlConfig: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workflowRevisionValidateWorkflowYamlConfig",
    type: "mutation",
  }),
);
export type WorkflowRevisionValidateWorkflowYamlConfigInput =
  typeof WorkflowRevisionValidateWorkflowYamlConfigInput.Type;

// Output Schema (GraphQL selection set)
export const WorkflowRevisionValidateWorkflowYamlConfigOutput =
  Schema.Boolean.pipe(
    T.ResponsePath("workflowRevision.validateWorkflowYamlConfig"),
  );
export type WorkflowRevisionValidateWorkflowYamlConfigOutput =
  typeof WorkflowRevisionValidateWorkflowYamlConfigOutput.Type;

export const workflowRevisionValidateWorkflowYamlConfig = API.make(() => ({
  inputSchema: WorkflowRevisionValidateWorkflowYamlConfigInput,
  outputSchema: WorkflowRevisionValidateWorkflowYamlConfigOutput,
}));
