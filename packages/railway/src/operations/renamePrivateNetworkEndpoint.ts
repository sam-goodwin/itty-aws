import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation privateNetworkEndpointRename($dnsName: String!, $id: String!, $privateNetworkId: String!) {\n  privateNetworkEndpointRename(dnsName: $dnsName, id: $id, privateNetworkId: $privateNetworkId)\n}";

// Input Schema (GraphQL variables)
export const RenamePrivateNetworkEndpointInput = Schema.Struct({
  dnsName: Schema.String,
  id: Schema.String,
  privateNetworkId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "privateNetworkEndpointRename",
    type: "mutation",
  }),
);
export type RenamePrivateNetworkEndpointInput =
  typeof RenamePrivateNetworkEndpointInput.Type;

// Output Schema (GraphQL selection set)
export const RenamePrivateNetworkEndpointOutput = Schema.Boolean.pipe(
  T.ResponsePath("privateNetworkEndpointRename"),
);
export type RenamePrivateNetworkEndpointOutput =
  typeof RenamePrivateNetworkEndpointOutput.Type;

/**
 * Rename a private network endpoint.
 */
export const renamePrivateNetworkEndpoint = API.make(() => ({
  inputSchema: RenamePrivateNetworkEndpointInput,
  outputSchema: RenamePrivateNetworkEndpointOutput,
}));
