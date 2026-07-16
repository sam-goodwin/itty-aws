import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostV2CoreAccountsAccountIdPersonTokensInput {
  account_id: string;
  additional_addresses?: {
    city?: string;
    country?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
    purpose: "registered";
    state?: string;
    town?: string;
  }[];
  additional_names?: {
    full_name?: string;
    given_name?: string;
    purpose: "alias" | "maiden";
    surname?: string;
  }[];
  additional_terms_of_service?: { account?: { shown_and_accepted?: boolean } };
  address?: {
    city?: string;
    country?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
    state?: string;
    town?: string;
  };
  date_of_birth?: { day: number; month: number; year: number };
  documents?: {
    company_authorization?: { files: string[]; type: "files" };
    passport?: { files: string[]; type: "files" };
    primary_verification?: {
      front_back: { back?: string; front?: string };
      type: "front_back";
    };
    secondary_verification?: {
      front_back: { back?: string; front?: string };
      type: "front_back";
    };
    visa?: { files: string[]; type: "files" };
  };
  email?: string;
  given_name?: string;
  id_numbers?: {
    type:
      | "ae_eid"
      | "ao_nif"
      | "ar_cuil"
      | "ar_dni"
      | "at_stn"
      | "az_tin"
      | "bd_brc"
      | "bd_etin"
      | "bd_nid"
      | "be_nrn"
      | "bg_ucn"
      | "bn_nric"
      | "br_cpf"
      | "ca_sin"
      | "ch_oasi"
      | "cl_rut"
      | "cn_pp"
      | "co_nuip"
      | "cr_ci"
      | "cr_cpf"
      | "cr_dimex"
      | "cr_nite"
      | "cy_tic"
      | "cz_rc"
      | "de_stn"
      | "dk_cpr"
      | "do_cie"
      | "do_rcn"
      | "ec_ci"
      | "ee_ik"
      | "es_nif"
      | "fi_hetu"
      | "fr_nir"
      | "gb_nino"
      | "gr_afm"
      | "gt_nit"
      | "hk_id"
      | "hr_oib"
      | "hu_ad"
      | "id_nik"
      | "ie_ppsn"
      | "is_kt"
      | "it_cf"
      | "jp_inc"
      | "ke_pin"
      | "kz_iin"
      | "li_peid"
      | "lt_ak"
      | "lu_nif"
      | "lv_pk"
      | "mx_rfc"
      | "my_nric"
      | "mz_nuit"
      | "ng_nin"
      | "nl_bsn"
      | "no_nin"
      | "nz_ird"
      | "pe_dni"
      | "pk_cnic"
      | "pk_snic"
      | "pl_pesel"
      | "pt_nif"
      | "ro_cnp"
      | "sa_tin"
      | "se_pin"
      | "sg_fin"
      | "sg_nric"
      | "sk_dic"
      | "th_lc"
      | "th_pin"
      | "tr_tin"
      | "us_itin"
      | "us_itin_last_4"
      | "us_ssn"
      | "us_ssn_last_4"
      | "uy_dni"
      | "za_id";
    value: string;
  }[];
  legal_gender?: "female" | "male";
  metadata?: Record<string, string | null>;
  nationalities?: string[];
  phone?: string;
  political_exposure?: "existing" | "none";
  relationship?: {
    authorizer?: boolean;
    director?: boolean;
    executive?: boolean;
    legal_guardian?: boolean;
    owner?: boolean;
    percent_ownership?: string;
    representative?: boolean;
    title?: string;
  };
  script_addresses?: {
    kana?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    kanji?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
  };
  script_names?: {
    kana?: { given_name?: string; surname?: string };
    kanji?: { given_name?: string; surname?: string };
  };
  surname?: string;
}
export const PostV2CoreAccountsAccountIdPersonTokensInput =
  /*@__PURE__*/ Schema.Struct({
    account_id: Schema.String.pipe(T.PathParam()),
    additional_addresses: Schema.optional(
      Schema.Array(
        Schema.Struct({
          city: Schema.optional(Schema.String),
          country: Schema.optional(Schema.String),
          line1: Schema.optional(Schema.String),
          line2: Schema.optional(Schema.String),
          postal_code: Schema.optional(Schema.String),
          purpose: Schema.Literals(["registered"]),
          state: Schema.optional(Schema.String),
          town: Schema.optional(Schema.String),
        }),
      ),
    ),
    additional_names: Schema.optional(
      Schema.Array(
        Schema.Struct({
          full_name: Schema.optional(Schema.String),
          given_name: Schema.optional(Schema.String),
          purpose: Schema.Literals(["alias", "maiden"]),
          surname: Schema.optional(Schema.String),
        }),
      ),
    ),
    additional_terms_of_service: Schema.optional(
      Schema.Struct({
        account: Schema.optional(
          Schema.Struct({
            shown_and_accepted: Schema.optional(Schema.Boolean),
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
        town: Schema.optional(Schema.String),
      }),
    ),
    date_of_birth: Schema.optional(
      Schema.Struct({
        day: Schema.Number,
        month: Schema.Number,
        year: Schema.Number,
      }),
    ),
    documents: Schema.optional(
      Schema.Struct({
        company_authorization: Schema.optional(
          Schema.Struct({
            files: Schema.Array(Schema.String),
            type: Schema.Literals(["files"]),
          }),
        ),
        passport: Schema.optional(
          Schema.Struct({
            files: Schema.Array(Schema.String),
            type: Schema.Literals(["files"]),
          }),
        ),
        primary_verification: Schema.optional(
          Schema.Struct({
            front_back: Schema.Struct({
              back: Schema.optional(Schema.String),
              front: Schema.optional(Schema.String),
            }),
            type: Schema.Literals(["front_back"]),
          }),
        ),
        secondary_verification: Schema.optional(
          Schema.Struct({
            front_back: Schema.Struct({
              back: Schema.optional(Schema.String),
              front: Schema.optional(Schema.String),
            }),
            type: Schema.Literals(["front_back"]),
          }),
        ),
        visa: Schema.optional(
          Schema.Struct({
            files: Schema.Array(Schema.String),
            type: Schema.Literals(["files"]),
          }),
        ),
      }),
    ),
    email: Schema.optional(Schema.String),
    given_name: Schema.optional(Schema.String),
    id_numbers: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.Literals([
            "ae_eid",
            "ao_nif",
            "ar_cuil",
            "ar_dni",
            "at_stn",
            "az_tin",
            "bd_brc",
            "bd_etin",
            "bd_nid",
            "be_nrn",
            "bg_ucn",
            "bn_nric",
            "br_cpf",
            "ca_sin",
            "ch_oasi",
            "cl_rut",
            "cn_pp",
            "co_nuip",
            "cr_ci",
            "cr_cpf",
            "cr_dimex",
            "cr_nite",
            "cy_tic",
            "cz_rc",
            "de_stn",
            "dk_cpr",
            "do_cie",
            "do_rcn",
            "ec_ci",
            "ee_ik",
            "es_nif",
            "fi_hetu",
            "fr_nir",
            "gb_nino",
            "gr_afm",
            "gt_nit",
            "hk_id",
            "hr_oib",
            "hu_ad",
            "id_nik",
            "ie_ppsn",
            "is_kt",
            "it_cf",
            "jp_inc",
            "ke_pin",
            "kz_iin",
            "li_peid",
            "lt_ak",
            "lu_nif",
            "lv_pk",
            "mx_rfc",
            "my_nric",
            "mz_nuit",
            "ng_nin",
            "nl_bsn",
            "no_nin",
            "nz_ird",
            "pe_dni",
            "pk_cnic",
            "pk_snic",
            "pl_pesel",
            "pt_nif",
            "ro_cnp",
            "sa_tin",
            "se_pin",
            "sg_fin",
            "sg_nric",
            "sk_dic",
            "th_lc",
            "th_pin",
            "tr_tin",
            "us_itin",
            "us_itin_last_4",
            "us_ssn",
            "us_ssn_last_4",
            "uy_dni",
            "za_id",
          ]),
          value: Schema.String,
        }),
      ),
    ),
    legal_gender: Schema.optional(Schema.Literals(["female", "male"])),
    metadata: Schema.optional(
      Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
    ),
    nationalities: Schema.optional(Schema.Array(Schema.String)),
    phone: Schema.optional(Schema.String),
    political_exposure: Schema.optional(Schema.Literals(["existing", "none"])),
    relationship: Schema.optional(
      Schema.Struct({
        authorizer: Schema.optional(Schema.Boolean),
        director: Schema.optional(Schema.Boolean),
        executive: Schema.optional(Schema.Boolean),
        legal_guardian: Schema.optional(Schema.Boolean),
        owner: Schema.optional(Schema.Boolean),
        percent_ownership: Schema.optional(Schema.String),
        representative: Schema.optional(Schema.Boolean),
        title: Schema.optional(Schema.String),
      }),
    ),
    script_addresses: Schema.optional(
      Schema.Struct({
        kana: Schema.optional(
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
        kanji: Schema.optional(
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
      }),
    ),
    script_names: Schema.optional(
      Schema.Struct({
        kana: Schema.optional(
          Schema.Struct({
            given_name: Schema.optional(Schema.String),
            surname: Schema.optional(Schema.String),
          }),
        ),
        kanji: Schema.optional(
          Schema.Struct({
            given_name: Schema.optional(Schema.String),
            surname: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    surname: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/core/accounts/{account_id}/person_tokens",
    }),
  ) as unknown as Schema.Codec<PostV2CoreAccountsAccountIdPersonTokensInput>;

// Output Schema
export interface PostV2CoreAccountsAccountIdPersonTokensOutput {
  created: string;
  expires_at: string;
  id: string;
  livemode: boolean;
  object: "v2.core.account_person_token";
  used: boolean;
}
export const PostV2CoreAccountsAccountIdPersonTokensOutput =
  /*@__PURE__*/ Schema.Struct({
    created: Schema.String,
    expires_at: Schema.String,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["v2.core.account_person_token"]),
    used: Schema.Boolean,
  }) as unknown as Schema.Codec<PostV2CoreAccountsAccountIdPersonTokensOutput>;

// The operation
/**
 * Create a person token
 *
 * Creates a single-use token that represents the details for a person. Use this when you create or update persons associated with an Account v2. Learn more about [account tokens](https://docs.stripe.com/connect/account-tokens).
 * You can only create person tokens with your application's publishable key and in live mode. You can use your application's secret key to create person tokens only in test mode.
 *
 * @param account_id - The Account the Person is associated with.
 */
export const PostV2CoreAccountsAccountIdPersonTokens =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostV2CoreAccountsAccountIdPersonTokensInput,
    outputSchema: PostV2CoreAccountsAccountIdPersonTokensOutput,
  }));
