import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetInvoiceInput {
  organization: string;
  id: string;
}
export const GetInvoiceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/invoices/{id}",
  }),
) as unknown as Schema.Codec<GetInvoiceInput>;

// Output Schema
export interface GetInvoiceOutput {
  id: string;
  total: string;
  billing_period_start: string;
  billing_period_end: string;
  paid: boolean;
  overdue: boolean;
}
export const GetInvoiceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  total: Schema.String,
  billing_period_start: Schema.String,
  billing_period_end: Schema.String,
  paid: Schema.Boolean,
  overdue: Schema.Boolean,
}) as unknown as Schema.Codec<GetInvoiceOutput>;

// The operation
/**
 * Get an invoice
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param id - Invoice public ID from `list_invoices`. Example: `aabb12123434`.
 */
export const getInvoice = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInvoiceInput,
  outputSchema: GetInvoiceOutput,
  errors: [Forbidden, NotFound] as const,
}));
