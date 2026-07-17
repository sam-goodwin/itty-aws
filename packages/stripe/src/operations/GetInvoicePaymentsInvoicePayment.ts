import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetInvoicePaymentsInvoicePaymentInput {
  invoice_payment: string;
  expand?: string;
}
export const GetInvoicePaymentsInvoicePaymentInput =
  /*@__PURE__*/ Schema.Struct({
    invoice_payment: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/invoice_payments/{invoice_payment}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetInvoicePaymentsInvoicePaymentInput>;

// Output Schema
export interface GetInvoicePaymentsInvoicePaymentOutput {
  amount_paid: number | null;
  amount_requested: number;
  created: number;
  currency: string;
  id: string;
  invoice: unknown;
  is_default: boolean;
  livemode: boolean;
  object: "invoice_payment";
  payment: {
    charge?: unknown;
    payment_intent?: unknown;
    payment_record?:
      | string
      | {
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
        };
    type: "charge" | "payment_intent" | "payment_record";
  };
  status: string;
  status_transitions: { canceled_at: number | null; paid_at: number | null };
}
export const GetInvoicePaymentsInvoicePaymentOutput =
  /*@__PURE__*/ Schema.Struct({
    amount_paid: Schema.NullOr(Schema.Number),
    amount_requested: Schema.Number,
    created: Schema.Number,
    currency: Schema.String,
    id: Schema.String,
    invoice: Schema.Unknown,
    is_default: Schema.Boolean,
    livemode: Schema.Boolean,
    object: Schema.Literals(["invoice_payment"]),
    payment: Schema.Struct({
      charge: Schema.optional(Schema.Unknown),
      payment_intent: Schema.optional(Schema.Unknown),
      payment_record: Schema.optional(
        Schema.Union([
          Schema.String,
          Schema.Struct({
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
          }),
        ]),
      ),
      type: Schema.Literals(["charge", "payment_intent", "payment_record"]),
    }),
    status: Schema.String,
    status_transitions: Schema.Struct({
      canceled_at: Schema.NullOr(Schema.Number),
      paid_at: Schema.NullOr(Schema.Number),
    }),
  }) as unknown as Schema.Codec<GetInvoicePaymentsInvoicePaymentOutput>;

// The operation
/**
 * Retrieve an InvoicePayment
 *
 * <p>Retrieves the invoice payment with the given ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetInvoicePaymentsInvoicePayment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetInvoicePaymentsInvoicePaymentInput,
    outputSchema: GetInvoicePaymentsInvoicePaymentOutput,
  }));
