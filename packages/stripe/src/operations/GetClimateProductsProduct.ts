import * as Schema from "effect/Schema";
import {
  climate_removals_products_priceSchema,
  climate_supplierSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetClimateProductsProductInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    product: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/climate/products/{product}",
      contentType: "form-urlencoded",
    }),
  );
export type GetClimateProductsProductInput =
  typeof GetClimateProductsProductInput.Type;

// Output Schema
export const GetClimateProductsProductOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    current_prices_per_metric_ton: Schema.Record(
      Schema.String,
      Schema.suspend(() => climate_removals_products_priceSchema),
    ),
    delivery_year: Schema.NullOr(Schema.Number),
    id: Schema.String,
    livemode: Schema.Boolean,
    metric_tons_available: Schema.String,
    name: Schema.String,
    object: Schema.Literals(["climate.product"]),
    suppliers: Schema.Array(Schema.suspend(() => climate_supplierSchema)),
  });
export type GetClimateProductsProductOutput =
  typeof GetClimateProductsProductOutput.Type;

// The operation
/**
 * Retrieve a product
 *
 * <p>Retrieves the details of a Climate product with the given ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetClimateProductsProduct = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetClimateProductsProductInput,
    outputSchema: GetClimateProductsProductOutput,
  }),
);
