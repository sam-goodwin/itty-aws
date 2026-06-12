import * as Schema from "effect/Schema";
import {
  tax_product_resource_customer_detailsSchema,
  tax_transaction_line_itemSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetTaxTransactionsTransactionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transaction: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/tax/transactions/{transaction}",
      contentType: "form-urlencoded",
    }),
  );
export type GetTaxTransactionsTransactionInput =
  typeof GetTaxTransactionsTransactionInput.Type;

// Output Schema
export const GetTaxTransactionsTransactionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    currency: Schema.String,
    customer: Schema.NullOr(Schema.String),
    customer_details: Schema.suspend(
      () => tax_product_resource_customer_detailsSchema,
    ),
    id: Schema.String,
    line_items: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          data: Schema.Array(
            Schema.suspend(() => tax_transaction_line_itemSchema),
          ),
          has_more: Schema.Boolean,
          object: Schema.Literals(["list"]),
          url: Schema.String,
        }),
      ),
    ),
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    object: Schema.Literals(["tax.transaction"]),
    posted_at: Schema.Number,
    reference: Schema.String,
    reversal: Schema.Unknown,
    ship_from_details: Schema.Unknown,
    shipping_cost: Schema.Unknown,
    tax_date: Schema.Number,
    type: Schema.Literals(["reversal", "transaction"]),
  });
export type GetTaxTransactionsTransactionOutput =
  typeof GetTaxTransactionsTransactionOutput.Type;

// The operation
/**
 * Retrieve a transaction
 *
 * <p>Retrieves a Tax <code>Transaction</code> object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTaxTransactionsTransaction =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetTaxTransactionsTransactionInput,
    outputSchema: GetTaxTransactionsTransactionOutput,
  }));
