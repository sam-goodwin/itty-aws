import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ModifyUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id_or_username: Schema.String.pipe(T.PathParam()),
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
}).pipe(T.Http({ method: "PATCH", path: "/user/{id_or_username}" }));
export type ModifyUserInput = typeof ModifyUserInput.Type;

// Output Schema
export const ModifyUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ModifyUserOutput = typeof ModifyUserOutput.Type;

// The operation
/**
 * Modify a user
 *
 * @param id_or_username - The ID or username of the user
 */
export const modifyUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModifyUserInput,
  outputSchema: ModifyUserOutput,
  errors: [BadRequest, NotFound] as const,
}));
