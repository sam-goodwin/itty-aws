import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostTopupsInput {
  amount: number;
  currency: string;
  description?: string;
  expand?: string[];
  metadata?: Record<string, string> | "";
  payment_method?: string;
  payment_method_options?: { us_bank_account?: { network: "ach" } };
  source?: string;
  statement_descriptor?: string;
  transfer_group?: string;
}
export const PostTopupsInput = /*@__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  currency: Schema.String,
  description: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.Array(Schema.String)),
  metadata: Schema.optional(
    Schema.Union([
      Schema.Record(Schema.String, Schema.String),
      Schema.Literals([""]),
    ]),
  ),
  payment_method: Schema.optional(Schema.String),
  payment_method_options: Schema.optional(
    Schema.Struct({
      us_bank_account: Schema.optional(
        Schema.Struct({
          network: Schema.Literals(["ach"]),
        }),
      ),
    }),
  ),
  source: Schema.optional(Schema.String),
  statement_descriptor: Schema.optional(Schema.String),
  transfer_group: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/topups",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<PostTopupsInput>;

// Output Schema
export interface PostTopupsOutput {
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
}
export const PostTopupsOutput = /*@__PURE__*/ Schema.Struct({
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
        source: Schema.NullOr(Schema.Union([Schema.String, Schema.Unknown])),
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
}) as unknown as Schema.Codec<PostTopupsOutput>;

// The operation
/**
 * Create a top-up
 *
 * <p>Top up the balance of an account</p>
 */
export const PostTopups = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostTopupsInput,
  outputSchema: PostTopupsOutput,
}));
