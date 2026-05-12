import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ListInvoicesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/billing/invoices" }));
export type ListInvoicesInput = typeof ListInvoicesInput.Type;

// Output Schema
export const ListInvoicesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billing_invoices: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        date: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        amount: Schema.optional(Schema.Number),
        balance: Schema.optional(Schema.Number),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      total: Schema.optional(Schema.Number),
      links: Schema.optional(
        Schema.Struct({
          next: Schema.optional(Schema.String),
          prev: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
});
export type ListInvoicesOutput = typeof ListInvoicesOutput.Type;

// The operation
/**
 * List Invoices
 *
 * Retrieve a list of invoices
 */
export const listInvoices = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListInvoicesInput,
  outputSchema: ListInvoicesOutput,
  errors: [BadRequest, NotFound] as const,
}));
