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
export const GetDisputesDisputeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dispute: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/disputes/{dispute}",
      contentType: "form-urlencoded",
    }),
  );
export type GetDisputesDisputeInput = typeof GetDisputesDisputeInput.Type;

// Output Schema
export const GetDisputesDisputeOutput =
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
export type GetDisputesDisputeOutput = typeof GetDisputesDisputeOutput.Type;

// The operation
/**
 * Retrieve a dispute
 *
 * <p>Retrieves the dispute with the given ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetDisputesDispute = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDisputesDisputeInput,
  outputSchema: GetDisputesDisputeOutput,
}));
