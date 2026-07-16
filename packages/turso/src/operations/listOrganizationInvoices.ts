import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListOrganizationInvoicesInput {
  organizationSlug: string;
  type?: "all" | "upcoming" | "issued";
}
export const ListOrganizationInvoicesInput =
  /*@__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    type: Schema.optional(Schema.Literals(["all", "upcoming", "issued"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/organizations/{organizationSlug}/invoices",
    }),
  ) as unknown as Schema.Codec<ListOrganizationInvoicesInput>;

// Output Schema
export interface ListOrganizationInvoicesOutput {
  invoices?: {
    invoice_number?: string;
    amount_due?: string;
    due_date?: string;
    paid_at?: string;
    payment_failed_at?: string;
    invoice_pdf?: string;
  }[];
}
export const ListOrganizationInvoicesOutput =
  /*@__PURE__*/ Schema.Struct({
    invoices: Schema.optional(
      Schema.Array(
        Schema.Struct({
          invoice_number: Schema.optional(Schema.String),
          amount_due: Schema.optional(Schema.String),
          due_date: Schema.optional(Schema.String),
          paid_at: Schema.optional(Schema.String),
          payment_failed_at: Schema.optional(Schema.String),
          invoice_pdf: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ListOrganizationInvoicesOutput>;

// The operation
/**
 * List Invoices
 *
 * Returns a list of invoices for the organization.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param type - The type of invoice to retrieve.
 */
export const listOrganizationInvoices = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListOrganizationInvoicesInput,
  outputSchema: ListOrganizationInvoicesOutput,
}));
