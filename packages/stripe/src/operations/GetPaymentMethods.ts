import * as Schema from "effect/Schema";
import { payment_methodSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetPaymentMethodsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    allow_redisplay: Schema.optional(
      Schema.Literals(["always", "limited", "unspecified"]),
    ),
    customer: Schema.optional(Schema.String),
    customer_account: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals([
        "acss_debit",
        "affirm",
        "afterpay_clearpay",
        "alipay",
        "alma",
        "amazon_pay",
        "au_becs_debit",
        "bacs_debit",
        "bancontact",
        "billie",
        "blik",
        "boleto",
        "card",
        "cashapp",
        "crypto",
        "custom",
        "customer_balance",
        "eps",
        "fpx",
        "giropay",
        "grabpay",
        "ideal",
        "kakao_pay",
        "klarna",
        "konbini",
        "kr_card",
        "link",
        "mb_way",
        "mobilepay",
        "multibanco",
        "naver_pay",
        "nz_bank_account",
        "oxxo",
        "p24",
        "pay_by_bank",
        "payco",
        "paynow",
        "paypal",
        "payto",
        "pix",
        "promptpay",
        "revolut_pay",
        "samsung_pay",
        "satispay",
        "sepa_debit",
        "sofort",
        "swish",
        "twint",
        "upi",
        "us_bank_account",
        "wechat_pay",
        "zip",
      ]),
    ),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/v1/payment_methods",
    contentType: "form-urlencoded",
  }),
);
export type GetPaymentMethodsInput = typeof GetPaymentMethodsInput.Type;

// Output Schema
export const GetPaymentMethodsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => payment_methodSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetPaymentMethodsOutput = typeof GetPaymentMethodsOutput.Type;

// The operation
/**
 * List PaymentMethods
 *
 * <p>Returns a list of all PaymentMethods.</p>
 *
 * @param allow_redisplay - This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow.
 * @param customer - The ID of the customer whose PaymentMethods will be retrieved.
 * @param customer_account - The ID of the Account whose PaymentMethods will be retrieved.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param type - Filters the list by the object `type` field. Unfiltered, the list returns all payment method types except `custom`. If your integration expects only one type of payment method in the response, specify that type value in the request to reduce your payload.
 */
export const GetPaymentMethods = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetPaymentMethodsInput,
  outputSchema: GetPaymentMethodsOutput,
}));
