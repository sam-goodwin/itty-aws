import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation egressGatewayRollbackFromHA($input: EgressGatewayServiceTargetInput!) {\n  egressGatewayRollbackFromHA(input: $input) {\n    ipv4\n    region\n    zone\n  }\n}";

// Input Schema (GraphQL variables)
export const RollbackEgressGatewayFromHAInput = Schema.Struct({
  input: Schema.Struct({
    allEnvironments: Schema.optional(Schema.NullOr(Schema.Boolean)),
    environmentId: Schema.String,
    serviceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "egressGatewayRollbackFromHA",
    type: "mutation",
  }),
);
export type RollbackEgressGatewayFromHAInput =
  typeof RollbackEgressGatewayFromHAInput.Type;

// Output Schema (GraphQL selection set)
export const RollbackEgressGatewayFromHAOutput = Schema.Array(
  Schema.Struct({
    ipv4: Schema.String,
    region: Schema.String,
    zone: Schema.NullOr(Schema.String),
  }),
).pipe(T.ResponsePath("egressGatewayRollbackFromHA"));
export type RollbackEgressGatewayFromHAOutput =
  typeof RollbackEgressGatewayFromHAOutput.Type;

/**
 * Switch a service from HA static egress IPs back to a standard static IP. Set allEnvironments to apply to all of the service's environments.
 */
export const rollbackEgressGatewayFromHA = API.make(() => ({
  inputSchema: RollbackEgressGatewayFromHAInput,
  outputSchema: RollbackEgressGatewayFromHAOutput,
}));
