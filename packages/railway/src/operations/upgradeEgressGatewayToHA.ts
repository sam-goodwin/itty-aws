import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation egressGatewayUpgradeToHA($input: EgressGatewayServiceTargetInput!) {\n  egressGatewayUpgradeToHA(input: $input) {\n    ipv4\n    region\n    zone\n  }\n}";

// Input Schema (GraphQL variables)
export const UpgradeEgressGatewayToHAInput = Schema.Struct({
  input: Schema.Struct({
    allEnvironments: Schema.optional(Schema.NullOr(Schema.Boolean)),
    environmentId: Schema.String,
    serviceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "egressGatewayUpgradeToHA",
    type: "mutation",
  }),
);
export type UpgradeEgressGatewayToHAInput =
  typeof UpgradeEgressGatewayToHAInput.Type;

// Output Schema (GraphQL selection set)
export const UpgradeEgressGatewayToHAOutput = Schema.Array(
  Schema.Struct({
    ipv4: Schema.String,
    region: Schema.String,
    zone: Schema.NullOr(Schema.String),
  }),
).pipe(T.ResponsePath("egressGatewayUpgradeToHA"));
export type UpgradeEgressGatewayToHAOutput =
  typeof UpgradeEgressGatewayToHAOutput.Type;

/**
 * Enable HA static egress IPs for a service. Set allEnvironments to apply to all of the service's environments.
 */
export const upgradeEgressGatewayToHA = API.make(() => ({
  inputSchema: UpgradeEgressGatewayToHAInput,
  outputSchema: UpgradeEgressGatewayToHAOutput,
}));
