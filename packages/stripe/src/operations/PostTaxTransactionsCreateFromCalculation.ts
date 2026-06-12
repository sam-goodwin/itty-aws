import * as Schema from "effect/Schema";
import {
  tax_product_resource_customer_detailsSchema,
  tax_transaction_line_itemSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostTaxTransactionsCreateFromCalculationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    calculation: Schema.String,
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    posted_at: Schema.optional(Schema.Number),
    reference: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/tax/transactions/create_from_calculation",
      contentType: "form-urlencoded",
    }),
  );
export type PostTaxTransactionsCreateFromCalculationInput =
  typeof PostTaxTransactionsCreateFromCalculationInput.Type;

// Output Schema
export const PostTaxTransactionsCreateFromCalculationOutput =
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
export type PostTaxTransactionsCreateFromCalculationOutput =
  typeof PostTaxTransactionsCreateFromCalculationOutput.Type;

// The operation
/**
 * Create a transaction from a calculation
 *
 * <p>Creates a Tax Transaction from a calculation, if that calculation hasn’t expired. Calculations expire after 90 days.</p>
 */
export const PostTaxTransactionsCreateFromCalculation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostTaxTransactionsCreateFromCalculationInput,
    outputSchema: PostTaxTransactionsCreateFromCalculationOutput,
  }));
