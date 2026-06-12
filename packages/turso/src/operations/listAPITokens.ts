import * as Schema from "effect/Schema";
import { APITokenSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListAPITokensInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v1/auth/api-tokens" }));
export type ListAPITokensInput = typeof ListAPITokensInput.Type;

// Output Schema
export const ListAPITokensOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tokens: Schema.optional(Schema.Array(Schema.suspend(() => APITokenSchema))),
});
export type ListAPITokensOutput = typeof ListAPITokensOutput.Type;

// The operation
/**
 * List API Tokens
 *
 * Returns a list of API tokens belonging to a user.
 */
export const listAPITokens = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListAPITokensInput,
  outputSchema: ListAPITokensOutput,
}));
