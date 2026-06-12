import * as Schema from "effect/Schema";
import {
  balance_transactionSchema,
  dispute_evidenceSchema,
  dispute_evidence_detailsSchema,
  dispute_payment_method_detailsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostDisputesDisputeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dispute: Schema.String.pipe(T.PathParam()),
    evidence: Schema.optional(
      Schema.Struct({
        access_activity_log: Schema.optional(Schema.String),
        billing_address: Schema.optional(Schema.String),
        cancellation_policy: Schema.optional(Schema.String),
        cancellation_policy_disclosure: Schema.optional(Schema.String),
        cancellation_rebuttal: Schema.optional(Schema.String),
        customer_communication: Schema.optional(Schema.String),
        customer_email_address: Schema.optional(Schema.String),
        customer_name: Schema.optional(Schema.String),
        customer_purchase_ip: Schema.optional(Schema.String),
        customer_signature: Schema.optional(Schema.String),
        duplicate_charge_documentation: Schema.optional(Schema.String),
        duplicate_charge_explanation: Schema.optional(Schema.String),
        duplicate_charge_id: Schema.optional(Schema.String),
        enhanced_evidence: Schema.optional(Schema.Unknown),
        product_description: Schema.optional(Schema.String),
        receipt: Schema.optional(Schema.String),
        refund_policy: Schema.optional(Schema.String),
        refund_policy_disclosure: Schema.optional(Schema.String),
        refund_refusal_explanation: Schema.optional(Schema.String),
        service_date: Schema.optional(Schema.String),
        service_documentation: Schema.optional(Schema.String),
        shipping_address: Schema.optional(Schema.String),
        shipping_carrier: Schema.optional(Schema.String),
        shipping_date: Schema.optional(Schema.String),
        shipping_documentation: Schema.optional(Schema.String),
        shipping_tracking_number: Schema.optional(Schema.String),
        uncategorized_file: Schema.optional(Schema.String),
        uncategorized_text: Schema.optional(Schema.String),
      }),
    ),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Unknown),
    submit: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/disputes/{dispute}",
      contentType: "form-urlencoded",
    }),
  );
export type PostDisputesDisputeInput = typeof PostDisputesDisputeInput.Type;

// Output Schema
export const PostDisputesDisputeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    balance_transactions: Schema.Array(
      Schema.suspend(() => balance_transactionSchema),
    ),
    charge: Schema.Unknown,
    created: Schema.Number,
    currency: Schema.String,
    enhanced_eligibility_types: Schema.Array(
      Schema.Literals(["visa_compelling_evidence_3", "visa_compliance"]),
    ),
    evidence: Schema.suspend(() => dispute_evidenceSchema),
    evidence_details: Schema.suspend(() => dispute_evidence_detailsSchema),
    id: Schema.String,
    is_charge_refundable: Schema.Boolean,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    network_reason_code: Schema.optional(Schema.NullOr(Schema.String)),
    object: Schema.Literals(["dispute"]),
    payment_intent: Schema.Unknown,
    payment_method_details: Schema.optional(
      Schema.suspend(() => dispute_payment_method_detailsSchema),
    ),
    reason: Schema.String,
    status: Schema.Literals([
      "lost",
      "needs_response",
      "prevented",
      "under_review",
      "warning_closed",
      "warning_needs_response",
      "warning_under_review",
      "won",
    ]),
  });
export type PostDisputesDisputeOutput = typeof PostDisputesDisputeOutput.Type;

// The operation
/**
 * Update a dispute
 *
 * <p>When you get a dispute, contacting your customer is always the best first step. If that doesn’t work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your <a href="https://dashboard.stripe.com/disputes">dashboard</a>, but if you prefer, you can use the API to submit evidence programmatically.</p>
 * <p>Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our <a href="/docs/disputes/categories">guide to dispute types</a>.</p>
 */
export const PostDisputesDispute = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostDisputesDisputeInput,
  outputSchema: PostDisputesDisputeOutput,
}));
