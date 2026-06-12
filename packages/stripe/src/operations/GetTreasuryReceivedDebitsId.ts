import * as Schema from "effect/Schema";
import {
  treasury_received_debits_resource_linked_flowsSchema,
  treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_detailsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetTreasuryReceivedDebitsIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/treasury/received_debits/{id}",
      contentType: "form-urlencoded",
    }),
  );
export type GetTreasuryReceivedDebitsIdInput =
  typeof GetTreasuryReceivedDebitsIdInput.Type;

// Output Schema
export const GetTreasuryReceivedDebitsIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    created: Schema.Number,
    currency: Schema.String,
    description: Schema.String,
    failure_code: Schema.NullOr(
      Schema.Literals([
        "account_closed",
        "account_frozen",
        "insufficient_funds",
        "international_transaction",
        "other",
      ]),
    ),
    financial_account: Schema.NullOr(Schema.String),
    hosted_regulatory_receipt_url: Schema.NullOr(Schema.String),
    id: Schema.String,
    initiating_payment_method_details: Schema.optional(
      Schema.suspend(
        () =>
          treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_detailsSchema,
      ),
    ),
    linked_flows: Schema.suspend(
      () => treasury_received_debits_resource_linked_flowsSchema,
    ),
    livemode: Schema.Boolean,
    network: Schema.Literals(["ach", "card", "stripe"]),
    object: Schema.Literals(["treasury.received_debit"]),
    reversal_details: Schema.Unknown,
    status: Schema.Literals(["failed", "succeeded"]),
    transaction: Schema.Unknown,
  });
export type GetTreasuryReceivedDebitsIdOutput =
  typeof GetTreasuryReceivedDebitsIdOutput.Type;

// The operation
/**
 * Retrieve a ReceivedDebit
 *
 * <p>Retrieves the details of an existing ReceivedDebit by passing the unique ReceivedDebit ID from the ReceivedDebit list</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTreasuryReceivedDebitsId = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetTreasuryReceivedDebitsIdInput,
    outputSchema: GetTreasuryReceivedDebitsIdOutput,
  }),
);
