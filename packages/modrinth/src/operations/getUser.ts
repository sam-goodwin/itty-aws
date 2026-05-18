import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id_or_username: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/user/{id_or_username}" }));
export type GetUserInput = typeof GetUserInput.Type;

// Output Schema
export const GetUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GetUserOutput = typeof GetUserOutput.Type;

// The operation
/**
 * Get a user
 *
 * @param id_or_username - The ID or username of the user
 */
export const getUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetUserInput,
  outputSchema: GetUserOutput,
  errors: [NotFound] as const,
}));
