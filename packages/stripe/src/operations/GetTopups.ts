import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetTopupsInput {
  amount?: string;
  created?: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
  status?: "canceled" | "failed" | "pending" | "succeeded";
}
export const GetTopupsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.optional(Schema.String),
  created: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  starting_after: Schema.optional(Schema.String),
  status: Schema.optional(
    Schema.Literals(["canceled", "failed", "pending", "succeeded"]),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/v1/topups", contentType: "form-urlencoded" }),
) as unknown as Schema.Codec<GetTopupsInput>;

// Output Schema
export interface GetTopupsOutput {
  data: {
    amount: number;
    balance_transaction:
      | string
      | {
          amount: number;
          available_on: number;
          balance_type:
            | "issuing"
            | "payments"
            | "refund_and_dispute_prefunding"
            | "risk_reserved";
          created: number;
          currency: string;
          description: string | null;
          exchange_rate: number | null;
          fee: number;
          fee_details: {
            amount: number;
            application: string | null;
            currency: string;
            description: string | null;
            type: string;
          }[];
          id: string;
          net: number;
          object: "balance_transaction";
          reporting_category: string;
          source: string | unknown | null;
          status: string;
          type:
            | "adjustment"
            | "advance"
            | "advance_funding"
            | "anticipation_repayment"
            | "application_fee"
            | "application_fee_refund"
            | "charge"
            | "climate_order_purchase"
            | "climate_order_refund"
            | "connect_collection_transfer"
            | "contribution"
            | "fee_credit_funding"
            | "inbound_transfer"
            | "inbound_transfer_reversal"
            | "issuing_authorization_hold"
            | "issuing_authorization_release"
            | "issuing_dispute"
            | "issuing_transaction"
            | "obligation_outbound"
            | "obligation_reversal_inbound"
            | "payment"
            | "payment_failure_refund"
            | "payment_network_reserve_hold"
            | "payment_network_reserve_release"
            | "payment_refund"
            | "payment_reversal"
            | "payment_unreconciled"
            | "payout"
            | "payout_cancel"
            | "payout_failure"
            | "payout_minimum_balance_hold"
            | "payout_minimum_balance_release"
            | "refund"
            | "refund_failure"
            | "reserve_hold"
            | "reserve_release"
            | "reserve_transaction"
            | "reserved_funds"
            | "stripe_balance_payment_debit"
            | "stripe_balance_payment_debit_reversal"
            | "stripe_fee"
            | "stripe_fx_fee"
            | "tax_fee"
            | "tax_fund"
            | "topup"
            | "topup_reversal"
            | "transfer"
            | "transfer_cancel"
            | "transfer_failure"
            | "transfer_refund";
        }
      | null;
    created: number;
    currency: string;
    description: string | null;
    expected_availability_date: number | null;
    failure_code: string | null;
    failure_message: string | null;
    id: string;
    livemode: boolean;
    metadata: Record<string, string>;
    object: "topup";
    source: unknown;
    statement_descriptor: string | null;
    status: "canceled" | "failed" | "pending" | "reversed" | "succeeded";
    transfer_group: string | null;
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetTopupsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
      amount: Schema.Number,
      balance_transaction: Schema.NullOr(
        Schema.Union([
          Schema.String,
          Schema.Struct({
            amount: Schema.Number,
            available_on: Schema.Number,
            balance_type: Schema.Literals([
              "issuing",
              "payments",
              "refund_and_dispute_prefunding",
              "risk_reserved",
            ]),
            created: Schema.Number,
            currency: Schema.String,
            description: Schema.NullOr(Schema.String),
            exchange_rate: Schema.NullOr(Schema.Number),
            fee: Schema.Number,
            fee_details: Schema.Array(
              Schema.Struct({
                amount: Schema.Number,
                application: Schema.NullOr(Schema.String),
                currency: Schema.String,
                description: Schema.NullOr(Schema.String),
                type: Schema.String,
              }),
            ),
            id: Schema.String,
            net: Schema.Number,
            object: Schema.Literals(["balance_transaction"]),
            reporting_category: Schema.String,
            source: Schema.NullOr(
              Schema.Union([Schema.String, Schema.Unknown]),
            ),
            status: Schema.String,
            type: Schema.Literals([
              "adjustment",
              "advance",
              "advance_funding",
              "anticipation_repayment",
              "application_fee",
              "application_fee_refund",
              "charge",
              "climate_order_purchase",
              "climate_order_refund",
              "connect_collection_transfer",
              "contribution",
              "fee_credit_funding",
              "inbound_transfer",
              "inbound_transfer_reversal",
              "issuing_authorization_hold",
              "issuing_authorization_release",
              "issuing_dispute",
              "issuing_transaction",
              "obligation_outbound",
              "obligation_reversal_inbound",
              "payment",
              "payment_failure_refund",
              "payment_network_reserve_hold",
              "payment_network_reserve_release",
              "payment_refund",
              "payment_reversal",
              "payment_unreconciled",
              "payout",
              "payout_cancel",
              "payout_failure",
              "payout_minimum_balance_hold",
              "payout_minimum_balance_release",
              "refund",
              "refund_failure",
              "reserve_hold",
              "reserve_release",
              "reserve_transaction",
              "reserved_funds",
              "stripe_balance_payment_debit",
              "stripe_balance_payment_debit_reversal",
              "stripe_fee",
              "stripe_fx_fee",
              "tax_fee",
              "tax_fund",
              "topup",
              "topup_reversal",
              "transfer",
              "transfer_cancel",
              "transfer_failure",
              "transfer_refund",
            ]),
          }),
        ]),
      ),
      created: Schema.Number,
      currency: Schema.String,
      description: Schema.NullOr(Schema.String),
      expected_availability_date: Schema.NullOr(Schema.Number),
      failure_code: Schema.NullOr(Schema.String),
      failure_message: Schema.NullOr(Schema.String),
      id: Schema.String,
      livemode: Schema.Boolean,
      metadata: Schema.Record(Schema.String, Schema.String),
      object: Schema.Literals(["topup"]),
      source: Schema.Unknown,
      statement_descriptor: Schema.NullOr(Schema.String),
      status: Schema.Literals([
        "canceled",
        "failed",
        "pending",
        "reversed",
        "succeeded",
      ]),
      transfer_group: Schema.NullOr(Schema.String),
    }),
  ),
  has_more: Schema.Boolean,
  object: Schema.Literals(["list"]),
  url: Schema.String,
}) as unknown as Schema.Codec<GetTopupsOutput>;

// The operation
/**
 * List all top-ups
 *
 * <p>Returns a list of top-ups.</p>
 *
 * @param amount - A positive integer representing how much to transfer.
 * @param created - A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param status - Only return top-ups that have the given status. One of `canceled`, `failed`, `pending` or `succeeded`.
 */
export const GetTopups = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetTopupsInput,
  outputSchema: GetTopupsOutput,
}));
