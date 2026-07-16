import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostPaymentRecordsIdReportPaymentAttemptInformationalInput {
  id: string;
  customer_details?: {
    customer?: string;
    email?: string;
    name?: string;
    phone?: string;
  };
  description?: string | "";
  expand?: string[];
  metadata?: Record<string, string> | "";
  shipping_details?:
    | {
        address?: {
          city?: string;
          country?: string;
          line1?: string;
          line2?: string;
          postal_code?: string;
          state?: string;
        };
        name?: string;
        phone?: string;
      }
    | "";
}
export const PostPaymentRecordsIdReportPaymentAttemptInformationalInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    customer_details: Schema.optional(
      Schema.Struct({
        customer: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        phone: Schema.optional(Schema.String),
      }),
    ),
    description: Schema.optional(
      Schema.Union([Schema.String, Schema.Literals([""])]),
    ),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Record(Schema.String, Schema.String),
        Schema.Literals([""]),
      ]),
    ),
    shipping_details: Schema.optional(
      Schema.Union([
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
        Schema.Literals([""]),
      ]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/payment_records/{id}/report_payment_attempt_informational",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostPaymentRecordsIdReportPaymentAttemptInformationalInput>;

// Output Schema
export interface PostPaymentRecordsIdReportPaymentAttemptInformationalOutput {
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
export const PostPaymentRecordsIdReportPaymentAttemptInformationalOutput =
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
  }) as unknown as Schema.Codec<PostPaymentRecordsIdReportPaymentAttemptInformationalOutput>;

// The operation
/**
 * Report payment attempt informational
 *
 * <p>Report informational updates on the specified Payment Record.</p>
 *
 * @param id - The ID of the Payment Record.
 */
export const PostPaymentRecordsIdReportPaymentAttemptInformational =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostPaymentRecordsIdReportPaymentAttemptInformationalInput,
    outputSchema: PostPaymentRecordsIdReportPaymentAttemptInformationalOutput,
  }));
