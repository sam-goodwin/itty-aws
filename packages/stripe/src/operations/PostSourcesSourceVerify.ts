import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostSourcesSourceVerifyInput {
  source: string;
  expand?: string[];
  values: string[];
}
export const PostSourcesSourceVerifyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    values: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/sources/{source}/verify",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostSourcesSourceVerifyInput>;

// Output Schema
export interface PostSourcesSourceVerifyOutput {
  ach_credit_transfer?: {
    account_number?: string | null;
    bank_name?: string | null;
    fingerprint?: string | null;
    refund_account_holder_name?: string | null;
    refund_account_holder_type?: string | null;
    refund_routing_number?: string | null;
    routing_number?: string | null;
    swift_code?: string | null;
  };
  ach_debit?: {
    bank_name?: string | null;
    country?: string | null;
    fingerprint?: string | null;
    last4?: string | null;
    routing_number?: string | null;
    type?: string | null;
  };
  acss_debit?: {
    bank_address_city?: string | null;
    bank_address_line_1?: string | null;
    bank_address_line_2?: string | null;
    bank_address_postal_code?: string | null;
    bank_name?: string | null;
    category?: string | null;
    country?: string | null;
    fingerprint?: string | null;
    last4?: string | null;
    routing_number?: string | null;
  };
  alipay?: {
    data_string?: string | null;
    native_url?: string | null;
    statement_descriptor?: string | null;
  };
  allow_redisplay: "always" | "limited" | "unspecified" | null;
  amount: number | null;
  au_becs_debit?: {
    bsb_number?: string | null;
    fingerprint?: string | null;
    last4?: string | null;
  };
  bancontact?: {
    bank_code?: string | null;
    bank_name?: string | null;
    bic?: string | null;
    iban_last4?: string | null;
    preferred_language?: string | null;
    statement_descriptor?: string | null;
  };
  card?: {
    address_line1_check?: string | null;
    address_zip_check?: string | null;
    brand?: string | null;
    country?: string | null;
    cvc_check?: string | null;
    description?: string;
    dynamic_last4?: string | null;
    exp_month?: number | null;
    exp_year?: number | null;
    fingerprint?: string;
    funding?: string | null;
    iin?: string;
    issuer?: string;
    last4?: string | null;
    name?: string | null;
    three_d_secure?: string;
    tokenization_method?: string | null;
  };
  card_present?: {
    application_cryptogram?: string;
    application_preferred_name?: string;
    authorization_code?: string | null;
    authorization_response_code?: string;
    brand?: string | null;
    country?: string | null;
    cvm_type?: string;
    data_type?: string | null;
    dedicated_file_name?: string;
    description?: string;
    emv_auth_data?: string;
    evidence_customer_signature?: string | null;
    evidence_transaction_certificate?: string | null;
    exp_month?: number | null;
    exp_year?: number | null;
    fingerprint?: string;
    funding?: string | null;
    iin?: string;
    issuer?: string;
    last4?: string | null;
    pos_device_id?: string | null;
    pos_entry_mode?: string;
    read_method?: string | null;
    reader?: string | null;
    terminal_verification_results?: string;
    transaction_status_information?: string;
  };
  client_secret: Redacted.Redacted<string>;
  code_verification?: { attempts_remaining: number; status: string };
  created: number;
  currency: string | null;
  customer?: string;
  eps?: { reference?: string | null; statement_descriptor?: string | null };
  flow: string;
  giropay?: {
    bank_code?: string | null;
    bank_name?: string | null;
    bic?: string | null;
    statement_descriptor?: string | null;
  };
  id: string;
  ideal?: {
    bank?: string | null;
    bic?: string | null;
    iban_last4?: string | null;
    statement_descriptor?: string | null;
  };
  klarna?: {
    background_image_url?: string;
    client_token?: string | null;
    first_name?: string;
    last_name?: string;
    locale?: string;
    logo_url?: string;
    page_title?: string;
    pay_later_asset_urls_descriptive?: string;
    pay_later_asset_urls_standard?: string;
    pay_later_name?: string;
    pay_later_redirect_url?: string;
    pay_now_asset_urls_descriptive?: string;
    pay_now_asset_urls_standard?: string;
    pay_now_name?: string;
    pay_now_redirect_url?: string;
    pay_over_time_asset_urls_descriptive?: string;
    pay_over_time_asset_urls_standard?: string;
    pay_over_time_name?: string;
    pay_over_time_redirect_url?: string;
    payment_method_categories?: string;
    purchase_country?: string;
    purchase_type?: string;
    redirect_url?: string;
    shipping_delay?: number;
    shipping_first_name?: string;
    shipping_last_name?: string;
  };
  livemode: boolean;
  metadata: Record<string, string> | null;
  multibanco?: {
    entity?: string | null;
    reference?: string | null;
    refund_account_holder_address_city?: string | null;
    refund_account_holder_address_country?: string | null;
    refund_account_holder_address_line1?: string | null;
    refund_account_holder_address_line2?: string | null;
    refund_account_holder_address_postal_code?: string | null;
    refund_account_holder_address_state?: string | null;
    refund_account_holder_name?: string | null;
    refund_iban?: string | null;
  };
  object: "source";
  owner: {
    address: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    } | null;
    email: string | null;
    name: string | null;
    phone: string | null;
    verified_address: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    } | null;
    verified_email: string | null;
    verified_name: string | null;
    verified_phone: string | null;
  } | null;
  p24?: { reference?: string | null };
  receiver?: {
    address: string | null;
    amount_charged: number;
    amount_received: number;
    amount_returned: number;
    refund_attributes_method: string;
    refund_attributes_status: string;
  };
  redirect?: {
    failure_reason: string | null;
    return_url: string;
    status: string;
    url: string;
  };
  sepa_credit_transfer?: {
    bank_name?: string | null;
    bic?: string | null;
    iban?: string | null;
    refund_account_holder_address_city?: string | null;
    refund_account_holder_address_country?: string | null;
    refund_account_holder_address_line1?: string | null;
    refund_account_holder_address_line2?: string | null;
    refund_account_holder_address_postal_code?: string | null;
    refund_account_holder_address_state?: string | null;
    refund_account_holder_name?: string | null;
    refund_iban?: string | null;
  };
  sepa_debit?: {
    bank_code?: string | null;
    branch_code?: string | null;
    country?: string | null;
    fingerprint?: string | null;
    last4?: string | null;
    mandate_reference?: string | null;
    mandate_url?: string | null;
  };
  sofort?: {
    bank_code?: string | null;
    bank_name?: string | null;
    bic?: string | null;
    country?: string | null;
    iban_last4?: string | null;
    preferred_language?: string | null;
    statement_descriptor?: string | null;
  };
  source_order?: {
    amount: number;
    currency: string;
    email?: string;
    items:
      | {
          amount: number | null;
          currency: string | null;
          description: string | null;
          parent: string | null;
          quantity?: number;
          type: string | null;
        }[]
      | null;
    shipping?: {
      address?: {
        city: string | null;
        country: string | null;
        line1: string | null;
        line2: string | null;
        postal_code: string | null;
        state: string | null;
      };
      carrier?: string | null;
      name?: string;
      phone?: string | null;
      tracking_number?: string | null;
    };
  };
  statement_descriptor: string | null;
  status: string;
  three_d_secure?: {
    address_line1_check?: string | null;
    address_zip_check?: string | null;
    authenticated?: boolean | null;
    brand?: string | null;
    card?: string | null;
    country?: string | null;
    customer?: string | null;
    cvc_check?: string | null;
    description?: string;
    dynamic_last4?: string | null;
    exp_month?: number | null;
    exp_year?: number | null;
    fingerprint?: string;
    funding?: string | null;
    iin?: string;
    issuer?: string;
    last4?: string | null;
    name?: string | null;
    three_d_secure?: string;
    tokenization_method?: string | null;
  };
  type:
    | "ach_credit_transfer"
    | "ach_debit"
    | "acss_debit"
    | "alipay"
    | "au_becs_debit"
    | "bancontact"
    | "card"
    | "card_present"
    | "eps"
    | "giropay"
    | "ideal"
    | "klarna"
    | "multibanco"
    | "p24"
    | "sepa_credit_transfer"
    | "sepa_debit"
    | "sofort"
    | "three_d_secure"
    | "wechat";
  usage: string | null;
  wechat?: {
    prepay_id?: string;
    qr_code_url?: string | null;
    statement_descriptor?: string;
  };
}
export const PostSourcesSourceVerifyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ach_credit_transfer: Schema.optional(
      Schema.Struct({
        account_number: Schema.optional(Schema.NullOr(Schema.String)),
        bank_name: Schema.optional(Schema.NullOr(Schema.String)),
        fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
        refund_account_holder_name: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        refund_account_holder_type: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        refund_routing_number: Schema.optional(Schema.NullOr(Schema.String)),
        routing_number: Schema.optional(Schema.NullOr(Schema.String)),
        swift_code: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    ach_debit: Schema.optional(
      Schema.Struct({
        bank_name: Schema.optional(Schema.NullOr(Schema.String)),
        country: Schema.optional(Schema.NullOr(Schema.String)),
        fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
        last4: Schema.optional(Schema.NullOr(Schema.String)),
        routing_number: Schema.optional(Schema.NullOr(Schema.String)),
        type: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    acss_debit: Schema.optional(
      Schema.Struct({
        bank_address_city: Schema.optional(Schema.NullOr(Schema.String)),
        bank_address_line_1: Schema.optional(Schema.NullOr(Schema.String)),
        bank_address_line_2: Schema.optional(Schema.NullOr(Schema.String)),
        bank_address_postal_code: Schema.optional(Schema.NullOr(Schema.String)),
        bank_name: Schema.optional(Schema.NullOr(Schema.String)),
        category: Schema.optional(Schema.NullOr(Schema.String)),
        country: Schema.optional(Schema.NullOr(Schema.String)),
        fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
        last4: Schema.optional(Schema.NullOr(Schema.String)),
        routing_number: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    alipay: Schema.optional(
      Schema.Struct({
        data_string: Schema.optional(Schema.NullOr(Schema.String)),
        native_url: Schema.optional(Schema.NullOr(Schema.String)),
        statement_descriptor: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    allow_redisplay: Schema.NullOr(
      Schema.Literals(["always", "limited", "unspecified"]),
    ),
    amount: Schema.NullOr(Schema.Number),
    au_becs_debit: Schema.optional(
      Schema.Struct({
        bsb_number: Schema.optional(Schema.NullOr(Schema.String)),
        fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
        last4: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    bancontact: Schema.optional(
      Schema.Struct({
        bank_code: Schema.optional(Schema.NullOr(Schema.String)),
        bank_name: Schema.optional(Schema.NullOr(Schema.String)),
        bic: Schema.optional(Schema.NullOr(Schema.String)),
        iban_last4: Schema.optional(Schema.NullOr(Schema.String)),
        preferred_language: Schema.optional(Schema.NullOr(Schema.String)),
        statement_descriptor: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    card: Schema.optional(
      Schema.Struct({
        address_line1_check: Schema.optional(Schema.NullOr(Schema.String)),
        address_zip_check: Schema.optional(Schema.NullOr(Schema.String)),
        brand: Schema.optional(Schema.NullOr(Schema.String)),
        country: Schema.optional(Schema.NullOr(Schema.String)),
        cvc_check: Schema.optional(Schema.NullOr(Schema.String)),
        description: Schema.optional(Schema.String),
        dynamic_last4: Schema.optional(Schema.NullOr(Schema.String)),
        exp_month: Schema.optional(Schema.NullOr(Schema.Number)),
        exp_year: Schema.optional(Schema.NullOr(Schema.Number)),
        fingerprint: Schema.optional(Schema.String),
        funding: Schema.optional(Schema.NullOr(Schema.String)),
        iin: Schema.optional(Schema.String),
        issuer: Schema.optional(Schema.String),
        last4: Schema.optional(Schema.NullOr(Schema.String)),
        name: Schema.optional(Schema.NullOr(Schema.String)),
        three_d_secure: Schema.optional(Schema.String),
        tokenization_method: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    card_present: Schema.optional(
      Schema.Struct({
        application_cryptogram: Schema.optional(Schema.String),
        application_preferred_name: Schema.optional(Schema.String),
        authorization_code: Schema.optional(Schema.NullOr(Schema.String)),
        authorization_response_code: Schema.optional(Schema.String),
        brand: Schema.optional(Schema.NullOr(Schema.String)),
        country: Schema.optional(Schema.NullOr(Schema.String)),
        cvm_type: Schema.optional(Schema.String),
        data_type: Schema.optional(Schema.NullOr(Schema.String)),
        dedicated_file_name: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        emv_auth_data: Schema.optional(Schema.String),
        evidence_customer_signature: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        evidence_transaction_certificate: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        exp_month: Schema.optional(Schema.NullOr(Schema.Number)),
        exp_year: Schema.optional(Schema.NullOr(Schema.Number)),
        fingerprint: Schema.optional(Schema.String),
        funding: Schema.optional(Schema.NullOr(Schema.String)),
        iin: Schema.optional(Schema.String),
        issuer: Schema.optional(Schema.String),
        last4: Schema.optional(Schema.NullOr(Schema.String)),
        pos_device_id: Schema.optional(Schema.NullOr(Schema.String)),
        pos_entry_mode: Schema.optional(Schema.String),
        read_method: Schema.optional(Schema.NullOr(Schema.String)),
        reader: Schema.optional(Schema.NullOr(Schema.String)),
        terminal_verification_results: Schema.optional(Schema.String),
        transaction_status_information: Schema.optional(Schema.String),
      }),
    ),
    client_secret: SensitiveOutputString,
    code_verification: Schema.optional(
      Schema.Struct({
        attempts_remaining: Schema.Number,
        status: Schema.String,
      }),
    ),
    created: Schema.Number,
    currency: Schema.NullOr(Schema.String),
    customer: Schema.optional(Schema.String),
    eps: Schema.optional(
      Schema.Struct({
        reference: Schema.optional(Schema.NullOr(Schema.String)),
        statement_descriptor: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    flow: Schema.String,
    giropay: Schema.optional(
      Schema.Struct({
        bank_code: Schema.optional(Schema.NullOr(Schema.String)),
        bank_name: Schema.optional(Schema.NullOr(Schema.String)),
        bic: Schema.optional(Schema.NullOr(Schema.String)),
        statement_descriptor: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    id: Schema.String,
    ideal: Schema.optional(
      Schema.Struct({
        bank: Schema.optional(Schema.NullOr(Schema.String)),
        bic: Schema.optional(Schema.NullOr(Schema.String)),
        iban_last4: Schema.optional(Schema.NullOr(Schema.String)),
        statement_descriptor: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    klarna: Schema.optional(
      Schema.Struct({
        background_image_url: Schema.optional(Schema.String),
        client_token: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        locale: Schema.optional(Schema.String),
        logo_url: Schema.optional(Schema.String),
        page_title: Schema.optional(Schema.String),
        pay_later_asset_urls_descriptive: Schema.optional(Schema.String),
        pay_later_asset_urls_standard: Schema.optional(Schema.String),
        pay_later_name: Schema.optional(Schema.String),
        pay_later_redirect_url: Schema.optional(Schema.String),
        pay_now_asset_urls_descriptive: Schema.optional(Schema.String),
        pay_now_asset_urls_standard: Schema.optional(Schema.String),
        pay_now_name: Schema.optional(Schema.String),
        pay_now_redirect_url: Schema.optional(Schema.String),
        pay_over_time_asset_urls_descriptive: Schema.optional(Schema.String),
        pay_over_time_asset_urls_standard: Schema.optional(Schema.String),
        pay_over_time_name: Schema.optional(Schema.String),
        pay_over_time_redirect_url: Schema.optional(Schema.String),
        payment_method_categories: Schema.optional(Schema.String),
        purchase_country: Schema.optional(Schema.String),
        purchase_type: Schema.optional(Schema.String),
        redirect_url: Schema.optional(Schema.String),
        shipping_delay: Schema.optional(Schema.Number),
        shipping_first_name: Schema.optional(Schema.String),
        shipping_last_name: Schema.optional(Schema.String),
      }),
    ),
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    multibanco: Schema.optional(
      Schema.Struct({
        entity: Schema.optional(Schema.NullOr(Schema.String)),
        reference: Schema.optional(Schema.NullOr(Schema.String)),
        refund_account_holder_address_city: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        refund_account_holder_address_country: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        refund_account_holder_address_line1: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        refund_account_holder_address_line2: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        refund_account_holder_address_postal_code: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        refund_account_holder_address_state: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        refund_account_holder_name: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        refund_iban: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    object: Schema.Literals(["source"]),
    owner: Schema.NullOr(
      Schema.Struct({
        address: Schema.NullOr(
          Schema.Struct({
            city: Schema.NullOr(Schema.String),
            country: Schema.NullOr(Schema.String),
            line1: Schema.NullOr(Schema.String),
            line2: Schema.NullOr(Schema.String),
            postal_code: Schema.NullOr(Schema.String),
            state: Schema.NullOr(Schema.String),
          }),
        ),
        email: Schema.NullOr(Schema.String),
        name: Schema.NullOr(Schema.String),
        phone: Schema.NullOr(Schema.String),
        verified_address: Schema.NullOr(
          Schema.Struct({
            city: Schema.NullOr(Schema.String),
            country: Schema.NullOr(Schema.String),
            line1: Schema.NullOr(Schema.String),
            line2: Schema.NullOr(Schema.String),
            postal_code: Schema.NullOr(Schema.String),
            state: Schema.NullOr(Schema.String),
          }),
        ),
        verified_email: Schema.NullOr(Schema.String),
        verified_name: Schema.NullOr(Schema.String),
        verified_phone: Schema.NullOr(Schema.String),
      }),
    ),
    p24: Schema.optional(
      Schema.Struct({
        reference: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    receiver: Schema.optional(
      Schema.Struct({
        address: Schema.NullOr(Schema.String),
        amount_charged: Schema.Number,
        amount_received: Schema.Number,
        amount_returned: Schema.Number,
        refund_attributes_method: Schema.String,
        refund_attributes_status: Schema.String,
      }),
    ),
    redirect: Schema.optional(
      Schema.Struct({
        failure_reason: Schema.NullOr(Schema.String),
        return_url: Schema.String,
        status: Schema.String,
        url: Schema.String,
      }),
    ),
    sepa_credit_transfer: Schema.optional(
      Schema.Struct({
        bank_name: Schema.optional(Schema.NullOr(Schema.String)),
        bic: Schema.optional(Schema.NullOr(Schema.String)),
        iban: Schema.optional(Schema.NullOr(Schema.String)),
        refund_account_holder_address_city: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        refund_account_holder_address_country: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        refund_account_holder_address_line1: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        refund_account_holder_address_line2: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        refund_account_holder_address_postal_code: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        refund_account_holder_address_state: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        refund_account_holder_name: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        refund_iban: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    sepa_debit: Schema.optional(
      Schema.Struct({
        bank_code: Schema.optional(Schema.NullOr(Schema.String)),
        branch_code: Schema.optional(Schema.NullOr(Schema.String)),
        country: Schema.optional(Schema.NullOr(Schema.String)),
        fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
        last4: Schema.optional(Schema.NullOr(Schema.String)),
        mandate_reference: Schema.optional(Schema.NullOr(Schema.String)),
        mandate_url: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    sofort: Schema.optional(
      Schema.Struct({
        bank_code: Schema.optional(Schema.NullOr(Schema.String)),
        bank_name: Schema.optional(Schema.NullOr(Schema.String)),
        bic: Schema.optional(Schema.NullOr(Schema.String)),
        country: Schema.optional(Schema.NullOr(Schema.String)),
        iban_last4: Schema.optional(Schema.NullOr(Schema.String)),
        preferred_language: Schema.optional(Schema.NullOr(Schema.String)),
        statement_descriptor: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    source_order: Schema.optional(
      Schema.Struct({
        amount: Schema.Number,
        currency: Schema.String,
        email: Schema.optional(Schema.String),
        items: Schema.NullOr(
          Schema.Array(
            Schema.Struct({
              amount: Schema.NullOr(Schema.Number),
              currency: Schema.NullOr(Schema.String),
              description: Schema.NullOr(Schema.String),
              parent: Schema.NullOr(Schema.String),
              quantity: Schema.optional(Schema.Number),
              type: Schema.NullOr(Schema.String),
            }),
          ),
        ),
        shipping: Schema.optional(
          Schema.Struct({
            address: Schema.optional(
              Schema.Struct({
                city: Schema.NullOr(Schema.String),
                country: Schema.NullOr(Schema.String),
                line1: Schema.NullOr(Schema.String),
                line2: Schema.NullOr(Schema.String),
                postal_code: Schema.NullOr(Schema.String),
                state: Schema.NullOr(Schema.String),
              }),
            ),
            carrier: Schema.optional(Schema.NullOr(Schema.String)),
            name: Schema.optional(Schema.String),
            phone: Schema.optional(Schema.NullOr(Schema.String)),
            tracking_number: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
      }),
    ),
    statement_descriptor: Schema.NullOr(Schema.String),
    status: Schema.String,
    three_d_secure: Schema.optional(
      Schema.Struct({
        address_line1_check: Schema.optional(Schema.NullOr(Schema.String)),
        address_zip_check: Schema.optional(Schema.NullOr(Schema.String)),
        authenticated: Schema.optional(Schema.NullOr(Schema.Boolean)),
        brand: Schema.optional(Schema.NullOr(Schema.String)),
        card: Schema.optional(Schema.NullOr(Schema.String)),
        country: Schema.optional(Schema.NullOr(Schema.String)),
        customer: Schema.optional(Schema.NullOr(Schema.String)),
        cvc_check: Schema.optional(Schema.NullOr(Schema.String)),
        description: Schema.optional(Schema.String),
        dynamic_last4: Schema.optional(Schema.NullOr(Schema.String)),
        exp_month: Schema.optional(Schema.NullOr(Schema.Number)),
        exp_year: Schema.optional(Schema.NullOr(Schema.Number)),
        fingerprint: Schema.optional(Schema.String),
        funding: Schema.optional(Schema.NullOr(Schema.String)),
        iin: Schema.optional(Schema.String),
        issuer: Schema.optional(Schema.String),
        last4: Schema.optional(Schema.NullOr(Schema.String)),
        name: Schema.optional(Schema.NullOr(Schema.String)),
        three_d_secure: Schema.optional(Schema.String),
        tokenization_method: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    type: Schema.Literals([
      "ach_credit_transfer",
      "ach_debit",
      "acss_debit",
      "alipay",
      "au_becs_debit",
      "bancontact",
      "card",
      "card_present",
      "eps",
      "giropay",
      "ideal",
      "klarna",
      "multibanco",
      "p24",
      "sepa_credit_transfer",
      "sepa_debit",
      "sofort",
      "three_d_secure",
      "wechat",
    ]),
    usage: Schema.NullOr(Schema.String),
    wechat: Schema.optional(
      Schema.Struct({
        prepay_id: Schema.optional(Schema.String),
        qr_code_url: Schema.optional(Schema.NullOr(Schema.String)),
        statement_descriptor: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<PostSourcesSourceVerifyOutput>;

// The operation
/**
 * <p>Verify a given source.</p>
 */
export const PostSourcesSourceVerify = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostSourcesSourceVerifyInput,
    outputSchema: PostSourcesSourceVerifyOutput,
  }),
);
