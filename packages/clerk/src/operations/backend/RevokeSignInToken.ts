import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const RevokeSignInTokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    sign_in_token_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({ method: "POST", path: "/sign_in_tokens/{sign_in_token_id}/revoke" }),
);
export type RevokeSignInTokenInput = typeof RevokeSignInTokenInput.Type;

// Output Schema
export const RevokeSignInTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["sign_in_token"]),
    id: Schema.String,
    status: Schema.Literals(["pending", "accepted", "revoked"]),
    user_id: Schema.String,
    token: Schema.optional(Schema.String),
    url: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.Number,
    updated_at: Schema.Number,
  });
export type RevokeSignInTokenOutput = typeof RevokeSignInTokenOutput.Type;

// The operation
/**
 * Revoke the given sign-in token
 *
 * Revokes a pending sign-in token
 *
 * @param sign_in_token_id - The ID of the sign-in token to be revoked
 */
export const RevokeSignInToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RevokeSignInTokenInput,
  outputSchema: RevokeSignInTokenOutput,
  errors: [BadRequest, NotFound] as const,
}));
