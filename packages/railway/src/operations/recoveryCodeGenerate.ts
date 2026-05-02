import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation recoveryCodeGenerate {\n  recoveryCodeGenerate {\n    recoveryCodes\n  }\n}";

// Input Schema (GraphQL variables)
export const RecoveryCodeGenerateInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "recoveryCodeGenerate",
    type: "mutation",
  }),
);
export type RecoveryCodeGenerateInput = typeof RecoveryCodeGenerateInput.Type;

// Output Schema (GraphQL selection set)
export const RecoveryCodeGenerateOutput = Schema.Struct({
  recoveryCodes: Schema.Array(Schema.String),
}).pipe(T.ResponsePath("recoveryCodeGenerate"));
export type RecoveryCodeGenerateOutput = typeof RecoveryCodeGenerateOutput.Type;

/**
 * Generates a new set of recovery codes for the authenticated user.
 */
export const recoveryCodeGenerate = API.make(() => ({
  inputSchema: RecoveryCodeGenerateInput,
  outputSchema: RecoveryCodeGenerateOutput,
}));
