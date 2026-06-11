import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation egressGatewayAssociationsClear($input: EgressGatewayServiceTargetInput!) {\n  egressGatewayAssociationsClear(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ClearEgressGatewayAssociationsInput = Schema.Struct({
  input: Schema.Struct({
    allEnvironments: Schema.optional(Schema.NullOr(Schema.Boolean)),
    environmentId: Schema.String,
    serviceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "egressGatewayAssociationsClear",
    type: "mutation",
  }),
);
export type ClearEgressGatewayAssociationsInput =
  typeof ClearEgressGatewayAssociationsInput.Type;

// Output Schema (GraphQL selection set)
export const ClearEgressGatewayAssociationsOutput = Schema.Boolean.pipe(
  T.ResponsePath("egressGatewayAssociationsClear"),
);
export type ClearEgressGatewayAssociationsOutput =
  typeof ClearEgressGatewayAssociationsOutput.Type;

/**
 * Clear all egress gateway associations for a service instance
 */
export const clearEgressGatewayAssociations = API.make(() => ({
  inputSchema: ClearEgressGatewayAssociationsInput,
  outputSchema: ClearEgressGatewayAssociationsOutput,
}));
