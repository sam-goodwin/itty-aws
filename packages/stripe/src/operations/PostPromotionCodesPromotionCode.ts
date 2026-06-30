import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostPromotionCodesPromotionCodeInput {
  promotion_code: string;
  active?: boolean;
  expand?: string[];
  metadata?: Record<string, string> | "";
  restrictions?: {
    currency_options?: Record<string, { minimum_amount?: number }>;
  };
}
export const PostPromotionCodesPromotionCodeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    promotion_code: Schema.String.pipe(T.PathParam()),
    active: Schema.optional(Schema.Boolean),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Record(Schema.String, Schema.String),
        Schema.Literals([""]),
      ]),
    ),
    restrictions: Schema.optional(
      Schema.Struct({
        currency_options: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              minimum_amount: Schema.optional(Schema.Number),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/promotion_codes/{promotion_code}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostPromotionCodesPromotionCodeInput>;

// Output Schema
export interface PostPromotionCodesPromotionCodeOutput {
  active: boolean;
  code: string;
  created: number;
  customer: unknown;
  customer_account: string | null;
  expires_at: number | null;
  id: string;
  livemode: boolean;
  max_redemptions: number | null;
  metadata: Record<string, string> | null;
  object: "promotion_code";
  promotion: {
    coupon:
      | string
      | {
          amount_off: number | null;
          applies_to?: { products: string[] };
          created: number;
          currency: string | null;
          currency_options?: Record<string, { amount_off: number }>;
          duration: "forever" | "once" | "repeating";
          duration_in_months: number | null;
          id: string;
          livemode: boolean;
          max_redemptions: number | null;
          metadata: Record<string, string> | null;
          name: string | null;
          object: "coupon";
          percent_off: number | null;
          redeem_by: number | null;
          times_redeemed: number;
          valid: boolean;
        }
      | null;
    type: "coupon";
  };
  restrictions: {
    currency_options?: Record<string, { minimum_amount: number }>;
    first_time_transaction: boolean;
    minimum_amount: number | null;
    minimum_amount_currency: string | null;
  };
  times_redeemed: number;
}
export const PostPromotionCodesPromotionCodeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.Boolean,
    code: Schema.String,
    created: Schema.Number,
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    expires_at: Schema.NullOr(Schema.Number),
    id: Schema.String,
    livemode: Schema.Boolean,
    max_redemptions: Schema.NullOr(Schema.Number),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    object: Schema.Literals(["promotion_code"]),
    promotion: Schema.Struct({
      coupon: Schema.NullOr(
        Schema.Union([
          Schema.String,
          Schema.Struct({
            amount_off: Schema.NullOr(Schema.Number),
            applies_to: Schema.optional(
              Schema.Struct({
                products: Schema.Array(Schema.String),
              }),
            ),
            created: Schema.Number,
            currency: Schema.NullOr(Schema.String),
            currency_options: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  amount_off: Schema.Number,
                }),
              ),
            ),
            duration: Schema.Literals(["forever", "once", "repeating"]),
            duration_in_months: Schema.NullOr(Schema.Number),
            id: Schema.String,
            livemode: Schema.Boolean,
            max_redemptions: Schema.NullOr(Schema.Number),
            metadata: Schema.NullOr(
              Schema.Record(Schema.String, Schema.String),
            ),
            name: Schema.NullOr(Schema.String),
            object: Schema.Literals(["coupon"]),
            percent_off: Schema.NullOr(Schema.Number),
            redeem_by: Schema.NullOr(Schema.Number),
            times_redeemed: Schema.Number,
            valid: Schema.Boolean,
          }),
        ]),
      ),
      type: Schema.Literals(["coupon"]),
    }),
    restrictions: Schema.Struct({
      currency_options: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            minimum_amount: Schema.Number,
          }),
        ),
      ),
      first_time_transaction: Schema.Boolean,
      minimum_amount: Schema.NullOr(Schema.Number),
      minimum_amount_currency: Schema.NullOr(Schema.String),
    }),
    times_redeemed: Schema.Number,
  }) as unknown as Schema.Codec<PostPromotionCodesPromotionCodeOutput>;

// The operation
/**
 * Update a promotion code
 *
 * <p>Updates the specified promotion code by setting the values of the parameters passed. Most fields are, by design, not editable.</p>
 */
export const PostPromotionCodesPromotionCode =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostPromotionCodesPromotionCodeInput,
    outputSchema: PostPromotionCodesPromotionCodeOutput,
  }));
