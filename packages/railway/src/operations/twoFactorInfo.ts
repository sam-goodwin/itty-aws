import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query twoFactorInfo {\n  twoFactorInfo {\n    hasRecoveryCodes\n    isVerified\n  }\n}";

// Input Schema (GraphQL variables)
export const TwoFactorInfoInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "twoFactorInfo",
    type: "query",
  }),
);
export type TwoFactorInfoInput = typeof TwoFactorInfoInput.Type;

// Output Schema (GraphQL selection set)
export const TwoFactorInfoOutput = Schema.Struct({
  hasRecoveryCodes: Schema.Boolean,
  isVerified: Schema.Boolean,
}).pipe(T.ResponsePath("twoFactorInfo"));
export type TwoFactorInfoOutput = typeof TwoFactorInfoOutput.Type;

/**
 * Gets the TwoFactorInfo for the authenticated user.
 */
export const twoFactorInfo = API.make(() => ({
  inputSchema: TwoFactorInfoInput,
  outputSchema: TwoFactorInfoOutput,
}));
