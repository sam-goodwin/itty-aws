import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetIssuingDisputesDisputeInput {
  dispute: string;
  expand?: string;
}
export const GetIssuingDisputesDisputeInput =
  /*@__PURE__*/ Schema.Struct({
    dispute: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/issuing/disputes/{dispute}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetIssuingDisputesDisputeInput>;

// Output Schema
export interface GetIssuingDisputesDisputeOutput {
  amount: number;
  balance_transactions?:
    | {
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
      }[]
    | null;
  created: number;
  currency: string;
  evidence: {
    canceled?: {
      additional_documentation:
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
      canceled_at: number | null;
      cancellation_policy_provided: boolean | null;
      cancellation_reason: string | null;
      expected_at: number | null;
      explanation: string | null;
      product_description: string | null;
      product_type: "merchandise" | "service" | null;
      return_status: "merchant_rejected" | "successful" | null;
      returned_at: number | null;
    };
    duplicate?: {
      additional_documentation:
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
      card_statement:
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
      cash_receipt:
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
      check_image:
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
      explanation: string | null;
      original_transaction: string | null;
    };
    fraudulent?: {
      additional_documentation:
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
      explanation: string | null;
    };
    merchandise_not_as_described?: {
      additional_documentation:
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
      explanation: string | null;
      received_at: number | null;
      return_description: string | null;
      return_status: "merchant_rejected" | "successful" | null;
      returned_at: number | null;
    };
    no_valid_authorization?: {
      additional_documentation:
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
      explanation: string | null;
    };
    not_received?: {
      additional_documentation:
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
      expected_at: number | null;
      explanation: string | null;
      product_description: string | null;
      product_type: "merchandise" | "service" | null;
    };
    other?: {
      additional_documentation:
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
      explanation: string | null;
      product_description: string | null;
      product_type: "merchandise" | "service" | null;
    };
    reason:
      | "canceled"
      | "duplicate"
      | "fraudulent"
      | "merchandise_not_as_described"
      | "no_valid_authorization"
      | "not_received"
      | "other"
      | "service_not_as_described";
    service_not_as_described?: {
      additional_documentation:
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
      canceled_at: number | null;
      cancellation_reason: string | null;
      explanation: string | null;
      received_at: number | null;
    };
  };
  id: string;
  livemode: boolean;
  loss_reason?:
    | "cardholder_authentication_issuer_liability"
    | "eci5_token_transaction_with_tavv"
    | "excess_disputes_in_timeframe"
    | "has_not_met_the_minimum_dispute_amount_requirements"
    | "invalid_duplicate_dispute"
    | "invalid_incorrect_amount_dispute"
    | "invalid_no_authorization"
    | "invalid_use_of_disputes"
    | "merchandise_delivered_or_shipped"
    | "merchandise_or_service_as_described"
    | "not_cancelled"
    | "other"
    | "refund_issued"
    | "submitted_beyond_allowable_time_limit"
    | "transaction_3ds_required"
    | "transaction_approved_after_prior_fraud_dispute"
    | "transaction_authorized"
    | "transaction_electronically_read"
    | "transaction_qualifies_for_visa_easy_payment_service"
    | "transaction_unattended";
  metadata: Record<string, string>;
  object: "issuing.dispute";
  status: "expired" | "lost" | "submitted" | "unsubmitted" | "won";
  transaction: unknown;
  treasury?: { debit_reversal: string | null; received_debit: string } | null;
}
export const GetIssuingDisputesDisputeOutput =
  /*@__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    balance_transactions: Schema.optional(
      Schema.NullOr(
        Schema.Array(
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
            source: Schema.NullOr(
              Schema.Union([Schema.String, Schema.Unknown]),
            ),
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
      ),
    ),
    created: Schema.Number,
    currency: Schema.String,
    evidence: Schema.Struct({
      canceled: Schema.optional(
        Schema.Struct({
          additional_documentation: Schema.NullOr(
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
          canceled_at: Schema.NullOr(Schema.Number),
          cancellation_policy_provided: Schema.NullOr(Schema.Boolean),
          cancellation_reason: Schema.NullOr(Schema.String),
          expected_at: Schema.NullOr(Schema.Number),
          explanation: Schema.NullOr(Schema.String),
          product_description: Schema.NullOr(Schema.String),
          product_type: Schema.NullOr(
            Schema.Literals(["merchandise", "service"]),
          ),
          return_status: Schema.NullOr(
            Schema.Literals(["merchant_rejected", "successful"]),
          ),
          returned_at: Schema.NullOr(Schema.Number),
        }),
      ),
      duplicate: Schema.optional(
        Schema.Struct({
          additional_documentation: Schema.NullOr(
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
          card_statement: Schema.NullOr(
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
          cash_receipt: Schema.NullOr(
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
          check_image: Schema.NullOr(
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
          explanation: Schema.NullOr(Schema.String),
          original_transaction: Schema.NullOr(Schema.String),
        }),
      ),
      fraudulent: Schema.optional(
        Schema.Struct({
          additional_documentation: Schema.NullOr(
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
          explanation: Schema.NullOr(Schema.String),
        }),
      ),
      merchandise_not_as_described: Schema.optional(
        Schema.Struct({
          additional_documentation: Schema.NullOr(
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
          explanation: Schema.NullOr(Schema.String),
          received_at: Schema.NullOr(Schema.Number),
          return_description: Schema.NullOr(Schema.String),
          return_status: Schema.NullOr(
            Schema.Literals(["merchant_rejected", "successful"]),
          ),
          returned_at: Schema.NullOr(Schema.Number),
        }),
      ),
      no_valid_authorization: Schema.optional(
        Schema.Struct({
          additional_documentation: Schema.NullOr(
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
          explanation: Schema.NullOr(Schema.String),
        }),
      ),
      not_received: Schema.optional(
        Schema.Struct({
          additional_documentation: Schema.NullOr(
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
          expected_at: Schema.NullOr(Schema.Number),
          explanation: Schema.NullOr(Schema.String),
          product_description: Schema.NullOr(Schema.String),
          product_type: Schema.NullOr(
            Schema.Literals(["merchandise", "service"]),
          ),
        }),
      ),
      other: Schema.optional(
        Schema.Struct({
          additional_documentation: Schema.NullOr(
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
          explanation: Schema.NullOr(Schema.String),
          product_description: Schema.NullOr(Schema.String),
          product_type: Schema.NullOr(
            Schema.Literals(["merchandise", "service"]),
          ),
        }),
      ),
      reason: Schema.Literals([
        "canceled",
        "duplicate",
        "fraudulent",
        "merchandise_not_as_described",
        "no_valid_authorization",
        "not_received",
        "other",
        "service_not_as_described",
      ]),
      service_not_as_described: Schema.optional(
        Schema.Struct({
          additional_documentation: Schema.NullOr(
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
          canceled_at: Schema.NullOr(Schema.Number),
          cancellation_reason: Schema.NullOr(Schema.String),
          explanation: Schema.NullOr(Schema.String),
          received_at: Schema.NullOr(Schema.Number),
        }),
      ),
    }),
    id: Schema.String,
    livemode: Schema.Boolean,
    loss_reason: Schema.optional(
      Schema.Literals([
        "cardholder_authentication_issuer_liability",
        "eci5_token_transaction_with_tavv",
        "excess_disputes_in_timeframe",
        "has_not_met_the_minimum_dispute_amount_requirements",
        "invalid_duplicate_dispute",
        "invalid_incorrect_amount_dispute",
        "invalid_no_authorization",
        "invalid_use_of_disputes",
        "merchandise_delivered_or_shipped",
        "merchandise_or_service_as_described",
        "not_cancelled",
        "other",
        "refund_issued",
        "submitted_beyond_allowable_time_limit",
        "transaction_3ds_required",
        "transaction_approved_after_prior_fraud_dispute",
        "transaction_authorized",
        "transaction_electronically_read",
        "transaction_qualifies_for_visa_easy_payment_service",
        "transaction_unattended",
      ]),
    ),
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["issuing.dispute"]),
    status: Schema.Literals([
      "expired",
      "lost",
      "submitted",
      "unsubmitted",
      "won",
    ]),
    transaction: Schema.Unknown,
    treasury: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          debit_reversal: Schema.NullOr(Schema.String),
          received_debit: Schema.String,
        }),
      ),
    ),
  }) as unknown as Schema.Codec<GetIssuingDisputesDisputeOutput>;

// The operation
/**
 * Retrieve a dispute
 *
 * <p>Retrieves an Issuing <code>Dispute</code> object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetIssuingDisputesDispute = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetIssuingDisputesDisputeInput,
  outputSchema: GetIssuingDisputesDisputeOutput,
}));
