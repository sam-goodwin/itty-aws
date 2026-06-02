import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, NotFound } from "../../../errors.ts";

// Input Schema
export const VerifyTokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  token: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/m2m_tokens/verify" }));
export type VerifyTokenInput = typeof VerifyTokenInput.Type;

// Output Schema
export const VerifyTokenOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type VerifyTokenOutput = typeof VerifyTokenOutput.Type;

// The operation
/**
 * Verify a M2M Token
 *
 * Verifies a M2M Token.
 * This endpoint can be authenticated by either a Machine Secret Key or by a Clerk Secret Key.
 * - When verifying a M2M Token with a Machine Secret Key, the token must be granted access to the Machine associated with the Machine Secret Key.
 * - When verifying a M2M Token with a Clerk Secret Key, any token on the Instance can be verified.
 */
export const verifyToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VerifyTokenInput,
  outputSchema: VerifyTokenOutput,
  errors: [BadRequest, NotFound] as const,
}));
