import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation privateNetworkCreateOrGet($input: PrivateNetworkCreateOrGetInput!) {\n  privateNetworkCreateOrGet(input: $input) {\n    createdAt\n    deletedAt\n    dnsName\n    environmentId\n    name\n    networkId\n    projectId\n    publicId\n    tags\n  }\n}";

// Input Schema (GraphQL variables)
export const PrivateNetworkCreateOrGetInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    name: Schema.String,
    projectId: Schema.String,
    tags: Schema.Array(Schema.String),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "privateNetworkCreateOrGet",
    type: "mutation",
  }),
);
export type PrivateNetworkCreateOrGetInput =
  typeof PrivateNetworkCreateOrGetInput.Type;

// Output Schema (GraphQL selection set)
export const PrivateNetworkCreateOrGetOutput = Schema.Struct({
  createdAt: Schema.NullOr(Schema.String),
  deletedAt: Schema.NullOr(Schema.String),
  dnsName: Schema.String,
  environmentId: Schema.String,
  name: Schema.String,
  networkId: Schema.String,
  projectId: Schema.String,
  publicId: Schema.String,
  tags: Schema.Array(Schema.String),
}).pipe(T.ResponsePath("privateNetworkCreateOrGet"));
export type PrivateNetworkCreateOrGetOutput =
  typeof PrivateNetworkCreateOrGetOutput.Type;

/**
 * Create or get a private network.
 */
export const privateNetworkCreateOrGet = API.make(() => ({
  inputSchema: PrivateNetworkCreateOrGetInput,
  outputSchema: PrivateNetworkCreateOrGetOutput,
}));
