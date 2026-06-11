import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation twoFactorInfoSecret {\n  twoFactorInfoSecret {\n    secret\n    uri\n  }\n}";

// Input Schema (GraphQL variables)
export const TwoFactorInfoSecretInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "twoFactorInfoSecret",
    type: "mutation",
  }),
);
export type TwoFactorInfoSecretInput = typeof TwoFactorInfoSecretInput.Type;

// Output Schema (GraphQL selection set)
export const TwoFactorInfoSecretOutput = Schema.Struct({
  secret: Schema.String,
  uri: Schema.String,
}).pipe(T.ResponsePath("twoFactorInfoSecret"));
export type TwoFactorInfoSecretOutput = typeof TwoFactorInfoSecretOutput.Type;

/**
 * Generates the 2FA app secret for the authenticated user.
 */
export const twoFactorInfoSecret = API.make(() => ({
  inputSchema: TwoFactorInfoSecretInput,
  outputSchema: TwoFactorInfoSecretOutput,
}));
