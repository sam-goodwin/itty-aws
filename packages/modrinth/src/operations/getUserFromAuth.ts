import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetUserFromAuthInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/user" }));
export type GetUserFromAuthInput = typeof GetUserFromAuthInput.Type;

// Output Schema
export const GetUserFromAuthOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  username: Schema.String,
  name: Schema.optional(Schema.NullOr(Schema.String)),
  email: Schema.optional(Schema.NullOr(Schema.String)),
  bio: Schema.optional(Schema.String),
  payout_data: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        balance: Schema.optional(Schema.Number),
        payout_wallet: Schema.optional(Schema.Literals(["paypal", "venmo"])),
        payout_wallet_type: Schema.optional(
          Schema.Literals(["email", "phone", "user_handle"]),
        ),
        payout_address: Schema.optional(Schema.String),
      }),
    ),
  ),
  id: Schema.String,
  avatar_url: Schema.String,
  created: Schema.String,
  role: Schema.Literals(["admin", "moderator", "developer"]),
  badges: Schema.optional(Schema.Number),
  auth_providers: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
  has_password: Schema.optional(Schema.NullOr(Schema.Boolean)),
  has_totp: Schema.optional(Schema.NullOr(Schema.Boolean)),
  github_id: Schema.optional(Schema.NullOr(Schema.Number)),
});
export type GetUserFromAuthOutput = typeof GetUserFromAuthOutput.Type;

// The operation
/**
 * Get user from authorization header
 */
export const getUserFromAuth = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetUserFromAuthInput,
  outputSchema: GetUserFromAuthOutput,
}));
