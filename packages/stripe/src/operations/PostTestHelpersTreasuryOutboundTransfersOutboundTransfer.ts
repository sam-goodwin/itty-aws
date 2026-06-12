import * as Schema from "effect/Schema";
import {
  outbound_transfers_payment_method_detailsSchema,
  treasury_outbound_transfers_resource_status_transitionsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostTestHelpersTreasuryOutboundTransfersOutboundTransferInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outbound_transfer: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    tracking_details: Schema.Struct({
      ach: Schema.optional(
        Schema.Struct({
          trace_id: Schema.String,
        }),
      ),
      type: Schema.Literals(["ach", "us_domestic_wire"]),
      us_domestic_wire: Schema.optional(
        Schema.Struct({
          chips: Schema.optional(Schema.String),
          imad: Schema.optional(Schema.String),
          omad: Schema.optional(Schema.String),
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}",
      contentType: "form-urlencoded",
    }),
  );
export type PostTestHelpersTreasuryOutboundTransfersOutboundTransferInput =
  typeof PostTestHelpersTreasuryOutboundTransfersOutboundTransferInput.Type;

// Output Schema
export const PostTestHelpersTreasuryOutboundTransfersOutboundTransferOutput =
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
export type PostTestHelpersTreasuryOutboundTransfersOutboundTransferOutput =
  typeof PostTestHelpersTreasuryOutboundTransfersOutboundTransferOutput.Type;

// The operation
/**
 * Test mode: Update an OutboundTransfer
 *
 * <p>Updates a test mode created OutboundTransfer with tracking details. The OutboundTransfer must not be cancelable, and cannot be in the <code>canceled</code> or <code>failed</code> states.</p>
 */
export const PostTestHelpersTreasuryOutboundTransfersOutboundTransfer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostTestHelpersTreasuryOutboundTransfersOutboundTransferInput,
    outputSchema:
      PostTestHelpersTreasuryOutboundTransfersOutboundTransferOutput,
  }));
