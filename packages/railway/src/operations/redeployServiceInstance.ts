import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation redeployServiceInstance($environmentId: String!, $serviceId: String!) {\n  serviceInstanceRedeploy(environmentId: $environmentId, serviceId: $serviceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const RedeployServiceInstanceInput = Schema.Struct({
  environmentId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "redeployServiceInstance",
    type: "mutation",
  }),
);
export type RedeployServiceInstanceInput =
  typeof RedeployServiceInstanceInput.Type;

// Output Schema (GraphQL selection set)
export const RedeployServiceInstanceOutput = Schema.Boolean.pipe(
  T.ResponsePath("serviceInstanceRedeploy"),
);
export type RedeployServiceInstanceOutput =
  typeof RedeployServiceInstanceOutput.Type;

/**
 * Redeploy a service instance
 */
export const redeployServiceInstance = API.make(() => ({
  inputSchema: RedeployServiceInstanceInput,
  outputSchema: RedeployServiceInstanceOutput,
}));
