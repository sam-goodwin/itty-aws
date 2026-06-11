import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deleteSshPublicKey($id: String!) {\n  sshPublicKeyDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteSshPublicKeyInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deleteSshPublicKey",
    type: "mutation",
  }),
);
export type DeleteSshPublicKeyInput = typeof DeleteSshPublicKeyInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteSshPublicKeyOutput = Schema.Boolean.pipe(
  T.ResponsePath("sshPublicKeyDelete"),
);
export type DeleteSshPublicKeyOutput = typeof DeleteSshPublicKeyOutput.Type;

/**
 * Deletes an SSH public key.
 */
export const deleteSshPublicKey = API.make(() => ({
  inputSchema: DeleteSshPublicKeyInput,
  outputSchema: DeleteSshPublicKeyOutput,
}));
