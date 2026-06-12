import * as Schema from "effect/Schema";
import {
  invoices_payments_invoice_payment_associated_paymentSchema,
  invoices_payments_invoice_payment_status_transitionsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetInvoicePaymentsInvoicePaymentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invoice_payment: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/invoice_payments/{invoice_payment}",
      contentType: "form-urlencoded",
    }),
  );
export type GetInvoicePaymentsInvoicePaymentInput =
  typeof GetInvoicePaymentsInvoicePaymentInput.Type;

// Output Schema
export const GetInvoicePaymentsInvoicePaymentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount_paid: Schema.NullOr(Schema.Number),
    amount_requested: Schema.Number,
    created: Schema.Number,
    currency: Schema.String,
    id: Schema.String,
    invoice: Schema.Unknown,
    is_default: Schema.Boolean,
    livemode: Schema.Boolean,
    object: Schema.Literals(["invoice_payment"]),
    payment: Schema.suspend(
      () => invoices_payments_invoice_payment_associated_paymentSchema,
    ),
    status: Schema.String,
    status_transitions: Schema.suspend(
      () => invoices_payments_invoice_payment_status_transitionsSchema,
    ),
  });
export type GetInvoicePaymentsInvoicePaymentOutput =
  typeof GetInvoicePaymentsInvoicePaymentOutput.Type;

// The operation
/**
 * Retrieve an InvoicePayment
 *
 * <p>Retrieves the invoice payment with the given ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetInvoicePaymentsInvoicePayment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetInvoicePaymentsInvoicePaymentInput,
    outputSchema: GetInvoicePaymentsInvoicePaymentOutput,
  }));
