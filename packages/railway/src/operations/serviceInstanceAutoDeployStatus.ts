import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query serviceInstanceAutoDeployStatus($environmentId: String!, $projectId: String!, $serviceId: String!) {\n  serviceInstanceAutoDeployStatus(environmentId: $environmentId, projectId: $projectId, serviceId: $serviceId) {\n    canEnable\n    enabled\n    reason\n  }\n}";

// Input Schema (GraphQL variables)
export const ServiceInstanceAutoDeployStatusInput = Schema.Struct({
  environmentId: Schema.String,
  projectId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "serviceInstanceAutoDeployStatus",
    type: "query",
  }),
);
export type ServiceInstanceAutoDeployStatusInput =
  typeof ServiceInstanceAutoDeployStatusInput.Type;

// Output Schema (GraphQL selection set)
export const ServiceInstanceAutoDeployStatusOutput = Schema.Struct({
  canEnable: Schema.Boolean,
  enabled: Schema.Boolean,
  reason: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("serviceInstanceAutoDeployStatus"));
export type ServiceInstanceAutoDeployStatusOutput =
  typeof ServiceInstanceAutoDeployStatusOutput.Type;

/**
 * Returns the auto-deploy status for a service instance, including whether it can be enabled.
 */
export const serviceInstanceAutoDeployStatus = API.make(() => ({
  inputSchema: ServiceInstanceAutoDeployStatusInput,
  outputSchema: ServiceInstanceAutoDeployStatusOutput,
}));
