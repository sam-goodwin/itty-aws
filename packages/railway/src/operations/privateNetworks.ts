import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query privateNetworks($environmentId: String!) {\n  privateNetworks(environmentId: $environmentId) {\n    createdAt\n    deletedAt\n    dnsName\n    environmentId\n    name\n    networkId\n    projectId\n    publicId\n    tags\n  }\n}";

// Input Schema (GraphQL variables)
export const PrivateNetworksInput = Schema.Struct({
  environmentId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "privateNetworks",
    type: "query",
  }),
);
export type PrivateNetworksInput = typeof PrivateNetworksInput.Type;

// Output Schema (GraphQL selection set)
export const PrivateNetworksOutput = Schema.Array(
  Schema.Struct({
    createdAt: Schema.NullOr(Schema.String),
    deletedAt: Schema.NullOr(Schema.String),
    dnsName: Schema.String,
    environmentId: Schema.String,
    name: Schema.String,
    networkId: Schema.String,
    projectId: Schema.String,
    publicId: Schema.String,
    tags: Schema.Array(Schema.String),
  }),
).pipe(T.ResponsePath("privateNetworks"));
export type PrivateNetworksOutput = typeof PrivateNetworksOutput.Type;

/**
 * List private networks for an environment.
 */
export const privateNetworks = API.make(() => ({
  inputSchema: PrivateNetworksInput,
  outputSchema: PrivateNetworksOutput,
}));
