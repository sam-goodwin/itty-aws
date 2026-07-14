import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostShippingRatesShippingRateTokenInput {
  shipping_rate_token: string;
  active?: boolean;
  expand?: string[];
  fixed_amount?: {
    currency_options?: Record<
      string,
      {
        amount?: number;
        tax_behavior?: "exclusive" | "inclusive" | "unspecified";
      }
    >;
  };
  metadata?: Record<string, string> | "";
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
}
export const PostShippingRatesShippingRateTokenInput =
  /*@__PURE__*/ Schema.Struct({
    shipping_rate_token: Schema.String.pipe(T.PathParam()),
    active: Schema.optional(Schema.Boolean),
    expand: Schema.optional(Schema.Array(Schema.String)),
    fixed_amount: Schema.optional(
      Schema.Struct({
        currency_options: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              amount: Schema.optional(Schema.Number),
              tax_behavior: Schema.optional(
                Schema.Literals(["exclusive", "inclusive", "unspecified"]),
              ),
            }),
          ),
        ),
      }),
    ),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Record(Schema.String, Schema.String),
        Schema.Literals([""]),
      ]),
    ),
    tax_behavior: Schema.optional(
      Schema.Literals(["exclusive", "inclusive", "unspecified"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/shipping_rates/{shipping_rate_token}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostShippingRatesShippingRateTokenInput>;

// Output Schema
export interface PostShippingRatesShippingRateTokenOutput {
  active: boolean;
  created: number;
  delivery_estimate: {
    maximum: {
      unit: "business_day" | "day" | "hour" | "month" | "week";
      value: number;
    } | null;
    minimum: {
      unit: "business_day" | "day" | "hour" | "month" | "week";
      value: number;
    } | null;
  } | null;
  display_name: string | null;
  fixed_amount?: {
    amount: number;
    currency: string;
    currency_options?: Record<
      string,
      {
        amount: number;
        tax_behavior: "exclusive" | "inclusive" | "unspecified";
      }
    >;
  };
  id: string;
  livemode: boolean;
  metadata: Record<string, string>;
  object: "shipping_rate";
  tax_behavior: "exclusive" | "inclusive" | "unspecified" | null;
  tax_code:
    | string
    | { description: string; id: string; name: string; object: "tax_code" }
    | null;
  type: "fixed_amount";
}
export const PostShippingRatesShippingRateTokenOutput =
  /*@__PURE__*/ Schema.Struct({
    active: Schema.Boolean,
    created: Schema.Number,
    delivery_estimate: Schema.NullOr(
      Schema.Struct({
        maximum: Schema.NullOr(
          Schema.Struct({
            unit: Schema.Literals([
              "business_day",
              "day",
              "hour",
              "month",
              "week",
            ]),
            value: Schema.Number,
          }),
        ),
        minimum: Schema.NullOr(
          Schema.Struct({
            unit: Schema.Literals([
              "business_day",
              "day",
              "hour",
              "month",
              "week",
            ]),
            value: Schema.Number,
          }),
        ),
      }),
    ),
    display_name: Schema.NullOr(Schema.String),
    fixed_amount: Schema.optional(
      Schema.Struct({
        amount: Schema.Number,
        currency: Schema.String,
        currency_options: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              amount: Schema.Number,
              tax_behavior: Schema.Literals([
                "exclusive",
                "inclusive",
                "unspecified",
              ]),
            }),
          ),
        ),
      }),
    ),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["shipping_rate"]),
    tax_behavior: Schema.NullOr(
      Schema.Literals(["exclusive", "inclusive", "unspecified"]),
    ),
    tax_code: Schema.NullOr(
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
    type: Schema.Literals(["fixed_amount"]),
  }) as unknown as Schema.Codec<PostShippingRatesShippingRateTokenOutput>;

// The operation
/**
 * Update a shipping rate
 *
 * <p>Updates an existing shipping rate object.</p>
 */
export const PostShippingRatesShippingRateToken =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostShippingRatesShippingRateTokenInput,
    outputSchema: PostShippingRatesShippingRateTokenOutput,
  }));
