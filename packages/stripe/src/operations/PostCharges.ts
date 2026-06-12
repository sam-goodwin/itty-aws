import * as Schema from "effect/Schema";
import {
  billing_detailsSchema,
  level3Schema,
  payment_flows_payment_intent_presentment_detailsSchema,
  radar_radar_optionsSchema,
  refundSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostChargesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.optional(Schema.Number),
  application_fee: Schema.optional(Schema.Number),
  application_fee_amount: Schema.optional(Schema.Number),
  capture: Schema.optional(Schema.Boolean),
  currency: Schema.optional(Schema.String),
  customer: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  destination: Schema.optional(
    Schema.Struct({
      account: Schema.String,
      amount: Schema.optional(Schema.Number),
    }),
  ),
  expand: Schema.optional(Schema.Array(Schema.String)),
  metadata: Schema.optional(Schema.Unknown),
  on_behalf_of: Schema.optional(Schema.String),
  radar_options: Schema.optional(
    Schema.Struct({
      session: Schema.optional(Schema.String),
    }),
  ),
  receipt_email: Schema.optional(Schema.String),
  shipping: Schema.optional(
    Schema.Struct({
      address: Schema.Struct({
        city: Schema.optional(Schema.String),
        country: Schema.optional(Schema.String),
        line1: Schema.optional(Schema.String),
        line2: Schema.optional(Schema.String),
        postal_code: Schema.optional(Schema.String),
        state: Schema.optional(Schema.String),
      }),
      carrier: Schema.optional(Schema.String),
      name: Schema.String,
      phone: Schema.optional(Schema.String),
      tracking_number: Schema.optional(Schema.String),
    }),
  ),
  source: Schema.optional(Schema.String),
  statement_descriptor: Schema.optional(Schema.String),
  statement_descriptor_suffix: Schema.optional(Schema.String),
  transfer_data: Schema.optional(
    Schema.Struct({
      amount: Schema.optional(Schema.Number),
      destination: Schema.String,
    }),
  ),
  transfer_group: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/charges",
    contentType: "form-urlencoded",
  }),
);
export type PostChargesInput = typeof PostChargesInput.Type;

// Output Schema
export const PostChargesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  amount_captured: Schema.Number,
  amount_refunded: Schema.Number,
  application: Schema.Unknown,
  application_fee: Schema.Unknown,
  application_fee_amount: Schema.NullOr(Schema.Number),
  authorization_code: Schema.optional(Schema.String),
  balance_transaction: Schema.Unknown,
  billing_details: Schema.suspend(() => billing_detailsSchema),
  calculated_statement_descriptor: Schema.NullOr(Schema.String),
  captured: Schema.Boolean,
  created: Schema.Number,
  currency: Schema.String,
  customer: Schema.Unknown,
  description: Schema.NullOr(Schema.String),
  disputed: Schema.Boolean,
  failure_balance_transaction: Schema.Unknown,
  failure_code: Schema.NullOr(Schema.String),
  failure_message: Schema.NullOr(Schema.String),
  fraud_details: Schema.Unknown,
  id: Schema.String,
  level3: Schema.optional(Schema.suspend(() => level3Schema)),
  livemode: Schema.Boolean,
  metadata: Schema.Record(Schema.String, Schema.String),
  object: Schema.Literals(["charge"]),
  on_behalf_of: Schema.Unknown,
  outcome: Schema.Unknown,
  paid: Schema.Boolean,
  payment_intent: Schema.Unknown,
  payment_method: Schema.NullOr(Schema.String),
  payment_method_details: Schema.Unknown,
  presentment_details: Schema.optional(
    Schema.suspend(
      () => payment_flows_payment_intent_presentment_detailsSchema,
    ),
  ),
  radar_options: Schema.optional(
    Schema.suspend(() => radar_radar_optionsSchema),
  ),
  receipt_email: Schema.NullOr(Schema.String),
  receipt_number: Schema.NullOr(Schema.String),
  receipt_url: Schema.NullOr(Schema.String),
  refunded: Schema.Boolean,
  refunds: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        data: Schema.Array(Schema.suspend(() => refundSchema)),
        has_more: Schema.Boolean,
        object: Schema.Literals(["list"]),
        url: Schema.String,
      }),
    ),
  ),
  review: Schema.Unknown,
  shipping: Schema.Unknown,
  source: Schema.Unknown,
  source_transfer: Schema.Unknown,
  statement_descriptor: Schema.NullOr(Schema.String),
  statement_descriptor_suffix: Schema.NullOr(Schema.String),
  status: Schema.Literals(["failed", "pending", "succeeded"]),
  transfer: Schema.optional(Schema.Unknown),
  transfer_data: Schema.Unknown,
  transfer_group: Schema.NullOr(Schema.String),
});
export type PostChargesOutput = typeof PostChargesOutput.Type;

// The operation
/**
 * <p>This method is no longer recommended—use the <a href="/docs/api/payment_intents">Payment Intents API</a>
 * to initiate a new payment instead. Confirmation of the PaymentIntent creates the <code>Charge</code>
 * object used to request payment.</p>
 */
export const PostCharges = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostChargesInput,
  outputSchema: PostChargesOutput,
}));
