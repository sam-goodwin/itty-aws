import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Conflict } from "../../../errors.ts";
import { SensitiveOutputString } from "../../../sensitive.ts";

// Input Schema
export const CreateApiKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  name: Schema.String,
  description: Schema.optional(Schema.NullOr(Schema.String)),
  subject: Schema.String,
  claims: Schema.optional(Schema.NullOr(Schema.Unknown)),
  scopes: Schema.optional(Schema.Array(Schema.String)),
  created_by: Schema.optional(Schema.NullOr(Schema.String)),
  seconds_until_expiration: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(T.Http({ method: "POST", path: "/api_keys" }));
export type CreateApiKeyInput = typeof CreateApiKeyInput.Type;

// Output Schema
export const CreateApiKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["api_key"]),
  id: Schema.String,
  type: Schema.String,
  subject: Schema.String,
  name: Schema.String,
  description: Schema.optional(Schema.NullOr(Schema.String)),
  claims: Schema.NullOr(Schema.Unknown),
  scopes: Schema.Array(Schema.String),
  secret: SensitiveOutputString,
  revoked: Schema.Boolean,
  revocation_reason: Schema.NullOr(Schema.String),
  expired: Schema.Boolean,
  expiration: Schema.NullOr(Schema.Number),
  created_by: Schema.NullOr(Schema.String),
  last_used_at: Schema.NullOr(Schema.Number),
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type CreateApiKeyOutput = typeof CreateApiKeyOutput.Type;

// The operation
/**
 * Create an API Key
 */
export const createApiKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateApiKeyInput,
  outputSchema: CreateApiKeyOutput,
  errors: [BadRequest, Conflict] as const,
}));
