import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const RevokeM2MTokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  m2m_token_id: Schema.String.pipe(T.PathParam()),
  revocation_reason: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/m2m_tokens/{m2m_token_id}/revoke" }));
export type RevokeM2MTokenInput = typeof RevokeM2MTokenInput.Type;

// Output Schema
export const RevokeM2MTokenOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type RevokeM2MTokenOutput = typeof RevokeM2MTokenOutput.Type;

// The operation
/**
 * Revoke a M2M Token
 *
 * Revokes a M2M Token.
 * This endpoint only revokes stored opaque-format M2M tokens. JWT-format M2M tokens are stateless and cannot be revoked.
 * This endpoint can be authenticated by either a Machine Secret Key or by a Clerk Secret Key.
 * - When revoking a M2M Token with a Machine Secret Key, the token must managed by the Machine associated with the Machine Secret Key.
 * - When revoking a M2M Token with a Clerk Secret Key, any token on the Instance can be revoked.
 */
export const revokeM2MToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RevokeM2MTokenInput,
  outputSchema: RevokeM2MTokenOutput,
  errors: [BadRequest, NotFound] as const,
}));
