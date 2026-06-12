import * as Schema from "effect/Schema";
import {
  payments_primitives_payment_records_resource_amountSchema,
  payments_primitives_payment_records_resource_processor_detailsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostPaymentRecordsIdReportPaymentAttemptInformationalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    customer_details: Schema.optional(
      Schema.Struct({
        customer: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        phone: Schema.optional(Schema.String),
      }),
    ),
    description: Schema.optional(Schema.Unknown),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Unknown),
    shipping_details: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/payment_records/{id}/report_payment_attempt_informational",
      contentType: "form-urlencoded",
    }),
  );
export type PostPaymentRecordsIdReportPaymentAttemptInformationalInput =
  typeof PostPaymentRecordsIdReportPaymentAttemptInformationalInput.Type;

// Output Schema
export const PostPaymentRecordsIdReportPaymentAttemptInformationalOutput =
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
export type PostPaymentRecordsIdReportPaymentAttemptInformationalOutput =
  typeof PostPaymentRecordsIdReportPaymentAttemptInformationalOutput.Type;

// The operation
/**
 * Report payment attempt informational
 *
 * <p>Report informational updates on the specified Payment Record.</p>
 *
 * @param id - The ID of the Payment Record.
 */
export const PostPaymentRecordsIdReportPaymentAttemptInformational =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostPaymentRecordsIdReportPaymentAttemptInformationalInput,
    outputSchema: PostPaymentRecordsIdReportPaymentAttemptInformationalOutput,
  }));
