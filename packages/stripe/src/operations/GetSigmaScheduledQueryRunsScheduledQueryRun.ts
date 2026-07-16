import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetSigmaScheduledQueryRunsScheduledQueryRunInput {
  scheduled_query_run: string;
  expand?: string;
}
export const GetSigmaScheduledQueryRunsScheduledQueryRunInput =
  /*@__PURE__*/ Schema.Struct({
    scheduled_query_run: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/sigma/scheduled_query_runs/{scheduled_query_run}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetSigmaScheduledQueryRunsScheduledQueryRunInput>;

// Output Schema
export interface GetSigmaScheduledQueryRunsScheduledQueryRunOutput {
  created: number;
  data_load_time: number;
  error?: { message: string };
  file: {
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
  id: string;
  livemode: boolean;
  object: "scheduled_query_run";
  result_available_until: number;
  sql: string;
  status: string;
  title: string;
}
export const GetSigmaScheduledQueryRunsScheduledQueryRunOutput =
  /*@__PURE__*/ Schema.Struct({
    created: Schema.Number,
    data_load_time: Schema.Number,
    error: Schema.optional(
      Schema.Struct({
        message: Schema.String,
      }),
    ),
    file: Schema.NullOr(
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
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["scheduled_query_run"]),
    result_available_until: Schema.Number,
    sql: Schema.String,
    status: Schema.String,
    title: Schema.String,
  }) as unknown as Schema.Codec<GetSigmaScheduledQueryRunsScheduledQueryRunOutput>;

// The operation
/**
 * Retrieve a scheduled query run
 *
 * <p>Retrieves the details of an scheduled query run.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetSigmaScheduledQueryRunsScheduledQueryRun =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetSigmaScheduledQueryRunsScheduledQueryRunInput,
    outputSchema: GetSigmaScheduledQueryRunsScheduledQueryRunOutput,
  }));
