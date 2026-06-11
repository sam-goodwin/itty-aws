import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation updateServiceInstanceLimits($input: ServiceInstanceLimitsUpdateInput!) {\n  serviceInstanceLimitsUpdate(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const UpdateServiceInstanceLimitsInput = Schema.Struct({
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
    operationName: "updateServiceInstanceLimits",
    type: "mutation",
  }),
);
export type UpdateServiceInstanceLimitsInput =
  typeof UpdateServiceInstanceLimitsInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateServiceInstanceLimitsOutput = Schema.Boolean.pipe(
  T.ResponsePath("serviceInstanceLimitsUpdate"),
);
export type UpdateServiceInstanceLimitsOutput =
  typeof UpdateServiceInstanceLimitsOutput.Type;

/**
 * Update the resource limits for a service instance
 */
export const updateServiceInstanceLimits = API.make(() => ({
  inputSchema: UpdateServiceInstanceLimitsInput,
  outputSchema: UpdateServiceInstanceLimitsOutput,
}));
