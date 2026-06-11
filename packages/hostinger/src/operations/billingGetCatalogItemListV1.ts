import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const BillingGetCatalogItemListV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.Literals(["DOMAIN", "VPS"])),
    name: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/api/billing/v1/catalog" }));
export type BillingGetCatalogItemListV1Input =
  typeof BillingGetCatalogItemListV1Input.Type;

// Output Schema
export const BillingGetCatalogItemListV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      category: Schema.optional(Schema.String),
      metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
      prices: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            currency: Schema.optional(Schema.String),
            price: Schema.optional(Schema.Number),
            first_period_price: Schema.optional(Schema.Number),
            period: Schema.optional(Schema.Number),
            period_unit: Schema.optional(
              Schema.Literals(["day", "week", "month", "year", "none"]),
            ),
          }),
        ),
      ),
    }),
  );
export type BillingGetCatalogItemListV1Output =
  typeof BillingGetCatalogItemListV1Output.Type;

// The operation
/**
 * Get catalog item list
 *
 * Retrieve catalog items available for order.
 * Prices in catalog items is displayed as cents (without floating point),
 * e.g: float `17.99` is displayed as integer `1799`.
 * Use this endpoint to view available services and pricing before placing orders.
 *
 * @param category - Filter catalog items by category
 * @param name - Filter catalog items by name. Use `*` for wildcard search, e.g. `.COM*` to find .com domain
 */
export const billingGetCatalogItemListV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BillingGetCatalogItemListV1Input,
    outputSchema: BillingGetCatalogItemListV1Output,
  }),
);
