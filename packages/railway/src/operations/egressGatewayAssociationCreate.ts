import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation egressGatewayAssociationCreate($input: EgressGatewayCreateInput!) {\n  egressGatewayAssociationCreate(input: $input) {\n    ipv4\n    region\n  }\n}";

// Input Schema (GraphQL variables)
export const EgressGatewayAssociationCreateInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    region: Schema.optional(Schema.NullOr(Schema.String)),
    serviceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "egressGatewayAssociationCreate",
    type: "mutation",
  }),
);
export type EgressGatewayAssociationCreateInput =
  typeof EgressGatewayAssociationCreateInput.Type;

// Output Schema (GraphQL selection set)
export const EgressGatewayAssociationCreateOutput = Schema.Array(
  Schema.Struct({
    ipv4: Schema.String,
    region: Schema.String,
  }),
).pipe(T.ResponsePath("egressGatewayAssociationCreate"));
export type EgressGatewayAssociationCreateOutput =
  typeof EgressGatewayAssociationCreateOutput.Type;

/**
 * Create a new egress gateway association for a service instance
 */
export const egressGatewayAssociationCreate = API.make(() => ({
  inputSchema: EgressGatewayAssociationCreateInput,
  outputSchema: EgressGatewayAssociationCreateOutput,
}));
