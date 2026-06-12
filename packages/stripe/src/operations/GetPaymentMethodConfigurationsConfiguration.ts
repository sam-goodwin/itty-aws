import * as Schema from "effect/Schema";
import { payment_method_config_resource_payment_method_propertiesSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetPaymentMethodConfigurationsConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configuration: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/payment_method_configurations/{configuration}",
      contentType: "form-urlencoded",
    }),
  );
export type GetPaymentMethodConfigurationsConfigurationInput =
  typeof GetPaymentMethodConfigurationsConfigurationInput.Type;

// Output Schema
export const GetPaymentMethodConfigurationsConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acss_debit: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    active: Schema.Boolean,
    affirm: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    afterpay_clearpay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    alipay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    alma: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    amazon_pay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    apple_pay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    application: Schema.NullOr(Schema.String),
    au_becs_debit: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    bacs_debit: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    bancontact: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    billie: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    blik: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    boleto: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    card: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    cartes_bancaires: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    cashapp: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    crypto: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    customer_balance: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    eps: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    fpx: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    giropay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    google_pay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    grabpay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    id: Schema.String,
    ideal: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    is_default: Schema.Boolean,
    jcb: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    kakao_pay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    klarna: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    konbini: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    kr_card: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    link: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    livemode: Schema.Boolean,
    mb_way: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    mobilepay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    multibanco: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    name: Schema.String,
    naver_pay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    nz_bank_account: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    object: Schema.Literals(["payment_method_configuration"]),
    oxxo: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    p24: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    parent: Schema.NullOr(Schema.String),
    pay_by_bank: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    payco: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    paynow: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    paypal: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    payto: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    pix: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    promptpay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    revolut_pay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    samsung_pay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    satispay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    sepa_debit: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    sofort: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    swish: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    twint: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    upi: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    us_bank_account: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    wechat_pay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    zip: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
  });
export type GetPaymentMethodConfigurationsConfigurationOutput =
  typeof GetPaymentMethodConfigurationsConfigurationOutput.Type;

// The operation
/**
 * Retrieve payment method configuration
 *
 * <p>Retrieve payment method configuration</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetPaymentMethodConfigurationsConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetPaymentMethodConfigurationsConfigurationInput,
    outputSchema: GetPaymentMethodConfigurationsConfigurationOutput,
  }));
