import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const UpdateApiKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiKeyID: Schema.String.pipe(T.PathParam()),
  claims: Schema.optional(Schema.NullOr(Schema.Unknown)),
  scopes: Schema.optional(Schema.Array(Schema.String)),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  subject: Schema.optional(Schema.String),
  seconds_until_expiration: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(T.Http({ method: "PATCH", path: "/api_keys/{apiKeyID}" }));
export type UpdateApiKeyInput = typeof UpdateApiKeyInput.Type;

// Output Schema
export const UpdateApiKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type UpdateApiKeyOutput = typeof UpdateApiKeyOutput.Type;

// The operation
/**
 * Update an API Key
 */
export const updateApiKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateApiKeyInput,
  outputSchema: UpdateApiKeyOutput,
  errors: [BadRequest, NotFound] as const,
}));
