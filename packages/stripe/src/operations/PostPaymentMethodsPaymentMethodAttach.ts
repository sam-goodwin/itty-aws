import * as Schema from "effect/Schema";
import {
  billing_detailsSchema,
  payment_flows_private_payment_methods_alipaySchema,
  payment_method_acss_debitSchema,
  payment_method_affirmSchema,
  payment_method_afterpay_clearpaySchema,
  payment_method_almaSchema,
  payment_method_amazon_paySchema,
  payment_method_au_becs_debitSchema,
  payment_method_bacs_debitSchema,
  payment_method_bancontactSchema,
  payment_method_billieSchema,
  payment_method_blikSchema,
  payment_method_boletoSchema,
  payment_method_cardSchema,
  payment_method_card_presentSchema,
  payment_method_cashappSchema,
  payment_method_cryptoSchema,
  payment_method_customSchema,
  payment_method_customer_balanceSchema,
  payment_method_epsSchema,
  payment_method_fpxSchema,
  payment_method_giropaySchema,
  payment_method_grabpaySchema,
  payment_method_idealSchema,
  payment_method_interac_presentSchema,
  payment_method_kakao_paySchema,
  payment_method_klarnaSchema,
  payment_method_konbiniSchema,
  payment_method_kr_cardSchema,
  payment_method_linkSchema,
  payment_method_mb_waySchema,
  payment_method_mobilepaySchema,
  payment_method_multibancoSchema,
  payment_method_naver_paySchema,
  payment_method_nz_bank_accountSchema,
  payment_method_oxxoSchema,
  payment_method_p24Schema,
  payment_method_pay_by_bankSchema,
  payment_method_paycoSchema,
  payment_method_paynowSchema,
  payment_method_paypalSchema,
  payment_method_paytoSchema,
  payment_method_pixSchema,
  payment_method_promptpaySchema,
  payment_method_revolut_paySchema,
  payment_method_samsung_paySchema,
  payment_method_satispaySchema,
  payment_method_sepa_debitSchema,
  payment_method_sofortSchema,
  payment_method_swishSchema,
  payment_method_twintSchema,
  payment_method_upiSchema,
  payment_method_us_bank_accountSchema,
  payment_method_wechat_paySchema,
  payment_method_zipSchema,
  radar_radar_optionsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostPaymentMethodsPaymentMethodAttachInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payment_method: Schema.String.pipe(T.PathParam()),
    customer: Schema.optional(Schema.String),
    customer_account: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/payment_methods/{payment_method}/attach",
      contentType: "form-urlencoded",
    }),
  );
export type PostPaymentMethodsPaymentMethodAttachInput =
  typeof PostPaymentMethodsPaymentMethodAttachInput.Type;

// Output Schema
export const PostPaymentMethodsPaymentMethodAttachOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acss_debit: Schema.optional(
      Schema.suspend(() => payment_method_acss_debitSchema),
    ),
    affirm: Schema.optional(Schema.suspend(() => payment_method_affirmSchema)),
    afterpay_clearpay: Schema.optional(
      Schema.suspend(() => payment_method_afterpay_clearpaySchema),
    ),
    alipay: Schema.optional(
      Schema.suspend(() => payment_flows_private_payment_methods_alipaySchema),
    ),
    allow_redisplay: Schema.optional(
      Schema.Literals(["always", "limited", "unspecified"]),
    ),
    alma: Schema.optional(Schema.suspend(() => payment_method_almaSchema)),
    amazon_pay: Schema.optional(
      Schema.suspend(() => payment_method_amazon_paySchema),
    ),
    au_becs_debit: Schema.optional(
      Schema.suspend(() => payment_method_au_becs_debitSchema),
    ),
    bacs_debit: Schema.optional(
      Schema.suspend(() => payment_method_bacs_debitSchema),
    ),
    bancontact: Schema.optional(
      Schema.suspend(() => payment_method_bancontactSchema),
    ),
    billie: Schema.optional(Schema.suspend(() => payment_method_billieSchema)),
    billing_details: Schema.suspend(() => billing_detailsSchema),
    blik: Schema.optional(Schema.suspend(() => payment_method_blikSchema)),
    boleto: Schema.optional(Schema.suspend(() => payment_method_boletoSchema)),
    card: Schema.optional(Schema.suspend(() => payment_method_cardSchema)),
    card_present: Schema.optional(
      Schema.suspend(() => payment_method_card_presentSchema),
    ),
    cashapp: Schema.optional(
      Schema.suspend(() => payment_method_cashappSchema),
    ),
    created: Schema.Number,
    crypto: Schema.optional(Schema.suspend(() => payment_method_cryptoSchema)),
    custom: Schema.optional(Schema.suspend(() => payment_method_customSchema)),
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    customer_balance: Schema.optional(
      Schema.suspend(() => payment_method_customer_balanceSchema),
    ),
    eps: Schema.optional(Schema.suspend(() => payment_method_epsSchema)),
    fpx: Schema.optional(Schema.suspend(() => payment_method_fpxSchema)),
    giropay: Schema.optional(
      Schema.suspend(() => payment_method_giropaySchema),
    ),
    grabpay: Schema.optional(
      Schema.suspend(() => payment_method_grabpaySchema),
    ),
    id: Schema.String,
    ideal: Schema.optional(Schema.suspend(() => payment_method_idealSchema)),
    interac_present: Schema.optional(
      Schema.suspend(() => payment_method_interac_presentSchema),
    ),
    kakao_pay: Schema.optional(
      Schema.suspend(() => payment_method_kakao_paySchema),
    ),
    klarna: Schema.optional(Schema.suspend(() => payment_method_klarnaSchema)),
    konbini: Schema.optional(
      Schema.suspend(() => payment_method_konbiniSchema),
    ),
    kr_card: Schema.optional(
      Schema.suspend(() => payment_method_kr_cardSchema),
    ),
    link: Schema.optional(Schema.suspend(() => payment_method_linkSchema)),
    livemode: Schema.Boolean,
    mb_way: Schema.optional(Schema.suspend(() => payment_method_mb_waySchema)),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    mobilepay: Schema.optional(
      Schema.suspend(() => payment_method_mobilepaySchema),
    ),
    multibanco: Schema.optional(
      Schema.suspend(() => payment_method_multibancoSchema),
    ),
    naver_pay: Schema.optional(
      Schema.suspend(() => payment_method_naver_paySchema),
    ),
    nz_bank_account: Schema.optional(
      Schema.suspend(() => payment_method_nz_bank_accountSchema),
    ),
    object: Schema.Literals(["payment_method"]),
    oxxo: Schema.optional(Schema.suspend(() => payment_method_oxxoSchema)),
    p24: Schema.optional(Schema.suspend(() => payment_method_p24Schema)),
    pay_by_bank: Schema.optional(
      Schema.suspend(() => payment_method_pay_by_bankSchema),
    ),
    payco: Schema.optional(Schema.suspend(() => payment_method_paycoSchema)),
    paynow: Schema.optional(Schema.suspend(() => payment_method_paynowSchema)),
    paypal: Schema.optional(Schema.suspend(() => payment_method_paypalSchema)),
    payto: Schema.optional(Schema.suspend(() => payment_method_paytoSchema)),
    pix: Schema.optional(Schema.suspend(() => payment_method_pixSchema)),
    promptpay: Schema.optional(
      Schema.suspend(() => payment_method_promptpaySchema),
    ),
    radar_options: Schema.optional(
      Schema.suspend(() => radar_radar_optionsSchema),
    ),
    revolut_pay: Schema.optional(
      Schema.suspend(() => payment_method_revolut_paySchema),
    ),
    samsung_pay: Schema.optional(
      Schema.suspend(() => payment_method_samsung_paySchema),
    ),
    satispay: Schema.optional(
      Schema.suspend(() => payment_method_satispaySchema),
    ),
    sepa_debit: Schema.optional(
      Schema.suspend(() => payment_method_sepa_debitSchema),
    ),
    sofort: Schema.optional(Schema.suspend(() => payment_method_sofortSchema)),
    swish: Schema.optional(Schema.suspend(() => payment_method_swishSchema)),
    twint: Schema.optional(Schema.suspend(() => payment_method_twintSchema)),
    type: Schema.Literals([
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
      "card_present",
      "cashapp",
      "crypto",
      "custom",
      "customer_balance",
      "eps",
      "fpx",
      "giropay",
      "grabpay",
      "ideal",
      "interac_present",
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
    upi: Schema.optional(Schema.suspend(() => payment_method_upiSchema)),
    us_bank_account: Schema.optional(
      Schema.suspend(() => payment_method_us_bank_accountSchema),
    ),
    wechat_pay: Schema.optional(
      Schema.suspend(() => payment_method_wechat_paySchema),
    ),
    zip: Schema.optional(Schema.suspend(() => payment_method_zipSchema)),
  });
export type PostPaymentMethodsPaymentMethodAttachOutput =
  typeof PostPaymentMethodsPaymentMethodAttachOutput.Type;

// The operation
/**
 * Attach a PaymentMethod to a Customer
 *
 * <p>Attaches a PaymentMethod object to a Customer.</p>
 * <p>To attach a new PaymentMethod to a customer for future payments, we recommend you use a <a href="/docs/api/setup_intents">SetupIntent</a>
 * or a PaymentIntent with <a href="/docs/api/payment_intents/create#create_payment_intent-setup_future_usage">setup_future_usage</a>.
 * These approaches will perform any necessary steps to set up the PaymentMethod for future payments. Using the <code>/v1/payment_methods/:id/attach</code>
 * endpoint without first using a SetupIntent or PaymentIntent with <code>setup_future_usage</code> does not optimize the PaymentMethod for
 * future use, which makes later declines and payment friction more likely.
 * See <a href="/docs/payments/payment-intents#future-usage">Optimizing cards for future payments</a> for more information about setting up
 * future payments.</p>
 * <p>To use this PaymentMethod as the default for invoice or subscription payments,
 * set <a href="/docs/api/customers/update#update_customer-invoice_settings-default_payment_method"><code>invoice_settings.default_payment_method</code></a>,
 * on the Customer to the PaymentMethod’s ID.</p>
 */
export const PostPaymentMethodsPaymentMethodAttach =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostPaymentMethodsPaymentMethodAttachInput,
    outputSchema: PostPaymentMethodsPaymentMethodAttachOutput,
  }));
