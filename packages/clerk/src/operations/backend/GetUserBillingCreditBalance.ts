import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const GetUserBillingCreditBalanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/users/{user_id}/billing/credits" }));
export type GetUserBillingCreditBalanceInput =
  typeof GetUserBillingCreditBalanceInput.Type;

// Output Schema
export const GetUserBillingCreditBalanceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    balance: Schema.NullOr(
      Schema.Struct({
        amount: Schema.Number,
        amount_formatted: Schema.String,
        currency: Schema.String,
        currency_symbol: Schema.String,
      }),
    ),
  });
export type GetUserBillingCreditBalanceOutput =
  typeof GetUserBillingCreditBalanceOutput.Type;

// The operation
/**
 * Retrieve a user's credit balance
 *
 * Retrieves the current credit balance for the specified user.
 * Credits can be applied during checkout to reduce the charge or automatically applied to upcoming recurring charges
 *
 * @param user_id - The ID of the user whose credit balance to retrieve
 */
export const GetUserBillingCreditBalance = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetUserBillingCreditBalanceInput,
    outputSchema: GetUserBillingCreditBalanceOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
