import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetIssuingPersonalizationDesignsInput {
  ending_before?: string;
  expand?: string;
  limit?: number;
  lookup_keys?: string;
  preferences?: string;
  starting_after?: string;
  status?: "active" | "inactive" | "rejected" | "review";
}
export const GetIssuingPersonalizationDesignsInput =
  /*@__PURE__*/ Schema.Struct({
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    lookup_keys: Schema.optional(Schema.String),
    preferences: Schema.optional(Schema.String),
    starting_after: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["active", "inactive", "rejected", "review"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/issuing/personalization_designs",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetIssuingPersonalizationDesignsInput>;

// Output Schema
export interface GetIssuingPersonalizationDesignsOutput {
  data: {
    card_logo:
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
    carrier_text: {
      footer_body: string | null;
      footer_title: string | null;
      header_body: string | null;
      header_title: string | null;
    } | null;
    created: number;
    id: string;
    livemode: boolean;
    lookup_key: string | null;
    metadata: Record<string, string>;
    name: string | null;
    object: "issuing.personalization_design";
    physical_bundle:
      | string
      | {
          features: {
            card_logo: "optional" | "required" | "unsupported";
            carrier_text: "optional" | "required" | "unsupported";
            second_line: "optional" | "required" | "unsupported";
          };
          id: string;
          livemode: boolean;
          name: string;
          object: "issuing.physical_bundle";
          status: "active" | "inactive" | "review";
          type: "custom" | "standard";
        };
    preferences: { is_default: boolean; is_platform_default: boolean | null };
    rejection_reasons: {
      card_logo:
        | (
            | "geographic_location"
            | "inappropriate"
            | "network_name"
            | "non_binary_image"
            | "non_fiat_currency"
            | "other"
            | "other_entity"
            | "promotional_material"
          )[]
        | null;
      carrier_text:
        | (
            | "geographic_location"
            | "inappropriate"
            | "network_name"
            | "non_fiat_currency"
            | "other"
            | "other_entity"
            | "promotional_material"
          )[]
        | null;
    };
    status: "active" | "inactive" | "rejected" | "review";
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetIssuingPersonalizationDesignsOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        card_logo: Schema.NullOr(
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
        carrier_text: Schema.NullOr(
          Schema.Struct({
            footer_body: Schema.NullOr(Schema.String),
            footer_title: Schema.NullOr(Schema.String),
            header_body: Schema.NullOr(Schema.String),
            header_title: Schema.NullOr(Schema.String),
          }),
        ),
        created: Schema.Number,
        id: Schema.String,
        livemode: Schema.Boolean,
        lookup_key: Schema.NullOr(Schema.String),
        metadata: Schema.Record(Schema.String, Schema.String),
        name: Schema.NullOr(Schema.String),
        object: Schema.Literals(["issuing.personalization_design"]),
        physical_bundle: Schema.Union([
          Schema.String,
          Schema.Struct({
            features: Schema.Struct({
              card_logo: Schema.Literals([
                "optional",
                "required",
                "unsupported",
              ]),
              carrier_text: Schema.Literals([
                "optional",
                "required",
                "unsupported",
              ]),
              second_line: Schema.Literals([
                "optional",
                "required",
                "unsupported",
              ]),
            }),
            id: Schema.String,
            livemode: Schema.Boolean,
            name: Schema.String,
            object: Schema.Literals(["issuing.physical_bundle"]),
            status: Schema.Literals(["active", "inactive", "review"]),
            type: Schema.Literals(["custom", "standard"]),
          }),
        ]),
        preferences: Schema.Struct({
          is_default: Schema.Boolean,
          is_platform_default: Schema.NullOr(Schema.Boolean),
        }),
        rejection_reasons: Schema.Struct({
          card_logo: Schema.NullOr(
            Schema.Array(
              Schema.Literals([
                "geographic_location",
                "inappropriate",
                "network_name",
                "non_binary_image",
                "non_fiat_currency",
                "other",
                "other_entity",
                "promotional_material",
              ]),
            ),
          ),
          carrier_text: Schema.NullOr(
            Schema.Array(
              Schema.Literals([
                "geographic_location",
                "inappropriate",
                "network_name",
                "non_fiat_currency",
                "other",
                "other_entity",
                "promotional_material",
              ]),
            ),
          ),
        }),
        status: Schema.Literals(["active", "inactive", "rejected", "review"]),
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetIssuingPersonalizationDesignsOutput>;

// The operation
/**
 * List all personalization designs
 *
 * <p>Returns a list of personalization design objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param lookup_keys - Only return personalization designs with the given lookup keys.
 * @param preferences - Only return personalization designs with the given preferences.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param status - Only return personalization designs with the given status.
 */
export const GetIssuingPersonalizationDesigns =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetIssuingPersonalizationDesignsInput,
    outputSchema: GetIssuingPersonalizationDesignsOutput,
  }));
