import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, NotFound } from "../../../errors.ts";
import { SensitiveString } from "../../../sensitive.ts";

// Input Schema
export const VerifyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  access_token: Schema.optional(SensitiveString),
  secret: Schema.optional(SensitiveString),
}).pipe(
  T.Http({ method: "POST", path: "/oauth_applications/access_tokens/verify" }),
);
export type VerifyInput = typeof VerifyInput.Type;

// Output Schema
export const VerifyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type VerifyOutput = typeof VerifyOutput.Type;

// The operation
/**
 * Verify an OAuth Access Token
 */
export const verify = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VerifyInput,
  outputSchema: VerifyOutput,
  errors: [BadRequest, NotFound] as const,
}));
