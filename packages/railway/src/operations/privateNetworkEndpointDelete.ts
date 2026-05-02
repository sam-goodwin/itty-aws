import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation privateNetworkEndpointDelete($id: String!) {\n  privateNetworkEndpointDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const PrivateNetworkEndpointDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "privateNetworkEndpointDelete",
    type: "mutation",
  }),
);
export type PrivateNetworkEndpointDeleteInput =
  typeof PrivateNetworkEndpointDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const PrivateNetworkEndpointDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("privateNetworkEndpointDelete"),
);
export type PrivateNetworkEndpointDeleteOutput =
  typeof PrivateNetworkEndpointDeleteOutput.Type;

/**
 * Delete a private network endpoint.
 */
export const privateNetworkEndpointDelete = API.make(() => ({
  inputSchema: PrivateNetworkEndpointDeleteInput,
  outputSchema: PrivateNetworkEndpointDeleteOutput,
}));
