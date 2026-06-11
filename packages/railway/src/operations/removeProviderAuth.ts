import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation removeProviderAuth($id: String!) {\n  providerAuthRemove(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const RemoveProviderAuthInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "removeProviderAuth",
    type: "mutation",
  }),
);
export type RemoveProviderAuthInput = typeof RemoveProviderAuthInput.Type;

// Output Schema (GraphQL selection set)
export const RemoveProviderAuthOutput = Schema.Boolean.pipe(
  T.ResponsePath("providerAuthRemove"),
);
export type RemoveProviderAuthOutput = typeof RemoveProviderAuthOutput.Type;

/**
 * Deletes a ProviderAuth.
 */
export const removeProviderAuth = API.make(() => ({
  inputSchema: RemoveProviderAuthInput,
  outputSchema: RemoveProviderAuthOutput,
}));
