import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostPromotionCodesInput {
  active?: boolean;
  code?: string;
  customer?: string;
  customer_account?: string;
  expand?: string[];
  expires_at?: number;
  max_redemptions?: number;
  metadata?: Record<string, string>;
  promotion: { coupon?: string; type: "coupon" };
  restrictions?: {
    currency_options?: Record<string, { minimum_amount?: number }>;
    first_time_transaction?: boolean;
    minimum_amount?: number;
    minimum_amount_currency?: string;
  };
}
export const PostPromotionCodesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.optional(Schema.Boolean),
    code: Schema.optional(Schema.String),
    customer: Schema.optional(Schema.String),
    customer_account: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.Array(Schema.String)),
    expires_at: Schema.optional(Schema.Number),
    max_redemptions: Schema.optional(Schema.Number),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    promotion: Schema.Struct({
      coupon: Schema.optional(Schema.String),
      type: Schema.Literals(["coupon"]),
    }),
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
        first_time_transaction: Schema.optional(Schema.Boolean),
        minimum_amount: Schema.optional(Schema.Number),
        minimum_amount_currency: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/promotion_codes",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostPromotionCodesInput>;

// Output Schema
export interface PostPromotionCodesOutput {
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
export const PostPromotionCodesOutput =
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
  }) as unknown as Schema.Codec<PostPromotionCodesOutput>;

// The operation
/**
 * Create a promotion code
 *
 * <p>A promotion code points to an underlying promotion. You can optionally restrict the code to a specific customer, redemption limit, and expiration date.</p>
 */
export const PostPromotionCodes = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostPromotionCodesInput,
  outputSchema: PostPromotionCodesOutput,
}));
