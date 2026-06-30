import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetAccountsAccountInput {
  account: string;
  expand?: string;
}
export const GetAccountsAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/accounts/{account}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetAccountsAccountInput>;

// Output Schema
export interface GetAccountsAccountOutput {
  business_profile?: {
    annual_revenue?: {
      amount: number | null;
      currency: string | null;
      fiscal_year_end: string | null;
    } | null;
    estimated_worker_count?: number | null;
    mcc: string | null;
    minority_owned_business_designation:
      | (
          | "lgbtqi_owned_business"
          | "minority_owned_business"
          | "none_of_these_apply"
          | "prefer_not_to_answer"
          | "women_owned_business"
        )[]
      | null;
    monthly_estimated_revenue?: { amount: number; currency: string };
    name: string | null;
    product_description?: string | null;
    support_address: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    } | null;
    support_email: string | null;
    support_phone: string | null;
    support_url: string | null;
    url: string | null;
  } | null;
  business_type?:
    | "company"
    | "government_entity"
    | "individual"
    | "non_profit"
    | null;
  capabilities?: {
    acss_debit_payments?: "active" | "inactive" | "pending";
    affirm_payments?: "active" | "inactive" | "pending";
    afterpay_clearpay_payments?: "active" | "inactive" | "pending";
    alma_payments?: "active" | "inactive" | "pending";
    amazon_pay_payments?: "active" | "inactive" | "pending";
    app_distribution?: "active" | "inactive" | "pending";
    au_becs_debit_payments?: "active" | "inactive" | "pending";
    bacs_debit_payments?: "active" | "inactive" | "pending";
    bancontact_payments?: "active" | "inactive" | "pending";
    bank_transfer_payments?: "active" | "inactive" | "pending";
    billie_payments?: "active" | "inactive" | "pending";
    bizum_payments?: "active" | "inactive" | "pending";
    blik_payments?: "active" | "inactive" | "pending";
    boleto_payments?: "active" | "inactive" | "pending";
    card_issuing?: "active" | "inactive" | "pending";
    card_payments?: "active" | "inactive" | "pending";
    cartes_bancaires_payments?: "active" | "inactive" | "pending";
    cashapp_payments?: "active" | "inactive" | "pending";
    crypto_payments?: "active" | "inactive" | "pending";
    eps_payments?: "active" | "inactive" | "pending";
    fpx_payments?: "active" | "inactive" | "pending";
    gb_bank_transfer_payments?: "active" | "inactive" | "pending";
    giropay_payments?: "active" | "inactive" | "pending";
    grabpay_payments?: "active" | "inactive" | "pending";
    ideal_payments?: "active" | "inactive" | "pending";
    india_international_payments?: "active" | "inactive" | "pending";
    jcb_payments?: "active" | "inactive" | "pending";
    jp_bank_transfer_payments?: "active" | "inactive" | "pending";
    kakao_pay_payments?: "active" | "inactive" | "pending";
    klarna_payments?: "active" | "inactive" | "pending";
    konbini_payments?: "active" | "inactive" | "pending";
    kr_card_payments?: "active" | "inactive" | "pending";
    legacy_payments?: "active" | "inactive" | "pending";
    link_payments?: "active" | "inactive" | "pending";
    mb_way_payments?: "active" | "inactive" | "pending";
    mobilepay_payments?: "active" | "inactive" | "pending";
    multibanco_payments?: "active" | "inactive" | "pending";
    mx_bank_transfer_payments?: "active" | "inactive" | "pending";
    naver_pay_payments?: "active" | "inactive" | "pending";
    nz_bank_account_becs_debit_payments?: "active" | "inactive" | "pending";
    oxxo_payments?: "active" | "inactive" | "pending";
    p24_payments?: "active" | "inactive" | "pending";
    pay_by_bank_payments?: "active" | "inactive" | "pending";
    payco_payments?: "active" | "inactive" | "pending";
    paynow_payments?: "active" | "inactive" | "pending";
    payto_payments?: "active" | "inactive" | "pending";
    pix_payments?: "active" | "inactive" | "pending";
    promptpay_payments?: "active" | "inactive" | "pending";
    revolut_pay_payments?: "active" | "inactive" | "pending";
    samsung_pay_payments?: "active" | "inactive" | "pending";
    satispay_payments?: "active" | "inactive" | "pending";
    scalapay_payments?: "active" | "inactive" | "pending";
    sepa_bank_transfer_payments?: "active" | "inactive" | "pending";
    sepa_debit_payments?: "active" | "inactive" | "pending";
    sofort_payments?: "active" | "inactive" | "pending";
    sunbit_payments?: "active" | "inactive" | "pending";
    swish_payments?: "active" | "inactive" | "pending";
    tax_reporting_us_1099_k?: "active" | "inactive" | "pending";
    tax_reporting_us_1099_misc?: "active" | "inactive" | "pending";
    transfers?: "active" | "inactive" | "pending";
    treasury?: "active" | "inactive" | "pending";
    twint_payments?: "active" | "inactive" | "pending";
    upi_payments?: "active" | "inactive" | "pending";
    us_bank_account_ach_payments?: "active" | "inactive" | "pending";
    us_bank_transfer_payments?: "active" | "inactive" | "pending";
    zip_payments?: "active" | "inactive" | "pending";
  };
  charges_enabled?: boolean;
  company?: {
    address?: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    };
    address_kana?: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
      town: string | null;
    } | null;
    address_kanji?: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
      town: string | null;
    } | null;
    directors_provided?: boolean;
    directorship_declaration?: {
      date: number | null;
      ip: string | null;
      user_agent: string | null;
    } | null;
    executives_provided?: boolean;
    export_license_id?: string;
    export_purpose_code?: string;
    name?: string | null;
    name_kana?: string | null;
    name_kanji?: string | null;
    owners_provided?: boolean;
    ownership_declaration?: {
      date: number | null;
      ip: string | null;
      user_agent: string | null;
    } | null;
    ownership_exemption_reason?:
      | "qualified_entity_exceeds_ownership_threshold"
      | "qualifies_as_financial_institution";
    phone?: string | null;
    registration_date?: {
      day: number | null;
      month: number | null;
      year: number | null;
    };
    representative_declaration?: {
      date: number | null;
      ip: string | null;
      user_agent: string | null;
    } | null;
    structure?:
      | "free_zone_establishment"
      | "free_zone_llc"
      | "government_instrumentality"
      | "governmental_unit"
      | "incorporated_non_profit"
      | "incorporated_partnership"
      | "limited_liability_partnership"
      | "llc"
      | "multi_member_llc"
      | "private_company"
      | "private_corporation"
      | "private_partnership"
      | "public_company"
      | "public_corporation"
      | "public_partnership"
      | "registered_charity"
      | "single_member_llc"
      | "sole_establishment"
      | "sole_proprietorship"
      | "tax_exempt_government_instrumentality"
      | "unincorporated_association"
      | "unincorporated_non_profit"
      | "unincorporated_partnership";
    tax_id_provided?: boolean;
    tax_id_registrar?: string;
    vat_id_provided?: boolean;
    verification?: {
      document: {
        back:
          | string
          | {
              created: number;
              expires_at: number | null;
              filename: string | null;
              id: string;
              links?: {
                data: {
                  created: number;
                  expired: boolean;
                  expires_at: number | null;
                  file: unknown;
                  id: string;
                  livemode: boolean;
                  metadata: Record<string, string>;
                  object: "file_link";
                  url: string | null;
                }[];
                has_more: boolean;
                object: "list";
                url: string;
              } | null;
              object: "file";
              purpose:
                | "account_requirement"
                | "additional_verification"
                | "business_icon"
                | "business_logo"
                | "customer_signature"
                | "dispute_evidence"
                | "document_provider_identity_document"
                | "finance_report_run"
                | "financial_account_statement"
                | "identity_document"
                | "identity_document_downloadable"
                | "issuing_regulatory_reporting"
                | "pci_document"
                | "platform_terms_of_service"
                | "selfie"
                | "sigma_scheduled_query"
                | "tax_document_user_upload"
                | "terminal_android_apk"
                | "terminal_reader_splashscreen"
                | "terminal_wifi_certificate"
                | "terminal_wifi_private_key";
              size: number;
              title: string | null;
              type: string | null;
              url: string | null;
            }
          | null;
        details: string | null;
        details_code: string | null;
        front:
          | string
          | {
              created: number;
              expires_at: number | null;
              filename: string | null;
              id: string;
              links?: {
                data: {
                  created: number;
                  expired: boolean;
                  expires_at: number | null;
                  file: unknown;
                  id: string;
                  livemode: boolean;
                  metadata: Record<string, string>;
                  object: "file_link";
                  url: string | null;
                }[];
                has_more: boolean;
                object: "list";
                url: string;
              } | null;
              object: "file";
              purpose:
                | "account_requirement"
                | "additional_verification"
                | "business_icon"
                | "business_logo"
                | "customer_signature"
                | "dispute_evidence"
                | "document_provider_identity_document"
                | "finance_report_run"
                | "financial_account_statement"
                | "identity_document"
                | "identity_document_downloadable"
                | "issuing_regulatory_reporting"
                | "pci_document"
                | "platform_terms_of_service"
                | "selfie"
                | "sigma_scheduled_query"
                | "tax_document_user_upload"
                | "terminal_android_apk"
                | "terminal_reader_splashscreen"
                | "terminal_wifi_certificate"
                | "terminal_wifi_private_key";
              size: number;
              title: string | null;
              type: string | null;
              url: string | null;
            }
          | null;
      };
    } | null;
  };
  controller?: {
    fees?: {
      payer:
        | "account"
        | "application"
        | "application_custom"
        | "application_express";
    };
    is_controller?: boolean;
    losses?: { payments: "application" | "stripe" };
    requirement_collection?: "application" | "stripe";
    stripe_dashboard?: { type: "express" | "full" | "none" };
    type: "account" | "application";
  };
  country?: string;
  created?: number;
  default_currency?: string;
  details_submitted?: boolean;
  email?: string | null;
  external_accounts?: {
    data: (
      | {
          account?: unknown;
          account_holder_name: string | null;
          account_holder_type: string | null;
          account_type: string | null;
          available_payout_methods?: ("instant" | "standard")[] | null;
          bank_name: string | null;
          country: string;
          currency: string;
          customer?: unknown;
          default_for_currency?: boolean | null;
          fingerprint: string | null;
          future_requirements?: unknown;
          id: string;
          last4: string;
          metadata?: Record<string, string> | null;
          object: "bank_account";
          requirements?: unknown;
          routing_number: string | null;
          status: string;
        }
      | {
          account?: unknown;
          address_city: string | null;
          address_country: string | null;
          address_line1: string | null;
          address_line1_check: string | null;
          address_line2: string | null;
          address_state: string | null;
          address_zip: string | null;
          address_zip_check: string | null;
          allow_redisplay?: "always" | "limited" | "unspecified" | null;
          available_payout_methods?: ("instant" | "standard")[] | null;
          brand: string;
          country: string | null;
          currency?: string | null;
          customer?: unknown;
          cvc_check: string | null;
          default_for_currency?: boolean | null;
          description?: string;
          dynamic_last4: string | null;
          exp_month: number;
          exp_year: number;
          fingerprint?: string | null;
          funding: string;
          id: string;
          iin?: string;
          issuer?: string;
          last4: string;
          metadata: Record<string, string> | null;
          name: string | null;
          networks?: { preferred: string | null };
          object: "card";
          regulated_status: "regulated" | "unregulated" | null;
          status?: string | null;
          tokenization_method: string | null;
        }
    )[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  future_requirements?: {
    alternatives:
      | { alternative_fields_due: string[]; original_fields_due: string[] }[]
      | null;
    current_deadline: number | null;
    currently_due: string[] | null;
    disabled_reason:
      | "action_required.requested_capabilities"
      | "listed"
      | "other"
      | "platform_paused"
      | "rejected.fraud"
      | "rejected.incomplete_verification"
      | "rejected.listed"
      | "rejected.other"
      | "rejected.platform_fraud"
      | "rejected.platform_other"
      | "rejected.platform_terms_of_service"
      | "rejected.terms_of_service"
      | "requirements.past_due"
      | "requirements.pending_verification"
      | "under_review"
      | null;
    errors:
      | {
          code:
            | "external_request"
            | "information_missing"
            | "invalid_address_city_state_postal_code"
            | "invalid_address_highway_contract_box"
            | "invalid_address_private_mailbox"
            | "invalid_business_profile_name"
            | "invalid_business_profile_name_denylisted"
            | "invalid_company_name_denylisted"
            | "invalid_dob_age_over_maximum"
            | "invalid_dob_age_under_18"
            | "invalid_dob_age_under_minimum"
            | "invalid_product_description_length"
            | "invalid_product_description_url_match"
            | "invalid_representative_country"
            | "invalid_signator"
            | "invalid_statement_descriptor_business_mismatch"
            | "invalid_statement_descriptor_denylisted"
            | "invalid_statement_descriptor_length"
            | "invalid_statement_descriptor_prefix_denylisted"
            | "invalid_statement_descriptor_prefix_mismatch"
            | "invalid_street_address"
            | "invalid_tax_id"
            | "invalid_tax_id_format"
            | "invalid_tos_acceptance"
            | "invalid_url_denylisted"
            | "invalid_url_format"
            | "invalid_url_length"
            | "invalid_url_web_presence_detected"
            | "invalid_url_website_business_information_mismatch"
            | "invalid_url_website_empty"
            | "invalid_url_website_inaccessible"
            | "invalid_url_website_inaccessible_geoblocked"
            | "invalid_url_website_inaccessible_password_protected"
            | "invalid_url_website_incomplete"
            | "invalid_url_website_incomplete_cancellation_policy"
            | "invalid_url_website_incomplete_customer_service_details"
            | "invalid_url_website_incomplete_legal_restrictions"
            | "invalid_url_website_incomplete_refund_policy"
            | "invalid_url_website_incomplete_return_policy"
            | "invalid_url_website_incomplete_terms_and_conditions"
            | "invalid_url_website_incomplete_under_construction"
            | "invalid_url_website_other"
            | "invalid_value_other"
            | "unsupported_business_type"
            | "verification_directors_mismatch"
            | "verification_document_address_mismatch"
            | "verification_document_address_missing"
            | "verification_document_corrupt"
            | "verification_document_country_not_supported"
            | "verification_document_directors_mismatch"
            | "verification_document_dob_mismatch"
            | "verification_document_duplicate_type"
            | "verification_document_expired"
            | "verification_document_failed_copy"
            | "verification_document_failed_greyscale"
            | "verification_document_failed_other"
            | "verification_document_failed_test_mode"
            | "verification_document_fraudulent"
            | "verification_document_id_number_mismatch"
            | "verification_document_id_number_missing"
            | "verification_document_incomplete"
            | "verification_document_invalid"
            | "verification_document_issue_or_expiry_date_missing"
            | "verification_document_manipulated"
            | "verification_document_missing_back"
            | "verification_document_missing_front"
            | "verification_document_name_mismatch"
            | "verification_document_name_missing"
            | "verification_document_nationality_mismatch"
            | "verification_document_not_readable"
            | "verification_document_not_signed"
            | "verification_document_not_uploaded"
            | "verification_document_photo_mismatch"
            | "verification_document_too_large"
            | "verification_document_type_not_supported"
            | "verification_extraneous_directors"
            | "verification_failed_address_match"
            | "verification_failed_authorizer_authority"
            | "verification_failed_business_iec_number"
            | "verification_failed_document_match"
            | "verification_failed_id_number_match"
            | "verification_failed_keyed_identity"
            | "verification_failed_keyed_match"
            | "verification_failed_name_match"
            | "verification_failed_other"
            | "verification_failed_representative_authority"
            | "verification_failed_residential_address"
            | "verification_failed_tax_id_match"
            | "verification_failed_tax_id_not_issued"
            | "verification_legal_entity_structure_mismatch"
            | "verification_missing_directors"
            | "verification_missing_executives"
            | "verification_missing_owners"
            | "verification_rejected_ownership_exemption_reason"
            | "verification_requires_additional_memorandum_of_associations"
            | "verification_requires_additional_proof_of_registration"
            | "verification_supportability";
          reason: string;
          requirement: string;
        }[]
      | null;
    eventually_due: string[] | null;
    past_due: string[] | null;
    pending_verification: string[] | null;
  };
  groups?: { payments_pricing: string | null } | null;
  id: string;
  individual?: {
    account?: string;
    additional_tos_acceptances?: {
      account: {
        date: number | null;
        ip: string | null;
        user_agent: string | null;
      } | null;
    };
    address?: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    };
    address_kana?: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
      town: string | null;
    } | null;
    address_kanji?: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
      town: string | null;
    } | null;
    created: number;
    dob?: { day: number | null; month: number | null; year: number | null };
    email?: string | null;
    first_name?: string | null;
    first_name_kana?: string | null;
    first_name_kanji?: string | null;
    full_name_aliases?: string[];
    future_requirements?: unknown;
    gender?: string | null;
    id: string;
    id_number_provided?: boolean;
    id_number_secondary_provided?: boolean;
    last_name?: string | null;
    last_name_kana?: string | null;
    last_name_kanji?: string | null;
    maiden_name?: string | null;
    metadata?: Record<string, string>;
    nationality?: string | null;
    object: "person";
    phone?: string | null;
    political_exposure?: "existing" | "none";
    registered_address?: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    };
    relationship?: {
      authorizer: boolean | null;
      director: boolean | null;
      executive: boolean | null;
      legal_guardian: boolean | null;
      owner: boolean | null;
      percent_ownership: number | null;
      representative: boolean | null;
      title: string | null;
    };
    requirements?: unknown;
    ssn_last_4_provided?: boolean;
    us_cfpb_data?: {
      ethnicity_details: {
        ethnicity:
          | (
              | "cuban"
              | "hispanic_or_latino"
              | "mexican"
              | "not_hispanic_or_latino"
              | "other_hispanic_or_latino"
              | "prefer_not_to_answer"
              | "puerto_rican"
            )[]
          | null;
        ethnicity_other: string | null;
      } | null;
      race_details: {
        race:
          | (
              | "african_american"
              | "american_indian_or_alaska_native"
              | "asian"
              | "asian_indian"
              | "black_or_african_american"
              | "chinese"
              | "ethiopian"
              | "filipino"
              | "guamanian_or_chamorro"
              | "haitian"
              | "jamaican"
              | "japanese"
              | "korean"
              | "native_hawaiian"
              | "native_hawaiian_or_other_pacific_islander"
              | "nigerian"
              | "other_asian"
              | "other_black_or_african_american"
              | "other_pacific_islander"
              | "prefer_not_to_answer"
              | "samoan"
              | "somali"
              | "vietnamese"
              | "white"
            )[]
          | null;
        race_other: string | null;
      } | null;
      self_identified_gender: string | null;
    } | null;
    verification?: {
      additional_document?: {
        back:
          | string
          | {
              created: number;
              expires_at: number | null;
              filename: string | null;
              id: string;
              links?: {
                data: {
                  created: number;
                  expired: boolean;
                  expires_at: number | null;
                  file: unknown;
                  id: string;
                  livemode: boolean;
                  metadata: Record<string, string>;
                  object: "file_link";
                  url: string | null;
                }[];
                has_more: boolean;
                object: "list";
                url: string;
              } | null;
              object: "file";
              purpose:
                | "account_requirement"
                | "additional_verification"
                | "business_icon"
                | "business_logo"
                | "customer_signature"
                | "dispute_evidence"
                | "document_provider_identity_document"
                | "finance_report_run"
                | "financial_account_statement"
                | "identity_document"
                | "identity_document_downloadable"
                | "issuing_regulatory_reporting"
                | "pci_document"
                | "platform_terms_of_service"
                | "selfie"
                | "sigma_scheduled_query"
                | "tax_document_user_upload"
                | "terminal_android_apk"
                | "terminal_reader_splashscreen"
                | "terminal_wifi_certificate"
                | "terminal_wifi_private_key";
              size: number;
              title: string | null;
              type: string | null;
              url: string | null;
            }
          | null;
        details: string | null;
        details_code: string | null;
        front:
          | string
          | {
              created: number;
              expires_at: number | null;
              filename: string | null;
              id: string;
              links?: {
                data: {
                  created: number;
                  expired: boolean;
                  expires_at: number | null;
                  file: unknown;
                  id: string;
                  livemode: boolean;
                  metadata: Record<string, string>;
                  object: "file_link";
                  url: string | null;
                }[];
                has_more: boolean;
                object: "list";
                url: string;
              } | null;
              object: "file";
              purpose:
                | "account_requirement"
                | "additional_verification"
                | "business_icon"
                | "business_logo"
                | "customer_signature"
                | "dispute_evidence"
                | "document_provider_identity_document"
                | "finance_report_run"
                | "financial_account_statement"
                | "identity_document"
                | "identity_document_downloadable"
                | "issuing_regulatory_reporting"
                | "pci_document"
                | "platform_terms_of_service"
                | "selfie"
                | "sigma_scheduled_query"
                | "tax_document_user_upload"
                | "terminal_android_apk"
                | "terminal_reader_splashscreen"
                | "terminal_wifi_certificate"
                | "terminal_wifi_private_key";
              size: number;
              title: string | null;
              type: string | null;
              url: string | null;
            }
          | null;
      } | null;
      details?: string | null;
      details_code?: string | null;
      document?: {
        back:
          | string
          | {
              created: number;
              expires_at: number | null;
              filename: string | null;
              id: string;
              links?: {
                data: {
                  created: number;
                  expired: boolean;
                  expires_at: number | null;
                  file: unknown;
                  id: string;
                  livemode: boolean;
                  metadata: Record<string, string>;
                  object: "file_link";
                  url: string | null;
                }[];
                has_more: boolean;
                object: "list";
                url: string;
              } | null;
              object: "file";
              purpose:
                | "account_requirement"
                | "additional_verification"
                | "business_icon"
                | "business_logo"
                | "customer_signature"
                | "dispute_evidence"
                | "document_provider_identity_document"
                | "finance_report_run"
                | "financial_account_statement"
                | "identity_document"
                | "identity_document_downloadable"
                | "issuing_regulatory_reporting"
                | "pci_document"
                | "platform_terms_of_service"
                | "selfie"
                | "sigma_scheduled_query"
                | "tax_document_user_upload"
                | "terminal_android_apk"
                | "terminal_reader_splashscreen"
                | "terminal_wifi_certificate"
                | "terminal_wifi_private_key";
              size: number;
              title: string | null;
              type: string | null;
              url: string | null;
            }
          | null;
        details: string | null;
        details_code: string | null;
        front:
          | string
          | {
              created: number;
              expires_at: number | null;
              filename: string | null;
              id: string;
              links?: {
                data: {
                  created: number;
                  expired: boolean;
                  expires_at: number | null;
                  file: unknown;
                  id: string;
                  livemode: boolean;
                  metadata: Record<string, string>;
                  object: "file_link";
                  url: string | null;
                }[];
                has_more: boolean;
                object: "list";
                url: string;
              } | null;
              object: "file";
              purpose:
                | "account_requirement"
                | "additional_verification"
                | "business_icon"
                | "business_logo"
                | "customer_signature"
                | "dispute_evidence"
                | "document_provider_identity_document"
                | "finance_report_run"
                | "financial_account_statement"
                | "identity_document"
                | "identity_document_downloadable"
                | "issuing_regulatory_reporting"
                | "pci_document"
                | "platform_terms_of_service"
                | "selfie"
                | "sigma_scheduled_query"
                | "tax_document_user_upload"
                | "terminal_android_apk"
                | "terminal_reader_splashscreen"
                | "terminal_wifi_certificate"
                | "terminal_wifi_private_key";
              size: number;
              title: string | null;
              type: string | null;
              url: string | null;
            }
          | null;
      };
      status: string;
    };
  };
  metadata?: Record<string, string>;
  object: "account";
  payouts_enabled?: boolean;
  requirements?: {
    alternatives:
      | { alternative_fields_due: string[]; original_fields_due: string[] }[]
      | null;
    current_deadline: number | null;
    currently_due: string[] | null;
    disabled_reason:
      | "action_required.requested_capabilities"
      | "listed"
      | "other"
      | "platform_paused"
      | "rejected.fraud"
      | "rejected.incomplete_verification"
      | "rejected.listed"
      | "rejected.other"
      | "rejected.platform_fraud"
      | "rejected.platform_other"
      | "rejected.platform_terms_of_service"
      | "rejected.terms_of_service"
      | "requirements.past_due"
      | "requirements.pending_verification"
      | "under_review"
      | null;
    errors:
      | {
          code:
            | "external_request"
            | "information_missing"
            | "invalid_address_city_state_postal_code"
            | "invalid_address_highway_contract_box"
            | "invalid_address_private_mailbox"
            | "invalid_business_profile_name"
            | "invalid_business_profile_name_denylisted"
            | "invalid_company_name_denylisted"
            | "invalid_dob_age_over_maximum"
            | "invalid_dob_age_under_18"
            | "invalid_dob_age_under_minimum"
            | "invalid_product_description_length"
            | "invalid_product_description_url_match"
            | "invalid_representative_country"
            | "invalid_signator"
            | "invalid_statement_descriptor_business_mismatch"
            | "invalid_statement_descriptor_denylisted"
            | "invalid_statement_descriptor_length"
            | "invalid_statement_descriptor_prefix_denylisted"
            | "invalid_statement_descriptor_prefix_mismatch"
            | "invalid_street_address"
            | "invalid_tax_id"
            | "invalid_tax_id_format"
            | "invalid_tos_acceptance"
            | "invalid_url_denylisted"
            | "invalid_url_format"
            | "invalid_url_length"
            | "invalid_url_web_presence_detected"
            | "invalid_url_website_business_information_mismatch"
            | "invalid_url_website_empty"
            | "invalid_url_website_inaccessible"
            | "invalid_url_website_inaccessible_geoblocked"
            | "invalid_url_website_inaccessible_password_protected"
            | "invalid_url_website_incomplete"
            | "invalid_url_website_incomplete_cancellation_policy"
            | "invalid_url_website_incomplete_customer_service_details"
            | "invalid_url_website_incomplete_legal_restrictions"
            | "invalid_url_website_incomplete_refund_policy"
            | "invalid_url_website_incomplete_return_policy"
            | "invalid_url_website_incomplete_terms_and_conditions"
            | "invalid_url_website_incomplete_under_construction"
            | "invalid_url_website_other"
            | "invalid_value_other"
            | "unsupported_business_type"
            | "verification_directors_mismatch"
            | "verification_document_address_mismatch"
            | "verification_document_address_missing"
            | "verification_document_corrupt"
            | "verification_document_country_not_supported"
            | "verification_document_directors_mismatch"
            | "verification_document_dob_mismatch"
            | "verification_document_duplicate_type"
            | "verification_document_expired"
            | "verification_document_failed_copy"
            | "verification_document_failed_greyscale"
            | "verification_document_failed_other"
            | "verification_document_failed_test_mode"
            | "verification_document_fraudulent"
            | "verification_document_id_number_mismatch"
            | "verification_document_id_number_missing"
            | "verification_document_incomplete"
            | "verification_document_invalid"
            | "verification_document_issue_or_expiry_date_missing"
            | "verification_document_manipulated"
            | "verification_document_missing_back"
            | "verification_document_missing_front"
            | "verification_document_name_mismatch"
            | "verification_document_name_missing"
            | "verification_document_nationality_mismatch"
            | "verification_document_not_readable"
            | "verification_document_not_signed"
            | "verification_document_not_uploaded"
            | "verification_document_photo_mismatch"
            | "verification_document_too_large"
            | "verification_document_type_not_supported"
            | "verification_extraneous_directors"
            | "verification_failed_address_match"
            | "verification_failed_authorizer_authority"
            | "verification_failed_business_iec_number"
            | "verification_failed_document_match"
            | "verification_failed_id_number_match"
            | "verification_failed_keyed_identity"
            | "verification_failed_keyed_match"
            | "verification_failed_name_match"
            | "verification_failed_other"
            | "verification_failed_representative_authority"
            | "verification_failed_residential_address"
            | "verification_failed_tax_id_match"
            | "verification_failed_tax_id_not_issued"
            | "verification_legal_entity_structure_mismatch"
            | "verification_missing_directors"
            | "verification_missing_executives"
            | "verification_missing_owners"
            | "verification_rejected_ownership_exemption_reason"
            | "verification_requires_additional_memorandum_of_associations"
            | "verification_requires_additional_proof_of_registration"
            | "verification_supportability";
          reason: string;
          requirement: string;
        }[]
      | null;
    eventually_due: string[] | null;
    past_due: string[] | null;
    pending_verification: string[] | null;
  };
  settings?: unknown;
  tos_acceptance?: {
    date?: number | null;
    ip?: string | null;
    service_agreement?: string;
    user_agent?: string | null;
  };
  type?: "custom" | "express" | "none" | "standard";
}
export const GetAccountsAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    business_profile: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          annual_revenue: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                amount: Schema.NullOr(Schema.Number),
                currency: Schema.NullOr(Schema.String),
                fiscal_year_end: Schema.NullOr(Schema.String),
              }),
            ),
          ),
          estimated_worker_count: Schema.optional(Schema.NullOr(Schema.Number)),
          mcc: Schema.NullOr(Schema.String),
          minority_owned_business_designation: Schema.NullOr(
            Schema.Array(
              Schema.Literals([
                "lgbtqi_owned_business",
                "minority_owned_business",
                "none_of_these_apply",
                "prefer_not_to_answer",
                "women_owned_business",
              ]),
            ),
          ),
          monthly_estimated_revenue: Schema.optional(
            Schema.Struct({
              amount: Schema.Number,
              currency: Schema.String,
            }),
          ),
          name: Schema.NullOr(Schema.String),
          product_description: Schema.optional(Schema.NullOr(Schema.String)),
          support_address: Schema.NullOr(
            Schema.Struct({
              city: Schema.NullOr(Schema.String),
              country: Schema.NullOr(Schema.String),
              line1: Schema.NullOr(Schema.String),
              line2: Schema.NullOr(Schema.String),
              postal_code: Schema.NullOr(Schema.String),
              state: Schema.NullOr(Schema.String),
            }),
          ),
          support_email: Schema.NullOr(Schema.String),
          support_phone: Schema.NullOr(Schema.String),
          support_url: Schema.NullOr(Schema.String),
          url: Schema.NullOr(Schema.String),
        }),
      ),
    ),
    business_type: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "company",
          "government_entity",
          "individual",
          "non_profit",
        ]),
      ),
    ),
    capabilities: Schema.optional(
      Schema.Struct({
        acss_debit_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        affirm_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        afterpay_clearpay_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        alma_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        amazon_pay_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        app_distribution: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        au_becs_debit_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        bacs_debit_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        bancontact_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        bank_transfer_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        billie_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        bizum_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        blik_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        boleto_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        card_issuing: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        card_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        cartes_bancaires_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        cashapp_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        crypto_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        eps_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        fpx_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        gb_bank_transfer_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        giropay_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        grabpay_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        ideal_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        india_international_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        jcb_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        jp_bank_transfer_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        kakao_pay_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        klarna_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        konbini_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        kr_card_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        legacy_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        link_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        mb_way_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        mobilepay_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        multibanco_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        mx_bank_transfer_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        naver_pay_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        nz_bank_account_becs_debit_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        oxxo_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        p24_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        pay_by_bank_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        payco_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        paynow_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        payto_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        pix_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        promptpay_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        revolut_pay_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        samsung_pay_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        satispay_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        scalapay_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        sepa_bank_transfer_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        sepa_debit_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        sofort_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        sunbit_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        swish_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        tax_reporting_us_1099_k: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        tax_reporting_us_1099_misc: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        transfers: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        treasury: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        twint_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        upi_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        us_bank_account_ach_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        us_bank_transfer_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
        zip_payments: Schema.optional(
          Schema.Literals(["active", "inactive", "pending"]),
        ),
      }),
    ),
    charges_enabled: Schema.optional(Schema.Boolean),
    company: Schema.optional(
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
        address_kana: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              city: Schema.NullOr(Schema.String),
              country: Schema.NullOr(Schema.String),
              line1: Schema.NullOr(Schema.String),
              line2: Schema.NullOr(Schema.String),
              postal_code: Schema.NullOr(Schema.String),
              state: Schema.NullOr(Schema.String),
              town: Schema.NullOr(Schema.String),
            }),
          ),
        ),
        address_kanji: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              city: Schema.NullOr(Schema.String),
              country: Schema.NullOr(Schema.String),
              line1: Schema.NullOr(Schema.String),
              line2: Schema.NullOr(Schema.String),
              postal_code: Schema.NullOr(Schema.String),
              state: Schema.NullOr(Schema.String),
              town: Schema.NullOr(Schema.String),
            }),
          ),
        ),
        directors_provided: Schema.optional(Schema.Boolean),
        directorship_declaration: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              date: Schema.NullOr(Schema.Number),
              ip: Schema.NullOr(Schema.String),
              user_agent: Schema.NullOr(Schema.String),
            }),
          ),
        ),
        executives_provided: Schema.optional(Schema.Boolean),
        export_license_id: Schema.optional(Schema.String),
        export_purpose_code: Schema.optional(Schema.String),
        name: Schema.optional(Schema.NullOr(Schema.String)),
        name_kana: Schema.optional(Schema.NullOr(Schema.String)),
        name_kanji: Schema.optional(Schema.NullOr(Schema.String)),
        owners_provided: Schema.optional(Schema.Boolean),
        ownership_declaration: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              date: Schema.NullOr(Schema.Number),
              ip: Schema.NullOr(Schema.String),
              user_agent: Schema.NullOr(Schema.String),
            }),
          ),
        ),
        ownership_exemption_reason: Schema.optional(
          Schema.Literals([
            "qualified_entity_exceeds_ownership_threshold",
            "qualifies_as_financial_institution",
          ]),
        ),
        phone: Schema.optional(Schema.NullOr(Schema.String)),
        registration_date: Schema.optional(
          Schema.Struct({
            day: Schema.NullOr(Schema.Number),
            month: Schema.NullOr(Schema.Number),
            year: Schema.NullOr(Schema.Number),
          }),
        ),
        representative_declaration: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              date: Schema.NullOr(Schema.Number),
              ip: Schema.NullOr(Schema.String),
              user_agent: Schema.NullOr(Schema.String),
            }),
          ),
        ),
        structure: Schema.optional(
          Schema.Literals([
            "free_zone_establishment",
            "free_zone_llc",
            "government_instrumentality",
            "governmental_unit",
            "incorporated_non_profit",
            "incorporated_partnership",
            "limited_liability_partnership",
            "llc",
            "multi_member_llc",
            "private_company",
            "private_corporation",
            "private_partnership",
            "public_company",
            "public_corporation",
            "public_partnership",
            "registered_charity",
            "single_member_llc",
            "sole_establishment",
            "sole_proprietorship",
            "tax_exempt_government_instrumentality",
            "unincorporated_association",
            "unincorporated_non_profit",
            "unincorporated_partnership",
          ]),
        ),
        tax_id_provided: Schema.optional(Schema.Boolean),
        tax_id_registrar: Schema.optional(Schema.String),
        vat_id_provided: Schema.optional(Schema.Boolean),
        verification: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              document: Schema.Struct({
                back: Schema.NullOr(
                  Schema.Union([
                    Schema.String,
                    Schema.Struct({
                      created: Schema.Number,
                      expires_at: Schema.NullOr(Schema.Number),
                      filename: Schema.NullOr(Schema.String),
                      id: Schema.String,
                      links: Schema.optional(
                        Schema.NullOr(
                          Schema.Struct({
                            data: Schema.Array(
                              Schema.Struct({
                                created: Schema.Number,
                                expired: Schema.Boolean,
                                expires_at: Schema.NullOr(Schema.Number),
                                file: Schema.Unknown,
                                id: Schema.String,
                                livemode: Schema.Boolean,
                                metadata: Schema.Record(
                                  Schema.String,
                                  Schema.String,
                                ),
                                object: Schema.Literals(["file_link"]),
                                url: Schema.NullOr(Schema.String),
                              }),
                            ),
                            has_more: Schema.Boolean,
                            object: Schema.Literals(["list"]),
                            url: Schema.String,
                          }),
                        ),
                      ),
                      object: Schema.Literals(["file"]),
                      purpose: Schema.Literals([
                        "account_requirement",
                        "additional_verification",
                        "business_icon",
                        "business_logo",
                        "customer_signature",
                        "dispute_evidence",
                        "document_provider_identity_document",
                        "finance_report_run",
                        "financial_account_statement",
                        "identity_document",
                        "identity_document_downloadable",
                        "issuing_regulatory_reporting",
                        "pci_document",
                        "platform_terms_of_service",
                        "selfie",
                        "sigma_scheduled_query",
                        "tax_document_user_upload",
                        "terminal_android_apk",
                        "terminal_reader_splashscreen",
                        "terminal_wifi_certificate",
                        "terminal_wifi_private_key",
                      ]),
                      size: Schema.Number,
                      title: Schema.NullOr(Schema.String),
                      type: Schema.NullOr(Schema.String),
                      url: Schema.NullOr(Schema.String),
                    }),
                  ]),
                ),
                details: Schema.NullOr(Schema.String),
                details_code: Schema.NullOr(Schema.String),
                front: Schema.NullOr(
                  Schema.Union([
                    Schema.String,
                    Schema.Struct({
                      created: Schema.Number,
                      expires_at: Schema.NullOr(Schema.Number),
                      filename: Schema.NullOr(Schema.String),
                      id: Schema.String,
                      links: Schema.optional(
                        Schema.NullOr(
                          Schema.Struct({
                            data: Schema.Array(
                              Schema.Struct({
                                created: Schema.Number,
                                expired: Schema.Boolean,
                                expires_at: Schema.NullOr(Schema.Number),
                                file: Schema.Unknown,
                                id: Schema.String,
                                livemode: Schema.Boolean,
                                metadata: Schema.Record(
                                  Schema.String,
                                  Schema.String,
                                ),
                                object: Schema.Literals(["file_link"]),
                                url: Schema.NullOr(Schema.String),
                              }),
                            ),
                            has_more: Schema.Boolean,
                            object: Schema.Literals(["list"]),
                            url: Schema.String,
                          }),
                        ),
                      ),
                      object: Schema.Literals(["file"]),
                      purpose: Schema.Literals([
                        "account_requirement",
                        "additional_verification",
                        "business_icon",
                        "business_logo",
                        "customer_signature",
                        "dispute_evidence",
                        "document_provider_identity_document",
                        "finance_report_run",
                        "financial_account_statement",
                        "identity_document",
                        "identity_document_downloadable",
                        "issuing_regulatory_reporting",
                        "pci_document",
                        "platform_terms_of_service",
                        "selfie",
                        "sigma_scheduled_query",
                        "tax_document_user_upload",
                        "terminal_android_apk",
                        "terminal_reader_splashscreen",
                        "terminal_wifi_certificate",
                        "terminal_wifi_private_key",
                      ]),
                      size: Schema.Number,
                      title: Schema.NullOr(Schema.String),
                      type: Schema.NullOr(Schema.String),
                      url: Schema.NullOr(Schema.String),
                    }),
                  ]),
                ),
              }),
            }),
          ),
        ),
      }),
    ),
    controller: Schema.optional(
      Schema.Struct({
        fees: Schema.optional(
          Schema.Struct({
            payer: Schema.Literals([
              "account",
              "application",
              "application_custom",
              "application_express",
            ]),
          }),
        ),
        is_controller: Schema.optional(Schema.Boolean),
        losses: Schema.optional(
          Schema.Struct({
            payments: Schema.Literals(["application", "stripe"]),
          }),
        ),
        requirement_collection: Schema.optional(
          Schema.Literals(["application", "stripe"]),
        ),
        stripe_dashboard: Schema.optional(
          Schema.Struct({
            type: Schema.Literals(["express", "full", "none"]),
          }),
        ),
        type: Schema.Literals(["account", "application"]),
      }),
    ),
    country: Schema.optional(Schema.String),
    created: Schema.optional(Schema.Number),
    default_currency: Schema.optional(Schema.String),
    details_submitted: Schema.optional(Schema.Boolean),
    email: Schema.optional(Schema.NullOr(Schema.String)),
    external_accounts: Schema.optional(
      Schema.Struct({
        data: Schema.Array(
          Schema.Union([
            Schema.Struct({
              account: Schema.optional(Schema.Unknown),
              account_holder_name: Schema.NullOr(Schema.String),
              account_holder_type: Schema.NullOr(Schema.String),
              account_type: Schema.NullOr(Schema.String),
              available_payout_methods: Schema.optional(
                Schema.NullOr(
                  Schema.Array(Schema.Literals(["instant", "standard"])),
                ),
              ),
              bank_name: Schema.NullOr(Schema.String),
              country: Schema.String,
              currency: Schema.String,
              customer: Schema.optional(Schema.Unknown),
              default_for_currency: Schema.optional(
                Schema.NullOr(Schema.Boolean),
              ),
              fingerprint: Schema.NullOr(Schema.String),
              future_requirements: Schema.optional(Schema.Unknown),
              id: Schema.String,
              last4: Schema.String,
              metadata: Schema.optional(
                Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
              ),
              object: Schema.Literals(["bank_account"]),
              requirements: Schema.optional(Schema.Unknown),
              routing_number: Schema.NullOr(Schema.String),
              status: Schema.String,
            }),
            Schema.Struct({
              account: Schema.optional(Schema.Unknown),
              address_city: Schema.NullOr(Schema.String),
              address_country: Schema.NullOr(Schema.String),
              address_line1: Schema.NullOr(Schema.String),
              address_line1_check: Schema.NullOr(Schema.String),
              address_line2: Schema.NullOr(Schema.String),
              address_state: Schema.NullOr(Schema.String),
              address_zip: Schema.NullOr(Schema.String),
              address_zip_check: Schema.NullOr(Schema.String),
              allow_redisplay: Schema.optional(
                Schema.NullOr(
                  Schema.Literals(["always", "limited", "unspecified"]),
                ),
              ),
              available_payout_methods: Schema.optional(
                Schema.NullOr(
                  Schema.Array(Schema.Literals(["instant", "standard"])),
                ),
              ),
              brand: Schema.String,
              country: Schema.NullOr(Schema.String),
              currency: Schema.optional(Schema.NullOr(Schema.String)),
              customer: Schema.optional(Schema.Unknown),
              cvc_check: Schema.NullOr(Schema.String),
              default_for_currency: Schema.optional(
                Schema.NullOr(Schema.Boolean),
              ),
              description: Schema.optional(Schema.String),
              dynamic_last4: Schema.NullOr(Schema.String),
              exp_month: Schema.Number,
              exp_year: Schema.Number,
              fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
              funding: Schema.String,
              id: Schema.String,
              iin: Schema.optional(Schema.String),
              issuer: Schema.optional(Schema.String),
              last4: Schema.String,
              metadata: Schema.NullOr(
                Schema.Record(Schema.String, Schema.String),
              ),
              name: Schema.NullOr(Schema.String),
              networks: Schema.optional(
                Schema.Struct({
                  preferred: Schema.NullOr(Schema.String),
                }),
              ),
              object: Schema.Literals(["card"]),
              regulated_status: Schema.NullOr(
                Schema.Literals(["regulated", "unregulated"]),
              ),
              status: Schema.optional(Schema.NullOr(Schema.String)),
              tokenization_method: Schema.NullOr(Schema.String),
            }),
          ]),
        ),
        has_more: Schema.Boolean,
        object: Schema.Literals(["list"]),
        url: Schema.String,
      }),
    ),
    future_requirements: Schema.optional(
      Schema.Struct({
        alternatives: Schema.NullOr(
          Schema.Array(
            Schema.Struct({
              alternative_fields_due: Schema.Array(Schema.String),
              original_fields_due: Schema.Array(Schema.String),
            }),
          ),
        ),
        current_deadline: Schema.NullOr(Schema.Number),
        currently_due: Schema.NullOr(Schema.Array(Schema.String)),
        disabled_reason: Schema.NullOr(
          Schema.Literals([
            "action_required.requested_capabilities",
            "listed",
            "other",
            "platform_paused",
            "rejected.fraud",
            "rejected.incomplete_verification",
            "rejected.listed",
            "rejected.other",
            "rejected.platform_fraud",
            "rejected.platform_other",
            "rejected.platform_terms_of_service",
            "rejected.terms_of_service",
            "requirements.past_due",
            "requirements.pending_verification",
            "under_review",
          ]),
        ),
        errors: Schema.NullOr(
          Schema.Array(
            Schema.Struct({
              code: Schema.Literals([
                "external_request",
                "information_missing",
                "invalid_address_city_state_postal_code",
                "invalid_address_highway_contract_box",
                "invalid_address_private_mailbox",
                "invalid_business_profile_name",
                "invalid_business_profile_name_denylisted",
                "invalid_company_name_denylisted",
                "invalid_dob_age_over_maximum",
                "invalid_dob_age_under_18",
                "invalid_dob_age_under_minimum",
                "invalid_product_description_length",
                "invalid_product_description_url_match",
                "invalid_representative_country",
                "invalid_signator",
                "invalid_statement_descriptor_business_mismatch",
                "invalid_statement_descriptor_denylisted",
                "invalid_statement_descriptor_length",
                "invalid_statement_descriptor_prefix_denylisted",
                "invalid_statement_descriptor_prefix_mismatch",
                "invalid_street_address",
                "invalid_tax_id",
                "invalid_tax_id_format",
                "invalid_tos_acceptance",
                "invalid_url_denylisted",
                "invalid_url_format",
                "invalid_url_length",
                "invalid_url_web_presence_detected",
                "invalid_url_website_business_information_mismatch",
                "invalid_url_website_empty",
                "invalid_url_website_inaccessible",
                "invalid_url_website_inaccessible_geoblocked",
                "invalid_url_website_inaccessible_password_protected",
                "invalid_url_website_incomplete",
                "invalid_url_website_incomplete_cancellation_policy",
                "invalid_url_website_incomplete_customer_service_details",
                "invalid_url_website_incomplete_legal_restrictions",
                "invalid_url_website_incomplete_refund_policy",
                "invalid_url_website_incomplete_return_policy",
                "invalid_url_website_incomplete_terms_and_conditions",
                "invalid_url_website_incomplete_under_construction",
                "invalid_url_website_other",
                "invalid_value_other",
                "unsupported_business_type",
                "verification_directors_mismatch",
                "verification_document_address_mismatch",
                "verification_document_address_missing",
                "verification_document_corrupt",
                "verification_document_country_not_supported",
                "verification_document_directors_mismatch",
                "verification_document_dob_mismatch",
                "verification_document_duplicate_type",
                "verification_document_expired",
                "verification_document_failed_copy",
                "verification_document_failed_greyscale",
                "verification_document_failed_other",
                "verification_document_failed_test_mode",
                "verification_document_fraudulent",
                "verification_document_id_number_mismatch",
                "verification_document_id_number_missing",
                "verification_document_incomplete",
                "verification_document_invalid",
                "verification_document_issue_or_expiry_date_missing",
                "verification_document_manipulated",
                "verification_document_missing_back",
                "verification_document_missing_front",
                "verification_document_name_mismatch",
                "verification_document_name_missing",
                "verification_document_nationality_mismatch",
                "verification_document_not_readable",
                "verification_document_not_signed",
                "verification_document_not_uploaded",
                "verification_document_photo_mismatch",
                "verification_document_too_large",
                "verification_document_type_not_supported",
                "verification_extraneous_directors",
                "verification_failed_address_match",
                "verification_failed_authorizer_authority",
                "verification_failed_business_iec_number",
                "verification_failed_document_match",
                "verification_failed_id_number_match",
                "verification_failed_keyed_identity",
                "verification_failed_keyed_match",
                "verification_failed_name_match",
                "verification_failed_other",
                "verification_failed_representative_authority",
                "verification_failed_residential_address",
                "verification_failed_tax_id_match",
                "verification_failed_tax_id_not_issued",
                "verification_legal_entity_structure_mismatch",
                "verification_missing_directors",
                "verification_missing_executives",
                "verification_missing_owners",
                "verification_rejected_ownership_exemption_reason",
                "verification_requires_additional_memorandum_of_associations",
                "verification_requires_additional_proof_of_registration",
                "verification_supportability",
              ]),
              reason: Schema.String,
              requirement: Schema.String,
            }),
          ),
        ),
        eventually_due: Schema.NullOr(Schema.Array(Schema.String)),
        past_due: Schema.NullOr(Schema.Array(Schema.String)),
        pending_verification: Schema.NullOr(Schema.Array(Schema.String)),
      }),
    ),
    groups: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          payments_pricing: Schema.NullOr(Schema.String),
        }),
      ),
    ),
    id: Schema.String,
    individual: Schema.optional(
      Schema.Struct({
        account: Schema.optional(Schema.String),
        additional_tos_acceptances: Schema.optional(
          Schema.Struct({
            account: Schema.NullOr(
              Schema.Struct({
                date: Schema.NullOr(Schema.Number),
                ip: Schema.NullOr(Schema.String),
                user_agent: Schema.NullOr(Schema.String),
              }),
            ),
          }),
        ),
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
        address_kana: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              city: Schema.NullOr(Schema.String),
              country: Schema.NullOr(Schema.String),
              line1: Schema.NullOr(Schema.String),
              line2: Schema.NullOr(Schema.String),
              postal_code: Schema.NullOr(Schema.String),
              state: Schema.NullOr(Schema.String),
              town: Schema.NullOr(Schema.String),
            }),
          ),
        ),
        address_kanji: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              city: Schema.NullOr(Schema.String),
              country: Schema.NullOr(Schema.String),
              line1: Schema.NullOr(Schema.String),
              line2: Schema.NullOr(Schema.String),
              postal_code: Schema.NullOr(Schema.String),
              state: Schema.NullOr(Schema.String),
              town: Schema.NullOr(Schema.String),
            }),
          ),
        ),
        created: Schema.Number,
        dob: Schema.optional(
          Schema.Struct({
            day: Schema.NullOr(Schema.Number),
            month: Schema.NullOr(Schema.Number),
            year: Schema.NullOr(Schema.Number),
          }),
        ),
        email: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.NullOr(Schema.String)),
        first_name_kana: Schema.optional(Schema.NullOr(Schema.String)),
        first_name_kanji: Schema.optional(Schema.NullOr(Schema.String)),
        full_name_aliases: Schema.optional(Schema.Array(Schema.String)),
        future_requirements: Schema.optional(Schema.Unknown),
        gender: Schema.optional(Schema.NullOr(Schema.String)),
        id: Schema.String,
        id_number_provided: Schema.optional(Schema.Boolean),
        id_number_secondary_provided: Schema.optional(Schema.Boolean),
        last_name: Schema.optional(Schema.NullOr(Schema.String)),
        last_name_kana: Schema.optional(Schema.NullOr(Schema.String)),
        last_name_kanji: Schema.optional(Schema.NullOr(Schema.String)),
        maiden_name: Schema.optional(Schema.NullOr(Schema.String)),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        nationality: Schema.optional(Schema.NullOr(Schema.String)),
        object: Schema.Literals(["person"]),
        phone: Schema.optional(Schema.NullOr(Schema.String)),
        political_exposure: Schema.optional(
          Schema.Literals(["existing", "none"]),
        ),
        registered_address: Schema.optional(
          Schema.Struct({
            city: Schema.NullOr(Schema.String),
            country: Schema.NullOr(Schema.String),
            line1: Schema.NullOr(Schema.String),
            line2: Schema.NullOr(Schema.String),
            postal_code: Schema.NullOr(Schema.String),
            state: Schema.NullOr(Schema.String),
          }),
        ),
        relationship: Schema.optional(
          Schema.Struct({
            authorizer: Schema.NullOr(Schema.Boolean),
            director: Schema.NullOr(Schema.Boolean),
            executive: Schema.NullOr(Schema.Boolean),
            legal_guardian: Schema.NullOr(Schema.Boolean),
            owner: Schema.NullOr(Schema.Boolean),
            percent_ownership: Schema.NullOr(Schema.Number),
            representative: Schema.NullOr(Schema.Boolean),
            title: Schema.NullOr(Schema.String),
          }),
        ),
        requirements: Schema.optional(Schema.Unknown),
        ssn_last_4_provided: Schema.optional(Schema.Boolean),
        us_cfpb_data: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              ethnicity_details: Schema.NullOr(
                Schema.Struct({
                  ethnicity: Schema.NullOr(
                    Schema.Array(
                      Schema.Literals([
                        "cuban",
                        "hispanic_or_latino",
                        "mexican",
                        "not_hispanic_or_latino",
                        "other_hispanic_or_latino",
                        "prefer_not_to_answer",
                        "puerto_rican",
                      ]),
                    ),
                  ),
                  ethnicity_other: Schema.NullOr(Schema.String),
                }),
              ),
              race_details: Schema.NullOr(
                Schema.Struct({
                  race: Schema.NullOr(
                    Schema.Array(
                      Schema.Literals([
                        "african_american",
                        "american_indian_or_alaska_native",
                        "asian",
                        "asian_indian",
                        "black_or_african_american",
                        "chinese",
                        "ethiopian",
                        "filipino",
                        "guamanian_or_chamorro",
                        "haitian",
                        "jamaican",
                        "japanese",
                        "korean",
                        "native_hawaiian",
                        "native_hawaiian_or_other_pacific_islander",
                        "nigerian",
                        "other_asian",
                        "other_black_or_african_american",
                        "other_pacific_islander",
                        "prefer_not_to_answer",
                        "samoan",
                        "somali",
                        "vietnamese",
                        "white",
                      ]),
                    ),
                  ),
                  race_other: Schema.NullOr(Schema.String),
                }),
              ),
              self_identified_gender: Schema.NullOr(Schema.String),
            }),
          ),
        ),
        verification: Schema.optional(
          Schema.Struct({
            additional_document: Schema.optional(
              Schema.NullOr(
                Schema.Struct({
                  back: Schema.NullOr(
                    Schema.Union([
                      Schema.String,
                      Schema.Struct({
                        created: Schema.Number,
                        expires_at: Schema.NullOr(Schema.Number),
                        filename: Schema.NullOr(Schema.String),
                        id: Schema.String,
                        links: Schema.optional(
                          Schema.NullOr(
                            Schema.Struct({
                              data: Schema.Array(
                                Schema.Struct({
                                  created: Schema.Number,
                                  expired: Schema.Boolean,
                                  expires_at: Schema.NullOr(Schema.Number),
                                  file: Schema.Unknown,
                                  id: Schema.String,
                                  livemode: Schema.Boolean,
                                  metadata: Schema.Record(
                                    Schema.String,
                                    Schema.String,
                                  ),
                                  object: Schema.Literals(["file_link"]),
                                  url: Schema.NullOr(Schema.String),
                                }),
                              ),
                              has_more: Schema.Boolean,
                              object: Schema.Literals(["list"]),
                              url: Schema.String,
                            }),
                          ),
                        ),
                        object: Schema.Literals(["file"]),
                        purpose: Schema.Literals([
                          "account_requirement",
                          "additional_verification",
                          "business_icon",
                          "business_logo",
                          "customer_signature",
                          "dispute_evidence",
                          "document_provider_identity_document",
                          "finance_report_run",
                          "financial_account_statement",
                          "identity_document",
                          "identity_document_downloadable",
                          "issuing_regulatory_reporting",
                          "pci_document",
                          "platform_terms_of_service",
                          "selfie",
                          "sigma_scheduled_query",
                          "tax_document_user_upload",
                          "terminal_android_apk",
                          "terminal_reader_splashscreen",
                          "terminal_wifi_certificate",
                          "terminal_wifi_private_key",
                        ]),
                        size: Schema.Number,
                        title: Schema.NullOr(Schema.String),
                        type: Schema.NullOr(Schema.String),
                        url: Schema.NullOr(Schema.String),
                      }),
                    ]),
                  ),
                  details: Schema.NullOr(Schema.String),
                  details_code: Schema.NullOr(Schema.String),
                  front: Schema.NullOr(
                    Schema.Union([
                      Schema.String,
                      Schema.Struct({
                        created: Schema.Number,
                        expires_at: Schema.NullOr(Schema.Number),
                        filename: Schema.NullOr(Schema.String),
                        id: Schema.String,
                        links: Schema.optional(
                          Schema.NullOr(
                            Schema.Struct({
                              data: Schema.Array(
                                Schema.Struct({
                                  created: Schema.Number,
                                  expired: Schema.Boolean,
                                  expires_at: Schema.NullOr(Schema.Number),
                                  file: Schema.Unknown,
                                  id: Schema.String,
                                  livemode: Schema.Boolean,
                                  metadata: Schema.Record(
                                    Schema.String,
                                    Schema.String,
                                  ),
                                  object: Schema.Literals(["file_link"]),
                                  url: Schema.NullOr(Schema.String),
                                }),
                              ),
                              has_more: Schema.Boolean,
                              object: Schema.Literals(["list"]),
                              url: Schema.String,
                            }),
                          ),
                        ),
                        object: Schema.Literals(["file"]),
                        purpose: Schema.Literals([
                          "account_requirement",
                          "additional_verification",
                          "business_icon",
                          "business_logo",
                          "customer_signature",
                          "dispute_evidence",
                          "document_provider_identity_document",
                          "finance_report_run",
                          "financial_account_statement",
                          "identity_document",
                          "identity_document_downloadable",
                          "issuing_regulatory_reporting",
                          "pci_document",
                          "platform_terms_of_service",
                          "selfie",
                          "sigma_scheduled_query",
                          "tax_document_user_upload",
                          "terminal_android_apk",
                          "terminal_reader_splashscreen",
                          "terminal_wifi_certificate",
                          "terminal_wifi_private_key",
                        ]),
                        size: Schema.Number,
                        title: Schema.NullOr(Schema.String),
                        type: Schema.NullOr(Schema.String),
                        url: Schema.NullOr(Schema.String),
                      }),
                    ]),
                  ),
                }),
              ),
            ),
            details: Schema.optional(Schema.NullOr(Schema.String)),
            details_code: Schema.optional(Schema.NullOr(Schema.String)),
            document: Schema.optional(
              Schema.Struct({
                back: Schema.NullOr(
                  Schema.Union([
                    Schema.String,
                    Schema.Struct({
                      created: Schema.Number,
                      expires_at: Schema.NullOr(Schema.Number),
                      filename: Schema.NullOr(Schema.String),
                      id: Schema.String,
                      links: Schema.optional(
                        Schema.NullOr(
                          Schema.Struct({
                            data: Schema.Array(
                              Schema.Struct({
                                created: Schema.Number,
                                expired: Schema.Boolean,
                                expires_at: Schema.NullOr(Schema.Number),
                                file: Schema.Unknown,
                                id: Schema.String,
                                livemode: Schema.Boolean,
                                metadata: Schema.Record(
                                  Schema.String,
                                  Schema.String,
                                ),
                                object: Schema.Literals(["file_link"]),
                                url: Schema.NullOr(Schema.String),
                              }),
                            ),
                            has_more: Schema.Boolean,
                            object: Schema.Literals(["list"]),
                            url: Schema.String,
                          }),
                        ),
                      ),
                      object: Schema.Literals(["file"]),
                      purpose: Schema.Literals([
                        "account_requirement",
                        "additional_verification",
                        "business_icon",
                        "business_logo",
                        "customer_signature",
                        "dispute_evidence",
                        "document_provider_identity_document",
                        "finance_report_run",
                        "financial_account_statement",
                        "identity_document",
                        "identity_document_downloadable",
                        "issuing_regulatory_reporting",
                        "pci_document",
                        "platform_terms_of_service",
                        "selfie",
                        "sigma_scheduled_query",
                        "tax_document_user_upload",
                        "terminal_android_apk",
                        "terminal_reader_splashscreen",
                        "terminal_wifi_certificate",
                        "terminal_wifi_private_key",
                      ]),
                      size: Schema.Number,
                      title: Schema.NullOr(Schema.String),
                      type: Schema.NullOr(Schema.String),
                      url: Schema.NullOr(Schema.String),
                    }),
                  ]),
                ),
                details: Schema.NullOr(Schema.String),
                details_code: Schema.NullOr(Schema.String),
                front: Schema.NullOr(
                  Schema.Union([
                    Schema.String,
                    Schema.Struct({
                      created: Schema.Number,
                      expires_at: Schema.NullOr(Schema.Number),
                      filename: Schema.NullOr(Schema.String),
                      id: Schema.String,
                      links: Schema.optional(
                        Schema.NullOr(
                          Schema.Struct({
                            data: Schema.Array(
                              Schema.Struct({
                                created: Schema.Number,
                                expired: Schema.Boolean,
                                expires_at: Schema.NullOr(Schema.Number),
                                file: Schema.Unknown,
                                id: Schema.String,
                                livemode: Schema.Boolean,
                                metadata: Schema.Record(
                                  Schema.String,
                                  Schema.String,
                                ),
                                object: Schema.Literals(["file_link"]),
                                url: Schema.NullOr(Schema.String),
                              }),
                            ),
                            has_more: Schema.Boolean,
                            object: Schema.Literals(["list"]),
                            url: Schema.String,
                          }),
                        ),
                      ),
                      object: Schema.Literals(["file"]),
                      purpose: Schema.Literals([
                        "account_requirement",
                        "additional_verification",
                        "business_icon",
                        "business_logo",
                        "customer_signature",
                        "dispute_evidence",
                        "document_provider_identity_document",
                        "finance_report_run",
                        "financial_account_statement",
                        "identity_document",
                        "identity_document_downloadable",
                        "issuing_regulatory_reporting",
                        "pci_document",
                        "platform_terms_of_service",
                        "selfie",
                        "sigma_scheduled_query",
                        "tax_document_user_upload",
                        "terminal_android_apk",
                        "terminal_reader_splashscreen",
                        "terminal_wifi_certificate",
                        "terminal_wifi_private_key",
                      ]),
                      size: Schema.Number,
                      title: Schema.NullOr(Schema.String),
                      type: Schema.NullOr(Schema.String),
                      url: Schema.NullOr(Schema.String),
                    }),
                  ]),
                ),
              }),
            ),
            status: Schema.String,
          }),
        ),
      }),
    ),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    object: Schema.Literals(["account"]),
    payouts_enabled: Schema.optional(Schema.Boolean),
    requirements: Schema.optional(
      Schema.Struct({
        alternatives: Schema.NullOr(
          Schema.Array(
            Schema.Struct({
              alternative_fields_due: Schema.Array(Schema.String),
              original_fields_due: Schema.Array(Schema.String),
            }),
          ),
        ),
        current_deadline: Schema.NullOr(Schema.Number),
        currently_due: Schema.NullOr(Schema.Array(Schema.String)),
        disabled_reason: Schema.NullOr(
          Schema.Literals([
            "action_required.requested_capabilities",
            "listed",
            "other",
            "platform_paused",
            "rejected.fraud",
            "rejected.incomplete_verification",
            "rejected.listed",
            "rejected.other",
            "rejected.platform_fraud",
            "rejected.platform_other",
            "rejected.platform_terms_of_service",
            "rejected.terms_of_service",
            "requirements.past_due",
            "requirements.pending_verification",
            "under_review",
          ]),
        ),
        errors: Schema.NullOr(
          Schema.Array(
            Schema.Struct({
              code: Schema.Literals([
                "external_request",
                "information_missing",
                "invalid_address_city_state_postal_code",
                "invalid_address_highway_contract_box",
                "invalid_address_private_mailbox",
                "invalid_business_profile_name",
                "invalid_business_profile_name_denylisted",
                "invalid_company_name_denylisted",
                "invalid_dob_age_over_maximum",
                "invalid_dob_age_under_18",
                "invalid_dob_age_under_minimum",
                "invalid_product_description_length",
                "invalid_product_description_url_match",
                "invalid_representative_country",
                "invalid_signator",
                "invalid_statement_descriptor_business_mismatch",
                "invalid_statement_descriptor_denylisted",
                "invalid_statement_descriptor_length",
                "invalid_statement_descriptor_prefix_denylisted",
                "invalid_statement_descriptor_prefix_mismatch",
                "invalid_street_address",
                "invalid_tax_id",
                "invalid_tax_id_format",
                "invalid_tos_acceptance",
                "invalid_url_denylisted",
                "invalid_url_format",
                "invalid_url_length",
                "invalid_url_web_presence_detected",
                "invalid_url_website_business_information_mismatch",
                "invalid_url_website_empty",
                "invalid_url_website_inaccessible",
                "invalid_url_website_inaccessible_geoblocked",
                "invalid_url_website_inaccessible_password_protected",
                "invalid_url_website_incomplete",
                "invalid_url_website_incomplete_cancellation_policy",
                "invalid_url_website_incomplete_customer_service_details",
                "invalid_url_website_incomplete_legal_restrictions",
                "invalid_url_website_incomplete_refund_policy",
                "invalid_url_website_incomplete_return_policy",
                "invalid_url_website_incomplete_terms_and_conditions",
                "invalid_url_website_incomplete_under_construction",
                "invalid_url_website_other",
                "invalid_value_other",
                "unsupported_business_type",
                "verification_directors_mismatch",
                "verification_document_address_mismatch",
                "verification_document_address_missing",
                "verification_document_corrupt",
                "verification_document_country_not_supported",
                "verification_document_directors_mismatch",
                "verification_document_dob_mismatch",
                "verification_document_duplicate_type",
                "verification_document_expired",
                "verification_document_failed_copy",
                "verification_document_failed_greyscale",
                "verification_document_failed_other",
                "verification_document_failed_test_mode",
                "verification_document_fraudulent",
                "verification_document_id_number_mismatch",
                "verification_document_id_number_missing",
                "verification_document_incomplete",
                "verification_document_invalid",
                "verification_document_issue_or_expiry_date_missing",
                "verification_document_manipulated",
                "verification_document_missing_back",
                "verification_document_missing_front",
                "verification_document_name_mismatch",
                "verification_document_name_missing",
                "verification_document_nationality_mismatch",
                "verification_document_not_readable",
                "verification_document_not_signed",
                "verification_document_not_uploaded",
                "verification_document_photo_mismatch",
                "verification_document_too_large",
                "verification_document_type_not_supported",
                "verification_extraneous_directors",
                "verification_failed_address_match",
                "verification_failed_authorizer_authority",
                "verification_failed_business_iec_number",
                "verification_failed_document_match",
                "verification_failed_id_number_match",
                "verification_failed_keyed_identity",
                "verification_failed_keyed_match",
                "verification_failed_name_match",
                "verification_failed_other",
                "verification_failed_representative_authority",
                "verification_failed_residential_address",
                "verification_failed_tax_id_match",
                "verification_failed_tax_id_not_issued",
                "verification_legal_entity_structure_mismatch",
                "verification_missing_directors",
                "verification_missing_executives",
                "verification_missing_owners",
                "verification_rejected_ownership_exemption_reason",
                "verification_requires_additional_memorandum_of_associations",
                "verification_requires_additional_proof_of_registration",
                "verification_supportability",
              ]),
              reason: Schema.String,
              requirement: Schema.String,
            }),
          ),
        ),
        eventually_due: Schema.NullOr(Schema.Array(Schema.String)),
        past_due: Schema.NullOr(Schema.Array(Schema.String)),
        pending_verification: Schema.NullOr(Schema.Array(Schema.String)),
      }),
    ),
    settings: Schema.optional(Schema.Unknown),
    tos_acceptance: Schema.optional(
      Schema.Struct({
        date: Schema.optional(Schema.NullOr(Schema.Number)),
        ip: Schema.optional(Schema.NullOr(Schema.String)),
        service_agreement: Schema.optional(Schema.String),
        user_agent: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    type: Schema.optional(
      Schema.Literals(["custom", "express", "none", "standard"]),
    ),
  }) as unknown as Schema.Codec<GetAccountsAccountOutput>;

// The operation
/**
 * Retrieve account
 *
 * <p>Retrieves the details of an account.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetAccountsAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAccountsAccountInput,
  outputSchema: GetAccountsAccountOutput,
}));
