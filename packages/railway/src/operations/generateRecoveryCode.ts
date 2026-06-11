import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation generateRecoveryCode {\n  recoveryCodeGenerate {\n    recoveryCodes\n  }\n}";

// Input Schema (GraphQL variables)
export const GenerateRecoveryCodeInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "generateRecoveryCode",
    type: "mutation",
  }),
);
export type GenerateRecoveryCodeInput = typeof GenerateRecoveryCodeInput.Type;

// Output Schema (GraphQL selection set)
export const GenerateRecoveryCodeOutput = Schema.Struct({
  recoveryCodes: Schema.Array(Schema.String),
}).pipe(T.ResponsePath("recoveryCodeGenerate"));
export type GenerateRecoveryCodeOutput = typeof GenerateRecoveryCodeOutput.Type;

/**
 * Generates a new set of recovery codes for the authenticated user.
 */
export const generateRecoveryCode = API.make(() => ({
  inputSchema: GenerateRecoveryCodeInput,
  outputSchema: GenerateRecoveryCodeOutput,
}));
