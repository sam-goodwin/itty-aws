import * as Schema from "effect/Schema";
import {
  payments_primitives_payment_records_resource_amountSchema,
  payments_primitives_payment_records_resource_processor_detailsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostPaymentRecordsIdReportPaymentAttemptInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    description: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.Array(Schema.String)),
    failed: Schema.optional(
      Schema.Struct({
        failed_at: Schema.Number,
      }),
    ),
    guaranteed: Schema.optional(
      Schema.Struct({
        guaranteed_at: Schema.Number,
      }),
    ),
    initiated_at: Schema.Number,
    metadata: Schema.optional(Schema.Unknown),
    outcome: Schema.optional(Schema.Literals(["failed", "guaranteed"])),
    payment_method_details: Schema.optional(
      Schema.Struct({
        billing_details: Schema.optional(
          Schema.Struct({
            address: Schema.optional(
              Schema.Struct({
                city: Schema.optional(Schema.String),
                country: Schema.optional(Schema.String),
                line1: Schema.optional(Schema.String),
                line2: Schema.optional(Schema.String),
                postal_code: Schema.optional(Schema.String),
                state: Schema.optional(Schema.String),
              }),
            ),
            email: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            phone: Schema.optional(Schema.String),
          }),
        ),
        custom: Schema.optional(
          Schema.Struct({
            display_name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
        payment_method: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["custom"])),
      }),
    ),
    shipping_details: Schema.optional(
      Schema.Struct({
        address: Schema.optional(
          Schema.Struct({
            city: Schema.optional(Schema.String),
            country: Schema.optional(Schema.String),
            line1: Schema.optional(Schema.String),
            line2: Schema.optional(Schema.String),
            postal_code: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
          }),
        ),
        name: Schema.optional(Schema.String),
        phone: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/payment_records/{id}/report_payment_attempt",
      contentType: "form-urlencoded",
    }),
  );
export type PostPaymentRecordsIdReportPaymentAttemptInput =
  typeof PostPaymentRecordsIdReportPaymentAttemptInput.Type;

// Output Schema
export const PostPaymentRecordsIdReportPaymentAttemptOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.suspend(
      () => payments_primitives_payment_records_resource_amountSchema,
    ),
    amount_authorized: Schema.suspend(
      () => payments_primitives_payment_records_resource_amountSchema,
    ),
    amount_canceled: Schema.suspend(
      () => payments_primitives_payment_records_resource_amountSchema,
    ),
    amount_failed: Schema.suspend(
      () => payments_primitives_payment_records_resource_amountSchema,
    ),
    amount_guaranteed: Schema.suspend(
      () => payments_primitives_payment_records_resource_amountSchema,
    ),
    amount_refunded: Schema.suspend(
      () => payments_primitives_payment_records_resource_amountSchema,
    ),
    amount_requested: Schema.suspend(
      () => payments_primitives_payment_records_resource_amountSchema,
    ),
    application: Schema.NullOr(Schema.String),
    created: Schema.Number,
    customer_details: Schema.Unknown,
    customer_presence: Schema.NullOr(
      Schema.Literals(["off_session", "on_session"]),
    ),
    description: Schema.NullOr(Schema.String),
    id: Schema.String,
    latest_payment_attempt_record: Schema.NullOr(Schema.String),
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["payment_record"]),
    payment_method_details: Schema.Unknown,
    processor_details: Schema.suspend(
      () =>
        payments_primitives_payment_records_resource_processor_detailsSchema,
    ),
    reported_by: Schema.Literals(["self", "stripe"]),
    shipping_details: Schema.Unknown,
  });
export type PostPaymentRecordsIdReportPaymentAttemptOutput =
  typeof PostPaymentRecordsIdReportPaymentAttemptOutput.Type;

// The operation
/**
 * Report a payment attempt
 *
 * <p>Report a new payment attempt on the specified Payment Record. A new payment
 * attempt can only be specified if all other payment attempts are canceled or failed.</p>
 *
 * @param id - The ID of the Payment Record.
 */
export const PostPaymentRecordsIdReportPaymentAttempt =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostPaymentRecordsIdReportPaymentAttemptInput,
    outputSchema: PostPaymentRecordsIdReportPaymentAttemptOutput,
  }));
