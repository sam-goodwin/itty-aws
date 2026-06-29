import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, NotFound } from "../../../errors.ts";

// Input Schema
export const GetApiKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiKeyID: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/api_keys/{apiKeyID}" }));
export type GetApiKeyInput = typeof GetApiKeyInput.Type;

// Output Schema
export const GetApiKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GetApiKeyOutput = typeof GetApiKeyOutput.Type;

// The operation
/**
 * Get an API Key by ID
 */
export const getApiKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetApiKeyInput,
  outputSchema: GetApiKeyOutput,
  errors: [BadRequest, NotFound] as const,
}));
