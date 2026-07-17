import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostPricesInput {
  active?: boolean;
  billing_scheme?: "per_unit" | "tiered";
  currency: string;
  currency_options?: Record<
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
  >;
  custom_unit_amount?: {
    enabled: boolean;
    maximum?: number;
    minimum?: number;
    preset?: number;
  };
  expand?: string[];
  lookup_key?: string;
  metadata?: Record<string, string>;
  nickname?: string;
  product?: string;
  product_data?: {
    active?: boolean;
    id?: string;
    metadata?: Record<string, string>;
    name: string;
    statement_descriptor?: string;
    tax_code?: string;
    unit_label?: string;
  };
  recurring?: {
    interval: "day" | "month" | "week" | "year";
    interval_count?: number;
    meter?: string;
    trial_period_days?: number;
    usage_type?: "licensed" | "metered";
  };
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
  tiers?: {
    flat_amount?: number;
    flat_amount_decimal?: string;
    unit_amount?: number;
    unit_amount_decimal?: string;
    up_to: "inf" | number;
  }[];
  tiers_mode?: "graduated" | "volume";
  transfer_lookup_key?: boolean;
  transform_quantity?: { divide_by: number; round: "down" | "up" };
  unit_amount?: number;
  unit_amount_decimal?: string;
}
export const PostPricesInput = /*@__PURE__*/ Schema.Struct({
  active: Schema.optional(Schema.Boolean),
  billing_scheme: Schema.optional(Schema.Literals(["per_unit", "tiered"])),
  currency: Schema.String,
  currency_options: Schema.optional(
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
  ),
  custom_unit_amount: Schema.optional(
    Schema.Struct({
      enabled: Schema.Boolean,
      maximum: Schema.optional(Schema.Number),
      minimum: Schema.optional(Schema.Number),
      preset: Schema.optional(Schema.Number),
    }),
  ),
  expand: Schema.optional(Schema.Array(Schema.String)),
  lookup_key: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  nickname: Schema.optional(Schema.String),
  product: Schema.optional(Schema.String),
  product_data: Schema.optional(
    Schema.Struct({
      active: Schema.optional(Schema.Boolean),
      id: Schema.optional(Schema.String),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      name: Schema.String,
      statement_descriptor: Schema.optional(Schema.String),
      tax_code: Schema.optional(Schema.String),
      unit_label: Schema.optional(Schema.String),
    }),
  ),
  recurring: Schema.optional(
    Schema.Struct({
      interval: Schema.Literals(["day", "month", "week", "year"]),
      interval_count: Schema.optional(Schema.Number),
      meter: Schema.optional(Schema.String),
      trial_period_days: Schema.optional(Schema.Number),
      usage_type: Schema.optional(Schema.Literals(["licensed", "metered"])),
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
  tiers_mode: Schema.optional(Schema.Literals(["graduated", "volume"])),
  transfer_lookup_key: Schema.optional(Schema.Boolean),
  transform_quantity: Schema.optional(
    Schema.Struct({
      divide_by: Schema.Number,
      round: Schema.Literals(["down", "up"]),
    }),
  ),
  unit_amount: Schema.optional(Schema.Number),
  unit_amount_decimal: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/prices",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<PostPricesInput>;

// Output Schema
export interface PostPricesOutput {
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
export const PostPricesOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PostPricesOutput>;

// The operation
/**
 * Create a price
 *
 * <p>Creates a new <a href="https://docs.stripe.com/api/prices">Price</a> for an existing <a href="https://docs.stripe.com/api/products">Product</a>. The Price can be recurring or one-time.</p>
 */
export const PostPrices = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostPricesInput,
  outputSchema: PostPricesOutput,
}));
