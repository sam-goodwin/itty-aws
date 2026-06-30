import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetProductsSearchInput {
  expand?: string;
  limit?: number;
  page?: string;
  query: string;
}
export const GetProductsSearchInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    page: Schema.optional(Schema.String),
    query: Schema.String,
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/v1/products/search",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetProductsSearchInput>;

// Output Schema
export interface GetProductsSearchOutput {
  data: {
    active: boolean;
    created: number;
    default_price?:
      | string
      | {
          active: boolean;
          billing_scheme: "per_unit" | "tiered";
          created: number;
          currency: string;
          currency_options?: Record<
            string,
            {
              custom_unit_amount: {
                maximum: number | null;
                minimum: number | null;
                preset: number | null;
              } | null;
              tax_behavior: "exclusive" | "inclusive" | "unspecified" | null;
              tiers?: {
                flat_amount: number | null;
                flat_amount_decimal: string | null;
                unit_amount: number | null;
                unit_amount_decimal: string | null;
                up_to: number | null;
              }[];
              unit_amount: number | null;
              unit_amount_decimal: string | null;
            }
          >;
          custom_unit_amount: {
            maximum: number | null;
            minimum: number | null;
            preset: number | null;
          } | null;
          id: string;
          livemode: boolean;
          lookup_key: string | null;
          metadata: Record<string, string>;
          nickname: string | null;
          object: "price";
          product:
            | string
            | unknown
            | { deleted: true; id: string; object: "product" };
          recurring: {
            interval: "day" | "month" | "week" | "year";
            interval_count: number;
            meter: string | null;
            trial_period_days: number | null;
            usage_type: "licensed" | "metered";
          } | null;
          tax_behavior: "exclusive" | "inclusive" | "unspecified" | null;
          tiers?: {
            flat_amount: number | null;
            flat_amount_decimal: string | null;
            unit_amount: number | null;
            unit_amount_decimal: string | null;
            up_to: number | null;
          }[];
          tiers_mode: "graduated" | "volume" | null;
          transform_quantity: {
            divide_by: number;
            round: "down" | "up";
          } | null;
          type: "one_time" | "recurring";
          unit_amount: number | null;
          unit_amount_decimal: string | null;
        }
      | null;
    description: string | null;
    id: string;
    images: string[];
    livemode: boolean;
    marketing_features: { name?: string }[];
    metadata: Record<string, string>;
    name: string;
    object: "product";
    package_dimensions: {
      height: number;
      length: number;
      weight: number;
      width: number;
    } | null;
    shippable: boolean | null;
    statement_descriptor?: string | null;
    tax_code?:
      | string
      | { description: string; id: string; name: string; object: "tax_code" }
      | null;
    type: "good" | "service";
    unit_label?: string | null;
    updated: number;
    url: string | null;
  }[];
  has_more: boolean;
  next_page: string | null;
  object: "search_result";
  total_count?: number;
  url: string;
}
export const GetProductsSearchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        active: Schema.Boolean,
        created: Schema.Number,
        default_price: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.String,
              Schema.Struct({
                active: Schema.Boolean,
                billing_scheme: Schema.Literals(["per_unit", "tiered"]),
                created: Schema.Number,
                currency: Schema.String,
                currency_options: Schema.optional(
                  Schema.Record(
                    Schema.String,
                    Schema.Struct({
                      custom_unit_amount: Schema.NullOr(
                        Schema.Struct({
                          maximum: Schema.NullOr(Schema.Number),
                          minimum: Schema.NullOr(Schema.Number),
                          preset: Schema.NullOr(Schema.Number),
                        }),
                      ),
                      tax_behavior: Schema.NullOr(
                        Schema.Literals([
                          "exclusive",
                          "inclusive",
                          "unspecified",
                        ]),
                      ),
                      tiers: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            flat_amount: Schema.NullOr(Schema.Number),
                            flat_amount_decimal: Schema.NullOr(Schema.String),
                            unit_amount: Schema.NullOr(Schema.Number),
                            unit_amount_decimal: Schema.NullOr(Schema.String),
                            up_to: Schema.NullOr(Schema.Number),
                          }),
                        ),
                      ),
                      unit_amount: Schema.NullOr(Schema.Number),
                      unit_amount_decimal: Schema.NullOr(Schema.String),
                    }),
                  ),
                ),
                custom_unit_amount: Schema.NullOr(
                  Schema.Struct({
                    maximum: Schema.NullOr(Schema.Number),
                    minimum: Schema.NullOr(Schema.Number),
                    preset: Schema.NullOr(Schema.Number),
                  }),
                ),
                id: Schema.String,
                livemode: Schema.Boolean,
                lookup_key: Schema.NullOr(Schema.String),
                metadata: Schema.Record(Schema.String, Schema.String),
                nickname: Schema.NullOr(Schema.String),
                object: Schema.Literals(["price"]),
                product: Schema.Union([
                  Schema.String,
                  Schema.Unknown,
                  Schema.Struct({
                    deleted: Schema.Literals([true]),
                    id: Schema.String,
                    object: Schema.Literals(["product"]),
                  }),
                ]),
                recurring: Schema.NullOr(
                  Schema.Struct({
                    interval: Schema.Literals(["day", "month", "week", "year"]),
                    interval_count: Schema.Number,
                    meter: Schema.NullOr(Schema.String),
                    trial_period_days: Schema.NullOr(Schema.Number),
                    usage_type: Schema.Literals(["licensed", "metered"]),
                  }),
                ),
                tax_behavior: Schema.NullOr(
                  Schema.Literals(["exclusive", "inclusive", "unspecified"]),
                ),
                tiers: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      flat_amount: Schema.NullOr(Schema.Number),
                      flat_amount_decimal: Schema.NullOr(Schema.String),
                      unit_amount: Schema.NullOr(Schema.Number),
                      unit_amount_decimal: Schema.NullOr(Schema.String),
                      up_to: Schema.NullOr(Schema.Number),
                    }),
                  ),
                ),
                tiers_mode: Schema.NullOr(
                  Schema.Literals(["graduated", "volume"]),
                ),
                transform_quantity: Schema.NullOr(
                  Schema.Struct({
                    divide_by: Schema.Number,
                    round: Schema.Literals(["down", "up"]),
                  }),
                ),
                type: Schema.Literals(["one_time", "recurring"]),
                unit_amount: Schema.NullOr(Schema.Number),
                unit_amount_decimal: Schema.NullOr(Schema.String),
              }),
            ]),
          ),
        ),
        description: Schema.NullOr(Schema.String),
        id: Schema.String,
        images: Schema.Array(Schema.String),
        livemode: Schema.Boolean,
        marketing_features: Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
          }),
        ),
        metadata: Schema.Record(Schema.String, Schema.String),
        name: Schema.String,
        object: Schema.Literals(["product"]),
        package_dimensions: Schema.NullOr(
          Schema.Struct({
            height: Schema.Number,
            length: Schema.Number,
            weight: Schema.Number,
            width: Schema.Number,
          }),
        ),
        shippable: Schema.NullOr(Schema.Boolean),
        statement_descriptor: Schema.optional(Schema.NullOr(Schema.String)),
        tax_code: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.String,
              Schema.Struct({
                description: Schema.String,
                id: Schema.String,
                name: Schema.String,
                object: Schema.Literals(["tax_code"]),
              }),
            ]),
          ),
        ),
        type: Schema.Literals(["good", "service"]),
        unit_label: Schema.optional(Schema.NullOr(Schema.String)),
        updated: Schema.Number,
        url: Schema.NullOr(Schema.String),
      }),
    ),
    has_more: Schema.Boolean,
    next_page: Schema.NullOr(Schema.String),
    object: Schema.Literals(["search_result"]),
    total_count: Schema.optional(Schema.Number),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetProductsSearchOutput>;

// The operation
/**
 * Search products
 *
 * <p>Search for products you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
 * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
 * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
 * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param page - A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
 * @param query - The search query string. See [search query language](https://docs.stripe.com/search#search-query-language) and the list of supported [query fields for products](https://docs.stripe.com/search#query-fields-for-products).
 */
export const GetProductsSearch = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(
  () => ({
    inputSchema: GetProductsSearchInput,
    outputSchema: GetProductsSearchOutput,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }),
);
