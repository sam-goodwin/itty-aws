import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const CreateTestingTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/testing_tokens" }),
  );
export type CreateTestingTokenInput = typeof CreateTestingTokenInput.Type;

// Output Schema
export const CreateTestingTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["testing_token"]),
    token: Schema.String,
    expires_at: Schema.Number,
  });
export type CreateTestingTokenOutput = typeof CreateTestingTokenOutput.Type;

// The operation
/**
 * Retrieve a new testing token
 *
 * Retrieve a new testing token.
 */
export const CreateTestingToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateTestingTokenInput,
  outputSchema: CreateTestingTokenOutput,
}));
