import * as Schema from "effect/Schema";
import {
  outbound_transfers_payment_method_detailsSchema,
  treasury_outbound_transfers_resource_status_transitionsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostTreasuryOutboundTransfersOutboundTransferCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outbound_transfer: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/treasury/outbound_transfers/{outbound_transfer}/cancel",
      contentType: "form-urlencoded",
    }),
  );
export type PostTreasuryOutboundTransfersOutboundTransferCancelInput =
  typeof PostTreasuryOutboundTransfersOutboundTransferCancelInput.Type;

// Output Schema
export const PostTreasuryOutboundTransfersOutboundTransferCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    cancelable: Schema.Boolean,
    created: Schema.Number,
    currency: Schema.String,
    description: Schema.NullOr(Schema.String),
    destination_payment_method: Schema.NullOr(Schema.String),
    destination_payment_method_details: Schema.suspend(
      () => outbound_transfers_payment_method_detailsSchema,
    ),
    expected_arrival_date: Schema.Number,
    financial_account: Schema.String,
    hosted_regulatory_receipt_url: Schema.NullOr(Schema.String),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["treasury.outbound_transfer"]),
    returned_details: Schema.Unknown,
    statement_descriptor: Schema.String,
    status: Schema.Literals([
      "canceled",
      "failed",
      "posted",
      "processing",
      "returned",
    ]),
    status_transitions: Schema.suspend(
      () => treasury_outbound_transfers_resource_status_transitionsSchema,
    ),
    tracking_details: Schema.Unknown,
    transaction: Schema.Unknown,
  });
export type PostTreasuryOutboundTransfersOutboundTransferCancelOutput =
  typeof PostTreasuryOutboundTransfersOutboundTransferCancelOutput.Type;

// The operation
/**
 * Cancel an OutboundTransfer
 *
 * <p>An OutboundTransfer can be canceled if the funds have not yet been paid out.</p>
 */
export const PostTreasuryOutboundTransfersOutboundTransferCancel =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostTreasuryOutboundTransfersOutboundTransferCancelInput,
    outputSchema: PostTreasuryOutboundTransfersOutboundTransferCancelOutput,
  }));
