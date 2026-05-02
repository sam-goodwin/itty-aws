import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query egressGateways($environmentId: String!, $serviceId: String!) {\n  egressGateways(environmentId: $environmentId, serviceId: $serviceId) {\n    ipv4\n    region\n  }\n}";

// Input Schema (GraphQL variables)
export const EgressGatewaysInput = Schema.Struct({
  environmentId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "egressGateways",
    type: "query",
  }),
);
export type EgressGatewaysInput = typeof EgressGatewaysInput.Type;

// Output Schema (GraphQL selection set)
export const EgressGatewaysOutput = Schema.Array(
  Schema.Struct({
    ipv4: Schema.String,
    region: Schema.String,
  }),
).pipe(T.ResponsePath("egressGateways"));
export type EgressGatewaysOutput = typeof EgressGatewaysOutput.Type;

/**
 * All egress gateways assigned to a service instance
 */
export const egressGateways = API.make(() => ({
  inputSchema: EgressGatewaysInput,
  outputSchema: EgressGatewaysOutput,
}));
