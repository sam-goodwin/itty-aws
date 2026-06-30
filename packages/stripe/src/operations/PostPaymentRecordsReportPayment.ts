import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostPaymentRecordsReportPaymentInput {
  amount_requested: { currency: string; value: number };
  customer_details?: {
    customer?: string;
    email?: string;
    name?: string;
    phone?: string;
  };
  customer_presence?: "off_session" | "on_session";
  description?: string;
  expand?: string[];
  failed?: { failed_at: number };
  guaranteed?: { guaranteed_at: number };
  initiated_at: number;
  metadata?: Record<string, string> | "";
  outcome?: "failed" | "guaranteed";
  payment_method_details: {
    billing_details?: {
      address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      email?: string;
      name?: string;
      phone?: string;
    };
    custom?: { display_name?: string; type?: string };
    payment_method?: string;
    type?: "custom";
  };
  processor_details?: {
    custom?: { payment_reference: string };
    type: "custom";
  };
  shipping_details?: {
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
  };
}
export const PostPaymentRecordsReportPaymentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount_requested: Schema.Struct({
      currency: Schema.String,
      value: Schema.Number,
    }),
    customer_details: Schema.optional(
      Schema.Struct({
        customer: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        phone: Schema.optional(Schema.String),
      }),
    ),
    customer_presence: Schema.optional(
      Schema.Literals(["off_session", "on_session"]),
    ),
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
    metadata: Schema.optional(
      Schema.Union([
        Schema.Record(Schema.String, Schema.String),
        Schema.Literals([""]),
      ]),
    ),
    outcome: Schema.optional(Schema.Literals(["failed", "guaranteed"])),
    payment_method_details: Schema.Struct({
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
    processor_details: Schema.optional(
      Schema.Struct({
        custom: Schema.optional(
          Schema.Struct({
            payment_reference: Schema.String,
          }),
        ),
        type: Schema.Literals(["custom"]),
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
      path: "/v1/payment_records/report_payment",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostPaymentRecordsReportPaymentInput>;

// Output Schema
export interface PostPaymentRecordsReportPaymentOutput {
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
export const PostPaymentRecordsReportPaymentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PostPaymentRecordsReportPaymentOutput>;

// The operation
/**
 * Report a payment
 *
 * <p>Report a new Payment Record. You may report a Payment Record as it is
 * initialized and later report updates through the other report_* methods, or report Payment
 * Records in a terminal state directly, through this method.</p>
 */
export const PostPaymentRecordsReportPayment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostPaymentRecordsReportPaymentInput,
    outputSchema: PostPaymentRecordsReportPaymentOutput,
  }));
