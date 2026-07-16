import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostPaymentMethodConfigurationsConfigurationInput {
  configuration: string;
  acss_debit?: { display_preference?: { preference?: "none" | "off" | "on" } };
  active?: boolean;
  affirm?: { display_preference?: { preference?: "none" | "off" | "on" } };
  afterpay_clearpay?: {
    display_preference?: { preference?: "none" | "off" | "on" };
  };
  alipay?: { display_preference?: { preference?: "none" | "off" | "on" } };
  alma?: { display_preference?: { preference?: "none" | "off" | "on" } };
  amazon_pay?: { display_preference?: { preference?: "none" | "off" | "on" } };
  apple_pay?: { display_preference?: { preference?: "none" | "off" | "on" } };
  apple_pay_later?: {
    display_preference?: { preference?: "none" | "off" | "on" };
  };
  au_becs_debit?: {
    display_preference?: { preference?: "none" | "off" | "on" };
  };
  bacs_debit?: { display_preference?: { preference?: "none" | "off" | "on" } };
  bancontact?: { display_preference?: { preference?: "none" | "off" | "on" } };
  billie?: { display_preference?: { preference?: "none" | "off" | "on" } };
  bizum?: { display_preference?: { preference?: "none" | "off" | "on" } };
  blik?: { display_preference?: { preference?: "none" | "off" | "on" } };
  boleto?: { display_preference?: { preference?: "none" | "off" | "on" } };
  card?: { display_preference?: { preference?: "none" | "off" | "on" } };
  cartes_bancaires?: {
    display_preference?: { preference?: "none" | "off" | "on" };
  };
  cashapp?: { display_preference?: { preference?: "none" | "off" | "on" } };
  crypto?: { display_preference?: { preference?: "none" | "off" | "on" } };
  customer_balance?: {
    display_preference?: { preference?: "none" | "off" | "on" };
  };
  eps?: { display_preference?: { preference?: "none" | "off" | "on" } };
  expand?: string[];
  fpx?: { display_preference?: { preference?: "none" | "off" | "on" } };
  fr_meal_voucher_conecs?: {
    display_preference?: { preference?: "none" | "off" | "on" };
  };
  giropay?: { display_preference?: { preference?: "none" | "off" | "on" } };
  google_pay?: { display_preference?: { preference?: "none" | "off" | "on" } };
  grabpay?: { display_preference?: { preference?: "none" | "off" | "on" } };
  ideal?: { display_preference?: { preference?: "none" | "off" | "on" } };
  jcb?: { display_preference?: { preference?: "none" | "off" | "on" } };
  kakao_pay?: { display_preference?: { preference?: "none" | "off" | "on" } };
  klarna?: { display_preference?: { preference?: "none" | "off" | "on" } };
  konbini?: { display_preference?: { preference?: "none" | "off" | "on" } };
  kr_card?: { display_preference?: { preference?: "none" | "off" | "on" } };
  link?: { display_preference?: { preference?: "none" | "off" | "on" } };
  mb_way?: { display_preference?: { preference?: "none" | "off" | "on" } };
  mobilepay?: { display_preference?: { preference?: "none" | "off" | "on" } };
  multibanco?: { display_preference?: { preference?: "none" | "off" | "on" } };
  name?: string;
  naver_pay?: { display_preference?: { preference?: "none" | "off" | "on" } };
  nz_bank_account?: {
    display_preference?: { preference?: "none" | "off" | "on" };
  };
  oxxo?: { display_preference?: { preference?: "none" | "off" | "on" } };
  p24?: { display_preference?: { preference?: "none" | "off" | "on" } };
  pay_by_bank?: { display_preference?: { preference?: "none" | "off" | "on" } };
  payco?: { display_preference?: { preference?: "none" | "off" | "on" } };
  paynow?: { display_preference?: { preference?: "none" | "off" | "on" } };
  paypal?: { display_preference?: { preference?: "none" | "off" | "on" } };
  payto?: { display_preference?: { preference?: "none" | "off" | "on" } };
  pix?: { display_preference?: { preference?: "none" | "off" | "on" } };
  promptpay?: { display_preference?: { preference?: "none" | "off" | "on" } };
  revolut_pay?: { display_preference?: { preference?: "none" | "off" | "on" } };
  samsung_pay?: { display_preference?: { preference?: "none" | "off" | "on" } };
  satispay?: { display_preference?: { preference?: "none" | "off" | "on" } };
  scalapay?: { display_preference?: { preference?: "none" | "off" | "on" } };
  sepa_debit?: { display_preference?: { preference?: "none" | "off" | "on" } };
  sofort?: { display_preference?: { preference?: "none" | "off" | "on" } };
  sunbit?: { display_preference?: { preference?: "none" | "off" | "on" } };
  swish?: { display_preference?: { preference?: "none" | "off" | "on" } };
  twint?: { display_preference?: { preference?: "none" | "off" | "on" } };
  upi?: { display_preference?: { preference?: "none" | "off" | "on" } };
  us_bank_account?: {
    display_preference?: { preference?: "none" | "off" | "on" };
  };
  wechat_pay?: { display_preference?: { preference?: "none" | "off" | "on" } };
  zip?: { display_preference?: { preference?: "none" | "off" | "on" } };
}
export const PostPaymentMethodConfigurationsConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    configuration: Schema.String.pipe(T.PathParam()),
    acss_debit: Schema.optional(
      Schema.Struct({
        display_preference: Schema.optional(
          Schema.Struct({
            preference: Schema.optional(Schema.Literals(["none", "off", "on"])),
          }),
        ),
      }),
    ),
    active: Schema.optional(Schema.Boolean),
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
    bizum: Schema.optional(
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
    scalapay: Schema.optional(
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
    sunbit: Schema.optional(
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
      path: "/v1/payment_method_configurations/{configuration}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostPaymentMethodConfigurationsConfigurationInput>;

// Output Schema
export interface PostPaymentMethodConfigurationsConfigurationOutput {
  acss_debit?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  active: boolean;
  affirm?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  afterpay_clearpay?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  alipay?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  alma?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  amazon_pay?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  apple_pay?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  application: string | null;
  au_becs_debit?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  bacs_debit?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  bancontact?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  billie?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  bizum?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  blik?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  boleto?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  card?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  cartes_bancaires?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  cashapp?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  crypto?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  customer_balance?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  eps?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  fpx?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  giropay?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  google_pay?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  grabpay?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  id: string;
  ideal?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  is_default: boolean;
  jcb?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  kakao_pay?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  klarna?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  konbini?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  kr_card?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  link?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  livemode: boolean;
  mb_way?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  mobilepay?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  multibanco?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  name: string;
  naver_pay?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  nz_bank_account?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  object: "payment_method_configuration";
  oxxo?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  p24?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  parent: string | null;
  pay_by_bank?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  payco?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  paynow?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  paypal?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  payto?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  pix?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  promptpay?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  revolut_pay?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  samsung_pay?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  satispay?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  scalapay?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  sepa_debit?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  sofort?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  sunbit?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  swish?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  twint?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  upi?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  us_bank_account?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  wechat_pay?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
  zip?: {
    available: boolean;
    display_preference: {
      overridable: boolean | null;
      preference: "none" | "off" | "on";
      value: "off" | "on";
    };
  };
}
export const PostPaymentMethodConfigurationsConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
    acss_debit: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    active: Schema.Boolean,
    affirm: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    afterpay_clearpay: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    alipay: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    alma: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    amazon_pay: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    apple_pay: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    application: Schema.NullOr(Schema.String),
    au_becs_debit: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    bacs_debit: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    bancontact: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    billie: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    bizum: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    blik: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    boleto: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    card: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    cartes_bancaires: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    cashapp: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    crypto: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    customer_balance: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    eps: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    fpx: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    giropay: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    google_pay: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    grabpay: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    id: Schema.String,
    ideal: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    is_default: Schema.Boolean,
    jcb: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    kakao_pay: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    klarna: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    konbini: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    kr_card: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    link: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    livemode: Schema.Boolean,
    mb_way: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    mobilepay: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    multibanco: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    name: Schema.String,
    naver_pay: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    nz_bank_account: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    object: Schema.Literals(["payment_method_configuration"]),
    oxxo: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    p24: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    parent: Schema.NullOr(Schema.String),
    pay_by_bank: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    payco: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    paynow: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    paypal: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    payto: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    pix: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    promptpay: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    revolut_pay: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    samsung_pay: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    satispay: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    scalapay: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    sepa_debit: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    sofort: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    sunbit: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    swish: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    twint: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    upi: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    us_bank_account: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    wechat_pay: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
    zip: Schema.optional(
      Schema.Struct({
        available: Schema.Boolean,
        display_preference: Schema.Struct({
          overridable: Schema.NullOr(Schema.Boolean),
          preference: Schema.Literals(["none", "off", "on"]),
          value: Schema.Literals(["off", "on"]),
        }),
      }),
    ),
  }) as unknown as Schema.Codec<PostPaymentMethodConfigurationsConfigurationOutput>;

// The operation
/**
 * Update payment method configuration
 *
 * <p>Update payment method configuration</p>
 */
export const PostPaymentMethodConfigurationsConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostPaymentMethodConfigurationsConfigurationInput,
    outputSchema: PostPaymentMethodConfigurationsConfigurationOutput,
  }));
