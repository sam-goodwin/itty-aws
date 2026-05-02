import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation sshPublicKeyCreate($input: SshPublicKeyCreateInput!) {\n  sshPublicKeyCreate(input: $input) {\n    createdAt\n    fingerprint\n    id\n    name\n    publicKey\n    updatedAt\n    userId\n    workspaceId\n  }\n}";

// Input Schema (GraphQL variables)
export const SshPublicKeyCreateInput = Schema.Struct({
  input: Schema.Struct({
    name: Schema.String,
    publicKey: Schema.String,
    workspaceId: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "sshPublicKeyCreate",
    type: "mutation",
  }),
);
export type SshPublicKeyCreateInput = typeof SshPublicKeyCreateInput.Type;

// Output Schema (GraphQL selection set)
export const SshPublicKeyCreateOutput = Schema.Struct({
  createdAt: Schema.String,
  fingerprint: Schema.String,
  id: Schema.String,
  name: Schema.String,
  publicKey: Schema.String,
  updatedAt: Schema.String,
  userId: Schema.NullOr(Schema.String),
  workspaceId: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("sshPublicKeyCreate"));
export type SshPublicKeyCreateOutput = typeof SshPublicKeyCreateOutput.Type;

/**
 * Creates a new SSH public key. When workspaceId is provided (or omitted under a workspace-scoped API token, in which case it defaults to the token's workspace), the key is owned by the workspace and can be used by anyone authenticating as that workspace via native SSH; requires workspace ADMIN access. Otherwise the key is owned by the authenticated user.
 */
export const sshPublicKeyCreate = API.make(() => ({
  inputSchema: SshPublicKeyCreateInput,
  outputSchema: SshPublicKeyCreateOutput,
}));
