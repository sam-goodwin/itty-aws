import * as Schema from "effect/Schema";
import {
  payment_flows_payment_intent_presentment_detailsSchema,
  refund_destination_detailsSchema,
  refund_next_actionSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetRefundsRefundInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  refund: Schema.String.pipe(T.PathParam()),
  expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/refunds/{refund}",
    contentType: "form-urlencoded",
  }),
);
export type GetRefundsRefundInput = typeof GetRefundsRefundInput.Type;

// Output Schema
export const GetRefundsRefundOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    amount: Schema.Number,
    balance_transaction: Schema.Unknown,
    charge: Schema.Unknown,
    created: Schema.Number,
    currency: Schema.String,
    description: Schema.optional(Schema.String),
    destination_details: Schema.optional(
      Schema.suspend(() => refund_destination_detailsSchema),
    ),
    failure_balance_transaction: Schema.optional(Schema.Unknown),
    failure_reason: Schema.optional(Schema.String),
    id: Schema.String,
    instructions_email: Schema.optional(Schema.String),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    next_action: Schema.optional(
      Schema.suspend(() => refund_next_actionSchema),
    ),
    object: Schema.Literals(["refund"]),
    payment_intent: Schema.Unknown,
    pending_reason: Schema.optional(
      Schema.Literals(["charge_pending", "insufficient_funds", "processing"]),
    ),
    presentment_details: Schema.optional(
      Schema.suspend(
        () => payment_flows_payment_intent_presentment_detailsSchema,
      ),
    ),
    reason: Schema.NullOr(
      Schema.Literals([
        "duplicate",
        "expired_uncaptured_charge",
        "fraudulent",
        "requested_by_customer",
      ]),
    ),
    receipt_number: Schema.NullOr(Schema.String),
    source_transfer_reversal: Schema.Unknown,
    status: Schema.NullOr(Schema.String),
    transfer_reversal: Schema.Unknown,
  },
);
export type GetRefundsRefundOutput = typeof GetRefundsRefundOutput.Type;

// The operation
/**
 * Retrieve a refund
 *
 * <p>Retrieves the details of an existing refund.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetRefundsRefund = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetRefundsRefundInput,
  outputSchema: GetRefundsRefundOutput,
}));
