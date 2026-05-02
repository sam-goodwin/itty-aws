import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation sshPublicKeyDelete($id: String!) {\n  sshPublicKeyDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const SshPublicKeyDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "sshPublicKeyDelete",
    type: "mutation",
  }),
);
export type SshPublicKeyDeleteInput = typeof SshPublicKeyDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const SshPublicKeyDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("sshPublicKeyDelete"),
);
export type SshPublicKeyDeleteOutput = typeof SshPublicKeyDeleteOutput.Type;

/**
 * Deletes an SSH public key.
 */
export const sshPublicKeyDelete = API.make(() => ({
  inputSchema: SshPublicKeyDeleteInput,
  outputSchema: SshPublicKeyDeleteOutput,
}));
