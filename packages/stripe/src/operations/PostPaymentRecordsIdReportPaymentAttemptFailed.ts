import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostPaymentRecordsIdReportPaymentAttemptFailedInput {
  id: string;
  expand?: string[];
  failed_at: number;
  metadata?: Record<string, string> | "";
}
export const PostPaymentRecordsIdReportPaymentAttemptFailedInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    failed_at: Schema.Number,
    metadata: Schema.optional(
      Schema.Union([
        Schema.Record(Schema.String, Schema.String),
        Schema.Literals([""]),
      ]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/payment_records/{id}/report_payment_attempt_failed",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostPaymentRecordsIdReportPaymentAttemptFailedInput>;

// Output Schema
export interface PostPaymentRecordsIdReportPaymentAttemptFailedOutput {
  amount: { currency: string; value: number };
  amount_authorized: { currency: string; value: number };
  amount_canceled: { currency: string; value: number };
  amount_failed: { currency: string; value: number };
  amount_guaranteed: { currency: string; value: number };
  amount_refunded: { currency: string; value: number };
  amount_requested: { currency: string; value: number };
  application: string | null;
  created: number;
  customer_details: {
    customer: string | null;
    email: string | null;
    name: string | null;
    phone: string | null;
  } | null;
  customer_presence: "off_session" | "on_session" | null;
  description: string | null;
  id: string;
  latest_payment_attempt_record: string | null;
  livemode: boolean;
  metadata: Record<string, string>;
  object: "payment_record";
  payment_method_details: unknown;
  processor_details: {
    custom?: { payment_reference: string | null };
    type: "custom";
  };
  reported_by: "self" | "stripe";
  shipping_details: {
    address: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    };
    name: string | null;
    phone: string | null;
  } | null;
}
export const PostPaymentRecordsIdReportPaymentAttemptFailedOutput =
  /*@__PURE__*/ Schema.Struct({
    amount: Schema.Struct({
      currency: Schema.String,
      value: Schema.Number,
    }),
    amount_authorized: Schema.Struct({
      currency: Schema.String,
      value: Schema.Number,
    }),
    amount_canceled: Schema.Struct({
      currency: Schema.String,
      value: Schema.Number,
    }),
    amount_failed: Schema.Struct({
      currency: Schema.String,
      value: Schema.Number,
    }),
    amount_guaranteed: Schema.Struct({
      currency: Schema.String,
      value: Schema.Number,
    }),
    amount_refunded: Schema.Struct({
      currency: Schema.String,
      value: Schema.Number,
    }),
    amount_requested: Schema.Struct({
      currency: Schema.String,
      value: Schema.Number,
    }),
    application: Schema.NullOr(Schema.String),
    created: Schema.Number,
    customer_details: Schema.NullOr(
      Schema.Struct({
        customer: Schema.NullOr(Schema.String),
        email: Schema.NullOr(Schema.String),
        name: Schema.NullOr(Schema.String),
        phone: Schema.NullOr(Schema.String),
      }),
    ),
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
    processor_details: Schema.Struct({
      custom: Schema.optional(
        Schema.Struct({
          payment_reference: Schema.NullOr(Schema.String),
        }),
      ),
      type: Schema.Literals(["custom"]),
    }),
    reported_by: Schema.Literals(["self", "stripe"]),
    shipping_details: Schema.NullOr(
      Schema.Struct({
        address: Schema.Struct({
          city: Schema.NullOr(Schema.String),
          country: Schema.NullOr(Schema.String),
          line1: Schema.NullOr(Schema.String),
          line2: Schema.NullOr(Schema.String),
          postal_code: Schema.NullOr(Schema.String),
          state: Schema.NullOr(Schema.String),
        }),
        name: Schema.NullOr(Schema.String),
        phone: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<PostPaymentRecordsIdReportPaymentAttemptFailedOutput>;

// The operation
/**
 * Report payment attempt failed
 *
 * <p>Report that the most recent payment attempt on the specified Payment Record
 * failed or errored.</p>
 *
 * @param id - The ID of the Payment Record.
 */
export const PostPaymentRecordsIdReportPaymentAttemptFailed =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostPaymentRecordsIdReportPaymentAttemptFailedInput,
    outputSchema: PostPaymentRecordsIdReportPaymentAttemptFailedOutput,
  }));
