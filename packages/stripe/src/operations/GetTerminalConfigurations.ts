import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetTerminalConfigurationsInput {
  ending_before?: string;
  expand?: string;
  is_account_default?: boolean;
  limit?: number;
  starting_after?: string;
}
export const GetTerminalConfigurationsInput =
  /*@__PURE__*/ Schema.Struct({
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    is_account_default: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/terminal/configurations",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetTerminalConfigurationsInput>;

// Output Schema
export interface GetTerminalConfigurationsOutput {
  data: {
    bbpos_wisepad3?: {
      splashscreen?:
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
          };
    };
    bbpos_wisepos_e?: {
      splashscreen?:
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
          };
    };
    cellular?: { enabled: boolean };
    id: string;
    is_account_default: boolean | null;
    livemode: boolean;
    name: string | null;
    object: "terminal.configuration";
    offline?: { enabled: boolean | null };
    reboot_window?: { end_hour: number; start_hour: number };
    stripe_s700?: {
      splashscreen?:
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
          };
    };
    stripe_s710?: {
      splashscreen?:
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
          };
    };
    tipping?: {
      aed?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      aud?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      cad?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      chf?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      czk?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      dkk?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      eur?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      gbp?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      gip?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      hkd?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      huf?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      jpy?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      mxn?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      myr?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      nok?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      nzd?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      pln?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      ron?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      sek?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      sgd?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
      usd?: {
        fixed_amounts?: number[] | null;
        percentages?: number[] | null;
        smart_tip_threshold?: number;
      };
    };
    verifone_m425?: {
      splashscreen?:
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
          };
    };
    verifone_p400?: {
      splashscreen?:
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
          };
    };
    verifone_p630?: {
      splashscreen?:
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
          };
    };
    verifone_ux700?: {
      splashscreen?:
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
          };
    };
    verifone_v660p?: {
      splashscreen?:
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
          };
    };
    wifi?: {
      enterprise_eap_peap?: {
        ca_certificate_file?: string;
        password: Redacted.Redacted<string>;
        ssid: string;
        username: string;
      };
      enterprise_eap_tls?: {
        ca_certificate_file?: string;
        client_certificate_file: string;
        private_key_file: string;
        private_key_file_password?: Redacted.Redacted<string>;
        ssid: string;
      };
      personal_psk?: { password: Redacted.Redacted<string>; ssid: string };
      type: "enterprise_eap_peap" | "enterprise_eap_tls" | "personal_psk";
    };
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetTerminalConfigurationsOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        bbpos_wisepad3: Schema.optional(
          Schema.Struct({
            splashscreen: Schema.optional(
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
        bbpos_wisepos_e: Schema.optional(
          Schema.Struct({
            splashscreen: Schema.optional(
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
        cellular: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
          }),
        ),
        id: Schema.String,
        is_account_default: Schema.NullOr(Schema.Boolean),
        livemode: Schema.Boolean,
        name: Schema.NullOr(Schema.String),
        object: Schema.Literals(["terminal.configuration"]),
        offline: Schema.optional(
          Schema.Struct({
            enabled: Schema.NullOr(Schema.Boolean),
          }),
        ),
        reboot_window: Schema.optional(
          Schema.Struct({
            end_hour: Schema.Number,
            start_hour: Schema.Number,
          }),
        ),
        stripe_s700: Schema.optional(
          Schema.Struct({
            splashscreen: Schema.optional(
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
        stripe_s710: Schema.optional(
          Schema.Struct({
            splashscreen: Schema.optional(
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
        tipping: Schema.optional(
          Schema.Struct({
            aed: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            aud: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            cad: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            chf: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            czk: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            dkk: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            eur: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            gbp: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            gip: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            hkd: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            huf: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            jpy: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            mxn: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            myr: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            nok: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            nzd: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            pln: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            ron: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            sek: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            sgd: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
            usd: Schema.optional(
              Schema.Struct({
                fixed_amounts: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                percentages: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.Number)),
                ),
                smart_tip_threshold: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        verifone_m425: Schema.optional(
          Schema.Struct({
            splashscreen: Schema.optional(
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
        verifone_p400: Schema.optional(
          Schema.Struct({
            splashscreen: Schema.optional(
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
        verifone_p630: Schema.optional(
          Schema.Struct({
            splashscreen: Schema.optional(
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
        verifone_ux700: Schema.optional(
          Schema.Struct({
            splashscreen: Schema.optional(
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
        verifone_v660p: Schema.optional(
          Schema.Struct({
            splashscreen: Schema.optional(
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
        wifi: Schema.optional(
          Schema.Struct({
            enterprise_eap_peap: Schema.optional(
              Schema.Struct({
                ca_certificate_file: Schema.optional(Schema.String),
                password: SensitiveOutputString,
                ssid: Schema.String,
                username: Schema.String,
              }),
            ),
            enterprise_eap_tls: Schema.optional(
              Schema.Struct({
                ca_certificate_file: Schema.optional(Schema.String),
                client_certificate_file: Schema.String,
                private_key_file: Schema.String,
                private_key_file_password: Schema.optional(
                  SensitiveOutputString,
                ),
                ssid: Schema.String,
              }),
            ),
            personal_psk: Schema.optional(
              Schema.Struct({
                password: SensitiveOutputString,
                ssid: Schema.String,
              }),
            ),
            type: Schema.Literals([
              "enterprise_eap_peap",
              "enterprise_eap_tls",
              "personal_psk",
            ]),
          }),
        ),
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetTerminalConfigurationsOutput>;

// The operation
/**
 * List all Configurations
 *
 * <p>Returns a list of <code>Configuration</code> objects.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param is_account_default - if present, only return the account default or non-default configurations.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetTerminalConfigurations = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetTerminalConfigurationsInput,
  outputSchema: GetTerminalConfigurationsOutput,
}));
