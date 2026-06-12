import * as Schema from "effect/Schema";
import { APITokenSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const GetAPITokensInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v2/tokens" }));
export type GetAPITokensInput = typeof GetAPITokensInput.Type;

// Output Schema
export const GetAPITokensOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => APITokenSchema),
);
export type GetAPITokensOutput = typeof GetAPITokensOutput.Type;

// The operation
/**
 * Get API tokens
 */
export const getAPITokens = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAPITokensInput,
  outputSchema: GetAPITokensOutput,
}));
