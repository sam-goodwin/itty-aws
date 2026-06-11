import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation recoveryCodeValidate($input: RecoveryCodeValidateInput!) {\n  recoveryCodeValidate(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ValidateRecoveryCodeInput = Schema.Struct({
  input: Schema.Struct({
    code: Schema.String,
    twoFactorLinkingKey: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "recoveryCodeValidate",
    type: "mutation",
  }),
);
export type ValidateRecoveryCodeInput = typeof ValidateRecoveryCodeInput.Type;

// Output Schema (GraphQL selection set)
export const ValidateRecoveryCodeOutput = Schema.Boolean.pipe(
  T.ResponsePath("recoveryCodeValidate"),
);
export type ValidateRecoveryCodeOutput = typeof ValidateRecoveryCodeOutput.Type;

/**
 * Validates a recovery code.
 */
export const validateRecoveryCode = API.make(() => ({
  inputSchema: ValidateRecoveryCodeInput,
  outputSchema: ValidateRecoveryCodeOutput,
}));
