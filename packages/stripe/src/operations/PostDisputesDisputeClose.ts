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
export const PostDisputesDisputeCloseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dispute: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/disputes/{dispute}/close",
      contentType: "form-urlencoded",
    }),
  );
export type PostDisputesDisputeCloseInput =
  typeof PostDisputesDisputeCloseInput.Type;

// Output Schema
export const PostDisputesDisputeCloseOutput =
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
export type PostDisputesDisputeCloseOutput =
  typeof PostDisputesDisputeCloseOutput.Type;

// The operation
/**
 * Close a dispute
 *
 * <p>Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.</p>
 * <p>The status of the dispute will change from <code>needs_response</code> to <code>lost</code>. <em>Closing a dispute is irreversible</em>.</p>
 */
export const PostDisputesDisputeClose = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostDisputesDisputeCloseInput,
    outputSchema: PostDisputesDisputeCloseOutput,
  }),
);
