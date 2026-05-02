import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation providerAuthRemove($id: String!) {\n  providerAuthRemove(id: $id)\n}";

// Input Schema (GraphQL variables)
export const ProviderAuthRemoveInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "providerAuthRemove",
    type: "mutation",
  }),
);
export type ProviderAuthRemoveInput = typeof ProviderAuthRemoveInput.Type;

// Output Schema (GraphQL selection set)
export const ProviderAuthRemoveOutput = Schema.Boolean.pipe(
  T.ResponsePath("providerAuthRemove"),
);
export type ProviderAuthRemoveOutput = typeof ProviderAuthRemoveOutput.Type;

/**
 * Deletes a ProviderAuth.
 */
export const providerAuthRemove = API.make(() => ({
  inputSchema: ProviderAuthRemoveInput,
  outputSchema: ProviderAuthRemoveOutput,
}));
