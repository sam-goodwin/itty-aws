import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation privateNetworksForEnvironmentDelete($environmentId: String!) {\n  privateNetworksForEnvironmentDelete(environmentId: $environmentId)\n}";

// Input Schema (GraphQL variables)
export const PrivateNetworksForEnvironmentDeleteInput = Schema.Struct({
  environmentId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "privateNetworksForEnvironmentDelete",
    type: "mutation",
  }),
);
export type PrivateNetworksForEnvironmentDeleteInput =
  typeof PrivateNetworksForEnvironmentDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const PrivateNetworksForEnvironmentDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("privateNetworksForEnvironmentDelete"),
);
export type PrivateNetworksForEnvironmentDeleteOutput =
  typeof PrivateNetworksForEnvironmentDeleteOutput.Type;

/**
 * Delete all private networks for an environment.
 */
export const privateNetworksForEnvironmentDelete = API.make(() => ({
  inputSchema: PrivateNetworksForEnvironmentDeleteInput,
  outputSchema: PrivateNetworksForEnvironmentDeleteOutput,
}));
