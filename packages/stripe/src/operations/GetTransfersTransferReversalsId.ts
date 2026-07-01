import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetTransfersTransferReversalsIdInput {
  id: string;
  transfer: string;
  expand?: string;
}
export const GetTransfersTransferReversalsIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    transfer: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/transfers/{transfer}/reversals/{id}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetTransfersTransferReversalsIdInput>;

// Output Schema
export interface GetTransfersTransferReversalsIdOutput {
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
            transfer: string | unknown;
          }[];
          has_more: boolean;
          object: "list";
          url: string;
        };
        reversed: boolean;
        source_transaction: unknown;
        source_type?: string;
        transfer_group: string | null;
      };
}
export const GetTransfersTransferReversalsIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    destination_payment_refund: Schema.Unknown,
    id: Schema.String,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    object: Schema.Literals(["transfer_reversal"]),
    source_refund: Schema.Unknown,
    transfer: Schema.Unknown,
  }) as unknown as Schema.Codec<GetTransfersTransferReversalsIdOutput>;

// The operation
/**
 * Retrieve a reversal
 *
 * <p>By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTransfersTransferReversalsId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetTransfersTransferReversalsIdInput,
    outputSchema: GetTransfersTransferReversalsIdOutput,
  }));
