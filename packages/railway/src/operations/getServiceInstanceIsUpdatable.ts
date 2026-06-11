import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getServiceInstanceIsUpdatable($environmentId: String!, $serviceId: String!) {\n  serviceInstanceIsUpdatable(environmentId: $environmentId, serviceId: $serviceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const GetServiceInstanceIsUpdatableInput = Schema.Struct({
  environmentId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getServiceInstanceIsUpdatable",
    type: "query",
  }),
);
export type GetServiceInstanceIsUpdatableInput =
  typeof GetServiceInstanceIsUpdatableInput.Type;

// Output Schema (GraphQL selection set)
export const GetServiceInstanceIsUpdatableOutput = Schema.Boolean.pipe(
  T.ResponsePath("serviceInstanceIsUpdatable"),
);
export type GetServiceInstanceIsUpdatableOutput =
  typeof GetServiceInstanceIsUpdatableOutput.Type;

/**
 * Check if the upstream repo for a service has an update available
 */
export const getServiceInstanceIsUpdatable = API.make(() => ({
  inputSchema: GetServiceInstanceIsUpdatableInput,
  outputSchema: GetServiceInstanceIsUpdatableOutput,
}));
