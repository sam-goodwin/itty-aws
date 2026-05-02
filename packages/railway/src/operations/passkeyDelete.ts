import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation passkeyDelete($id: String!) {\n  passkeyDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const PasskeyDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "passkeyDelete",
    type: "mutation",
  }),
);
export type PasskeyDeleteInput = typeof PasskeyDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const PasskeyDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("passkeyDelete"),
);
export type PasskeyDeleteOutput = typeof PasskeyDeleteOutput.Type;

/**
 * Deletes a Passkey
 */
export const passkeyDelete = API.make(() => ({
  inputSchema: PasskeyDeleteInput,
  outputSchema: PasskeyDeleteOutput,
}));
