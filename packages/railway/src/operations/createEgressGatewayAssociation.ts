import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation createEgressGatewayAssociation($input: EgressGatewayCreateInput!) {\n  egressGatewayAssociationCreate(input: $input) {\n    ipv4\n    region\n    zone\n  }\n}";

// Input Schema (GraphQL variables)
export const CreateEgressGatewayAssociationInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    region: Schema.optional(Schema.NullOr(Schema.String)),
    serviceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "createEgressGatewayAssociation",
    type: "mutation",
  }),
);
export type CreateEgressGatewayAssociationInput =
  typeof CreateEgressGatewayAssociationInput.Type;

// Output Schema (GraphQL selection set)
export const CreateEgressGatewayAssociationOutput = Schema.Array(
  Schema.Struct({
    ipv4: Schema.String,
    region: Schema.String,
    zone: Schema.NullOr(Schema.String),
  }),
).pipe(T.ResponsePath("egressGatewayAssociationCreate"));
export type CreateEgressGatewayAssociationOutput =
  typeof CreateEgressGatewayAssociationOutput.Type;

/**
 * Create a new egress gateway association for a service instance
 */
export const createEgressGatewayAssociation = API.make(() => ({
  inputSchema: CreateEgressGatewayAssociationInput,
  outputSchema: CreateEgressGatewayAssociationOutput,
}));
