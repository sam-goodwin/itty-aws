import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetFileLinksLinkInput {
  link: string;
  expand?: string;
}
export const GetFileLinksLinkInput = /*@__PURE__*/ Schema.Struct({
  link: Schema.String.pipe(T.PathParam()),
  expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/file_links/{link}",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetFileLinksLinkInput>;

// Output Schema
export interface GetFileLinksLinkOutput {
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
  id: string;
  livemode: boolean;
  metadata: Record<string, string>;
  object: "file_link";
  url: string | null;
}
export const GetFileLinksLinkOutput = /*@__PURE__*/ Schema.Struct({
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
  id: Schema.String,
  livemode: Schema.Boolean,
  metadata: Schema.Record(Schema.String, Schema.String),
  object: Schema.Literals(["file_link"]),
  url: Schema.NullOr(Schema.String),
}) as unknown as Schema.Codec<GetFileLinksLinkOutput>;

// The operation
/**
 * Retrieve a file link
 *
 * <p>Retrieves the file link with the given ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetFileLinksLink = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetFileLinksLinkInput,
  outputSchema: GetFileLinksLinkOutput,
}));
