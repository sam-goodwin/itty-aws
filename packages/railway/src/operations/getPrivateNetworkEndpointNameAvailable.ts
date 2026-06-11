import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query privateNetworkEndpointNameAvailable($environmentId: String!, $prefix: String!, $privateNetworkId: String!) {\n  privateNetworkEndpointNameAvailable(environmentId: $environmentId, prefix: $prefix, privateNetworkId: $privateNetworkId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const GetPrivateNetworkEndpointNameAvailableInput = Schema.Struct({
  environmentId: Schema.String,
  prefix: Schema.String,
  privateNetworkId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "privateNetworkEndpointNameAvailable",
    type: "query",
  }),
);
export type GetPrivateNetworkEndpointNameAvailableInput =
  typeof GetPrivateNetworkEndpointNameAvailableInput.Type;

// Output Schema (GraphQL selection set)
export const GetPrivateNetworkEndpointNameAvailableOutput = Schema.Boolean.pipe(
  T.ResponsePath("privateNetworkEndpointNameAvailable"),
);
export type GetPrivateNetworkEndpointNameAvailableOutput =
  typeof GetPrivateNetworkEndpointNameAvailableOutput.Type;

/**
 * Check if an endpoint name is available.
 */
export const getPrivateNetworkEndpointNameAvailable = API.make(() => ({
  inputSchema: GetPrivateNetworkEndpointNameAvailableInput,
  outputSchema: GetPrivateNetworkEndpointNameAvailableOutput,
}));
