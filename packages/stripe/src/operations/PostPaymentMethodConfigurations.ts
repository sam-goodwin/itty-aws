import * as Schema from "effect/Schema";
import { payment_method_config_resource_payment_method_propertiesSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostPaymentMethodConfigurationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acss_debit: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    affirm: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    afterpay_clearpay: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    alipay: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    alma: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    amazon_pay: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    apple_pay: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    apple_pay_later: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    au_becs_debit: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    bacs_debit: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    bancontact: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    billie: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    blik: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    boleto: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    card: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    cartes_bancaires: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    cashapp: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    crypto: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    customer_balance: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    eps: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    expand: Schema.optional(Schema.Array(Schema.String)),
    fpx: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    fr_meal_voucher_conecs: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    giropay: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    google_pay: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    grabpay: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    ideal: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    jcb: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    kakao_pay: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    klarna: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    konbini: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    kr_card: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    link: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    mb_way: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    mobilepay: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    multibanco: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    name: Schema.optional(Schema.String),
    naver_pay: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    nz_bank_account: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    oxxo: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    p24: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    parent: Schema.optional(Schema.String),
    pay_by_bank: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    payco: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    paynow: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    paypal: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    payto: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    pix: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    promptpay: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    revolut_pay: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    samsung_pay: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    satispay: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    sepa_debit: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    sofort: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    swish: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    twint: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    upi: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    us_bank_account: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    wechat_pay: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    zip: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/payment_method_configurations",
      contentType: "form-urlencoded",
    }),
  );
export type PostPaymentMethodConfigurationsInput =
  typeof PostPaymentMethodConfigurationsInput.Type;

// Output Schema
export const PostPaymentMethodConfigurationsOutput =
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
export type PostPaymentMethodConfigurationsOutput =
  typeof PostPaymentMethodConfigurationsOutput.Type;

// The operation
/**
 * Create a payment method configuration
 *
 * <p>Creates a payment method configuration</p>
 */
export const PostPaymentMethodConfigurations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostPaymentMethodConfigurationsInput,
    outputSchema: PostPaymentMethodConfigurationsOutput,
  }));
