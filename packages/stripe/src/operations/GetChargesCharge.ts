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
export const GetChargesChargeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  charge: Schema.String.pipe(T.PathParam()),
  expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/charges/{charge}",
    contentType: "form-urlencoded",
  }),
);
export type GetChargesChargeInput = typeof GetChargesChargeInput.Type;

// Output Schema
export const GetChargesChargeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type GetChargesChargeOutput = typeof GetChargesChargeOutput.Type;

// The operation
/**
 * Retrieve a charge
 *
 * <p>Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetChargesCharge = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetChargesChargeInput,
  outputSchema: GetChargesChargeOutput,
}));
