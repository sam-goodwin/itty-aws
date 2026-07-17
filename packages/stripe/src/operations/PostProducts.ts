import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostProductsInput {
  active?: boolean;
  default_price_data?: {
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
    metadata?: Record<string, string>;
    recurring?: {
      interval: "day" | "month" | "week" | "year";
      interval_count?: number;
    };
    tax_behavior?: "exclusive" | "inclusive" | "unspecified";
    unit_amount?: number;
    unit_amount_decimal?: string;
  };
  description?: string;
  expand?: string[];
  id?: string;
  images?: string[];
  marketing_features?: { name: string }[];
  metadata?: Record<string, string>;
  name: string;
  package_dimensions?: {
    height: number;
    length: number;
    weight: number;
    width: number;
  };
  shippable?: boolean;
  statement_descriptor?: string;
  tax_code?: string;
  type?: "good" | "service";
  unit_label?: string;
  url?: string;
}
export const PostProductsInput = /*@__PURE__*/ Schema.Struct({
  active: Schema.optional(Schema.Boolean),
  default_price_data: Schema.optional(
    Schema.Struct({
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
                  up_to: Schema.Union([
                    Schema.Literals(["inf"]),
                    Schema.Number,
                  ]),
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
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      recurring: Schema.optional(
        Schema.Struct({
          interval: Schema.Literals(["day", "month", "week", "year"]),
          interval_count: Schema.optional(Schema.Number),
        }),
      ),
      tax_behavior: Schema.optional(
        Schema.Literals(["exclusive", "inclusive", "unspecified"]),
      ),
      unit_amount: Schema.optional(Schema.Number),
      unit_amount_decimal: Schema.optional(Schema.String),
    }),
  ),
  description: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.optional(Schema.String),
  images: Schema.optional(Schema.Array(Schema.String)),
  marketing_features: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.String,
      }),
    ),
  ),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.String,
  package_dimensions: Schema.optional(
    Schema.Struct({
      height: Schema.Number,
      length: Schema.Number,
      weight: Schema.Number,
      width: Schema.Number,
    }),
  ),
  shippable: Schema.optional(Schema.Boolean),
  statement_descriptor: Schema.optional(Schema.String),
  tax_code: Schema.optional(Schema.String),
  type: Schema.optional(Schema.Literals(["good", "service"])),
  unit_label: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/products",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<PostProductsInput>;

// Output Schema
export interface PostProductsOutput {
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
          | {
              active: boolean;
              created: number;
              default_price?: string | unknown | null;
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
}
export const PostProductsOutput = /*@__PURE__*/ Schema.Struct({
  active: Schema.Boolean,
  created: Schema.Number,
  default_price: Schema.optional(Schema.Unknown),
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
}) as unknown as Schema.Codec<PostProductsOutput>;

// The operation
/**
 * Create a product
 *
 * <p>Creates a new product object.</p>
 */
export const PostProducts = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostProductsInput,
  outputSchema: PostProductsOutput,
}));
