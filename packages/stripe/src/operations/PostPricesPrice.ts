import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostPricesPriceInput {
  price: string;
  active?: boolean;
  currency_options?:
    | Record<
        string,
        {
          custom_unit_amount?: {
            enabled: boolean;
            maximum?: number;
            minimum?: number;
            preset?: number;
          };
          tax_behavior?: "exclusive" | "inclusive" | "unspecified";
          tiers?: {
            flat_amount?: number;
            flat_amount_decimal?: string;
            unit_amount?: number;
            unit_amount_decimal?: string;
            up_to: "inf" | number;
          }[];
          unit_amount?: number;
          unit_amount_decimal?: string;
        }
      >
    | "";
  expand?: string[];
  lookup_key?: string;
  metadata?: Record<string, string> | "";
  nickname?: string;
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
  transfer_lookup_key?: boolean;
}
export const PostPricesPriceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  price: Schema.String.pipe(T.PathParam()),
  active: Schema.optional(Schema.Boolean),
  currency_options: Schema.optional(
    Schema.Union([
      Schema.Record(
        Schema.String,
        Schema.Struct({
          custom_unit_amount: Schema.optional(
            Schema.Struct({
              enabled: Schema.Boolean,
              maximum: Schema.optional(Schema.Number),
              minimum: Schema.optional(Schema.Number),
              preset: Schema.optional(Schema.Number),
            }),
          ),
          tax_behavior: Schema.optional(
            Schema.Literals(["exclusive", "inclusive", "unspecified"]),
          ),
          tiers: Schema.optional(
            Schema.Array(
              Schema.Struct({
                flat_amount: Schema.optional(Schema.Number),
                flat_amount_decimal: Schema.optional(Schema.String),
                unit_amount: Schema.optional(Schema.Number),
                unit_amount_decimal: Schema.optional(Schema.String),
                up_to: Schema.Union([Schema.Literals(["inf"]), Schema.Number]),
              }),
            ),
          ),
          unit_amount: Schema.optional(Schema.Number),
          unit_amount_decimal: Schema.optional(Schema.String),
        }),
      ),
      Schema.Literals([""]),
    ]),
  ),
  expand: Schema.optional(Schema.Array(Schema.String)),
  lookup_key: Schema.optional(Schema.String),
  metadata: Schema.optional(
    Schema.Union([
      Schema.Record(Schema.String, Schema.String),
      Schema.Literals([""]),
    ]),
  ),
  nickname: Schema.optional(Schema.String),
  tax_behavior: Schema.optional(
    Schema.Literals(["exclusive", "inclusive", "unspecified"]),
  ),
  transfer_lookup_key: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/prices/{price}",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<PostPricesPriceInput>;

// Output Schema
export interface PostPricesPriceOutput {
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
export const PostPricesPriceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PostPricesPriceOutput>;

// The operation
/**
 * Update a price
 *
 * <p>Updates the specified price by setting the values of the parameters passed. Any parameters not provided are left unchanged.</p>
 */
export const PostPricesPrice = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostPricesPriceInput,
  outputSchema: PostPricesPriceOutput,
}));
