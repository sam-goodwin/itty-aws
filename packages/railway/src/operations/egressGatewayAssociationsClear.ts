import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation egressGatewayAssociationsClear($input: EgressGatewayServiceTargetInput!) {\n  egressGatewayAssociationsClear(input: $input)\n}";

// Input Schema (GraphQL variables)
export const EgressGatewayAssociationsClearInput = Schema.Struct({
  input: Schema.Struct({
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
export type EgressGatewayAssociationsClearInput =
  typeof EgressGatewayAssociationsClearInput.Type;

// Output Schema (GraphQL selection set)
export const EgressGatewayAssociationsClearOutput = Schema.Boolean.pipe(
  T.ResponsePath("egressGatewayAssociationsClear"),
);
export type EgressGatewayAssociationsClearOutput =
  typeof EgressGatewayAssociationsClearOutput.Type;

/**
 * Clear all egress gateway associations for a service instance
 */
export const egressGatewayAssociationsClear = API.make(() => ({
  inputSchema: EgressGatewayAssociationsClearInput,
  outputSchema: EgressGatewayAssociationsClearOutput,
}));
