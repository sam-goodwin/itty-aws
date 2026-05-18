import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const GetUsersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ids: Schema.String,
}).pipe(T.Http({ method: "GET", path: "/users" }));
export type GetUsersInput = typeof GetUsersInput.Type;

// Output Schema
export const GetUsersOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
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
  }),
);
export type GetUsersOutput = typeof GetUsersOutput.Type;

// The operation
/**
 * Get multiple users
 *
 * @param ids - The IDs of the users
 */
export const getUsers = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetUsersInput,
  outputSchema: GetUsersOutput,
  errors: [BadRequest] as const,
}));
