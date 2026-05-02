import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query serviceInstanceLimitOverride($environmentId: String!, $serviceId: String!) {\n  serviceInstanceLimitOverride(environmentId: $environmentId, serviceId: $serviceId)\n}";

// Input Schema (GraphQL variables)
export const ServiceInstanceLimitOverrideInput = Schema.Struct({
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
export type ServiceInstanceLimitOverrideInput =
  typeof ServiceInstanceLimitOverrideInput.Type;

// Output Schema (GraphQL selection set)
export const ServiceInstanceLimitOverrideOutput = Schema.NullOr(
  Schema.Unknown,
).pipe(T.ResponsePath("serviceInstanceLimitOverride"));
export type ServiceInstanceLimitOverrideOutput =
  typeof ServiceInstanceLimitOverrideOutput.Type;

/**
 * Get the service instance resource limit overrides (null if no overrides set)
 */
export const serviceInstanceLimitOverride = API.make(() => ({
  inputSchema: ServiceInstanceLimitOverrideInput,
  outputSchema: ServiceInstanceLimitOverrideOutput,
}));
