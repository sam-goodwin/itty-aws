import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getEgressGateways($environmentId: String!, $serviceId: String!) {\n  egressGateways(environmentId: $environmentId, serviceId: $serviceId) {\n    ipv4\n    region\n    zone\n  }\n}";

// Input Schema (GraphQL variables)
export const GetEgressGatewaysInput = Schema.Struct({
  environmentId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getEgressGateways",
    type: "query",
  }),
);
export type GetEgressGatewaysInput = typeof GetEgressGatewaysInput.Type;

// Output Schema (GraphQL selection set)
export const GetEgressGatewaysOutput = Schema.Array(
  Schema.Struct({
    ipv4: Schema.String,
    region: Schema.String,
    zone: Schema.NullOr(Schema.String),
  }),
).pipe(T.ResponsePath("egressGateways"));
export type GetEgressGatewaysOutput = typeof GetEgressGatewaysOutput.Type;

/**
 * All egress gateways assigned to a service instance
 */
export const getEgressGateways = API.make(() => ({
  inputSchema: GetEgressGatewaysInput,
  outputSchema: GetEgressGatewaysOutput,
}));
