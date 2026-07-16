import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostSetupIntentsIntentVerifyMicrodepositsInput {
  intent: string;
  amounts?: number[];
  descriptor_code?: string;
  expand?: string[];
}
export const PostSetupIntentsIntentVerifyMicrodepositsInput =
  /*@__PURE__*/ Schema.Struct({
    intent: Schema.String.pipe(T.PathParam()),
    amounts: Schema.optional(Schema.Array(Schema.Number)),
    descriptor_code: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/setup_intents/{intent}/verify_microdeposits",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostSetupIntentsIntentVerifyMicrodepositsInput>;

// Output Schema
export interface PostSetupIntentsIntentVerifyMicrodepositsOutput {
  application:
    | string
    | { id: string; name: string | null; object: "application" }
    | null;
  attach_to_self?: boolean;
  automatic_payment_methods: {
    allow_redirects?: "always" | "never";
    enabled: boolean | null;
  } | null;
  cancellation_reason:
    | "abandoned"
    | "duplicate"
    | "requested_by_customer"
    | null;
  client_secret: Redacted.Redacted<string> | null;
  created: number;
  customer: unknown;
  customer_account?: string | null;
  description: string | null;
  excluded_payment_method_types:
    | (
        | "acss_debit"
        | "affirm"
        | "afterpay_clearpay"
        | "alipay"
        | "alma"
        | "amazon_pay"
        | "au_becs_debit"
        | "bacs_debit"
        | "bancontact"
        | "billie"
        | "bizum"
        | "blik"
        | "boleto"
        | "card"
        | "cashapp"
        | "crypto"
        | "customer_balance"
        | "eps"
        | "fpx"
        | "giropay"
        | "grabpay"
        | "ideal"
        | "kakao_pay"
        | "klarna"
        | "konbini"
        | "kr_card"
        | "mb_way"
        | "mobilepay"
        | "multibanco"
        | "naver_pay"
        | "nz_bank_account"
        | "oxxo"
        | "p24"
        | "pay_by_bank"
        | "payco"
        | "paynow"
        | "paypal"
        | "payto"
        | "pix"
        | "promptpay"
        | "revolut_pay"
        | "samsung_pay"
        | "satispay"
        | "scalapay"
        | "sepa_debit"
        | "sofort"
        | "sunbit"
        | "swish"
        | "twint"
        | "upi"
        | "us_bank_account"
        | "wechat_pay"
        | "zip"
      )[]
    | null;
  flow_directions?: ("inbound" | "outbound")[] | null;
  id: string;
  last_setup_error: unknown;
  latest_attempt: unknown;
  livemode: boolean;
  managed_payments?: { enabled: boolean } | null;
  mandate:
    | string
    | {
        customer_acceptance: {
          accepted_at: number | null;
          offline?: {};
          online?: { ip_address: string | null; user_agent: string | null };
          type: "offline" | "online";
        };
        id: string;
        livemode: boolean;
        multi_use?: { amount?: number; currency?: string };
        object: "mandate";
        on_behalf_of?: string;
        payment_method: unknown;
        payment_method_details: {
          acss_debit?: {
            default_for?: ("invoice" | "subscription")[];
            interval_description: string | null;
            payment_schedule: "combined" | "interval" | "sporadic";
            transaction_type: "business" | "personal";
          };
          amazon_pay?: {};
          au_becs_debit?: { url: string };
          bacs_debit?: {
            display_name: string | null;
            network_status: "accepted" | "pending" | "refused" | "revoked";
            reference: string;
            revocation_reason:
              | "account_closed"
              | "bank_account_restricted"
              | "bank_ownership_changed"
              | "could_not_process"
              | "debit_not_authorized"
              | null;
            service_user_number: string | null;
            url: string;
          };
          card?: {};
          cashapp?: {};
          kakao_pay?: {};
          klarna?: {};
          kr_card?: {};
          link?: {};
          naver_pay?: {};
          nz_bank_account?: {};
          paypal?: {
            billing_agreement_id: string | null;
            payer_id: string | null;
          };
          payto?: {
            amount: number | null;
            amount_type: "fixed" | "maximum";
            end_date: string | null;
            payment_schedule:
              | "adhoc"
              | "annual"
              | "daily"
              | "fortnightly"
              | "monthly"
              | "quarterly"
              | "semi_annual"
              | "weekly";
            payments_per_period: number | null;
            purpose:
              | "dependant_support"
              | "government"
              | "loan"
              | "mortgage"
              | "other"
              | "pension"
              | "personal"
              | "retail"
              | "salary"
              | "tax"
              | "utility"
              | null;
            start_date: string | null;
          };
          pix?: {
            amount_includes_iof?: "always" | "never";
            amount_type?: "fixed" | "maximum";
            end_date?: string;
            payment_schedule?:
              | "halfyearly"
              | "monthly"
              | "quarterly"
              | "weekly"
              | "yearly";
            reference?: string;
            start_date?: string;
          };
          revolut_pay?: {};
          sepa_debit?: { reference: string; url: string };
          twint?: {};
          type: string;
          upi?: {
            amount: number | null;
            amount_type: "fixed" | "maximum" | null;
            description: string | null;
            end_date: number | null;
          };
          us_bank_account?: { collection_method?: "paper" };
        };
        single_use?: { amount: number; currency: string };
        status: "active" | "inactive" | "pending";
        type: "multi_use" | "single_use";
      }
    | null;
  metadata: Record<string, string> | null;
  next_action: {
    blik_authorize?: {};
    cashapp_handle_redirect_or_display_qr_code?: {
      hosted_instructions_url: string;
      mobile_auth_url: string;
      qr_code: {
        expires_at: number;
        image_url_png: string;
        image_url_svg: string;
      };
    };
    pix_display_qr_code?: {
      data: string;
      expires_at: number;
      hosted_instructions_url: string;
      image_url_png: string;
      image_url_svg: string;
    };
    redirect_to_url?: { return_url: string | null; url: string | null };
    type: string;
    upi_handle_redirect_or_display_qr_code?: {
      hosted_instructions_url: string;
      qr_code: {
        expires_at: number;
        image_url_png: string;
        image_url_svg: string;
      };
    };
    use_stripe_sdk?: unknown;
    verify_with_microdeposits?: {
      arrival_date: number;
      hosted_verification_url: string;
      microdeposit_type: "amounts" | "descriptor_code" | null;
    };
  } | null;
  object: "setup_intent";
  on_behalf_of: unknown;
  payment_method: unknown;
  payment_method_configuration_details: {
    id: string;
    parent: string | null;
  } | null;
  payment_method_options: {
    acss_debit?: {
      currency: "cad" | "usd" | null;
      mandate_options?: {
        custom_mandate_url?: string;
        default_for?: ("invoice" | "subscription")[];
        interval_description: string | null;
        payment_schedule: "combined" | "interval" | "sporadic" | null;
        transaction_type: "business" | "personal" | null;
      };
      verification_method?: "automatic" | "instant" | "microdeposits";
    };
    amazon_pay?: {};
    bacs_debit?: { mandate_options?: { reference_prefix?: string } };
    bizum?: {};
    card?: {
      mandate_options: {
        amount: number;
        amount_type: "fixed" | "maximum";
        currency: string;
        description: string | null;
        end_date: number | null;
        interval: "day" | "month" | "sporadic" | "week" | "year";
        interval_count: number | null;
        reference: string;
        start_date: number;
        supported_types: "india"[] | null;
      } | null;
      network:
        | "amex"
        | "cartes_bancaires"
        | "diners"
        | "discover"
        | "eftpos_au"
        | "girocard"
        | "interac"
        | "jcb"
        | "link"
        | "mastercard"
        | "unionpay"
        | "unknown"
        | "visa"
        | null;
      request_three_d_secure: "any" | "automatic" | "challenge" | null;
    };
    card_present?: {};
    klarna?: { currency: string | null; preferred_locale: string | null };
    link?: { persistent_token: string | null };
    paypal?: { billing_agreement_id: string | null };
    payto?: {
      mandate_options?: {
        amount: number | null;
        amount_type: "fixed" | "maximum" | null;
        end_date: string | null;
        payment_schedule:
          | "adhoc"
          | "annual"
          | "daily"
          | "fortnightly"
          | "monthly"
          | "quarterly"
          | "semi_annual"
          | "weekly"
          | null;
        payments_per_period: number | null;
        purpose:
          | "dependant_support"
          | "government"
          | "loan"
          | "mortgage"
          | "other"
          | "pension"
          | "personal"
          | "retail"
          | "salary"
          | "tax"
          | "utility"
          | null;
        start_date: string | null;
      };
    };
    pix?: {
      mandate_options?: {
        amount?: number;
        amount_includes_iof?: "always" | "never";
        amount_type?: "fixed" | "maximum";
        currency?: string;
        end_date?: string;
        payment_schedule?:
          | "halfyearly"
          | "monthly"
          | "quarterly"
          | "weekly"
          | "yearly";
        reference?: string;
        start_date?: string;
      };
    };
    sepa_debit?: { mandate_options?: { reference_prefix?: string } };
    upi?: {
      mandate_options?: {
        amount: number | null;
        amount_type: "fixed" | "maximum" | null;
        description: string | null;
        end_date: number | null;
      };
    };
    us_bank_account?: {
      financial_connections?: {
        filters?: { account_subcategories?: ("checking" | "savings")[] };
        permissions?: (
          | "balances"
          | "ownership"
          | "payment_method"
          | "transactions"
        )[];
        prefetch: ("balances" | "ownership" | "transactions")[] | null;
        return_url?: string;
      };
      mandate_options?: { collection_method?: "paper" };
      verification_method?: "automatic" | "instant" | "microdeposits";
    };
  } | null;
  payment_method_types: string[];
  single_use_mandate:
    | string
    | {
        customer_acceptance: {
          accepted_at: number | null;
          offline?: {};
          online?: { ip_address: string | null; user_agent: string | null };
          type: "offline" | "online";
        };
        id: string;
        livemode: boolean;
        multi_use?: { amount?: number; currency?: string };
        object: "mandate";
        on_behalf_of?: string;
        payment_method: unknown;
        payment_method_details: {
          acss_debit?: {
            default_for?: ("invoice" | "subscription")[];
            interval_description: string | null;
            payment_schedule: "combined" | "interval" | "sporadic";
            transaction_type: "business" | "personal";
          };
          amazon_pay?: {};
          au_becs_debit?: { url: string };
          bacs_debit?: {
            display_name: string | null;
            network_status: "accepted" | "pending" | "refused" | "revoked";
            reference: string;
            revocation_reason:
              | "account_closed"
              | "bank_account_restricted"
              | "bank_ownership_changed"
              | "could_not_process"
              | "debit_not_authorized"
              | null;
            service_user_number: string | null;
            url: string;
          };
          card?: {};
          cashapp?: {};
          kakao_pay?: {};
          klarna?: {};
          kr_card?: {};
          link?: {};
          naver_pay?: {};
          nz_bank_account?: {};
          paypal?: {
            billing_agreement_id: string | null;
            payer_id: string | null;
          };
          payto?: {
            amount: number | null;
            amount_type: "fixed" | "maximum";
            end_date: string | null;
            payment_schedule:
              | "adhoc"
              | "annual"
              | "daily"
              | "fortnightly"
              | "monthly"
              | "quarterly"
              | "semi_annual"
              | "weekly";
            payments_per_period: number | null;
            purpose:
              | "dependant_support"
              | "government"
              | "loan"
              | "mortgage"
              | "other"
              | "pension"
              | "personal"
              | "retail"
              | "salary"
              | "tax"
              | "utility"
              | null;
            start_date: string | null;
          };
          pix?: {
            amount_includes_iof?: "always" | "never";
            amount_type?: "fixed" | "maximum";
            end_date?: string;
            payment_schedule?:
              | "halfyearly"
              | "monthly"
              | "quarterly"
              | "weekly"
              | "yearly";
            reference?: string;
            start_date?: string;
          };
          revolut_pay?: {};
          sepa_debit?: { reference: string; url: string };
          twint?: {};
          type: string;
          upi?: {
            amount: number | null;
            amount_type: "fixed" | "maximum" | null;
            description: string | null;
            end_date: number | null;
          };
          us_bank_account?: { collection_method?: "paper" };
        };
        single_use?: { amount: number; currency: string };
        status: "active" | "inactive" | "pending";
        type: "multi_use" | "single_use";
      }
    | null;
  status:
    | "canceled"
    | "processing"
    | "requires_action"
    | "requires_confirmation"
    | "requires_payment_method"
    | "succeeded";
  usage: string;
}
export const PostSetupIntentsIntentVerifyMicrodepositsOutput =
  /*@__PURE__*/ Schema.Struct({
    application: Schema.NullOr(
      Schema.Union([
        Schema.String,
        Schema.Struct({
          id: Schema.String,
          name: Schema.NullOr(Schema.String),
          object: Schema.Literals(["application"]),
        }),
      ]),
    ),
    attach_to_self: Schema.optional(Schema.Boolean),
    automatic_payment_methods: Schema.NullOr(
      Schema.Struct({
        allow_redirects: Schema.optional(Schema.Literals(["always", "never"])),
        enabled: Schema.NullOr(Schema.Boolean),
      }),
    ),
    cancellation_reason: Schema.NullOr(
      Schema.Literals(["abandoned", "duplicate", "requested_by_customer"]),
    ),
    client_secret: SensitiveOutputNullableString,
    created: Schema.Number,
    customer: Schema.Unknown,
    customer_account: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.NullOr(Schema.String),
    excluded_payment_method_types: Schema.NullOr(
      Schema.Array(
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
          "bizum",
          "blik",
          "boleto",
          "card",
          "cashapp",
          "crypto",
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
          "scalapay",
          "sepa_debit",
          "sofort",
          "sunbit",
          "swish",
          "twint",
          "upi",
          "us_bank_account",
          "wechat_pay",
          "zip",
        ]),
      ),
    ),
    flow_directions: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.Literals(["inbound", "outbound"]))),
    ),
    id: Schema.String,
    last_setup_error: Schema.Unknown,
    latest_attempt: Schema.Unknown,
    livemode: Schema.Boolean,
    managed_payments: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          enabled: Schema.Boolean,
        }),
      ),
    ),
    mandate: Schema.Unknown,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    next_action: Schema.NullOr(
      Schema.Struct({
        blik_authorize: Schema.optional(Schema.Struct({})),
        cashapp_handle_redirect_or_display_qr_code: Schema.optional(
          Schema.Struct({
            hosted_instructions_url: Schema.String,
            mobile_auth_url: Schema.String,
            qr_code: Schema.Struct({
              expires_at: Schema.Number,
              image_url_png: Schema.String,
              image_url_svg: Schema.String,
            }),
          }),
        ),
        pix_display_qr_code: Schema.optional(
          Schema.Struct({
            data: Schema.String,
            expires_at: Schema.Number,
            hosted_instructions_url: Schema.String,
            image_url_png: Schema.String,
            image_url_svg: Schema.String,
          }),
        ),
        redirect_to_url: Schema.optional(
          Schema.Struct({
            return_url: Schema.NullOr(Schema.String),
            url: Schema.NullOr(Schema.String),
          }),
        ),
        type: Schema.String,
        upi_handle_redirect_or_display_qr_code: Schema.optional(
          Schema.Struct({
            hosted_instructions_url: Schema.String,
            qr_code: Schema.Struct({
              expires_at: Schema.Number,
              image_url_png: Schema.String,
              image_url_svg: Schema.String,
            }),
          }),
        ),
        use_stripe_sdk: Schema.optional(Schema.Unknown),
        verify_with_microdeposits: Schema.optional(
          Schema.Struct({
            arrival_date: Schema.Number,
            hosted_verification_url: Schema.String,
            microdeposit_type: Schema.NullOr(
              Schema.Literals(["amounts", "descriptor_code"]),
            ),
          }),
        ),
      }),
    ),
    object: Schema.Literals(["setup_intent"]),
    on_behalf_of: Schema.Unknown,
    payment_method: Schema.Unknown,
    payment_method_configuration_details: Schema.NullOr(
      Schema.Struct({
        id: Schema.String,
        parent: Schema.NullOr(Schema.String),
      }),
    ),
    payment_method_options: Schema.Unknown,
    payment_method_types: Schema.Array(Schema.String),
    single_use_mandate: Schema.Unknown,
    status: Schema.Literals([
      "canceled",
      "processing",
      "requires_action",
      "requires_confirmation",
      "requires_payment_method",
      "succeeded",
    ]),
    usage: Schema.String,
  }) as unknown as Schema.Codec<PostSetupIntentsIntentVerifyMicrodepositsOutput>;

// The operation
/**
 * Verify microdeposits on a SetupIntent
 *
 * <p>Verifies microdeposits on a SetupIntent object.</p>
 */
export const PostSetupIntentsIntentVerifyMicrodeposits =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostSetupIntentsIntentVerifyMicrodepositsInput,
    outputSchema: PostSetupIntentsIntentVerifyMicrodepositsOutput,
  }));
