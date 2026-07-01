import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetPricesPriceInput {
  price: string;
  expand?: string;
}
export const GetPricesPriceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  price: Schema.String.pipe(T.PathParam()),
  expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/prices/{price}",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetPricesPriceInput>;

// Output Schema
export interface GetPricesPriceOutput {
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
    | {
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
                  tax_behavior:
                    | "exclusive"
                    | "inclusive"
                    | "unspecified"
                    | null;
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
          | {
              description: string;
              id: string;
              name: string;
              object: "tax_code";
            }
          | null;
        type: "good" | "service";
        unit_label?: string | null;
        updated: number;
        url: string | null;
      }
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
  transform_quantity: { divide_by: number; round: "down" | "up" } | null;
  type: "one_time" | "recurring";
  unit_amount: number | null;
  unit_amount_decimal: string | null;
}
export const GetPricesPriceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  product: Schema.Unknown,
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
  tiers_mode: Schema.NullOr(Schema.Literals(["graduated", "volume"])),
  transform_quantity: Schema.NullOr(
    Schema.Struct({
      divide_by: Schema.Number,
      round: Schema.Literals(["down", "up"]),
    }),
  ),
  type: Schema.Literals(["one_time", "recurring"]),
  unit_amount: Schema.NullOr(Schema.Number),
  unit_amount_decimal: Schema.NullOr(Schema.String),
}) as unknown as Schema.Codec<GetPricesPriceOutput>;

// The operation
/**
 * Retrieve a price
 *
 * <p>Retrieves the price with the given ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetPricesPrice = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetPricesPriceInput,
  outputSchema: GetPricesPriceOutput,
}));
