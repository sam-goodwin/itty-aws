import * as Schema from "effect/Schema";
import {
  outbound_transfers_payment_method_detailsSchema,
  treasury_outbound_transfers_resource_status_transitionsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostTreasuryOutboundTransfersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    currency: Schema.String,
    description: Schema.optional(Schema.String),
    destination_payment_method: Schema.optional(Schema.String),
    destination_payment_method_data: Schema.optional(
      Schema.Struct({
        financial_account: Schema.optional(Schema.String),
        type: Schema.Literals(["financial_account"]),
      }),
    ),
    destination_payment_method_options: Schema.optional(
      Schema.Struct({
        us_bank_account: Schema.optional(Schema.Unknown),
      }),
    ),
    expand: Schema.optional(Schema.Array(Schema.String)),
    financial_account: Schema.String,
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    statement_descriptor: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/treasury/outbound_transfers",
      contentType: "form-urlencoded",
    }),
  );
export type PostTreasuryOutboundTransfersInput =
  typeof PostTreasuryOutboundTransfersInput.Type;

// Output Schema
export const PostTreasuryOutboundTransfersOutput =
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
export type PostTreasuryOutboundTransfersOutput =
  typeof PostTreasuryOutboundTransfersOutput.Type;

// The operation
/**
 * Create an OutboundTransfer
 *
 * <p>Creates an OutboundTransfer.</p>
 */
export const PostTreasuryOutboundTransfers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostTreasuryOutboundTransfersInput,
    outputSchema: PostTreasuryOutboundTransfersOutput,
  }));
