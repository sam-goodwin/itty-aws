import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Conflict } from "../../../errors.ts";

// Input Schema
export const CreateTokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  token_format: Schema.optional(Schema.Literals(["opaque", "jwt"])),
  seconds_until_expiration: Schema.optional(Schema.NullOr(Schema.Number)),
  claims: Schema.optional(Schema.NullOr(Schema.Unknown)),
  min_remaining_ttl_seconds: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "POST", path: "/m2m_tokens" }));
export type CreateTokenInput = typeof CreateTokenInput.Type;

// Output Schema
export const CreateTokenOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["machine_to_machine_token"]),
  id: Schema.String,
  subject: Schema.String,
  claims: Schema.optional(Schema.NullOr(Schema.Unknown)),
  scopes: Schema.optional(Schema.Array(Schema.String)),
  token: Schema.String,
  revoked: Schema.Boolean,
  revocation_reason: Schema.NullOr(Schema.String),
  expired: Schema.Boolean,
  expiration: Schema.NullOr(Schema.Number),
  last_used_at: Schema.NullOr(Schema.Number),
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type CreateTokenOutput = typeof CreateTokenOutput.Type;

// The operation
/**
 * Create a M2M Token
 *
 * Creates a new M2M Token. Must be authenticated via a Machine Secret Key.
 */
export const createToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateTokenInput,
  outputSchema: CreateTokenOutput,
  errors: [BadRequest, Conflict] as const,
}));
