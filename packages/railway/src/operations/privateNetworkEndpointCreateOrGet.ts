import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation privateNetworkEndpointCreateOrGet($input: PrivateNetworkEndpointCreateOrGetInput!) {\n  privateNetworkEndpointCreateOrGet(input: $input) {\n    createdAt\n    deletedAt\n    dnsName\n    newDnsName\n    privateIps\n    publicId\n    serviceInstanceId\n    syncStatus\n    tags\n  }\n}";

// Input Schema (GraphQL variables)
export const PrivateNetworkEndpointCreateOrGetInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    privateNetworkId: Schema.String,
    serviceId: Schema.String,
    serviceName: Schema.String,
    tags: Schema.Array(Schema.String),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "privateNetworkEndpointCreateOrGet",
    type: "mutation",
  }),
);
export type PrivateNetworkEndpointCreateOrGetInput =
  typeof PrivateNetworkEndpointCreateOrGetInput.Type;

// Output Schema (GraphQL selection set)
export const PrivateNetworkEndpointCreateOrGetOutput = Schema.Struct({
  createdAt: Schema.NullOr(Schema.String),
  deletedAt: Schema.NullOr(Schema.String),
  dnsName: Schema.String,
  newDnsName: Schema.NullOr(Schema.String),
  privateIps: Schema.Array(Schema.String),
  publicId: Schema.String,
  serviceInstanceId: Schema.String,
  syncStatus: Schema.Literals([
    "ACTIVE",
    "CREATING",
    "DELETED",
    "DELETING",
    "UNSPECIFIED",
    "UPDATING",
  ]),
  tags: Schema.Array(Schema.String),
}).pipe(T.ResponsePath("privateNetworkEndpointCreateOrGet"));
export type PrivateNetworkEndpointCreateOrGetOutput =
  typeof PrivateNetworkEndpointCreateOrGetOutput.Type;

/**
 * Create or get a private network endpoint.
 */
export const privateNetworkEndpointCreateOrGet = API.make(() => ({
  inputSchema: PrivateNetworkEndpointCreateOrGetInput,
  outputSchema: PrivateNetworkEndpointCreateOrGetOutput,
}));
