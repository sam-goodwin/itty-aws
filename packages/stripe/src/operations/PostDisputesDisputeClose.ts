import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostDisputesDisputeCloseInput {
  dispute: string;
  expand?: string[];
}
export const PostDisputesDisputeCloseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dispute: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/disputes/{dispute}/close",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostDisputesDisputeCloseInput>;

// Output Schema
export interface PostDisputesDisputeCloseOutput {
  amount: number;
  balance_transactions: {
    amount: number;
    available_on: number;
    balance_type:
      | "issuing"
      | "payments"
      | "refund_and_dispute_prefunding"
      | "risk_reserved";
    created: number;
    currency: string;
    description: string | null;
    exchange_rate: number | null;
    fee: number;
    fee_details: {
      amount: number;
      application: string | null;
      currency: string;
      description: string | null;
      type: string;
    }[];
    id: string;
    net: number;
    object: "balance_transaction";
    reporting_category: string;
    source: string | unknown | null;
    status: string;
    type:
      | "adjustment"
      | "advance"
      | "advance_funding"
      | "anticipation_repayment"
      | "application_fee"
      | "application_fee_refund"
      | "charge"
      | "climate_order_purchase"
      | "climate_order_refund"
      | "connect_collection_transfer"
      | "contribution"
      | "fee_credit_funding"
      | "inbound_transfer"
      | "inbound_transfer_reversal"
      | "issuing_authorization_hold"
      | "issuing_authorization_release"
      | "issuing_dispute"
      | "issuing_transaction"
      | "obligation_outbound"
      | "obligation_reversal_inbound"
      | "payment"
      | "payment_failure_refund"
      | "payment_network_reserve_hold"
      | "payment_network_reserve_release"
      | "payment_refund"
      | "payment_reversal"
      | "payment_unreconciled"
      | "payout"
      | "payout_cancel"
      | "payout_failure"
      | "payout_minimum_balance_hold"
      | "payout_minimum_balance_release"
      | "refund"
      | "refund_failure"
      | "reserve_hold"
      | "reserve_release"
      | "reserve_transaction"
      | "reserved_funds"
      | "stripe_balance_payment_debit"
      | "stripe_balance_payment_debit_reversal"
      | "stripe_fee"
      | "stripe_fx_fee"
      | "tax_fee"
      | "tax_fund"
      | "topup"
      | "topup_reversal"
      | "transfer"
      | "transfer_cancel"
      | "transfer_failure"
      | "transfer_refund";
  }[];
  charge: unknown;
  created: number;
  currency: string;
  enhanced_eligibility_types: (
    | "mastercard_compliance"
    | "visa_compelling_evidence_3"
    | "visa_compliance"
  )[];
  evidence: {
    access_activity_log: string | null;
    billing_address: string | null;
    cancellation_policy:
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
              file: string | unknown;
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
    cancellation_policy_disclosure: string | null;
    cancellation_rebuttal: string | null;
    customer_communication:
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
              file: string | unknown;
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
    customer_email_address: string | null;
    customer_name: string | null;
    customer_purchase_ip: string | null;
    customer_signature:
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
              file: string | unknown;
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
    duplicate_charge_documentation:
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
              file: string | unknown;
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
    duplicate_charge_explanation: string | null;
    duplicate_charge_id: string | null;
    enhanced_evidence: {
      mastercard_compliance?: { fee_acknowledged: boolean };
      visa_compelling_evidence_3?: {
        disputed_transaction: {
          customer_account_id: string | null;
          customer_device_fingerprint: string | null;
          customer_device_id: string | null;
          customer_email_address: string | null;
          customer_purchase_ip: string | null;
          merchandise_or_services: "merchandise" | "services" | null;
          product_description: string | null;
          shipping_address: {
            city: string | null;
            country: string | null;
            line1: string | null;
            line2: string | null;
            postal_code: string | null;
            state: string | null;
          } | null;
        } | null;
        prior_undisputed_transactions: {
          charge: string;
          customer_account_id: string | null;
          customer_device_fingerprint: string | null;
          customer_device_id: string | null;
          customer_email_address: string | null;
          customer_purchase_ip: string | null;
          product_description: string | null;
          shipping_address: {
            city: string | null;
            country: string | null;
            line1: string | null;
            line2: string | null;
            postal_code: string | null;
            state: string | null;
          } | null;
        }[];
      };
      visa_compliance?: { fee_acknowledged: boolean };
    };
    product_description: string | null;
    receipt:
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
              file: string | unknown;
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
    refund_policy:
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
              file: string | unknown;
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
    refund_policy_disclosure: string | null;
    refund_refusal_explanation: string | null;
    service_date: string | null;
    service_documentation:
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
              file: string | unknown;
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
    shipping_address: string | null;
    shipping_carrier: string | null;
    shipping_date: string | null;
    shipping_documentation:
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
              file: string | unknown;
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
    shipping_tracking_number: string | null;
    uncategorized_file:
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
              file: string | unknown;
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
    uncategorized_text: string | null;
  };
  evidence_details: {
    due_by: number | null;
    enhanced_eligibility: {
      mastercard_compliance?: {
        status: "fee_acknowledged" | "requires_fee_acknowledgement";
      };
      visa_compelling_evidence_3?: {
        required_actions: (
          | "missing_customer_identifiers"
          | "missing_disputed_transaction_description"
          | "missing_merchandise_or_services"
          | "missing_prior_undisputed_transaction_description"
          | "missing_prior_undisputed_transactions"
        )[];
        status: "not_qualified" | "qualified" | "requires_action";
      };
      visa_compliance?: {
        status: "fee_acknowledged" | "requires_fee_acknowledgement";
      };
    };
    has_evidence: boolean;
    past_due: boolean;
    submission_count: number;
  };
  id: string;
  is_charge_refundable: boolean;
  livemode: boolean;
  metadata: Record<string, string>;
  network_reason_code?: string | null;
  object: "dispute";
  payment_intent: unknown;
  payment_method_details?: {
    amazon_pay?: { dispute_type: "chargeback" | "claim" | null };
    card?: {
      brand: string;
      case_type:
        | "block"
        | "chargeback"
        | "compliance"
        | "inquiry"
        | "resolution";
      network_reason_code: string | null;
    };
    klarna?: {
      chargeback_loss_reason_code?: string;
      reason_code: string | null;
    };
    paypal?: { case_id: string | null; reason_code: string | null };
    type: "amazon_pay" | "card" | "klarna" | "paypal";
  };
  reason: string;
  status:
    | "lost"
    | "needs_response"
    | "prevented"
    | "under_review"
    | "warning_closed"
    | "warning_needs_response"
    | "warning_under_review"
    | "won";
}
export const PostDisputesDisputeCloseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    balance_transactions: Schema.Array(
      Schema.Struct({
        amount: Schema.Number,
        available_on: Schema.Number,
        balance_type: Schema.Literals([
          "issuing",
          "payments",
          "refund_and_dispute_prefunding",
          "risk_reserved",
        ]),
        created: Schema.Number,
        currency: Schema.String,
        description: Schema.NullOr(Schema.String),
        exchange_rate: Schema.NullOr(Schema.Number),
        fee: Schema.Number,
        fee_details: Schema.Array(
          Schema.Struct({
            amount: Schema.Number,
            application: Schema.NullOr(Schema.String),
            currency: Schema.String,
            description: Schema.NullOr(Schema.String),
            type: Schema.String,
          }),
        ),
        id: Schema.String,
        net: Schema.Number,
        object: Schema.Literals(["balance_transaction"]),
        reporting_category: Schema.String,
        source: Schema.NullOr(Schema.Union([Schema.String, Schema.Unknown])),
        status: Schema.String,
        type: Schema.Literals([
          "adjustment",
          "advance",
          "advance_funding",
          "anticipation_repayment",
          "application_fee",
          "application_fee_refund",
          "charge",
          "climate_order_purchase",
          "climate_order_refund",
          "connect_collection_transfer",
          "contribution",
          "fee_credit_funding",
          "inbound_transfer",
          "inbound_transfer_reversal",
          "issuing_authorization_hold",
          "issuing_authorization_release",
          "issuing_dispute",
          "issuing_transaction",
          "obligation_outbound",
          "obligation_reversal_inbound",
          "payment",
          "payment_failure_refund",
          "payment_network_reserve_hold",
          "payment_network_reserve_release",
          "payment_refund",
          "payment_reversal",
          "payment_unreconciled",
          "payout",
          "payout_cancel",
          "payout_failure",
          "payout_minimum_balance_hold",
          "payout_minimum_balance_release",
          "refund",
          "refund_failure",
          "reserve_hold",
          "reserve_release",
          "reserve_transaction",
          "reserved_funds",
          "stripe_balance_payment_debit",
          "stripe_balance_payment_debit_reversal",
          "stripe_fee",
          "stripe_fx_fee",
          "tax_fee",
          "tax_fund",
          "topup",
          "topup_reversal",
          "transfer",
          "transfer_cancel",
          "transfer_failure",
          "transfer_refund",
        ]),
      }),
    ),
    charge: Schema.Unknown,
    created: Schema.Number,
    currency: Schema.String,
    enhanced_eligibility_types: Schema.Array(
      Schema.Literals([
        "mastercard_compliance",
        "visa_compelling_evidence_3",
        "visa_compliance",
      ]),
    ),
    evidence: Schema.Struct({
      access_activity_log: Schema.NullOr(Schema.String),
      billing_address: Schema.NullOr(Schema.String),
      cancellation_policy: Schema.NullOr(
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
                      file: Schema.Union([Schema.String, Schema.Unknown]),
                      id: Schema.String,
                      livemode: Schema.Boolean,
                      metadata: Schema.Record(Schema.String, Schema.String),
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
      cancellation_policy_disclosure: Schema.NullOr(Schema.String),
      cancellation_rebuttal: Schema.NullOr(Schema.String),
      customer_communication: Schema.NullOr(
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
                      file: Schema.Union([Schema.String, Schema.Unknown]),
                      id: Schema.String,
                      livemode: Schema.Boolean,
                      metadata: Schema.Record(Schema.String, Schema.String),
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
      customer_email_address: Schema.NullOr(Schema.String),
      customer_name: Schema.NullOr(Schema.String),
      customer_purchase_ip: Schema.NullOr(Schema.String),
      customer_signature: Schema.NullOr(
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
                      file: Schema.Union([Schema.String, Schema.Unknown]),
                      id: Schema.String,
                      livemode: Schema.Boolean,
                      metadata: Schema.Record(Schema.String, Schema.String),
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
      duplicate_charge_documentation: Schema.NullOr(
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
                      file: Schema.Union([Schema.String, Schema.Unknown]),
                      id: Schema.String,
                      livemode: Schema.Boolean,
                      metadata: Schema.Record(Schema.String, Schema.String),
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
      duplicate_charge_explanation: Schema.NullOr(Schema.String),
      duplicate_charge_id: Schema.NullOr(Schema.String),
      enhanced_evidence: Schema.Struct({
        mastercard_compliance: Schema.optional(
          Schema.Struct({
            fee_acknowledged: Schema.Boolean,
          }),
        ),
        visa_compelling_evidence_3: Schema.optional(
          Schema.Struct({
            disputed_transaction: Schema.NullOr(
              Schema.Struct({
                customer_account_id: Schema.NullOr(Schema.String),
                customer_device_fingerprint: Schema.NullOr(Schema.String),
                customer_device_id: Schema.NullOr(Schema.String),
                customer_email_address: Schema.NullOr(Schema.String),
                customer_purchase_ip: Schema.NullOr(Schema.String),
                merchandise_or_services: Schema.NullOr(
                  Schema.Literals(["merchandise", "services"]),
                ),
                product_description: Schema.NullOr(Schema.String),
                shipping_address: Schema.NullOr(
                  Schema.Struct({
                    city: Schema.NullOr(Schema.String),
                    country: Schema.NullOr(Schema.String),
                    line1: Schema.NullOr(Schema.String),
                    line2: Schema.NullOr(Schema.String),
                    postal_code: Schema.NullOr(Schema.String),
                    state: Schema.NullOr(Schema.String),
                  }),
                ),
              }),
            ),
            prior_undisputed_transactions: Schema.Array(
              Schema.Struct({
                charge: Schema.String,
                customer_account_id: Schema.NullOr(Schema.String),
                customer_device_fingerprint: Schema.NullOr(Schema.String),
                customer_device_id: Schema.NullOr(Schema.String),
                customer_email_address: Schema.NullOr(Schema.String),
                customer_purchase_ip: Schema.NullOr(Schema.String),
                product_description: Schema.NullOr(Schema.String),
                shipping_address: Schema.NullOr(
                  Schema.Struct({
                    city: Schema.NullOr(Schema.String),
                    country: Schema.NullOr(Schema.String),
                    line1: Schema.NullOr(Schema.String),
                    line2: Schema.NullOr(Schema.String),
                    postal_code: Schema.NullOr(Schema.String),
                    state: Schema.NullOr(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
        visa_compliance: Schema.optional(
          Schema.Struct({
            fee_acknowledged: Schema.Boolean,
          }),
        ),
      }),
      product_description: Schema.NullOr(Schema.String),
      receipt: Schema.NullOr(
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
                      file: Schema.Union([Schema.String, Schema.Unknown]),
                      id: Schema.String,
                      livemode: Schema.Boolean,
                      metadata: Schema.Record(Schema.String, Schema.String),
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
      refund_policy: Schema.NullOr(
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
                      file: Schema.Union([Schema.String, Schema.Unknown]),
                      id: Schema.String,
                      livemode: Schema.Boolean,
                      metadata: Schema.Record(Schema.String, Schema.String),
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
      refund_policy_disclosure: Schema.NullOr(Schema.String),
      refund_refusal_explanation: Schema.NullOr(Schema.String),
      service_date: Schema.NullOr(Schema.String),
      service_documentation: Schema.NullOr(
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
                      file: Schema.Union([Schema.String, Schema.Unknown]),
                      id: Schema.String,
                      livemode: Schema.Boolean,
                      metadata: Schema.Record(Schema.String, Schema.String),
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
      shipping_address: Schema.NullOr(Schema.String),
      shipping_carrier: Schema.NullOr(Schema.String),
      shipping_date: Schema.NullOr(Schema.String),
      shipping_documentation: Schema.NullOr(
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
                      file: Schema.Union([Schema.String, Schema.Unknown]),
                      id: Schema.String,
                      livemode: Schema.Boolean,
                      metadata: Schema.Record(Schema.String, Schema.String),
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
      shipping_tracking_number: Schema.NullOr(Schema.String),
      uncategorized_file: Schema.NullOr(
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
                      file: Schema.Union([Schema.String, Schema.Unknown]),
                      id: Schema.String,
                      livemode: Schema.Boolean,
                      metadata: Schema.Record(Schema.String, Schema.String),
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
      uncategorized_text: Schema.NullOr(Schema.String),
    }),
    evidence_details: Schema.Struct({
      due_by: Schema.NullOr(Schema.Number),
      enhanced_eligibility: Schema.Struct({
        mastercard_compliance: Schema.optional(
          Schema.Struct({
            status: Schema.Literals([
              "fee_acknowledged",
              "requires_fee_acknowledgement",
            ]),
          }),
        ),
        visa_compelling_evidence_3: Schema.optional(
          Schema.Struct({
            required_actions: Schema.Array(
              Schema.Literals([
                "missing_customer_identifiers",
                "missing_disputed_transaction_description",
                "missing_merchandise_or_services",
                "missing_prior_undisputed_transaction_description",
                "missing_prior_undisputed_transactions",
              ]),
            ),
            status: Schema.Literals([
              "not_qualified",
              "qualified",
              "requires_action",
            ]),
          }),
        ),
        visa_compliance: Schema.optional(
          Schema.Struct({
            status: Schema.Literals([
              "fee_acknowledged",
              "requires_fee_acknowledgement",
            ]),
          }),
        ),
      }),
      has_evidence: Schema.Boolean,
      past_due: Schema.Boolean,
      submission_count: Schema.Number,
    }),
    id: Schema.String,
    is_charge_refundable: Schema.Boolean,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    network_reason_code: Schema.optional(Schema.NullOr(Schema.String)),
    object: Schema.Literals(["dispute"]),
    payment_intent: Schema.Unknown,
    payment_method_details: Schema.optional(
      Schema.Struct({
        amazon_pay: Schema.optional(
          Schema.Struct({
            dispute_type: Schema.NullOr(
              Schema.Literals(["chargeback", "claim"]),
            ),
          }),
        ),
        card: Schema.optional(
          Schema.Struct({
            brand: Schema.String,
            case_type: Schema.Literals([
              "block",
              "chargeback",
              "compliance",
              "inquiry",
              "resolution",
            ]),
            network_reason_code: Schema.NullOr(Schema.String),
          }),
        ),
        klarna: Schema.optional(
          Schema.Struct({
            chargeback_loss_reason_code: Schema.optional(Schema.String),
            reason_code: Schema.NullOr(Schema.String),
          }),
        ),
        paypal: Schema.optional(
          Schema.Struct({
            case_id: Schema.NullOr(Schema.String),
            reason_code: Schema.NullOr(Schema.String),
          }),
        ),
        type: Schema.Literals(["amazon_pay", "card", "klarna", "paypal"]),
      }),
    ),
    reason: Schema.String,
    status: Schema.Literals([
      "lost",
      "needs_response",
      "prevented",
      "under_review",
      "warning_closed",
      "warning_needs_response",
      "warning_under_review",
      "won",
    ]),
  }) as unknown as Schema.Codec<PostDisputesDisputeCloseOutput>;

// The operation
/**
 * Close a dispute
 *
 * <p>Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.</p>
 * <p>The status of the dispute will change from <code>needs_response</code> to <code>lost</code>. <em>Closing a dispute is irreversible</em>.</p>
 */
export const PostDisputesDisputeClose = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostDisputesDisputeCloseInput,
    outputSchema: PostDisputesDisputeCloseOutput,
  }),
);
