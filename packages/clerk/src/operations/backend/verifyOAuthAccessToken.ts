import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";
import { SensitiveString } from "../../sensitive.ts";

// Input Schema
export const VerifyOAuthAccessTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    access_token: Schema.optional(SensitiveString),
    secret: Schema.optional(SensitiveString),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/oauth_applications/access_tokens/verify",
    }),
  );
export type VerifyOAuthAccessTokenInput =
  typeof VerifyOAuthAccessTokenInput.Type;

// Output Schema
export const VerifyOAuthAccessTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type VerifyOAuthAccessTokenOutput =
  typeof VerifyOAuthAccessTokenOutput.Type;

// The operation
/**
 * Verify an OAuth Access Token
 */
export const verifyOAuthAccessToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VerifyOAuthAccessTokenInput,
    outputSchema: VerifyOAuthAccessTokenOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
