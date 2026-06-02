import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, NotFound } from "../../../errors.ts";

// Input Schema
export const RevokeApiKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiKeyID: Schema.String.pipe(T.PathParam()),
  revocation_reason: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/api_keys/{apiKeyID}/revoke" }));
export type RevokeApiKeyInput = typeof RevokeApiKeyInput.Type;

// Output Schema
export const RevokeApiKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["api_key"]),
  id: Schema.String,
  type: Schema.String,
  subject: Schema.String,
  name: Schema.String,
  description: Schema.optional(Schema.NullOr(Schema.String)),
  claims: Schema.NullOr(Schema.Unknown),
  scopes: Schema.Array(Schema.String),
  revoked: Schema.Boolean,
  revocation_reason: Schema.NullOr(Schema.String),
  expired: Schema.Boolean,
  expiration: Schema.NullOr(Schema.Number),
  created_by: Schema.NullOr(Schema.String),
  last_used_at: Schema.NullOr(Schema.Number),
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type RevokeApiKeyOutput = typeof RevokeApiKeyOutput.Type;

// The operation
/**
 * Revoke an API Key
 */
export const revokeApiKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RevokeApiKeyInput,
  outputSchema: RevokeApiKeyOutput,
  errors: [BadRequest, NotFound] as const,
}));
