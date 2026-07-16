import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostTokensInput {
  account?: {
    business_type?:
      | "company"
      | "government_entity"
      | "individual"
      | "non_profit";
    company?: {
      address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      address_kana?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      address_kanji?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      directors_provided?: boolean;
      directorship_declaration?: {
        date?: number;
        ip?: string;
        user_agent?: string;
      };
      executives_provided?: boolean;
      export_license_id?: string;
      export_purpose_code?: string;
      name?: string;
      name_kana?: string;
      name_kanji?: string;
      owners_provided?: boolean;
      ownership_declaration?: {
        date?: number;
        ip?: string;
        user_agent?: string;
      };
      ownership_declaration_shown_and_signed?: boolean;
      ownership_exemption_reason?:
        | ""
        | "qualified_entity_exceeds_ownership_threshold"
        | "qualifies_as_financial_institution";
      phone?: string;
      registration_date?: { day: number; month: number; year: number } | "";
      registration_number?: string;
      representative_declaration?: {
        date?: number;
        ip?: string;
        user_agent?: string;
      };
      structure?:
        | ""
        | "free_zone_establishment"
        | "free_zone_llc"
        | "government_instrumentality"
        | "governmental_unit"
        | "incorporated_non_profit"
        | "incorporated_partnership"
        | "limited_liability_partnership"
        | "llc"
        | "multi_member_llc"
        | "private_company"
        | "private_corporation"
        | "private_partnership"
        | "public_company"
        | "public_corporation"
        | "public_partnership"
        | "registered_charity"
        | "single_member_llc"
        | "sole_establishment"
        | "sole_proprietorship"
        | "tax_exempt_government_instrumentality"
        | "unincorporated_association"
        | "unincorporated_non_profit"
        | "unincorporated_partnership";
      tax_id?: string;
      tax_id_registrar?: string;
      vat_id?: string;
      verification?: { document?: { back?: string; front?: string } };
    };
    individual?: {
      address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      address_kana?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      address_kanji?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      dob?: { day: number; month: number; year: number } | "";
      email?: string;
      first_name?: string;
      first_name_kana?: string;
      first_name_kanji?: string;
      full_name_aliases?: string[] | "";
      gender?: string;
      id_number?: string;
      id_number_secondary?: string;
      last_name?: string;
      last_name_kana?: string;
      last_name_kanji?: string;
      maiden_name?: string;
      metadata?: Record<string, string> | "";
      phone?: string;
      political_exposure?: "existing" | "none";
      registered_address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      relationship?: {
        director?: boolean;
        executive?: boolean;
        owner?: boolean;
        percent_ownership?: number | "";
        title?: string;
      };
      ssn_last_4?: string;
      verification?: {
        additional_document?: { back?: string; front?: string };
        document?: { back?: string; front?: string };
      };
    };
    tos_shown_and_accepted?: boolean;
  };
  bank_account?: {
    account_holder_name?: string;
    account_holder_type?: "company" | "individual";
    account_number: string;
    account_type?: "checking" | "futsu" | "savings" | "toza";
    country: string;
    currency?: string;
    payment_method?: string;
    routing_number?: string;
  };
  card?:
    | {
        address_city?: string;
        address_country?: string;
        address_line1?: string;
        address_line2?: string;
        address_state?: string;
        address_zip?: string;
        currency?: string;
        cvc?: string;
        exp_month: string;
        exp_year: string;
        name?: string;
        networks?: { preferred?: "cartes_bancaires" | "mastercard" | "visa" };
        number: string;
      }
    | string;
  customer?: string;
  cvc_update?: { cvc: string };
  expand?: string[];
  person?: {
    additional_tos_acceptances?: {
      account?: { date?: number; ip?: string; user_agent?: string | "" };
    };
    address?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
    };
    address_kana?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    address_kanji?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    dob?: { day: number; month: number; year: number } | "";
    documents?: {
      company_authorization?: { files?: (string | "")[] };
      passport?: { files?: (string | "")[] };
      visa?: { files?: (string | "")[] };
    };
    email?: string;
    first_name?: string;
    first_name_kana?: string;
    first_name_kanji?: string;
    full_name_aliases?: string[] | "";
    gender?: string;
    id_number?: string;
    id_number_secondary?: string;
    last_name?: string;
    last_name_kana?: string;
    last_name_kanji?: string;
    maiden_name?: string;
    metadata?: Record<string, string> | "";
    nationality?: string;
    phone?: string;
    political_exposure?: "existing" | "none";
    registered_address?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
    };
    relationship?: {
      authorizer?: boolean;
      director?: boolean;
      executive?: boolean;
      legal_guardian?: boolean;
      owner?: boolean;
      percent_ownership?: number | "";
      representative?: boolean;
      title?: string;
    };
    ssn_last_4?: string;
    us_cfpb_data?: {
      ethnicity_details?: {
        ethnicity?: (
          | "cuban"
          | "hispanic_or_latino"
          | "mexican"
          | "not_hispanic_or_latino"
          | "other_hispanic_or_latino"
          | "prefer_not_to_answer"
          | "puerto_rican"
        )[];
        ethnicity_other?: string;
      };
      race_details?: {
        race?: (
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
        )[];
        race_other?: string;
      };
      self_identified_gender?: string;
    };
    verification?: {
      additional_document?: { back?: string; front?: string };
      document?: { back?: string; front?: string };
    };
  };
  pii?: { id_number?: string };
}
export const PostTokensInput = /*@__PURE__*/ Schema.Struct({
  account: Schema.optional(
    Schema.Struct({
      business_type: Schema.optional(
        Schema.Literals([
          "company",
          "government_entity",
          "individual",
          "non_profit",
        ]),
      ),
      company: Schema.optional(
        Schema.Struct({
          address: Schema.optional(
            Schema.Struct({
              city: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
              line1: Schema.optional(Schema.String),
              line2: Schema.optional(Schema.String),
              postal_code: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
            }),
          ),
          address_kana: Schema.optional(
            Schema.Struct({
              city: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
              line1: Schema.optional(Schema.String),
              line2: Schema.optional(Schema.String),
              postal_code: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
              town: Schema.optional(Schema.String),
            }),
          ),
          address_kanji: Schema.optional(
            Schema.Struct({
              city: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
              line1: Schema.optional(Schema.String),
              line2: Schema.optional(Schema.String),
              postal_code: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
              town: Schema.optional(Schema.String),
            }),
          ),
          directors_provided: Schema.optional(Schema.Boolean),
          directorship_declaration: Schema.optional(
            Schema.Struct({
              date: Schema.optional(Schema.Number),
              ip: Schema.optional(Schema.String),
              user_agent: Schema.optional(Schema.String),
            }),
          ),
          executives_provided: Schema.optional(Schema.Boolean),
          export_license_id: Schema.optional(Schema.String),
          export_purpose_code: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          name_kana: Schema.optional(Schema.String),
          name_kanji: Schema.optional(Schema.String),
          owners_provided: Schema.optional(Schema.Boolean),
          ownership_declaration: Schema.optional(
            Schema.Struct({
              date: Schema.optional(Schema.Number),
              ip: Schema.optional(Schema.String),
              user_agent: Schema.optional(Schema.String),
            }),
          ),
          ownership_declaration_shown_and_signed: Schema.optional(
            Schema.Boolean,
          ),
          ownership_exemption_reason: Schema.optional(
            Schema.Literals([
              "",
              "qualified_entity_exceeds_ownership_threshold",
              "qualifies_as_financial_institution",
            ]),
          ),
          phone: Schema.optional(Schema.String),
          registration_date: Schema.optional(
            Schema.Union([
              Schema.Struct({
                day: Schema.Number,
                month: Schema.Number,
                year: Schema.Number,
              }),
              Schema.Literals([""]),
            ]),
          ),
          registration_number: Schema.optional(Schema.String),
          representative_declaration: Schema.optional(
            Schema.Struct({
              date: Schema.optional(Schema.Number),
              ip: Schema.optional(Schema.String),
              user_agent: Schema.optional(Schema.String),
            }),
          ),
          structure: Schema.optional(
            Schema.Literals([
              "",
              "free_zone_establishment",
              "free_zone_llc",
              "government_instrumentality",
              "governmental_unit",
              "incorporated_non_profit",
              "incorporated_partnership",
              "limited_liability_partnership",
              "llc",
              "multi_member_llc",
              "private_company",
              "private_corporation",
              "private_partnership",
              "public_company",
              "public_corporation",
              "public_partnership",
              "registered_charity",
              "single_member_llc",
              "sole_establishment",
              "sole_proprietorship",
              "tax_exempt_government_instrumentality",
              "unincorporated_association",
              "unincorporated_non_profit",
              "unincorporated_partnership",
            ]),
          ),
          tax_id: Schema.optional(Schema.String),
          tax_id_registrar: Schema.optional(Schema.String),
          vat_id: Schema.optional(Schema.String),
          verification: Schema.optional(
            Schema.Struct({
              document: Schema.optional(
                Schema.Struct({
                  back: Schema.optional(Schema.String),
                  front: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        }),
      ),
      individual: Schema.optional(
        Schema.Struct({
          address: Schema.optional(
            Schema.Struct({
              city: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
              line1: Schema.optional(Schema.String),
              line2: Schema.optional(Schema.String),
              postal_code: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
            }),
          ),
          address_kana: Schema.optional(
            Schema.Struct({
              city: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
              line1: Schema.optional(Schema.String),
              line2: Schema.optional(Schema.String),
              postal_code: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
              town: Schema.optional(Schema.String),
            }),
          ),
          address_kanji: Schema.optional(
            Schema.Struct({
              city: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
              line1: Schema.optional(Schema.String),
              line2: Schema.optional(Schema.String),
              postal_code: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
              town: Schema.optional(Schema.String),
            }),
          ),
          dob: Schema.optional(
            Schema.Union([
              Schema.Struct({
                day: Schema.Number,
                month: Schema.Number,
                year: Schema.Number,
              }),
              Schema.Literals([""]),
            ]),
          ),
          email: Schema.optional(Schema.String),
          first_name: Schema.optional(Schema.String),
          first_name_kana: Schema.optional(Schema.String),
          first_name_kanji: Schema.optional(Schema.String),
          full_name_aliases: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Literals([""])]),
          ),
          gender: Schema.optional(Schema.String),
          id_number: Schema.optional(Schema.String),
          id_number_secondary: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          last_name_kana: Schema.optional(Schema.String),
          last_name_kanji: Schema.optional(Schema.String),
          maiden_name: Schema.optional(Schema.String),
          metadata: Schema.optional(
            Schema.Union([
              Schema.Record(Schema.String, Schema.String),
              Schema.Literals([""]),
            ]),
          ),
          phone: Schema.optional(Schema.String),
          political_exposure: Schema.optional(
            Schema.Literals(["existing", "none"]),
          ),
          registered_address: Schema.optional(
            Schema.Struct({
              city: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
              line1: Schema.optional(Schema.String),
              line2: Schema.optional(Schema.String),
              postal_code: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
            }),
          ),
          relationship: Schema.optional(
            Schema.Struct({
              director: Schema.optional(Schema.Boolean),
              executive: Schema.optional(Schema.Boolean),
              owner: Schema.optional(Schema.Boolean),
              percent_ownership: Schema.optional(
                Schema.Union([Schema.Number, Schema.Literals([""])]),
              ),
              title: Schema.optional(Schema.String),
            }),
          ),
          ssn_last_4: Schema.optional(Schema.String),
          verification: Schema.optional(
            Schema.Struct({
              additional_document: Schema.optional(
                Schema.Struct({
                  back: Schema.optional(Schema.String),
                  front: Schema.optional(Schema.String),
                }),
              ),
              document: Schema.optional(
                Schema.Struct({
                  back: Schema.optional(Schema.String),
                  front: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        }),
      ),
      tos_shown_and_accepted: Schema.optional(Schema.Boolean),
    }),
  ),
  bank_account: Schema.optional(
    Schema.Struct({
      account_holder_name: Schema.optional(Schema.String),
      account_holder_type: Schema.optional(
        Schema.Literals(["company", "individual"]),
      ),
      account_number: Schema.String,
      account_type: Schema.optional(
        Schema.Literals(["checking", "futsu", "savings", "toza"]),
      ),
      country: Schema.String,
      currency: Schema.optional(Schema.String),
      payment_method: Schema.optional(Schema.String),
      routing_number: Schema.optional(Schema.String),
    }),
  ),
  card: Schema.optional(
    Schema.Union([
      Schema.Struct({
        address_city: Schema.optional(Schema.String),
        address_country: Schema.optional(Schema.String),
        address_line1: Schema.optional(Schema.String),
        address_line2: Schema.optional(Schema.String),
        address_state: Schema.optional(Schema.String),
        address_zip: Schema.optional(Schema.String),
        currency: Schema.optional(Schema.String),
        cvc: Schema.optional(Schema.String),
        exp_month: Schema.String,
        exp_year: Schema.String,
        name: Schema.optional(Schema.String),
        networks: Schema.optional(
          Schema.Struct({
            preferred: Schema.optional(
              Schema.Literals(["cartes_bancaires", "mastercard", "visa"]),
            ),
          }),
        ),
        number: Schema.String,
      }),
      Schema.String,
    ]),
  ),
  customer: Schema.optional(Schema.String),
  cvc_update: Schema.optional(
    Schema.Struct({
      cvc: Schema.String,
    }),
  ),
  expand: Schema.optional(Schema.Array(Schema.String)),
  person: Schema.optional(
    Schema.Struct({
      additional_tos_acceptances: Schema.optional(
        Schema.Struct({
          account: Schema.optional(
            Schema.Struct({
              date: Schema.optional(Schema.Number),
              ip: Schema.optional(Schema.String),
              user_agent: Schema.optional(
                Schema.Union([Schema.String, Schema.Literals([""])]),
              ),
            }),
          ),
        }),
      ),
      address: Schema.optional(
        Schema.Struct({
          city: Schema.optional(Schema.String),
          country: Schema.optional(Schema.String),
          line1: Schema.optional(Schema.String),
          line2: Schema.optional(Schema.String),
          postal_code: Schema.optional(Schema.String),
          state: Schema.optional(Schema.String),
        }),
      ),
      address_kana: Schema.optional(
        Schema.Struct({
          city: Schema.optional(Schema.String),
          country: Schema.optional(Schema.String),
          line1: Schema.optional(Schema.String),
          line2: Schema.optional(Schema.String),
          postal_code: Schema.optional(Schema.String),
          state: Schema.optional(Schema.String),
          town: Schema.optional(Schema.String),
        }),
      ),
      address_kanji: Schema.optional(
        Schema.Struct({
          city: Schema.optional(Schema.String),
          country: Schema.optional(Schema.String),
          line1: Schema.optional(Schema.String),
          line2: Schema.optional(Schema.String),
          postal_code: Schema.optional(Schema.String),
          state: Schema.optional(Schema.String),
          town: Schema.optional(Schema.String),
        }),
      ),
      dob: Schema.optional(
        Schema.Union([
          Schema.Struct({
            day: Schema.Number,
            month: Schema.Number,
            year: Schema.Number,
          }),
          Schema.Literals([""]),
        ]),
      ),
      documents: Schema.optional(
        Schema.Struct({
          company_authorization: Schema.optional(
            Schema.Struct({
              files: Schema.optional(
                Schema.Array(
                  Schema.Union([Schema.String, Schema.Literals([""])]),
                ),
              ),
            }),
          ),
          passport: Schema.optional(
            Schema.Struct({
              files: Schema.optional(
                Schema.Array(
                  Schema.Union([Schema.String, Schema.Literals([""])]),
                ),
              ),
            }),
          ),
          visa: Schema.optional(
            Schema.Struct({
              files: Schema.optional(
                Schema.Array(
                  Schema.Union([Schema.String, Schema.Literals([""])]),
                ),
              ),
            }),
          ),
        }),
      ),
      email: Schema.optional(Schema.String),
      first_name: Schema.optional(Schema.String),
      first_name_kana: Schema.optional(Schema.String),
      first_name_kanji: Schema.optional(Schema.String),
      full_name_aliases: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Literals([""])]),
      ),
      gender: Schema.optional(Schema.String),
      id_number: Schema.optional(Schema.String),
      id_number_secondary: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      last_name_kana: Schema.optional(Schema.String),
      last_name_kanji: Schema.optional(Schema.String),
      maiden_name: Schema.optional(Schema.String),
      metadata: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.String),
          Schema.Literals([""]),
        ]),
      ),
      nationality: Schema.optional(Schema.String),
      phone: Schema.optional(Schema.String),
      political_exposure: Schema.optional(
        Schema.Literals(["existing", "none"]),
      ),
      registered_address: Schema.optional(
        Schema.Struct({
          city: Schema.optional(Schema.String),
          country: Schema.optional(Schema.String),
          line1: Schema.optional(Schema.String),
          line2: Schema.optional(Schema.String),
          postal_code: Schema.optional(Schema.String),
          state: Schema.optional(Schema.String),
        }),
      ),
      relationship: Schema.optional(
        Schema.Struct({
          authorizer: Schema.optional(Schema.Boolean),
          director: Schema.optional(Schema.Boolean),
          executive: Schema.optional(Schema.Boolean),
          legal_guardian: Schema.optional(Schema.Boolean),
          owner: Schema.optional(Schema.Boolean),
          percent_ownership: Schema.optional(
            Schema.Union([Schema.Number, Schema.Literals([""])]),
          ),
          representative: Schema.optional(Schema.Boolean),
          title: Schema.optional(Schema.String),
        }),
      ),
      ssn_last_4: Schema.optional(Schema.String),
      us_cfpb_data: Schema.optional(
        Schema.Struct({
          ethnicity_details: Schema.optional(
            Schema.Struct({
              ethnicity: Schema.optional(
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
              ethnicity_other: Schema.optional(Schema.String),
            }),
          ),
          race_details: Schema.optional(
            Schema.Struct({
              race: Schema.optional(
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
              race_other: Schema.optional(Schema.String),
            }),
          ),
          self_identified_gender: Schema.optional(Schema.String),
        }),
      ),
      verification: Schema.optional(
        Schema.Struct({
          additional_document: Schema.optional(
            Schema.Struct({
              back: Schema.optional(Schema.String),
              front: Schema.optional(Schema.String),
            }),
          ),
          document: Schema.optional(
            Schema.Struct({
              back: Schema.optional(Schema.String),
              front: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    }),
  ),
  pii: Schema.optional(
    Schema.Struct({
      id_number: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/tokens",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<PostTokensInput>;

// Output Schema
export interface PostTokensOutput {
  bank_account?: {
    account?: unknown;
    account_holder_name: string | null;
    account_holder_type: string | null;
    account_type: string | null;
    available_payout_methods?: ("instant" | "standard")[] | null;
    bank_name: string | null;
    country: string;
    currency: string;
    customer?: unknown;
    default_for_currency?: boolean | null;
    fingerprint: string | null;
    future_requirements?: unknown;
    id: string;
    last4: string;
    metadata?: Record<string, string> | null;
    object: "bank_account";
    requirements?: unknown;
    routing_number: string | null;
    status: string;
  };
  card?: {
    account?: unknown;
    address_city: string | null;
    address_country: string | null;
    address_line1: string | null;
    address_line1_check: string | null;
    address_line2: string | null;
    address_state: string | null;
    address_zip: string | null;
    address_zip_check: string | null;
    allow_redisplay?: "always" | "limited" | "unspecified" | null;
    available_payout_methods?: ("instant" | "standard")[] | null;
    brand: string;
    country: string | null;
    currency?: string | null;
    customer?: unknown;
    cvc_check: string | null;
    default_for_currency?: boolean | null;
    description?: string;
    dynamic_last4: string | null;
    exp_month: number;
    exp_year: number;
    fingerprint?: string | null;
    funding: string;
    id: string;
    iin?: string;
    issuer?: string;
    last4: string;
    metadata: Record<string, string> | null;
    name: string | null;
    networks?: { preferred: string | null };
    object: "card";
    regulated_status: "regulated" | "unregulated" | null;
    status?: string | null;
    tokenization_method: string | null;
  };
  client_ip: string | null;
  created: number;
  id: string;
  livemode: boolean;
  object: "token";
  type: string;
  used: boolean;
}
export const PostTokensOutput = /*@__PURE__*/ Schema.Struct({
  bank_account: Schema.optional(
    Schema.Struct({
      account: Schema.optional(Schema.Unknown),
      account_holder_name: Schema.NullOr(Schema.String),
      account_holder_type: Schema.NullOr(Schema.String),
      account_type: Schema.NullOr(Schema.String),
      available_payout_methods: Schema.optional(
        Schema.NullOr(Schema.Array(Schema.Literals(["instant", "standard"]))),
      ),
      bank_name: Schema.NullOr(Schema.String),
      country: Schema.String,
      currency: Schema.String,
      customer: Schema.optional(Schema.Unknown),
      default_for_currency: Schema.optional(Schema.NullOr(Schema.Boolean)),
      fingerprint: Schema.NullOr(Schema.String),
      future_requirements: Schema.optional(Schema.Unknown),
      id: Schema.String,
      last4: Schema.String,
      metadata: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
      ),
      object: Schema.Literals(["bank_account"]),
      requirements: Schema.optional(Schema.Unknown),
      routing_number: Schema.NullOr(Schema.String),
      status: Schema.String,
    }),
  ),
  card: Schema.optional(
    Schema.Struct({
      account: Schema.optional(Schema.Unknown),
      address_city: Schema.NullOr(Schema.String),
      address_country: Schema.NullOr(Schema.String),
      address_line1: Schema.NullOr(Schema.String),
      address_line1_check: Schema.NullOr(Schema.String),
      address_line2: Schema.NullOr(Schema.String),
      address_state: Schema.NullOr(Schema.String),
      address_zip: Schema.NullOr(Schema.String),
      address_zip_check: Schema.NullOr(Schema.String),
      allow_redisplay: Schema.optional(
        Schema.NullOr(Schema.Literals(["always", "limited", "unspecified"])),
      ),
      available_payout_methods: Schema.optional(
        Schema.NullOr(Schema.Array(Schema.Literals(["instant", "standard"]))),
      ),
      brand: Schema.String,
      country: Schema.NullOr(Schema.String),
      currency: Schema.optional(Schema.NullOr(Schema.String)),
      customer: Schema.optional(Schema.Unknown),
      cvc_check: Schema.NullOr(Schema.String),
      default_for_currency: Schema.optional(Schema.NullOr(Schema.Boolean)),
      description: Schema.optional(Schema.String),
      dynamic_last4: Schema.NullOr(Schema.String),
      exp_month: Schema.Number,
      exp_year: Schema.Number,
      fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
      funding: Schema.String,
      id: Schema.String,
      iin: Schema.optional(Schema.String),
      issuer: Schema.optional(Schema.String),
      last4: Schema.String,
      metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
      name: Schema.NullOr(Schema.String),
      networks: Schema.optional(
        Schema.Struct({
          preferred: Schema.NullOr(Schema.String),
        }),
      ),
      object: Schema.Literals(["card"]),
      regulated_status: Schema.NullOr(
        Schema.Literals(["regulated", "unregulated"]),
      ),
      status: Schema.optional(Schema.NullOr(Schema.String)),
      tokenization_method: Schema.NullOr(Schema.String),
    }),
  ),
  client_ip: Schema.NullOr(Schema.String),
  created: Schema.Number,
  id: Schema.String,
  livemode: Schema.Boolean,
  object: Schema.Literals(["token"]),
  type: Schema.String,
  used: Schema.Boolean,
}) as unknown as Schema.Codec<PostTokensOutput>;

// The operation
/**
 * Create a CVC update token
 *
 * <p>Creates a single-use token that represents a bank account’s details.
 * You can use this token with any v1 API method in place of a bank account dictionary. You can only use this token once. To do so, attach it to a <a href="#accounts">connected account</a> where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a> is <code>application</code>, which includes Custom accounts.</p>
 */
export const PostTokens = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostTokensInput,
  outputSchema: PostTokensOutput,
}));
