import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { NotFound, UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const CreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.String,
  expires_in_seconds: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(T.Http({ method: "POST", path: "/sign_in_tokens" }));
export type CreateInput = typeof CreateInput.Type;

// Output Schema
export const CreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["sign_in_token"]),
  id: Schema.String,
  status: Schema.Literals(["pending", "accepted", "revoked"]),
  user_id: Schema.String,
  token: Schema.optional(Schema.String),
  url: Schema.optional(Schema.NullOr(Schema.String)),
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type CreateOutput = typeof CreateOutput.Type;

// The operation
/**
 * Create sign-in token
 *
 * Creates a new sign-in token and associates it with the given user.
 * By default, sign-in tokens expire in 30 days.
 * You can optionally supply a different duration in seconds using the `expires_in_seconds` property.
 */
export const create = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateInput,
  outputSchema: CreateOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
