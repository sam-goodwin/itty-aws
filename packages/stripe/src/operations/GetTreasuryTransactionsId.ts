import * as Schema from "effect/Schema";
import {
  treasury_transaction_entrySchema,
  treasury_transactions_resource_abstract_transaction_resource_status_transitionsSchema,
  treasury_transactions_resource_balance_impactSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetTreasuryTransactionsIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/treasury/transactions/{id}",
      contentType: "form-urlencoded",
    }),
  );
export type GetTreasuryTransactionsIdInput =
  typeof GetTreasuryTransactionsIdInput.Type;

// Output Schema
export const GetTreasuryTransactionsIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    balance_impact: Schema.suspend(
      () => treasury_transactions_resource_balance_impactSchema,
    ),
    created: Schema.Number,
    currency: Schema.String,
    description: Schema.String,
    entries: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          data: Schema.Array(
            Schema.suspend(() => treasury_transaction_entrySchema),
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
    status_transitions: Schema.suspend(
      () =>
        treasury_transactions_resource_abstract_transaction_resource_status_transitionsSchema,
    ),
  });
export type GetTreasuryTransactionsIdOutput =
  typeof GetTreasuryTransactionsIdOutput.Type;

// The operation
/**
 * Retrieve a Transaction
 *
 * <p>Retrieves the details of an existing Transaction.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTreasuryTransactionsId = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetTreasuryTransactionsIdInput,
    outputSchema: GetTreasuryTransactionsIdOutput,
  }),
);
