import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation serviceInstanceRedeploy($environmentId: String!, $serviceId: String!) {\n  serviceInstanceRedeploy(environmentId: $environmentId, serviceId: $serviceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ServiceInstanceRedeployInput = Schema.Struct({
  environmentId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "serviceInstanceRedeploy",
    type: "mutation",
  }),
);
export type ServiceInstanceRedeployInput =
  typeof ServiceInstanceRedeployInput.Type;

// Output Schema (GraphQL selection set)
export const ServiceInstanceRedeployOutput = Schema.Boolean.pipe(
  T.ResponsePath("serviceInstanceRedeploy"),
);
export type ServiceInstanceRedeployOutput =
  typeof ServiceInstanceRedeployOutput.Type;

/**
 * Redeploy a service instance
 */
export const serviceInstanceRedeploy = API.make(() => ({
  inputSchema: ServiceInstanceRedeployInput,
  outputSchema: ServiceInstanceRedeployOutput,
}));
