import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const VerifyM2MTokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  token: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/m2m_tokens/verify" }));
export type VerifyM2MTokenInput = typeof VerifyM2MTokenInput.Type;

// Output Schema
export const VerifyM2MTokenOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["machine_to_machine_token"]),
  id: Schema.String,
  subject: Schema.String,
  claims: Schema.optional(Schema.NullOr(Schema.Unknown)),
  scopes: Schema.optional(Schema.Array(Schema.String)),
  revoked: Schema.Boolean,
  revocation_reason: Schema.NullOr(Schema.String),
  expired: Schema.Boolean,
  expiration: Schema.NullOr(Schema.Number),
  last_used_at: Schema.NullOr(Schema.Number),
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type VerifyM2MTokenOutput = typeof VerifyM2MTokenOutput.Type;

// The operation
/**
 * Verify a M2M Token
 *
 * Verifies a M2M Token.
 * This endpoint can be authenticated by either a Machine Secret Key or by a Clerk Secret Key.
 * - When verifying a M2M Token with a Machine Secret Key, the token must be granted access to the Machine associated with the Machine Secret Key.
 * - When verifying a M2M Token with a Clerk Secret Key, any token on the Instance can be verified.
 */
export const verifyM2MToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VerifyM2MTokenInput,
  outputSchema: VerifyM2MTokenOutput,
  errors: [BadRequest, NotFound] as const,
}));
