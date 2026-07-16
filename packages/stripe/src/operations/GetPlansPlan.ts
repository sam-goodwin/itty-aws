import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetPlansPlanInput {
  plan: string;
  expand?: string;
}
export const GetPlansPlanInput = /*@__PURE__*/ Schema.Struct({
  plan: Schema.String.pipe(T.PathParam()),
  expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/plans/{plan}",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetPlansPlanInput>;

// Output Schema
export interface GetPlansPlanOutput {
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
export const GetPlansPlanOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<GetPlansPlanOutput>;

// The operation
/**
 * Retrieve a plan
 *
 * <p>Retrieves the plan with the given ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetPlansPlan = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetPlansPlanInput,
  outputSchema: GetPlansPlanOutput,
}));
