import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const WithdrawPayoutInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id_or_username: Schema.String.pipe(T.PathParam()),
  amount: Schema.Number,
}).pipe(T.Http({ method: "POST", path: "/user/{id_or_username}/payouts" }));
export type WithdrawPayoutInput = typeof WithdrawPayoutInput.Type;

// Output Schema
export const WithdrawPayoutOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WithdrawPayoutOutput = typeof WithdrawPayoutOutput.Type;

// The operation
/**
 * Withdraw payout balance to PayPal or Venmo
 *
 * Warning: certain amounts get withheld for fees. Please do not call this API endpoint without first acknowledging the warnings on the corresponding frontend page.
 *
 * @param id_or_username - The ID or username of the user
 * @param amount - Amount to withdraw
 */
export const withdrawPayout = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WithdrawPayoutInput,
  outputSchema: WithdrawPayoutOutput,
  errors: [NotFound] as const,
}));
