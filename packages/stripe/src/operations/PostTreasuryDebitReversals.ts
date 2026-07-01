import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostTreasuryDebitReversalsInput {
  expand?: string[];
  metadata?: Record<string, string>;
  received_debit: string;
}
export const PostTreasuryDebitReversalsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    received_debit: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/treasury/debit_reversals",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostTreasuryDebitReversalsInput>;

// Output Schema
export interface PostTreasuryDebitReversalsOutput {
  amount: number;
  created: number;
  currency: string;
  financial_account: string | null;
  hosted_regulatory_receipt_url: string | null;
  id: string;
  linked_flows: { issuing_dispute: string | null } | null;
  livemode: boolean;
  metadata: Record<string, string>;
  network: "ach" | "card";
  object: "treasury.debit_reversal";
  received_debit: string;
  status: "failed" | "processing" | "succeeded";
  status_transitions: { completed_at: number | null };
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
export const PostTreasuryDebitReversalsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    created: Schema.Number,
    currency: Schema.String,
    financial_account: Schema.NullOr(Schema.String),
    hosted_regulatory_receipt_url: Schema.NullOr(Schema.String),
    id: Schema.String,
    linked_flows: Schema.NullOr(
      Schema.Struct({
        issuing_dispute: Schema.NullOr(Schema.String),
      }),
    ),
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    network: Schema.Literals(["ach", "card"]),
    object: Schema.Literals(["treasury.debit_reversal"]),
    received_debit: Schema.String,
    status: Schema.Literals(["failed", "processing", "succeeded"]),
    status_transitions: Schema.Struct({
      completed_at: Schema.NullOr(Schema.Number),
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
  }) as unknown as Schema.Codec<PostTreasuryDebitReversalsOutput>;

// The operation
/**
 * Create a DebitReversal
 *
 * <p>Reverses a ReceivedDebit and creates a DebitReversal object.</p>
 */
export const PostTreasuryDebitReversals = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostTreasuryDebitReversalsInput,
    outputSchema: PostTreasuryDebitReversalsOutput,
  }),
);
