import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const RevokeActorTokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  actor_token_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "POST", path: "/actor_tokens/{actor_token_id}/revoke" }),
);
export type RevokeActorTokenInput = typeof RevokeActorTokenInput.Type;

// Output Schema
export const RevokeActorTokenOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    object: Schema.Literals(["actor_token"]),
    id: Schema.String,
    status: Schema.Literals(["pending", "accepted", "revoked"]),
    user_id: Schema.String,
    actor: Schema.Unknown,
    token: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    created_at: Schema.Number,
    updated_at: Schema.Number,
  },
);
export type RevokeActorTokenOutput = typeof RevokeActorTokenOutput.Type;

// The operation
/**
 * Revoke actor token
 *
 * Revokes a pending actor token.
 *
 * @param actor_token_id - The ID of the actor token to be revoked.
 */
export const RevokeActorToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RevokeActorTokenInput,
  outputSchema: RevokeActorTokenOutput,
  errors: [BadRequest, NotFound] as const,
}));
