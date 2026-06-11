import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation twoFactorInfoCreate($input: TwoFactorInfoCreateInput!) {\n  twoFactorInfoCreate(input: $input) {\n    recoveryCodes\n  }\n}";

// Input Schema (GraphQL variables)
export const CreateTwoFactorInfoInput = Schema.Struct({
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
export type CreateTwoFactorInfoInput = typeof CreateTwoFactorInfoInput.Type;

// Output Schema (GraphQL selection set)
export const CreateTwoFactorInfoOutput = Schema.Struct({
  recoveryCodes: Schema.Array(Schema.String),
}).pipe(T.ResponsePath("twoFactorInfoCreate"));
export type CreateTwoFactorInfoOutput = typeof CreateTwoFactorInfoOutput.Type;

/**
 * Setup 2FA authorization for authenticated user.
 */
export const createTwoFactorInfo = API.make(() => ({
  inputSchema: CreateTwoFactorInfoInput,
  outputSchema: CreateTwoFactorInfoOutput,
}));
