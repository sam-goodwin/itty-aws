import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const GetM2MTokensInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subject: Schema.String,
  revoked: Schema.optional(Schema.Boolean),
  expired: Schema.optional(Schema.Boolean),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/m2m_tokens" }));
export type GetM2MTokensInput = typeof GetM2MTokensInput.Type;

// Output Schema
export const GetM2MTokensOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  m2m_tokens: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  total_count: Schema.Number,
});
export type GetM2MTokensOutput = typeof GetM2MTokensOutput.Type;

// The operation
/**
 * Get M2M Tokens
 *
 * Fetches M2M tokens for a specific machine.
 * Only tokens created with the opaque token format are returned by this endpoint. JWT-format M2M tokens are stateless and are not stored.
 * This endpoint can be authenticated by either a Machine Secret Key or by a Clerk Secret Key.
 * - When fetching M2M tokens with a Machine Secret Key, only tokens associated with the authenticated machine can be retrieved.
 * - When fetching M2M tokens with a Clerk Secret Key, tokens for any machine in the instance can be retrieved.
 */
export const getM2MTokens = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetM2MTokensInput,
  outputSchema: GetM2MTokensOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
