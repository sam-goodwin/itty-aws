import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetFileLinksInput {
  created?: string;
  ending_before?: string;
  expand?: string;
  expired?: boolean;
  file?: string;
  limit?: number;
  starting_after?: string;
}
export const GetFileLinksInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  expired: Schema.optional(Schema.Boolean),
  file: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  starting_after: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/file_links",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetFileLinksInput>;

// Output Schema
export interface GetFileLinksOutput {
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
}
export const GetFileLinksOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<GetFileLinksOutput>;

// The operation
/**
 * List all file links
 *
 * <p>Returns a list of file links.</p>
 *
 * @param created - Only return links that were created during the given date interval.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param expired - Filter links by their expiration status. By default, Stripe returns all links.
 * @param file - Only return links for the given file.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetFileLinks = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetFileLinksInput,
  outputSchema: GetFileLinksOutput,
}));
