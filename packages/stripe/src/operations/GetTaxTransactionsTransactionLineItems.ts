import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetTaxTransactionsTransactionLineItemsInput {
  transaction: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
}
export const GetTaxTransactionsTransactionLineItemsInput =
  /*@__PURE__*/ Schema.Struct({
    transaction: Schema.String.pipe(T.PathParam()),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/tax/transactions/{transaction}/line_items",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetTaxTransactionsTransactionLineItemsInput>;

// Output Schema
export interface GetTaxTransactionsTransactionLineItemsOutput {
  data: {
    amount: number;
    amount_tax: number;
    id: string;
    livemode: boolean;
    metadata: Record<string, string> | null;
    object: "tax.transaction_line_item";
    product: string | null;
    quantity: number;
    reference: string;
    reversal: { original_line_item: string } | null;
    tax_behavior: "exclusive" | "inclusive";
    tax_code: string;
    type: "reversal" | "transaction";
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetTaxTransactionsTransactionLineItemsOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        amount: Schema.Number,
        amount_tax: Schema.Number,
        id: Schema.String,
        livemode: Schema.Boolean,
        metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
        object: Schema.Literals(["tax.transaction_line_item"]),
        product: Schema.NullOr(Schema.String),
        quantity: Schema.Number,
        reference: Schema.String,
        reversal: Schema.NullOr(
          Schema.Struct({
            original_line_item: Schema.String,
          }),
        ),
        tax_behavior: Schema.Literals(["exclusive", "inclusive"]),
        tax_code: Schema.String,
        type: Schema.Literals(["reversal", "transaction"]),
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetTaxTransactionsTransactionLineItemsOutput>;

// The operation
/**
 * Retrieve a Transaction's line items
 *
 * <p>Retrieves the line items of a committed standalone transaction as a collection.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetTaxTransactionsTransactionLineItems =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetTaxTransactionsTransactionLineItemsInput,
    outputSchema: GetTaxTransactionsTransactionLineItemsOutput,
  }));
