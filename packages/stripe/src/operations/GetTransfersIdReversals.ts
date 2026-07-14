import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetTransfersIdReversalsInput {
  id: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
}
export const GetTransfersIdReversalsInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/transfers/{id}/reversals",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetTransfersIdReversalsInput>;

// Output Schema
export interface GetTransfersIdReversalsOutput {
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
    destination_payment_refund: unknown;
    id: string;
    metadata: Record<string, string> | null;
    object: "transfer_reversal";
    source_refund: unknown;
    transfer:
      | string
      | {
          amount: number;
          amount_reversed: number;
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
          destination: unknown;
          destination_payment?: unknown;
          id: string;
          livemode: boolean;
          metadata: Record<string, string>;
          object: "transfer";
          reversals: {
            data: unknown[];
            has_more: boolean;
            object: "list";
            url: string;
          };
          reversed: boolean;
          source_transaction: unknown;
          source_type?: string;
          transfer_group: string | null;
        };
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetTransfersIdReversalsOutput =
  /*@__PURE__*/ Schema.Struct({
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
        destination_payment_refund: Schema.Unknown,
        id: Schema.String,
        metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
        object: Schema.Literals(["transfer_reversal"]),
        source_refund: Schema.Unknown,
        transfer: Schema.Union([
          Schema.String,
          Schema.Struct({
            amount: Schema.Number,
            amount_reversed: Schema.Number,
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
            destination: Schema.Unknown,
            destination_payment: Schema.optional(Schema.Unknown),
            id: Schema.String,
            livemode: Schema.Boolean,
            metadata: Schema.Record(Schema.String, Schema.String),
            object: Schema.Literals(["transfer"]),
            reversals: Schema.Struct({
              data: Schema.Array(Schema.Unknown),
              has_more: Schema.Boolean,
              object: Schema.Literals(["list"]),
              url: Schema.String,
            }),
            reversed: Schema.Boolean,
            source_transaction: Schema.Unknown,
            source_type: Schema.optional(Schema.String),
            transfer_group: Schema.NullOr(Schema.String),
          }),
        ]),
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetTransfersIdReversalsOutput>;

// The operation
/**
 * List all reversals
 *
 * <p>You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional reversals.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetTransfersIdReversals = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetTransfersIdReversalsInput,
  outputSchema: GetTransfersIdReversalsOutput,
}));
