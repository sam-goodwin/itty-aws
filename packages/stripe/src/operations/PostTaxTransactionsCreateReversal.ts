import * as Schema from "effect/Schema";
import {
  tax_product_resource_customer_detailsSchema,
  tax_transaction_line_itemSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostTaxTransactionsCreateReversalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expand: Schema.optional(Schema.Array(Schema.String)),
    flat_amount: Schema.optional(Schema.Number),
    line_items: Schema.optional(
      Schema.Array(
        Schema.Struct({
          amount: Schema.Number,
          amount_tax: Schema.Number,
          metadata: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          original_line_item: Schema.String,
          quantity: Schema.optional(Schema.Number),
          reference: Schema.String,
        }),
      ),
    ),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    mode: Schema.Literals(["full", "partial"]),
    original_transaction: Schema.String,
    reference: Schema.String,
    shipping_cost: Schema.optional(
      Schema.Struct({
        amount: Schema.Number,
        amount_tax: Schema.Number,
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/tax/transactions/create_reversal",
      contentType: "form-urlencoded",
    }),
  );
export type PostTaxTransactionsCreateReversalInput =
  typeof PostTaxTransactionsCreateReversalInput.Type;

// Output Schema
export const PostTaxTransactionsCreateReversalOutput =
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
export type PostTaxTransactionsCreateReversalOutput =
  typeof PostTaxTransactionsCreateReversalOutput.Type;

// The operation
/**
 * Create a reversal transaction
 *
 * <p>Partially or fully reverses a previously created <code>Transaction</code>.</p>
 */
export const PostTaxTransactionsCreateReversal =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostTaxTransactionsCreateReversalInput,
    outputSchema: PostTaxTransactionsCreateReversalOutput,
  }));
