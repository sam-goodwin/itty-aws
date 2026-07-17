import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetReportingReportRunsReportRunInput {
  report_run: string;
  expand?: string;
}
export const GetReportingReportRunsReportRunInput =
  /*@__PURE__*/ Schema.Struct({
    report_run: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/reporting/report_runs/{report_run}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetReportingReportRunsReportRunInput>;

// Output Schema
export interface GetReportingReportRunsReportRunOutput {
  created: number;
  error: string | null;
  id: string;
  livemode: boolean;
  object: "reporting.report_run";
  parameters: {
    columns?: string[];
    connected_account?: string;
    currency?: string;
    interval_end?: number;
    interval_start?: number;
    payout?: string;
    reporting_category?: string;
    timezone?: string;
  };
  report_type: string;
  result: {
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
  } | null;
  status: string;
  succeeded_at: number | null;
}
export const GetReportingReportRunsReportRunOutput =
  /*@__PURE__*/ Schema.Struct({
    created: Schema.Number,
    error: Schema.NullOr(Schema.String),
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["reporting.report_run"]),
    parameters: Schema.Struct({
      columns: Schema.optional(Schema.Array(Schema.String)),
      connected_account: Schema.optional(Schema.String),
      currency: Schema.optional(Schema.String),
      interval_end: Schema.optional(Schema.Number),
      interval_start: Schema.optional(Schema.Number),
      payout: Schema.optional(Schema.String),
      reporting_category: Schema.optional(Schema.String),
      timezone: Schema.optional(Schema.String),
    }),
    report_type: Schema.String,
    result: Schema.NullOr(
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
    ),
    status: Schema.String,
    succeeded_at: Schema.NullOr(Schema.Number),
  }) as unknown as Schema.Codec<GetReportingReportRunsReportRunOutput>;

// The operation
/**
 * Retrieve a Report Run
 *
 * <p>Retrieves the details of an existing Report Run.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetReportingReportRunsReportRun =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetReportingReportRunsReportRunInput,
    outputSchema: GetReportingReportRunsReportRunOutput,
  }));
