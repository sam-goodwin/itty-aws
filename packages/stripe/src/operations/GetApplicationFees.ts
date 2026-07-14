import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetApplicationFeesInput {
  charge?: string;
  created?: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
}
export const GetApplicationFeesInput =
  /*@__PURE__*/ Schema.Struct({
    charge: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/application_fees",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetApplicationFeesInput>;

// Output Schema
export interface GetApplicationFeesOutput {
  data: {
    account: unknown;
    amount: number;
    amount_refunded: number;
    application:
      | string
      | { id: string; name: string | null; object: "application" };
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
    charge: unknown;
    created: number;
    currency: string;
    fee_source: {
      charge?: string;
      payout?: string;
      type: "charge" | "payout";
    } | null;
    id: string;
    livemode: boolean;
    object: "application_fee";
    originating_transaction: unknown;
    refunded: boolean;
    refunds: {
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
        fee: string | unknown;
        id: string;
        metadata: Record<string, string> | null;
        object: "fee_refund";
      }[];
      has_more: boolean;
      object: "list";
      url: string;
    };
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetApplicationFeesOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        account: Schema.Unknown,
        amount: Schema.Number,
        amount_refunded: Schema.Number,
        application: Schema.Union([
          Schema.String,
          Schema.Struct({
            id: Schema.String,
            name: Schema.NullOr(Schema.String),
            object: Schema.Literals(["application"]),
          }),
        ]),
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
        charge: Schema.Unknown,
        created: Schema.Number,
        currency: Schema.String,
        fee_source: Schema.NullOr(
          Schema.Struct({
            charge: Schema.optional(Schema.String),
            payout: Schema.optional(Schema.String),
            type: Schema.Literals(["charge", "payout"]),
          }),
        ),
        id: Schema.String,
        livemode: Schema.Boolean,
        object: Schema.Literals(["application_fee"]),
        originating_transaction: Schema.Unknown,
        refunded: Schema.Boolean,
        refunds: Schema.Struct({
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
              fee: Schema.Union([Schema.String, Schema.Unknown]),
              id: Schema.String,
              metadata: Schema.NullOr(
                Schema.Record(Schema.String, Schema.String),
              ),
              object: Schema.Literals(["fee_refund"]),
            }),
          ),
          has_more: Schema.Boolean,
          object: Schema.Literals(["list"]),
          url: Schema.String,
        }),
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetApplicationFeesOutput>;

// The operation
/**
 * List all application fees
 *
 * <p>Returns a list of application fees you’ve previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.</p>
 *
 * @param charge - Only return application fees for the charge specified by this charge ID.
 * @param created - Only return applications fees that were created during the given date interval.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetApplicationFees = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetApplicationFeesInput,
  outputSchema: GetApplicationFeesOutput,
}));
