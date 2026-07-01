import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetProductsInput {
  active?: boolean;
  created?: string;
  ending_before?: string;
  expand?: string;
  ids?: string;
  limit?: number;
  shippable?: boolean;
  starting_after?: string;
  type?: "good" | "service";
  url?: string;
}
export const GetProductsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  active: Schema.optional(Schema.Boolean),
  created: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  ids: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  shippable: Schema.optional(Schema.Boolean),
  starting_after: Schema.optional(Schema.String),
  type: Schema.optional(Schema.Literals(["good", "service"])),
  url: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/products",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetProductsInput>;

// Output Schema
export interface GetProductsOutput {
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
  object: "list";
  url: string;
}
export const GetProductsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  object: Schema.Literals(["list"]),
  url: Schema.String,
}) as unknown as Schema.Codec<GetProductsOutput>;

// The operation
/**
 * List all products
 *
 * <p>Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.</p>
 *
 * @param active - Only return products that are active or inactive (e.g., pass `false` to list all inactive products).
 * @param created - Only return products that were created during the given date interval.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param ids - Only return products with the given IDs. Cannot be used with [starting_after](https://api.stripe.com#list_products-starting_after) or [ending_before](https://api.stripe.com#list_products-ending_before).
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param shippable - Only return products that can be shipped (i.e., physical, not digital products).
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param type - Only return products of this type.
 * @param url - Only return products with the given url.
 */
export const GetProducts = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetProductsInput,
  outputSchema: GetProductsOutput,
}));
