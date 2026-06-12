import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation passkeyDelete($id: String!) {\n  passkeyDelete(id: $id)\n}";

// Input Schema (GraphQL variables)
export const DeletePasskeyInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "passkeyDelete",
    type: "mutation",
  }),
);
export type DeletePasskeyInput = typeof DeletePasskeyInput.Type;

// Output Schema (GraphQL selection set)
export const DeletePasskeyOutput = Schema.Boolean.pipe(
  T.ResponsePath("passkeyDelete"),
);
export type DeletePasskeyOutput = typeof DeletePasskeyOutput.Type;

/**
 * Deletes a Passkey
 */
export const deletePasskey = API.make(() => ({
  inputSchema: DeletePasskeyInput,
  outputSchema: DeletePasskeyOutput,
}));
