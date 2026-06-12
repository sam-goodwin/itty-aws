import * as Schema from "effect/Schema";
import {
  tax_calculation_line_itemSchema,
  tax_product_resource_customer_detailsSchema,
  tax_product_resource_tax_breakdownSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetTaxCalculationsCalculationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    calculation: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/tax/calculations/{calculation}",
      contentType: "form-urlencoded",
    }),
  );
export type GetTaxCalculationsCalculationInput =
  typeof GetTaxCalculationsCalculationInput.Type;

// Output Schema
export const GetTaxCalculationsCalculationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount_total: Schema.Number,
    currency: Schema.String,
    customer: Schema.NullOr(Schema.String),
    customer_details: Schema.suspend(
      () => tax_product_resource_customer_detailsSchema,
    ),
    expires_at: Schema.NullOr(Schema.Number),
    id: Schema.NullOr(Schema.String),
    line_items: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          data: Schema.Array(
            Schema.suspend(() => tax_calculation_line_itemSchema),
          ),
          has_more: Schema.Boolean,
          object: Schema.Literals(["list"]),
          url: Schema.String,
        }),
      ),
    ),
    livemode: Schema.Boolean,
    object: Schema.Literals(["tax.calculation"]),
    ship_from_details: Schema.Unknown,
    shipping_cost: Schema.Unknown,
    tax_amount_exclusive: Schema.Number,
    tax_amount_inclusive: Schema.Number,
    tax_breakdown: Schema.Array(
      Schema.suspend(() => tax_product_resource_tax_breakdownSchema),
    ),
    tax_date: Schema.Number,
  });
export type GetTaxCalculationsCalculationOutput =
  typeof GetTaxCalculationsCalculationOutput.Type;

// The operation
/**
 * Retrieve a Tax Calculation
 *
 * <p>Retrieves a Tax <code>Calculation</code> object, if the calculation hasn’t expired.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTaxCalculationsCalculation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetTaxCalculationsCalculationInput,
    outputSchema: GetTaxCalculationsCalculationOutput,
  }));
