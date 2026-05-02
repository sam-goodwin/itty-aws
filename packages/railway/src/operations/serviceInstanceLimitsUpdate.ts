import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation serviceInstanceLimitsUpdate($input: ServiceInstanceLimitsUpdateInput!) {\n  serviceInstanceLimitsUpdate(input: $input)\n}";

// Input Schema (GraphQL variables)
export const ServiceInstanceLimitsUpdateInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    memoryGB: Schema.optional(Schema.NullOr(Schema.Number)),
    serviceId: Schema.String,
    vCPUs: Schema.optional(Schema.NullOr(Schema.Number)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "serviceInstanceLimitsUpdate",
    type: "mutation",
  }),
);
export type ServiceInstanceLimitsUpdateInput =
  typeof ServiceInstanceLimitsUpdateInput.Type;

// Output Schema (GraphQL selection set)
export const ServiceInstanceLimitsUpdateOutput = Schema.Boolean.pipe(
  T.ResponsePath("serviceInstanceLimitsUpdate"),
);
export type ServiceInstanceLimitsUpdateOutput =
  typeof ServiceInstanceLimitsUpdateOutput.Type;

/**
 * Update the resource limits for a service instance
 */
export const serviceInstanceLimitsUpdate = API.make(() => ({
  inputSchema: ServiceInstanceLimitsUpdateInput,
  outputSchema: ServiceInstanceLimitsUpdateOutput,
}));
