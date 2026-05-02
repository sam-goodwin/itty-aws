import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation recoveryCodeValidate($input: RecoveryCodeValidateInput!) {\n  recoveryCodeValidate(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const RecoveryCodeValidateInput = Schema.Struct({
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
export type RecoveryCodeValidateInput = typeof RecoveryCodeValidateInput.Type;

// Output Schema (GraphQL selection set)
export const RecoveryCodeValidateOutput = Schema.Boolean.pipe(
  T.ResponsePath("recoveryCodeValidate"),
);
export type RecoveryCodeValidateOutput = typeof RecoveryCodeValidateOutput.Type;

/**
 * Validates a recovery code.
 */
export const recoveryCodeValidate = API.make(() => ({
  inputSchema: RecoveryCodeValidateInput,
  outputSchema: RecoveryCodeValidateOutput,
}));
