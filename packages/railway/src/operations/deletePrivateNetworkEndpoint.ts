import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation privateNetworkEndpointDelete($id: String!) {\n  privateNetworkEndpointDelete(id: $id)\n}";

// Input Schema (GraphQL variables)
export const DeletePrivateNetworkEndpointInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "privateNetworkEndpointDelete",
    type: "mutation",
  }),
);
export type DeletePrivateNetworkEndpointInput =
  typeof DeletePrivateNetworkEndpointInput.Type;

// Output Schema (GraphQL selection set)
export const DeletePrivateNetworkEndpointOutput = Schema.Boolean.pipe(
  T.ResponsePath("privateNetworkEndpointDelete"),
);
export type DeletePrivateNetworkEndpointOutput =
  typeof DeletePrivateNetworkEndpointOutput.Type;

/**
 * Delete a private network endpoint.
 */
export const deletePrivateNetworkEndpoint = API.make(() => ({
  inputSchema: DeletePrivateNetworkEndpointInput,
  outputSchema: DeletePrivateNetworkEndpointOutput,
}));
