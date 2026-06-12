import * as Schema from "effect/Schema";
import {
  balance_transactionSchema,
  issuing_dispute_evidenceSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostIssuingDisputesDisputeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dispute: Schema.String.pipe(T.PathParam()),
    amount: Schema.optional(Schema.Number),
    evidence: Schema.optional(
      Schema.Struct({
        canceled: Schema.optional(Schema.Unknown),
        duplicate: Schema.optional(Schema.Unknown),
        fraudulent: Schema.optional(Schema.Unknown),
        merchandise_not_as_described: Schema.optional(Schema.Unknown),
        no_valid_authorization: Schema.optional(Schema.Unknown),
        not_received: Schema.optional(Schema.Unknown),
        other: Schema.optional(Schema.Unknown),
        reason: Schema.optional(
          Schema.Literals([
            "canceled",
            "duplicate",
            "fraudulent",
            "merchandise_not_as_described",
            "no_valid_authorization",
            "not_received",
            "other",
            "service_not_as_described",
          ]),
        ),
        service_not_as_described: Schema.optional(Schema.Unknown),
      }),
    ),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/issuing/disputes/{dispute}",
      contentType: "form-urlencoded",
    }),
  );
export type PostIssuingDisputesDisputeInput =
  typeof PostIssuingDisputesDisputeInput.Type;

// Output Schema
export const PostIssuingDisputesDisputeOutput =
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
export type PostIssuingDisputesDisputeOutput =
  typeof PostIssuingDisputesDisputeOutput.Type;

// The operation
/**
 * Update a dispute
 *
 * <p>Updates the specified Issuing <code>Dispute</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Properties on the <code>evidence</code> object can be unset by passing in an empty string.</p>
 */
export const PostIssuingDisputesDispute = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostIssuingDisputesDisputeInput,
    outputSchema: PostIssuingDisputesDisputeOutput,
  }),
);
