import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation twoFactorInfoCreate($input: TwoFactorInfoCreateInput!) {\n  twoFactorInfoCreate(input: $input) {\n    recoveryCodes\n  }\n}";

// Input Schema (GraphQL variables)
export const TwoFactorInfoCreateInput = Schema.Struct({
  input: Schema.Struct({
    token: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "twoFactorInfoCreate",
    type: "mutation",
  }),
);
export type TwoFactorInfoCreateInput = typeof TwoFactorInfoCreateInput.Type;

// Output Schema (GraphQL selection set)
export const TwoFactorInfoCreateOutput = Schema.Struct({
  recoveryCodes: Schema.Array(Schema.String),
}).pipe(T.ResponsePath("twoFactorInfoCreate"));
export type TwoFactorInfoCreateOutput = typeof TwoFactorInfoCreateOutput.Type;

/**
 * Setup 2FA authorization for authenticated user.
 */
export const twoFactorInfoCreate = API.make(() => ({
  inputSchema: TwoFactorInfoCreateInput,
  outputSchema: TwoFactorInfoCreateOutput,
}));
