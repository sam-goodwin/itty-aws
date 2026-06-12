import * as Schema from "effect/Schema";
import {
  payment_flows_payment_intent_presentment_detailsSchema,
  refund_destination_detailsSchema,
  refund_next_actionSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostTestHelpersRefundsRefundExpireInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    refund: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/test_helpers/refunds/{refund}/expire",
      contentType: "form-urlencoded",
    }),
  );
export type PostTestHelpersRefundsRefundExpireInput =
  typeof PostTestHelpersRefundsRefundExpireInput.Type;

// Output Schema
export const PostTestHelpersRefundsRefundExpireOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PostTestHelpersRefundsRefundExpireOutput =
  typeof PostTestHelpersRefundsRefundExpireOutput.Type;

// The operation
/**
 * Expire a pending refund.
 *
 * <p>Expire a refund with a status of <code>requires_action</code>.</p>
 */
export const PostTestHelpersRefundsRefundExpire =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostTestHelpersRefundsRefundExpireInput,
    outputSchema: PostTestHelpersRefundsRefundExpireOutput,
  }));
