import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query twoFactorInfo {\n  twoFactorInfo {\n    hasRecoveryCodes\n    isVerified\n  }\n}";

// Input Schema (GraphQL variables)
export const GetTwoFactorInfoInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "twoFactorInfo",
    type: "query",
  }),
);
export type GetTwoFactorInfoInput = typeof GetTwoFactorInfoInput.Type;

// Output Schema (GraphQL selection set)
export const GetTwoFactorInfoOutput = Schema.Struct({
  hasRecoveryCodes: Schema.Boolean,
  isVerified: Schema.Boolean,
}).pipe(T.ResponsePath("twoFactorInfo"));
export type GetTwoFactorInfoOutput = typeof GetTwoFactorInfoOutput.Type;

/**
 * Gets the TwoFactorInfo for the authenticated user.
 */
export const getTwoFactorInfo = API.make(() => ({
  inputSchema: GetTwoFactorInfoInput,
  outputSchema: GetTwoFactorInfoOutput,
}));
