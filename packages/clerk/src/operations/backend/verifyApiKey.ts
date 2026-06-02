import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";
import { SensitiveString } from "../../sensitive.ts";

// Input Schema
export const VerifyApiKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  secret: SensitiveString,
}).pipe(T.Http({ method: "POST", path: "/api_keys/verify" }));
export type VerifyApiKeyInput = typeof VerifyApiKeyInput.Type;

// Output Schema
export const VerifyApiKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type VerifyApiKeyOutput = typeof VerifyApiKeyOutput.Type;

// The operation
/**
 * Verify an API Key
 */
export const verifyApiKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VerifyApiKeyInput,
  outputSchema: VerifyApiKeyOutput,
  errors: [BadRequest, NotFound] as const,
}));
