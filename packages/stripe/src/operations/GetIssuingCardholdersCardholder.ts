import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetIssuingCardholdersCardholderInput {
  cardholder: string;
  expand?: string;
}
export const GetIssuingCardholdersCardholderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cardholder: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/issuing/cardholders/{cardholder}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetIssuingCardholdersCardholderInput>;

// Output Schema
export interface GetIssuingCardholdersCardholderOutput {
  billing: {
    address: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    };
  };
  company: { tax_id_provided: boolean } | null;
  created: number;
  email: string | null;
  id: string;
  individual: {
    card_issuing?: {
      user_terms_acceptance: {
        date: number | null;
        ip: string | null;
        user_agent: string | null;
      } | null;
    } | null;
    dob: {
      day: number | null;
      month: number | null;
      year: number | null;
    } | null;
    first_name: string | null;
    last_name: string | null;
    verification: {
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
    } | null;
  } | null;
  livemode: boolean;
  metadata: Record<string, string>;
  name: string;
  object: "issuing.cardholder";
  phone_number: string | null;
  preferred_locales: ("de" | "en" | "es" | "fr" | "it")[] | null;
  requirements: {
    disabled_reason:
      | "listed"
      | "rejected.listed"
      | "requirements.past_due"
      | "under_review"
      | null;
    past_due:
      | (
          | "company.tax_id"
          | "individual.card_issuing.user_terms_acceptance.date"
          | "individual.card_issuing.user_terms_acceptance.ip"
          | "individual.dob.day"
          | "individual.dob.month"
          | "individual.dob.year"
          | "individual.first_name"
          | "individual.last_name"
          | "individual.verification.document"
        )[]
      | null;
  };
  spending_controls: unknown;
  status: "active" | "blocked" | "inactive";
  type: "company" | "individual";
}
export const GetIssuingCardholdersCardholderOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billing: Schema.Struct({
      address: Schema.Struct({
        city: Schema.NullOr(Schema.String),
        country: Schema.NullOr(Schema.String),
        line1: Schema.NullOr(Schema.String),
        line2: Schema.NullOr(Schema.String),
        postal_code: Schema.NullOr(Schema.String),
        state: Schema.NullOr(Schema.String),
      }),
    }),
    company: Schema.NullOr(
      Schema.Struct({
        tax_id_provided: Schema.Boolean,
      }),
    ),
    created: Schema.Number,
    email: Schema.NullOr(Schema.String),
    id: Schema.String,
    individual: Schema.Unknown,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    name: Schema.String,
    object: Schema.Literals(["issuing.cardholder"]),
    phone_number: Schema.NullOr(Schema.String),
    preferred_locales: Schema.NullOr(
      Schema.Array(Schema.Literals(["de", "en", "es", "fr", "it"])),
    ),
    requirements: Schema.Struct({
      disabled_reason: Schema.NullOr(
        Schema.Literals([
          "listed",
          "rejected.listed",
          "requirements.past_due",
          "under_review",
        ]),
      ),
      past_due: Schema.NullOr(
        Schema.Array(
          Schema.Literals([
            "company.tax_id",
            "individual.card_issuing.user_terms_acceptance.date",
            "individual.card_issuing.user_terms_acceptance.ip",
            "individual.dob.day",
            "individual.dob.month",
            "individual.dob.year",
            "individual.first_name",
            "individual.last_name",
            "individual.verification.document",
          ]),
        ),
      ),
    }),
    spending_controls: Schema.Unknown,
    status: Schema.Literals(["active", "blocked", "inactive"]),
    type: Schema.Literals(["company", "individual"]),
  }) as unknown as Schema.Codec<GetIssuingCardholdersCardholderOutput>;

// The operation
/**
 * Retrieve a cardholder
 *
 * <p>Retrieves an Issuing <code>Cardholder</code> object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetIssuingCardholdersCardholder =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetIssuingCardholdersCardholderInput,
    outputSchema: GetIssuingCardholdersCardholderOutput,
  }));
