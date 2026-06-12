import * as Schema from "effect/Schema";
import {
  payment_flows_payment_intent_presentment_detailsSchema,
  refund_destination_detailsSchema,
  refund_next_actionSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostRefundsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.optional(Schema.Number),
  charge: Schema.optional(Schema.String),
  currency: Schema.optional(Schema.String),
  customer: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.Array(Schema.String)),
  instructions_email: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Unknown),
  origin: Schema.optional(Schema.Literals(["customer_balance"])),
  payment_intent: Schema.optional(Schema.String),
  reason: Schema.optional(
    Schema.Literals(["duplicate", "fraudulent", "requested_by_customer"]),
  ),
  refund_application_fee: Schema.optional(Schema.Boolean),
  reverse_transfer: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/refunds",
    contentType: "form-urlencoded",
  }),
);
export type PostRefundsInput = typeof PostRefundsInput.Type;

// Output Schema
export const PostRefundsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  next_action: Schema.optional(Schema.suspend(() => refund_next_actionSchema)),
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
});
export type PostRefundsOutput = typeof PostRefundsOutput.Type;

// The operation
/**
 * Create customer balance refund
 *
 * <p>When you create a new refund, you must specify a Charge or a PaymentIntent object on which to create it.</p>
 * <p>Creating a new refund will refund a charge that has previously been created but not yet refunded.
 * Funds will be refunded to the credit or debit card that was originally charged.</p>
 * <p>You can optionally refund only part of a charge.
 * You can do so multiple times, until the entire charge has been refunded.</p>
 * <p>Once entirely refunded, a charge can’t be refunded again.
 * This method will raise an error when called on an already-refunded charge,
 * or when trying to refund more money than is left on a charge.</p>
 */
export const PostRefunds = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostRefundsInput,
  outputSchema: PostRefundsOutput,
}));
