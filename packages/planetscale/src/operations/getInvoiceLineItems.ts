import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetInvoiceLineItemsInput {
  organization: string;
  id: string;
  page?: number;
  per_page?: number;
}
export const GetInvoiceLineItemsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/invoices/{id}/line-items",
    }),
  ) as unknown as Schema.Codec<GetInvoiceLineItemsInput>;

// Output Schema
export interface GetInvoiceLineItemsOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: ReadonlyArray<{
    id: string;
    subtotal: number;
    description: string;
    metric_name: string;
    cloudflare_billed: boolean;
    database_id: string;
    database_name: string;
    resource: {
      id: string;
      name: string;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
    };
  }>;
}
export const GetInvoiceLineItemsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.String,
    current_page: Schema.Number,
    next_page: Schema.NullOr(Schema.Number),
    next_page_url: Schema.NullOr(Schema.String),
    prev_page: Schema.NullOr(Schema.Number),
    prev_page_url: Schema.NullOr(Schema.String),
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        subtotal: Schema.Number,
        description: Schema.String,
        metric_name: Schema.String,
        cloudflare_billed: Schema.Boolean,
        database_id: Schema.String,
        database_name: Schema.String,
        resource: Schema.Struct({
          id: Schema.String,
          name: Schema.String,
          created_at: Schema.String,
          updated_at: Schema.String,
          deleted_at: Schema.NullOr(Schema.String),
        }),
      }),
    ),
  }) as unknown as Schema.Codec<GetInvoiceLineItemsOutput>;

// The operation
/**
 * Get invoice line items
 *
 * Get the line items for an invoice
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param id - Invoice public ID from `list_invoices`. Example: `aabb12123434`.
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const getInvoiceLineItems =
  /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
    inputSchema: GetInvoiceLineItemsInput,
    outputSchema: GetInvoiceLineItemsOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
