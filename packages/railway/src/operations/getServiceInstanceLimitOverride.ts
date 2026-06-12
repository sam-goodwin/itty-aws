import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query serviceInstanceLimitOverride($environmentId: String!, $serviceId: String!) {\n  serviceInstanceLimitOverride(environmentId: $environmentId, serviceId: $serviceId)\n}";

// Input Schema (GraphQL variables)
export const GetServiceInstanceLimitOverrideInput = Schema.Struct({
  environmentId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "serviceInstanceLimitOverride",
    type: "query",
  }),
);
export type GetServiceInstanceLimitOverrideInput =
  typeof GetServiceInstanceLimitOverrideInput.Type;

// Output Schema (GraphQL selection set)
export const GetServiceInstanceLimitOverrideOutput = Schema.NullOr(
  Schema.Unknown,
).pipe(T.ResponsePath("serviceInstanceLimitOverride"));
export type GetServiceInstanceLimitOverrideOutput =
  typeof GetServiceInstanceLimitOverrideOutput.Type;

/**
 * Get the service instance resource limit overrides (null if no overrides set)
 */
export const getServiceInstanceLimitOverride = API.make(() => ({
  inputSchema: GetServiceInstanceLimitOverrideInput,
  outputSchema: GetServiceInstanceLimitOverrideOutput,
}));
