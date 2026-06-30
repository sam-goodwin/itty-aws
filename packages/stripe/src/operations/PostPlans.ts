import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostPlansInput {
  active?: boolean;
  amount?: number;
  amount_decimal?: string;
  billing_scheme?: "per_unit" | "tiered";
  currency: string;
  expand?: string[];
  id?: string;
  interval: "day" | "month" | "week" | "year";
  interval_count?: number;
  metadata?: Record<string, string> | "";
  meter?: string;
  nickname?: string;
  product?:
    | {
        active?: boolean;
        id?: string;
        metadata?: Record<string, string>;
        name: string;
        statement_descriptor?: string;
        tax_code?: string;
        unit_label?: string;
      }
    | string;
  tiers?: {
    flat_amount?: number;
    flat_amount_decimal?: string;
    unit_amount?: number;
    unit_amount_decimal?: string;
    up_to: "inf" | number;
  }[];
  tiers_mode?: "graduated" | "volume";
  transform_usage?: { divide_by: number; round: "down" | "up" };
  trial_period_days?: number;
  usage_type?: "licensed" | "metered";
}
export const PostPlansInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  active: Schema.optional(Schema.Boolean),
  amount: Schema.optional(Schema.Number),
  amount_decimal: Schema.optional(Schema.String),
  billing_scheme: Schema.optional(Schema.Literals(["per_unit", "tiered"])),
  currency: Schema.String,
  expand: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.optional(Schema.String),
  interval: Schema.Literals(["day", "month", "week", "year"]),
  interval_count: Schema.optional(Schema.Number),
  metadata: Schema.optional(
    Schema.Union([
      Schema.Record(Schema.String, Schema.String),
      Schema.Literals([""]),
    ]),
  ),
  meter: Schema.optional(Schema.String),
  nickname: Schema.optional(Schema.String),
  product: Schema.optional(
    Schema.Union([
      Schema.Struct({
        active: Schema.optional(Schema.Boolean),
        id: Schema.optional(Schema.String),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        name: Schema.String,
        statement_descriptor: Schema.optional(Schema.String),
        tax_code: Schema.optional(Schema.String),
        unit_label: Schema.optional(Schema.String),
      }),
      Schema.String,
    ]),
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
  transform_usage: Schema.optional(
    Schema.Struct({
      divide_by: Schema.Number,
      round: Schema.Literals(["down", "up"]),
    }),
  ),
  trial_period_days: Schema.optional(Schema.Number),
  usage_type: Schema.optional(Schema.Literals(["licensed", "metered"])),
}).pipe(
  T.Http({ method: "POST", path: "/v1/plans", contentType: "form-urlencoded" }),
) as unknown as Schema.Codec<PostPlansInput>;

// Output Schema
export interface PostPlansOutput {
  active: boolean;
  amount: number | null;
  amount_decimal: string | null;
  billing_scheme: "per_unit" | "tiered";
  created: number;
  currency: string;
  id: string;
  interval: "day" | "month" | "week" | "year";
  interval_count: number;
  livemode: boolean;
  metadata: Record<string, string> | null;
  meter: string | null;
  nickname: string | null;
  object: "plan";
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
    | { deleted: true; id: string; object: "product" }
    | null;
  tiers?: {
    flat_amount: number | null;
    flat_amount_decimal: string | null;
    unit_amount: number | null;
    unit_amount_decimal: string | null;
    up_to: number | null;
  }[];
  tiers_mode: "graduated" | "volume" | null;
  transform_usage: { divide_by: number; round: "down" | "up" } | null;
  trial_period_days: number | null;
  usage_type: "licensed" | "metered";
}
export const PostPlansOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  active: Schema.Boolean,
  amount: Schema.NullOr(Schema.Number),
  amount_decimal: Schema.NullOr(Schema.String),
  billing_scheme: Schema.Literals(["per_unit", "tiered"]),
  created: Schema.Number,
  currency: Schema.String,
  id: Schema.String,
  interval: Schema.Literals(["day", "month", "week", "year"]),
  interval_count: Schema.Number,
  livemode: Schema.Boolean,
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  meter: Schema.NullOr(Schema.String),
  nickname: Schema.NullOr(Schema.String),
  object: Schema.Literals(["plan"]),
  product: Schema.Unknown,
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
  transform_usage: Schema.NullOr(
    Schema.Struct({
      divide_by: Schema.Number,
      round: Schema.Literals(["down", "up"]),
    }),
  ),
  trial_period_days: Schema.NullOr(Schema.Number),
  usage_type: Schema.Literals(["licensed", "metered"]),
}) as unknown as Schema.Codec<PostPlansOutput>;

// The operation
/**
 * Create a plan
 *
 * <p>You can now model subscriptions more flexibly using the <a href="#prices">Prices API</a>. It replaces the Plans API and is backwards compatible to simplify your migration.</p>
 */
export const PostPlans = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostPlansInput,
  outputSchema: PostPlansOutput,
}));
