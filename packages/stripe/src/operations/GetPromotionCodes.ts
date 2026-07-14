import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetPromotionCodesInput {
  active?: boolean;
  code?: string;
  coupon?: string;
  created?: string;
  customer?: string;
  customer_account?: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
}
export const GetPromotionCodesInput = /*@__PURE__*/ Schema.Struct({
  active: Schema.optional(Schema.Boolean),
  code: Schema.optional(Schema.String),
  coupon: Schema.optional(Schema.String),
  created: Schema.optional(Schema.String),
  customer: Schema.optional(Schema.String),
  customer_account: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  starting_after: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/promotion_codes",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetPromotionCodesInput>;

// Output Schema
export interface GetPromotionCodesOutput {
  data: {
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
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetPromotionCodesOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
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
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetPromotionCodesOutput>;

// The operation
/**
 * List all promotion codes
 *
 * <p>Returns a list of your promotion codes.</p>
 *
 * @param active - Filter promotion codes by whether they are active.
 * @param code - Only return promotion codes that have this case-insensitive code.
 * @param coupon - Only return promotion codes for this coupon.
 * @param created - A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
 * @param customer - Only return promotion codes that are restricted to this customer.
 * @param customer_account - Only return promotion codes that are restricted to this account representing the customer.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetPromotionCodes = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetPromotionCodesInput,
  outputSchema: GetPromotionCodesOutput,
}));
