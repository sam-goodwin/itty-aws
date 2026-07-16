import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetAccountsAccountPersonsPersonInput {
  account: string;
  person: string;
  expand?: string;
}
export const GetAccountsAccountPersonsPersonInput =
  /*@__PURE__*/ Schema.Struct({
    account: Schema.String.pipe(T.PathParam()),
    person: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/accounts/{account}/persons/{person}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetAccountsAccountPersonsPersonInput>;

// Output Schema
export interface GetAccountsAccountPersonsPersonOutput {
  account?: string;
  additional_tos_acceptances?: {
    account: {
      date: number | null;
      ip: string | null;
      user_agent: string | null;
    } | null;
  };
  address?: {
    city: string | null;
    country: string | null;
    line1: string | null;
    line2: string | null;
    postal_code: string | null;
    state: string | null;
  };
  address_kana?: {
    city: string | null;
    country: string | null;
    line1: string | null;
    line2: string | null;
    postal_code: string | null;
    state: string | null;
    town: string | null;
  } | null;
  address_kanji?: {
    city: string | null;
    country: string | null;
    line1: string | null;
    line2: string | null;
    postal_code: string | null;
    state: string | null;
    town: string | null;
  } | null;
  created: number;
  dob?: { day: number | null; month: number | null; year: number | null };
  email?: string | null;
  first_name?: string | null;
  first_name_kana?: string | null;
  first_name_kanji?: string | null;
  full_name_aliases?: string[];
  future_requirements?: unknown;
  gender?: string | null;
  id: string;
  id_number_provided?: boolean;
  id_number_secondary_provided?: boolean;
  last_name?: string | null;
  last_name_kana?: string | null;
  last_name_kanji?: string | null;
  maiden_name?: string | null;
  metadata?: Record<string, string>;
  nationality?: string | null;
  object: "person";
  phone?: string | null;
  political_exposure?: "existing" | "none";
  registered_address?: {
    city: string | null;
    country: string | null;
    line1: string | null;
    line2: string | null;
    postal_code: string | null;
    state: string | null;
  };
  relationship?: {
    authorizer: boolean | null;
    director: boolean | null;
    executive: boolean | null;
    legal_guardian: boolean | null;
    owner: boolean | null;
    percent_ownership: number | null;
    representative: boolean | null;
    title: string | null;
  };
  requirements?: unknown;
  ssn_last_4_provided?: boolean;
  us_cfpb_data?: {
    ethnicity_details: {
      ethnicity:
        | (
            | "cuban"
            | "hispanic_or_latino"
            | "mexican"
            | "not_hispanic_or_latino"
            | "other_hispanic_or_latino"
            | "prefer_not_to_answer"
            | "puerto_rican"
          )[]
        | null;
      ethnicity_other: string | null;
    } | null;
    race_details: {
      race:
        | (
            | "african_american"
            | "american_indian_or_alaska_native"
            | "asian"
            | "asian_indian"
            | "black_or_african_american"
            | "chinese"
            | "ethiopian"
            | "filipino"
            | "guamanian_or_chamorro"
            | "haitian"
            | "jamaican"
            | "japanese"
            | "korean"
            | "native_hawaiian"
            | "native_hawaiian_or_other_pacific_islander"
            | "nigerian"
            | "other_asian"
            | "other_black_or_african_american"
            | "other_pacific_islander"
            | "prefer_not_to_answer"
            | "samoan"
            | "somali"
            | "vietnamese"
            | "white"
          )[]
        | null;
      race_other: string | null;
    } | null;
    self_identified_gender: string | null;
  } | null;
  verification?: {
    additional_document?: {
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
      details: string | null;
      details_code: string | null;
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
    } | null;
    details?: string | null;
    details_code?: string | null;
    document?: {
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
      details: string | null;
      details_code: string | null;
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
    };
    status: string;
  };
}
export const GetAccountsAccountPersonsPersonOutput =
  /*@__PURE__*/ Schema.Struct({
    account: Schema.optional(Schema.String),
    additional_tos_acceptances: Schema.optional(
      Schema.Struct({
        account: Schema.NullOr(
          Schema.Struct({
            date: Schema.NullOr(Schema.Number),
            ip: Schema.NullOr(Schema.String),
            user_agent: Schema.NullOr(Schema.String),
          }),
        ),
      }),
    ),
    address: Schema.optional(
      Schema.Struct({
        city: Schema.NullOr(Schema.String),
        country: Schema.NullOr(Schema.String),
        line1: Schema.NullOr(Schema.String),
        line2: Schema.NullOr(Schema.String),
        postal_code: Schema.NullOr(Schema.String),
        state: Schema.NullOr(Schema.String),
      }),
    ),
    address_kana: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          city: Schema.NullOr(Schema.String),
          country: Schema.NullOr(Schema.String),
          line1: Schema.NullOr(Schema.String),
          line2: Schema.NullOr(Schema.String),
          postal_code: Schema.NullOr(Schema.String),
          state: Schema.NullOr(Schema.String),
          town: Schema.NullOr(Schema.String),
        }),
      ),
    ),
    address_kanji: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          city: Schema.NullOr(Schema.String),
          country: Schema.NullOr(Schema.String),
          line1: Schema.NullOr(Schema.String),
          line2: Schema.NullOr(Schema.String),
          postal_code: Schema.NullOr(Schema.String),
          state: Schema.NullOr(Schema.String),
          town: Schema.NullOr(Schema.String),
        }),
      ),
    ),
    created: Schema.Number,
    dob: Schema.optional(
      Schema.Struct({
        day: Schema.NullOr(Schema.Number),
        month: Schema.NullOr(Schema.Number),
        year: Schema.NullOr(Schema.Number),
      }),
    ),
    email: Schema.optional(Schema.NullOr(Schema.String)),
    first_name: Schema.optional(Schema.NullOr(Schema.String)),
    first_name_kana: Schema.optional(Schema.NullOr(Schema.String)),
    first_name_kanji: Schema.optional(Schema.NullOr(Schema.String)),
    full_name_aliases: Schema.optional(Schema.Array(Schema.String)),
    future_requirements: Schema.optional(Schema.Unknown),
    gender: Schema.optional(Schema.NullOr(Schema.String)),
    id: Schema.String,
    id_number_provided: Schema.optional(Schema.Boolean),
    id_number_secondary_provided: Schema.optional(Schema.Boolean),
    last_name: Schema.optional(Schema.NullOr(Schema.String)),
    last_name_kana: Schema.optional(Schema.NullOr(Schema.String)),
    last_name_kanji: Schema.optional(Schema.NullOr(Schema.String)),
    maiden_name: Schema.optional(Schema.NullOr(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    nationality: Schema.optional(Schema.NullOr(Schema.String)),
    object: Schema.Literals(["person"]),
    phone: Schema.optional(Schema.NullOr(Schema.String)),
    political_exposure: Schema.optional(Schema.Literals(["existing", "none"])),
    registered_address: Schema.optional(
      Schema.Struct({
        city: Schema.NullOr(Schema.String),
        country: Schema.NullOr(Schema.String),
        line1: Schema.NullOr(Schema.String),
        line2: Schema.NullOr(Schema.String),
        postal_code: Schema.NullOr(Schema.String),
        state: Schema.NullOr(Schema.String),
      }),
    ),
    relationship: Schema.optional(
      Schema.Struct({
        authorizer: Schema.NullOr(Schema.Boolean),
        director: Schema.NullOr(Schema.Boolean),
        executive: Schema.NullOr(Schema.Boolean),
        legal_guardian: Schema.NullOr(Schema.Boolean),
        owner: Schema.NullOr(Schema.Boolean),
        percent_ownership: Schema.NullOr(Schema.Number),
        representative: Schema.NullOr(Schema.Boolean),
        title: Schema.NullOr(Schema.String),
      }),
    ),
    requirements: Schema.optional(Schema.Unknown),
    ssn_last_4_provided: Schema.optional(Schema.Boolean),
    us_cfpb_data: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          ethnicity_details: Schema.NullOr(
            Schema.Struct({
              ethnicity: Schema.NullOr(
                Schema.Array(
                  Schema.Literals([
                    "cuban",
                    "hispanic_or_latino",
                    "mexican",
                    "not_hispanic_or_latino",
                    "other_hispanic_or_latino",
                    "prefer_not_to_answer",
                    "puerto_rican",
                  ]),
                ),
              ),
              ethnicity_other: Schema.NullOr(Schema.String),
            }),
          ),
          race_details: Schema.NullOr(
            Schema.Struct({
              race: Schema.NullOr(
                Schema.Array(
                  Schema.Literals([
                    "african_american",
                    "american_indian_or_alaska_native",
                    "asian",
                    "asian_indian",
                    "black_or_african_american",
                    "chinese",
                    "ethiopian",
                    "filipino",
                    "guamanian_or_chamorro",
                    "haitian",
                    "jamaican",
                    "japanese",
                    "korean",
                    "native_hawaiian",
                    "native_hawaiian_or_other_pacific_islander",
                    "nigerian",
                    "other_asian",
                    "other_black_or_african_american",
                    "other_pacific_islander",
                    "prefer_not_to_answer",
                    "samoan",
                    "somali",
                    "vietnamese",
                    "white",
                  ]),
                ),
              ),
              race_other: Schema.NullOr(Schema.String),
            }),
          ),
          self_identified_gender: Schema.NullOr(Schema.String),
        }),
      ),
    ),
    verification: Schema.optional(
      Schema.Struct({
        additional_document: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              back: Schema.NullOr(
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
                              file: Schema.Union([
                                Schema.String,
                                Schema.Unknown,
                              ]),
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
              details: Schema.NullOr(Schema.String),
              details_code: Schema.NullOr(Schema.String),
              front: Schema.NullOr(
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
                              file: Schema.Union([
                                Schema.String,
                                Schema.Unknown,
                              ]),
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
        ),
        details: Schema.optional(Schema.NullOr(Schema.String)),
        details_code: Schema.optional(Schema.NullOr(Schema.String)),
        document: Schema.optional(
          Schema.Struct({
            back: Schema.NullOr(
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
            details: Schema.NullOr(Schema.String),
            details_code: Schema.NullOr(Schema.String),
            front: Schema.NullOr(
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
        status: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<GetAccountsAccountPersonsPersonOutput>;

// The operation
/**
 * Retrieve a person
 *
 * <p>Retrieves an existing person.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetAccountsAccountPersonsPerson =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetAccountsAccountPersonsPersonInput,
    outputSchema: GetAccountsAccountPersonsPersonOutput,
  }));
