import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation createOrGetPrivateNetworkEndpoint($input: PrivateNetworkEndpointCreateOrGetInput!) {\n  privateNetworkEndpointCreateOrGet(input: $input) {\n    createdAt\n    deletedAt\n    dnsName\n    newDnsName\n    privateIps\n    publicId\n    serviceInstanceId\n    syncStatus\n    tags\n  }\n}";

// Input Schema (GraphQL variables)
export const CreateOrGetPrivateNetworkEndpointInput = Schema.Struct({
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
    operationName: "createOrGetPrivateNetworkEndpoint",
    type: "mutation",
  }),
);
export type CreateOrGetPrivateNetworkEndpointInput =
  typeof CreateOrGetPrivateNetworkEndpointInput.Type;

// Output Schema (GraphQL selection set)
export const CreateOrGetPrivateNetworkEndpointOutput = Schema.Struct({
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
export type CreateOrGetPrivateNetworkEndpointOutput =
  typeof CreateOrGetPrivateNetworkEndpointOutput.Type;

/**
 * Create or get a private network endpoint.
 */
export const createOrGetPrivateNetworkEndpoint = API.make(() => ({
  inputSchema: CreateOrGetPrivateNetworkEndpointInput,
  outputSchema: CreateOrGetPrivateNetworkEndpointOutput,
}));
