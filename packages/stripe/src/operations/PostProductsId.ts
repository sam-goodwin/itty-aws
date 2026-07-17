import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostProductsIdInput {
  id: string;
  active?: boolean;
  default_price?: string;
  description?: string | "";
  expand?: ReadonlyArray<string>;
  images?: ReadonlyArray<string> | "";
  marketing_features?: ReadonlyArray<{ name: string }> | "";
  metadata?: Record<string, string> | "";
  name?: string;
  package_dimensions?:
    | { height: number; length: number; weight: number; width: number }
    | "";
  shippable?: boolean | "";
  statement_descriptor?: string;
  tax_code?: string | "";
  unit_label?: string | "";
  url?: string | "";
}
export const PostProductsIdInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  active: Schema.optional(Schema.Boolean),
  default_price: Schema.optional(Schema.String),
  description: Schema.optional(
    Schema.Union([Schema.String, Schema.Literals([""])]),
  ),
  expand: Schema.optional(Schema.Array(Schema.String)),
  images: Schema.optional(
    Schema.Union([Schema.Array(Schema.String), Schema.Literals([""])]),
  ),
  marketing_features: Schema.optional(
    Schema.Union([
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
        }),
      ),
      Schema.Literals([""]),
    ]),
  ),
  metadata: Schema.optional(
    Schema.Union([
      Schema.Record(Schema.String, Schema.String),
      Schema.Literals([""]),
    ]),
  ),
  name: Schema.optional(Schema.String),
  package_dimensions: Schema.optional(
    Schema.Union([
      Schema.Struct({
        height: Schema.Number,
        length: Schema.Number,
        weight: Schema.Number,
        width: Schema.Number,
      }),
      Schema.Literals([""]),
    ]),
  ),
  shippable: Schema.optional(
    Schema.Union([Schema.Boolean, Schema.Literals([""])]),
  ),
  statement_descriptor: Schema.optional(Schema.String),
  tax_code: Schema.optional(
    Schema.Union([Schema.String, Schema.Literals([""])]),
  ),
  unit_label: Schema.optional(
    Schema.Union([Schema.String, Schema.Literals([""])]),
  ),
  url: Schema.optional(Schema.Union([Schema.String, Schema.Literals([""])])),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/products/{id}",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<PostProductsIdInput>;

// Output Schema
export interface PostProductsIdOutput {
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
            tiers?: ReadonlyArray<{
              flat_amount: number | null;
              flat_amount_decimal: string | null;
              unit_amount: number | null;
              unit_amount_decimal: string | null;
              up_to: number | null;
            }>;
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
              images: ReadonlyArray<string>;
              livemode: boolean;
              marketing_features: ReadonlyArray<{ name?: string }>;
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
        tiers?: ReadonlyArray<{
          flat_amount: number | null;
          flat_amount_decimal: string | null;
          unit_amount: number | null;
          unit_amount_decimal: string | null;
          up_to: number | null;
        }>;
        tiers_mode: "graduated" | "volume" | null;
        transform_quantity: { divide_by: number; round: "down" | "up" } | null;
        type: "one_time" | "recurring";
        unit_amount: number | null;
        unit_amount_decimal: string | null;
      }
    | null;
  description: string | null;
  id: string;
  images: ReadonlyArray<string>;
  livemode: boolean;
  marketing_features: ReadonlyArray<{ name?: string }>;
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
export const PostProductsIdOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PostProductsIdOutput>;

// The operation
/**
 * Update a product
 *
 * <p>Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 */
export const PostProductsId = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostProductsIdInput,
  outputSchema: PostProductsIdOutput,
}));
