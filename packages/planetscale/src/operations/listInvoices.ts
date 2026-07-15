import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListInvoicesInput {
  organization: string;
  page?: number;
  per_page?: number;
}
export const ListInvoicesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  page: Schema.optional(Schema.Number),
  per_page: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/organizations/{organization}/invoices" }),
) as unknown as Schema.Codec<ListInvoicesInput>;

// Output Schema
export interface ListInvoicesOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: ReadonlyArray<{
    id: string;
    total: string;
    billing_period_start: string;
    billing_period_end: string;
    paid: boolean;
    overdue: boolean;
  }>;
}
export const ListInvoicesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.String,
  current_page: Schema.Number,
  next_page: Schema.NullOr(Schema.Number),
  next_page_url: Schema.NullOr(Schema.String),
  prev_page: Schema.NullOr(Schema.Number),
  prev_page_url: Schema.NullOr(Schema.String),
  data: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      total: Schema.String,
      billing_period_start: Schema.String,
      billing_period_end: Schema.String,
      paid: Schema.Boolean,
      overdue: Schema.Boolean,
    }),
  ),
}) as unknown as Schema.Codec<ListInvoicesOutput>;

// The operation
/**
 * Get invoices
 *
 * Get the invoices for an organization
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listInvoices = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(
  () => ({
    inputSchema: ListInvoicesInput,
    outputSchema: ListInvoicesOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }),
);
