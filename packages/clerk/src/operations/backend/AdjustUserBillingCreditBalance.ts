import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const AdjustUserBillingCreditBalanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
    amount: Schema.Number,
    action: Schema.Literals(["increase", "decrease"]),
    currency: Schema.optional(Schema.String),
    idempotency_key: Schema.String,
    note: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/users/{user_id}/billing/credits" }));
export type AdjustUserBillingCreditBalanceInput =
  typeof AdjustUserBillingCreditBalanceInput.Type;

// Output Schema
export const AdjustUserBillingCreditBalanceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    payer_id: Schema.String,
    amount: Schema.Number,
    currency: Schema.String,
    source_type: Schema.String,
    source_id: Schema.String,
    note: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.String,
  });
export type AdjustUserBillingCreditBalanceOutput =
  typeof AdjustUserBillingCreditBalanceOutput.Type;

// The operation
/**
 * Adjust a user's credit balance
 *
 * Increases or decreases the credit balance for the specified user.
 * Each adjustment is recorded as a ledger entry. The idempotency_key parameter
 * ensures that duplicate requests are safely handled.
 *
 * @param user_id - The ID of the user whose credit balance to adjust
 */
export const AdjustUserBillingCreditBalance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdjustUserBillingCreditBalanceInput,
    outputSchema: AdjustUserBillingCreditBalanceOutput,
    errors: [
      BadRequest,
      Forbidden,
      NotFound,
      Conflict,
      UnprocessableEntity,
    ] as const,
  }));
