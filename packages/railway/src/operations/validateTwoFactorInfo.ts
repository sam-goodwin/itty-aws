import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation validateTwoFactorInfo($input: TwoFactorInfoValidateInput!) {\n  twoFactorInfoValidate(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ValidateTwoFactorInfoInput = Schema.Struct({
  input: Schema.Struct({
    token: Schema.String,
    twoFactorLinkingKey: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "validateTwoFactorInfo",
    type: "mutation",
  }),
);
export type ValidateTwoFactorInfoInput = typeof ValidateTwoFactorInfoInput.Type;

// Output Schema (GraphQL selection set)
export const ValidateTwoFactorInfoOutput = Schema.Boolean.pipe(
  T.ResponsePath("twoFactorInfoValidate"),
);
export type ValidateTwoFactorInfoOutput =
  typeof ValidateTwoFactorInfoOutput.Type;

/**
 * Validates the token for a 2FA action or for a login request.
 */
export const validateTwoFactorInfo = API.make(() => ({
  inputSchema: ValidateTwoFactorInfoInput,
  outputSchema: ValidateTwoFactorInfoOutput,
}));
