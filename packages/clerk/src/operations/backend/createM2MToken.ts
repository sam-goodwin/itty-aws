import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Conflict } from "../../errors.ts";

// Input Schema
export const CreateM2MTokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  token_format: Schema.optional(Schema.Literals(["opaque", "jwt"])),
  seconds_until_expiration: Schema.optional(Schema.NullOr(Schema.Number)),
  claims: Schema.optional(Schema.NullOr(Schema.Unknown)),
  min_remaining_ttl_seconds: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "POST", path: "/m2m_tokens" }));
export type CreateM2MTokenInput = typeof CreateM2MTokenInput.Type;

// Output Schema
export const CreateM2MTokenOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type CreateM2MTokenOutput = typeof CreateM2MTokenOutput.Type;

// The operation
/**
 * Create a M2M Token
 *
 * Creates a new M2M Token. Must be authenticated via a Machine Secret Key.
 */
export const createM2MToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateM2MTokenInput,
  outputSchema: CreateM2MTokenOutput,
  errors: [BadRequest, Conflict] as const,
}));
