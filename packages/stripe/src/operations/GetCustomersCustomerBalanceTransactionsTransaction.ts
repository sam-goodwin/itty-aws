import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetCustomersCustomerBalanceTransactionsTransactionInput {
  customer: string;
  transaction: string;
  expand?: string;
}
export const GetCustomersCustomerBalanceTransactionsTransactionInput =
  /*@__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.PathParam()),
    transaction: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customers/{customer}/balance_transactions/{transaction}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetCustomersCustomerBalanceTransactionsTransactionInput>;

// Output Schema
export interface GetCustomersCustomerBalanceTransactionsTransactionOutput {
  amount: number;
  checkout_session: unknown;
  created: number;
  credit_note: unknown;
  currency: string;
  customer: unknown;
  customer_account: string | null;
  description: string | null;
  ending_balance: number;
  id: string;
  invoice: unknown;
  livemode: boolean;
  metadata: Record<string, string> | null;
  object: "customer_balance_transaction";
  type:
    | "adjustment"
    | "applied_to_invoice"
    | "checkout_session_subscription_payment"
    | "checkout_session_subscription_payment_canceled"
    | "credit_note"
    | "initial"
    | "invoice_overpaid"
    | "invoice_too_large"
    | "invoice_too_small"
    | "migration"
    | "unapplied_from_invoice"
    | "unspent_receiver_credit";
}
export const GetCustomersCustomerBalanceTransactionsTransactionOutput =
  /*@__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    checkout_session: Schema.Unknown,
    created: Schema.Number,
    credit_note: Schema.Unknown,
    currency: Schema.String,
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    description: Schema.NullOr(Schema.String),
    ending_balance: Schema.Number,
    id: Schema.String,
    invoice: Schema.Unknown,
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    object: Schema.Literals(["customer_balance_transaction"]),
    type: Schema.Literals([
      "adjustment",
      "applied_to_invoice",
      "checkout_session_subscription_payment",
      "checkout_session_subscription_payment_canceled",
      "credit_note",
      "initial",
      "invoice_overpaid",
      "invoice_too_large",
      "invoice_too_small",
      "migration",
      "unapplied_from_invoice",
      "unspent_receiver_credit",
    ]),
  }) as unknown as Schema.Codec<GetCustomersCustomerBalanceTransactionsTransactionOutput>;

// The operation
/**
 * Retrieve a customer balance transaction
 *
 * <p>Retrieves a specific customer balance transaction that updated the customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetCustomersCustomerBalanceTransactionsTransaction =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetCustomersCustomerBalanceTransactionsTransactionInput,
    outputSchema: GetCustomersCustomerBalanceTransactionsTransactionOutput,
  }));
