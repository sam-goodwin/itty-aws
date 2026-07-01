import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetPlansInput {
  active?: boolean;
  created?: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  product?: string;
  starting_after?: string;
}
export const GetPlansInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  active: Schema.optional(Schema.Boolean),
  created: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  product: Schema.optional(Schema.String),
  starting_after: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/v1/plans", contentType: "form-urlencoded" }),
) as unknown as Schema.Codec<GetPlansInput>;

// Output Schema
export interface GetPlansOutput {
  data: {
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
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetPlansOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  has_more: Schema.Boolean,
  object: Schema.Literals(["list"]),
  url: Schema.String,
}) as unknown as Schema.Codec<GetPlansOutput>;

// The operation
/**
 * List all plans
 *
 * <p>Returns a list of your plans.</p>
 *
 * @param active - Only return plans that are active or inactive (e.g., pass `false` to list all inactive plans).
 * @param created - A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param product - Only return plans for the given product.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetPlans = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetPlansInput,
  outputSchema: GetPlansOutput,
}));
