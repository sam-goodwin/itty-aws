import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query serviceInstanceIsUpdatable($environmentId: String!, $serviceId: String!) {\n  serviceInstanceIsUpdatable(environmentId: $environmentId, serviceId: $serviceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ServiceInstanceIsUpdatableInput = Schema.Struct({
  environmentId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "serviceInstanceIsUpdatable",
    type: "query",
  }),
);
export type ServiceInstanceIsUpdatableInput =
  typeof ServiceInstanceIsUpdatableInput.Type;

// Output Schema (GraphQL selection set)
export const ServiceInstanceIsUpdatableOutput = Schema.Boolean.pipe(
  T.ResponsePath("serviceInstanceIsUpdatable"),
);
export type ServiceInstanceIsUpdatableOutput =
  typeof ServiceInstanceIsUpdatableOutput.Type;

/**
 * Check if the upstream repo for a service has an update available
 */
export const serviceInstanceIsUpdatable = API.make(() => ({
  inputSchema: ServiceInstanceIsUpdatableInput,
  outputSchema: ServiceInstanceIsUpdatableOutput,
}));
