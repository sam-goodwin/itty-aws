import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getServiceInstanceAutoDeployStatus($environmentId: String!, $projectId: String!, $serviceId: String!) {\n  serviceInstanceAutoDeployStatus(environmentId: $environmentId, projectId: $projectId, serviceId: $serviceId) {\n    canEnable\n    enabled\n    reason\n  }\n}";

// Input Schema (GraphQL variables)
export const GetServiceInstanceAutoDeployStatusInput = Schema.Struct({
  environmentId: Schema.String,
  projectId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getServiceInstanceAutoDeployStatus",
    type: "query",
  }),
);
export type GetServiceInstanceAutoDeployStatusInput =
  typeof GetServiceInstanceAutoDeployStatusInput.Type;

// Output Schema (GraphQL selection set)
export const GetServiceInstanceAutoDeployStatusOutput = Schema.Struct({
  canEnable: Schema.Boolean,
  enabled: Schema.Boolean,
  reason: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("serviceInstanceAutoDeployStatus"));
export type GetServiceInstanceAutoDeployStatusOutput =
  typeof GetServiceInstanceAutoDeployStatusOutput.Type;

/**
 * Returns the auto-deploy status for a service instance, including whether it can be enabled.
 */
export const getServiceInstanceAutoDeployStatus = API.make(() => ({
  inputSchema: GetServiceInstanceAutoDeployStatusInput,
  outputSchema: GetServiceInstanceAutoDeployStatusOutput,
}));
