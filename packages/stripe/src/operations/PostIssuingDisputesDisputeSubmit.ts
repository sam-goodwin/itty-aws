import * as Schema from "effect/Schema";
import {
  balance_transactionSchema,
  issuing_dispute_evidenceSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostIssuingDisputesDisputeSubmitInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dispute: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/issuing/disputes/{dispute}/submit",
      contentType: "form-urlencoded",
    }),
  );
export type PostIssuingDisputesDisputeSubmitInput =
  typeof PostIssuingDisputesDisputeSubmitInput.Type;

// Output Schema
export const PostIssuingDisputesDisputeSubmitOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    balance_transactions: Schema.optional(
      Schema.NullOr(
        Schema.Array(Schema.suspend(() => balance_transactionSchema)),
      ),
    ),
    created: Schema.Number,
    currency: Schema.String,
    evidence: Schema.suspend(() => issuing_dispute_evidenceSchema),
    id: Schema.String,
    livemode: Schema.Boolean,
    loss_reason: Schema.optional(
      Schema.Literals([
        "cardholder_authentication_issuer_liability",
        "eci5_token_transaction_with_tavv",
        "excess_disputes_in_timeframe",
        "has_not_met_the_minimum_dispute_amount_requirements",
        "invalid_duplicate_dispute",
        "invalid_incorrect_amount_dispute",
        "invalid_no_authorization",
        "invalid_use_of_disputes",
        "merchandise_delivered_or_shipped",
        "merchandise_or_service_as_described",
        "not_cancelled",
        "other",
        "refund_issued",
        "submitted_beyond_allowable_time_limit",
        "transaction_3ds_required",
        "transaction_approved_after_prior_fraud_dispute",
        "transaction_authorized",
        "transaction_electronically_read",
        "transaction_qualifies_for_visa_easy_payment_service",
        "transaction_unattended",
      ]),
    ),
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["issuing.dispute"]),
    status: Schema.Literals([
      "expired",
      "lost",
      "submitted",
      "unsubmitted",
      "won",
    ]),
    transaction: Schema.Unknown,
    treasury: Schema.optional(Schema.Unknown),
  });
export type PostIssuingDisputesDisputeSubmitOutput =
  typeof PostIssuingDisputesDisputeSubmitOutput.Type;

// The operation
/**
 * Submit a dispute
 *
 * <p>Submits an Issuing <code>Dispute</code> to the card network. Stripe validates that all evidence fields required for the dispute’s reason are present. For more details, see <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a>.</p>
 */
export const PostIssuingDisputesDisputeSubmit =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostIssuingDisputesDisputeSubmitInput,
    outputSchema: PostIssuingDisputesDisputeSubmitOutput,
  }));
