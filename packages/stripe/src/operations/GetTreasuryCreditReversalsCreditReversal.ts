import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetTreasuryCreditReversalsCreditReversalInput {
  credit_reversal: string;
  expand?: string;
}
export const GetTreasuryCreditReversalsCreditReversalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    credit_reversal: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/treasury/credit_reversals/{credit_reversal}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetTreasuryCreditReversalsCreditReversalInput>;

// Output Schema
export interface GetTreasuryCreditReversalsCreditReversalOutput {
  amount: number;
  created: number;
  currency: string;
  financial_account: string;
  hosted_regulatory_receipt_url: string | null;
  id: string;
  livemode: boolean;
  metadata: Record<string, string>;
  network: "ach" | "stripe";
  object: "treasury.credit_reversal";
  received_credit: string;
  status: "canceled" | "posted" | "processing";
  status_transitions: { posted_at: number | null };
  transaction:
    | string
    | {
        amount: number;
        balance_impact: {
          cash: number;
          inbound_pending: number;
          outbound_pending: number;
        };
        created: number;
        currency: string;
        description: string;
        entries?: {
          data: {
            balance_impact: {
              cash: number;
              inbound_pending: number;
              outbound_pending: number;
            };
            created: number;
            currency: string;
            effective_at: number;
            financial_account: string;
            flow: string | null;
            flow_details?: unknown;
            flow_type:
              | "credit_reversal"
              | "debit_reversal"
              | "inbound_transfer"
              | "issuing_authorization"
              | "other"
              | "outbound_payment"
              | "outbound_transfer"
              | "received_credit"
              | "received_debit";
            id: string;
            livemode: boolean;
            object: "treasury.transaction_entry";
            transaction: string | unknown;
            type:
              | "credit_reversal"
              | "credit_reversal_posting"
              | "debit_reversal"
              | "inbound_transfer"
              | "inbound_transfer_return"
              | "issuing_authorization_hold"
              | "issuing_authorization_release"
              | "other"
              | "outbound_payment"
              | "outbound_payment_cancellation"
              | "outbound_payment_failure"
              | "outbound_payment_posting"
              | "outbound_payment_return"
              | "outbound_transfer"
              | "outbound_transfer_cancellation"
              | "outbound_transfer_failure"
              | "outbound_transfer_posting"
              | "outbound_transfer_return"
              | "received_credit"
              | "received_debit";
          }[];
          has_more: boolean;
          object: "list";
          url: string;
        } | null;
        financial_account: string;
        flow: string | null;
        flow_details?: unknown;
        flow_type:
          | "credit_reversal"
          | "debit_reversal"
          | "inbound_transfer"
          | "issuing_authorization"
          | "other"
          | "outbound_payment"
          | "outbound_transfer"
          | "received_credit"
          | "received_debit";
        id: string;
        livemode: boolean;
        object: "treasury.transaction";
        status: "open" | "posted" | "void";
        status_transitions: {
          posted_at: number | null;
          void_at: number | null;
        };
      }
    | null;
}
export const GetTreasuryCreditReversalsCreditReversalOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    created: Schema.Number,
    currency: Schema.String,
    financial_account: Schema.String,
    hosted_regulatory_receipt_url: Schema.NullOr(Schema.String),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    network: Schema.Literals(["ach", "stripe"]),
    object: Schema.Literals(["treasury.credit_reversal"]),
    received_credit: Schema.String,
    status: Schema.Literals(["canceled", "posted", "processing"]),
    status_transitions: Schema.Struct({
      posted_at: Schema.NullOr(Schema.Number),
    }),
    transaction: Schema.NullOr(
      Schema.Union([
        Schema.String,
        Schema.Struct({
          amount: Schema.Number,
          balance_impact: Schema.Struct({
            cash: Schema.Number,
            inbound_pending: Schema.Number,
            outbound_pending: Schema.Number,
          }),
          created: Schema.Number,
          currency: Schema.String,
          description: Schema.String,
          entries: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                data: Schema.Array(
                  Schema.Struct({
                    balance_impact: Schema.Struct({
                      cash: Schema.Number,
                      inbound_pending: Schema.Number,
                      outbound_pending: Schema.Number,
                    }),
                    created: Schema.Number,
                    currency: Schema.String,
                    effective_at: Schema.Number,
                    financial_account: Schema.String,
                    flow: Schema.NullOr(Schema.String),
                    flow_details: Schema.optional(Schema.Unknown),
                    flow_type: Schema.Literals([
                      "credit_reversal",
                      "debit_reversal",
                      "inbound_transfer",
                      "issuing_authorization",
                      "other",
                      "outbound_payment",
                      "outbound_transfer",
                      "received_credit",
                      "received_debit",
                    ]),
                    id: Schema.String,
                    livemode: Schema.Boolean,
                    object: Schema.Literals(["treasury.transaction_entry"]),
                    transaction: Schema.Union([Schema.String, Schema.Unknown]),
                    type: Schema.Literals([
                      "credit_reversal",
                      "credit_reversal_posting",
                      "debit_reversal",
                      "inbound_transfer",
                      "inbound_transfer_return",
                      "issuing_authorization_hold",
                      "issuing_authorization_release",
                      "other",
                      "outbound_payment",
                      "outbound_payment_cancellation",
                      "outbound_payment_failure",
                      "outbound_payment_posting",
                      "outbound_payment_return",
                      "outbound_transfer",
                      "outbound_transfer_cancellation",
                      "outbound_transfer_failure",
                      "outbound_transfer_posting",
                      "outbound_transfer_return",
                      "received_credit",
                      "received_debit",
                    ]),
                  }),
                ),
                has_more: Schema.Boolean,
                object: Schema.Literals(["list"]),
                url: Schema.String,
              }),
            ),
          ),
          financial_account: Schema.String,
          flow: Schema.NullOr(Schema.String),
          flow_details: Schema.optional(Schema.Unknown),
          flow_type: Schema.Literals([
            "credit_reversal",
            "debit_reversal",
            "inbound_transfer",
            "issuing_authorization",
            "other",
            "outbound_payment",
            "outbound_transfer",
            "received_credit",
            "received_debit",
          ]),
          id: Schema.String,
          livemode: Schema.Boolean,
          object: Schema.Literals(["treasury.transaction"]),
          status: Schema.Literals(["open", "posted", "void"]),
          status_transitions: Schema.Struct({
            posted_at: Schema.NullOr(Schema.Number),
            void_at: Schema.NullOr(Schema.Number),
          }),
        }),
      ]),
    ),
  }) as unknown as Schema.Codec<GetTreasuryCreditReversalsCreditReversalOutput>;

// The operation
/**
 * Retrieve a CreditReversal
 *
 * <p>Retrieves the details of an existing CreditReversal by passing the unique CreditReversal ID from either the CreditReversal creation request or CreditReversal list</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTreasuryCreditReversalsCreditReversal =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetTreasuryCreditReversalsCreditReversalInput,
    outputSchema: GetTreasuryCreditReversalsCreditReversalOutput,
  }));
