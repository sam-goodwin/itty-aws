import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const GetApiKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  subject: Schema.String,
  include_invalid: Schema.optional(Schema.Literals(["true", "false"])),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  query: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/api_keys" }));
export type GetApiKeysInput = typeof GetApiKeysInput.Type;

// Output Schema
export const GetApiKeysOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  total_count: Schema.Number,
});
export type GetApiKeysOutput = typeof GetApiKeysOutput.Type;

// The operation
/**
 * Get API Keys
 */
export const getApiKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetApiKeysInput,
  outputSchema: GetApiKeysOutput,
  errors: [BadRequest, NotFound] as const,
}));
