import * as Schema from "effect/Schema";
import { invoiceSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetInvoicesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collection_method: Schema.optional(
    Schema.Literals(["charge_automatically", "send_invoice"]),
  ),
  created: Schema.optional(Schema.String),
  customer: Schema.optional(Schema.String),
  customer_account: Schema.optional(Schema.String),
  due_date: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  starting_after: Schema.optional(Schema.String),
  status: Schema.optional(
    Schema.Literals(["draft", "open", "paid", "uncollectible", "void"]),
  ),
  subscription: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/invoices",
    contentType: "form-urlencoded",
  }),
);
export type GetInvoicesInput = typeof GetInvoicesInput.Type;

// Output Schema
export const GetInvoicesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(Schema.suspend(() => invoiceSchema)),
  has_more: Schema.Boolean,
  object: Schema.Literals(["list"]),
  url: Schema.String,
});
export type GetInvoicesOutput = typeof GetInvoicesOutput.Type;

// The operation
/**
 * List all invoices
 *
 * <p>You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.</p>
 *
 * @param collection_method - The collection method of the invoice to retrieve. Either `charge_automatically` or `send_invoice`.
 * @param created - Only return invoices that were created during the given date interval.
 * @param customer - Only return invoices for the customer specified by this customer ID.
 * @param customer_account - Only return invoices for the account representing the customer specified by this account ID.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param status - The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://docs.stripe.com/billing/invoices/workflow#workflow-overview)
 * @param subscription - Only return invoices for the subscription specified by this subscription ID.
 */
export const GetInvoices = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInvoicesInput,
  outputSchema: GetInvoicesOutput,
}));
