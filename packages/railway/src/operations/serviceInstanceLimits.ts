import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query serviceInstanceLimits($environmentId: String!, $serviceId: String!) {\n  serviceInstanceLimits(environmentId: $environmentId, serviceId: $serviceId)\n}";

// Input Schema (GraphQL variables)
export const ServiceInstanceLimitsInput = Schema.Struct({
  environmentId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "serviceInstanceLimits",
    type: "query",
  }),
);
export type ServiceInstanceLimitsInput = typeof ServiceInstanceLimitsInput.Type;

// Output Schema (GraphQL selection set)
export const ServiceInstanceLimitsOutput = Schema.Unknown.pipe(
  T.ResponsePath("serviceInstanceLimits"),
);
export type ServiceInstanceLimitsOutput =
  typeof ServiceInstanceLimitsOutput.Type;

/**
 * Get the merged resource limits for a service instance (includes plan defaults)
 */
export const serviceInstanceLimits = API.make(() => ({
  inputSchema: ServiceInstanceLimitsInput,
  outputSchema: ServiceInstanceLimitsOutput,
}));
