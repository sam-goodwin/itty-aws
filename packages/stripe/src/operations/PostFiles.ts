import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostFilesInput {
  expand?: string[];
  file: string;
  file_link_data?: {
    create: boolean;
    expires_at?: number;
    metadata?: Record<string, string> | "";
  };
  purpose:
    | "account_requirement"
    | "additional_verification"
    | "business_icon"
    | "business_logo"
    | "customer_signature"
    | "dispute_evidence"
    | "identity_document"
    | "issuing_regulatory_reporting"
    | "pci_document"
    | "platform_terms_of_service"
    | "tax_document_user_upload"
    | "terminal_android_apk"
    | "terminal_reader_splashscreen"
    | "terminal_wifi_certificate"
    | "terminal_wifi_private_key";
}
export const PostFilesInput = /*@__PURE__*/ Schema.Struct({
  expand: Schema.optional(Schema.Array(Schema.String)),
  file: Schema.String,
  file_link_data: Schema.optional(
    Schema.Struct({
      create: Schema.Boolean,
      expires_at: Schema.optional(Schema.Number),
      metadata: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.String),
          Schema.Literals([""]),
        ]),
      ),
    }),
  ),
  purpose: Schema.Literals([
    "account_requirement",
    "additional_verification",
    "business_icon",
    "business_logo",
    "customer_signature",
    "dispute_evidence",
    "identity_document",
    "issuing_regulatory_reporting",
    "pci_document",
    "platform_terms_of_service",
    "tax_document_user_upload",
    "terminal_android_apk",
    "terminal_reader_splashscreen",
    "terminal_wifi_certificate",
    "terminal_wifi_private_key",
  ]),
}).pipe(
  T.Http({ method: "POST", path: "/v1/files", contentType: "multipart" }),
) as unknown as Schema.Codec<PostFilesInput>;

// Output Schema
export interface PostFilesOutput {
  created: number;
  expires_at: number | null;
  filename: string | null;
  id: string;
  links?: {
    data: {
      created: number;
      expired: boolean;
      expires_at: number | null;
      file:
        | string
        | {
            created: number;
            expires_at: number | null;
            filename: string | null;
            id: string;
            links?: {
              data: unknown[];
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
export const PostFilesOutput = /*@__PURE__*/ Schema.Struct({
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
            file: Schema.Union([
              Schema.String,
              Schema.Struct({
                created: Schema.Number,
                expires_at: Schema.NullOr(Schema.Number),
                filename: Schema.NullOr(Schema.String),
                id: Schema.String,
                links: Schema.optional(
                  Schema.NullOr(
                    Schema.Struct({
                      data: Schema.Array(Schema.Unknown),
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
}) as unknown as Schema.Codec<PostFilesOutput>;

// The operation
/**
 * Create a file
 *
 * <p>To upload a file to Stripe, you need to send a request of type <code>multipart/form-data</code>. Include the file you want to upload in the request, and the parameters for creating a file.</p>
 * <p>All of Stripe’s officially supported Client libraries support sending <code>multipart/form-data</code>.</p>
 */
export const PostFiles = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostFilesInput,
  outputSchema: PostFilesOutput,
}));
