import * as Schema from "effect/Schema";
import {
  outbound_transfers_payment_method_detailsSchema,
  treasury_outbound_transfers_resource_status_transitionsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outbound_transfer: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    returned_details: Schema.optional(
      Schema.Struct({
        code: Schema.optional(
          Schema.Literals([
            "account_closed",
            "account_frozen",
            "bank_account_restricted",
            "bank_ownership_changed",
            "declined",
            "incorrect_account_holder_name",
            "invalid_account_number",
            "invalid_currency",
            "no_account",
            "other",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return",
      contentType: "form-urlencoded",
    }),
  );
export type PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnInput =
  typeof PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnInput.Type;

// Output Schema
export const PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnOutput =
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
export type PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnOutput =
  typeof PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnOutput.Type;

// The operation
/**
 * Test mode: Return an OutboundTransfer
 *
 * <p>Transitions a test mode created OutboundTransfer to the <code>returned</code> status. The OutboundTransfer must already be in the <code>processing</code> state.</p>
 */
export const PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturn =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnInput,
    outputSchema:
      PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnOutput,
  }));
