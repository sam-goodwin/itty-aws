import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation twoFactorInfoValidate($input: TwoFactorInfoValidateInput!) {\n  twoFactorInfoValidate(input: $input)\n}";

// Input Schema (GraphQL variables)
export const TwoFactorInfoValidateInput = Schema.Struct({
  input: Schema.Struct({
    token: Schema.String,
    twoFactorLinkingKey: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "twoFactorInfoValidate",
    type: "mutation",
  }),
);
export type TwoFactorInfoValidateInput = typeof TwoFactorInfoValidateInput.Type;

// Output Schema (GraphQL selection set)
export const TwoFactorInfoValidateOutput = Schema.Boolean.pipe(
  T.ResponsePath("twoFactorInfoValidate"),
);
export type TwoFactorInfoValidateOutput =
  typeof TwoFactorInfoValidateOutput.Type;

/**
 * Validates the token for a 2FA action or for a login request.
 */
export const twoFactorInfoValidate = API.make(() => ({
  inputSchema: TwoFactorInfoValidateInput,
  outputSchema: TwoFactorInfoValidateOutput,
}));
