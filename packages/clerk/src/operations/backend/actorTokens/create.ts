import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  PaymentRequired,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const CreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.String,
  actor: Schema.Struct({
    sub: Schema.String,
  }),
  expires_in_seconds: Schema.optional(Schema.Number),
  session_max_duration_in_seconds: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "POST", path: "/actor_tokens" }));
export type CreateInput = typeof CreateInput.Type;

// Output Schema
export const CreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["actor_token"]),
  id: Schema.String,
  status: Schema.Literals(["pending", "accepted", "revoked"]),
  user_id: Schema.String,
  actor: Schema.Unknown,
  token: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type CreateOutput = typeof CreateOutput.Type;

// The operation
/**
 * Create actor token
 *
 * Create an actor token that can be used to impersonate the given user.
 * The `actor` parameter needs to include at least a "sub" key whose value is the ID of the actor (impersonating) user.
 */
export const create = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateInput,
  outputSchema: CreateOutput,
  errors: [BadRequest, PaymentRequired, UnprocessableEntity] as const,
}));
