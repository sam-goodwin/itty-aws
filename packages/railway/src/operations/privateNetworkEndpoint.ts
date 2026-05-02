import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query privateNetworkEndpoint($environmentId: String!, $privateNetworkId: String!, $serviceId: String!) {\n  privateNetworkEndpoint(environmentId: $environmentId, privateNetworkId: $privateNetworkId, serviceId: $serviceId) {\n    createdAt\n    deletedAt\n    dnsName\n    newDnsName\n    privateIps\n    publicId\n    serviceInstanceId\n    syncStatus\n    tags\n  }\n}";

// Input Schema (GraphQL variables)
export const PrivateNetworkEndpointInput = Schema.Struct({
  environmentId: Schema.String,
  privateNetworkId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "privateNetworkEndpoint",
    type: "query",
  }),
);
export type PrivateNetworkEndpointInput =
  typeof PrivateNetworkEndpointInput.Type;

// Output Schema (GraphQL selection set)
export const PrivateNetworkEndpointOutput = Schema.NullOr(
  Schema.Struct({
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
  }),
).pipe(T.ResponsePath("privateNetworkEndpoint"));
export type PrivateNetworkEndpointOutput =
  typeof PrivateNetworkEndpointOutput.Type;

/**
 * Get a private network endpoint for a service instance.
 */
export const privateNetworkEndpoint = API.make(() => ({
  inputSchema: PrivateNetworkEndpointInput,
  outputSchema: PrivateNetworkEndpointOutput,
}));
