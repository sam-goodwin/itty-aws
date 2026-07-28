import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface OrganizationsupdateInput {
  id: string;
  name?: string | null;
  avatar_url?: string | null;
  email?: string | null;
  website?: string | null;
  socials?: ReadonlyArray<{
    platform:
      | "x"
      | "github"
      | "facebook"
      | "instagram"
      | "youtube"
      | "tiktok"
      | "linkedin"
      | "threads"
      | "discord"
      | "other";
    url: string;
  }> | null;
  details?: {
    about?: string | null;
    product_description?: string | null;
    selling_categories?: ReadonlyArray<string>;
    pricing_models?: ReadonlyArray<string>;
    intended_use?: string | null;
    customer_acquisition?: ReadonlyArray<string>;
    future_annual_revenue?: number | null;
    switching?: boolean;
    switching_from?:
      | "paddle"
      | "lemon_squeezy"
      | "gumroad"
      | "stripe"
      | "other"
      | null;
    previous_annual_revenue?: number | null;
  } | null;
  country?:
    | "AD"
    | "AE"
    | "AF"
    | "AG"
    | "AI"
    | "AL"
    | "AM"
    | "AO"
    | "AQ"
    | "AR"
    | "AS"
    | "AT"
    | "AU"
    | "AW"
    | "AX"
    | "AZ"
    | "BA"
    | "BB"
    | "BD"
    | "BE"
    | "BF"
    | "BG"
    | "BH"
    | "BI"
    | "BJ"
    | "BL"
    | "BM"
    | "BN"
    | "BO"
    | "BQ"
    | "BR"
    | "BS"
    | "BT"
    | "BV"
    | "BW"
    | "BY"
    | "BZ"
    | "CA"
    | "CC"
    | "CD"
    | "CF"
    | "CG"
    | "CH"
    | "CI"
    | "CK"
    | "CL"
    | "CM"
    | "CN"
    | "CO"
    | "CR"
    | "CV"
    | "CW"
    | "CX"
    | "CY"
    | "CZ"
    | "DE"
    | "DJ"
    | "DK"
    | "DM"
    | "DO"
    | "DZ"
    | "EC"
    | "EE"
    | "EG"
    | "EH"
    | "ER"
    | "ES"
    | "ET"
    | "FI"
    | "FJ"
    | "FK"
    | "FM"
    | "FO"
    | "FR"
    | "GA"
    | "GB"
    | "GD"
    | "GE"
    | "GF"
    | "GG"
    | "GH"
    | "GI"
    | "GL"
    | "GM"
    | "GN"
    | "GP"
    | "GQ"
    | "GR"
    | "GS"
    | "GT"
    | "GU"
    | "GW"
    | "GY"
    | "HK"
    | "HM"
    | "HN"
    | "HR"
    | "HT"
    | "HU"
    | "ID"
    | "IE"
    | "IL"
    | "IM"
    | "IN"
    | "IO"
    | "IQ"
    | "IS"
    | "IT"
    | "JE"
    | "JM"
    | "JO"
    | "JP"
    | "KE"
    | "KG"
    | "KH"
    | "KI"
    | "KM"
    | "KN"
    | "KR"
    | "KW"
    | "KY"
    | "KZ"
    | "LA"
    | "LB"
    | "LC"
    | "LI"
    | "LK"
    | "LR"
    | "LS"
    | "LT"
    | "LU"
    | "LV"
    | "LY"
    | "MA"
    | "MC"
    | "MD"
    | "ME"
    | "MF"
    | "MG"
    | "MH"
    | "MK"
    | "ML"
    | "MM"
    | "MN"
    | "MO"
    | "MP"
    | "MQ"
    | "MR"
    | "MS"
    | "MT"
    | "MU"
    | "MV"
    | "MW"
    | "MX"
    | "MY"
    | "MZ"
    | "NA"
    | "NC"
    | "NE"
    | "NF"
    | "NG"
    | "NI"
    | "NL"
    | "NO"
    | "NP"
    | "NR"
    | "NU"
    | "NZ"
    | "OM"
    | "PA"
    | "PE"
    | "PF"
    | "PG"
    | "PH"
    | "PK"
    | "PL"
    | "PM"
    | "PN"
    | "PR"
    | "PS"
    | "PT"
    | "PW"
    | "PY"
    | "QA"
    | "RE"
    | "RO"
    | "RS"
    | "RW"
    | "SA"
    | "SB"
    | "SC"
    | "SD"
    | "SE"
    | "SG"
    | "SH"
    | "SI"
    | "SJ"
    | "SK"
    | "SL"
    | "SM"
    | "SN"
    | "SO"
    | "SR"
    | "SS"
    | "ST"
    | "SV"
    | "SX"
    | "SZ"
    | "TC"
    | "TD"
    | "TF"
    | "TG"
    | "TH"
    | "TJ"
    | "TK"
    | "TL"
    | "TM"
    | "TN"
    | "TO"
    | "TR"
    | "TT"
    | "TV"
    | "TW"
    | "TZ"
    | "UA"
    | "UG"
    | "UM"
    | "US"
    | "UY"
    | "UZ"
    | "VA"
    | "VC"
    | "VE"
    | "VG"
    | "VI"
    | "VN"
    | "VU"
    | "WF"
    | "WS"
    | "YE"
    | "YT"
    | "ZA"
    | "ZM"
    | "ZW"
    | null;
  feature_settings?: {
    seat_based_pricing_enabled?: boolean;
    member_model_enabled?: boolean;
    checkout_localization_enabled?: boolean;
    overview_metrics?: ReadonlyArray<string> | null;
  } | null;
  subscription_settings?: {
    allow_multiple_subscriptions: boolean;
    proration_behavior: "invoice" | "prorate" | "next_period";
    benefit_revocation_grace_period: number;
    prevent_trial_abuse: boolean;
    allow_customer_updates: boolean;
  } | null;
  customer_email_settings?: {
    order_confirmation: boolean;
    subscription_cancellation: boolean;
    subscription_confirmation: boolean;
    subscription_cycled: boolean;
    subscription_cycled_after_trial: boolean;
    subscription_past_due: boolean;
    subscription_paused: boolean;
    subscription_resumed: boolean;
    subscription_renewal_reminder: boolean;
    subscription_revoked: boolean;
    subscription_trial_conversion_reminder: boolean;
    subscription_uncanceled: boolean;
    subscription_updated: boolean;
  } | null;
  customer_portal_settings?: {
    usage: { show: boolean };
    subscription: {
      update_seats: boolean;
      update_plan: boolean;
      pause?: boolean;
    };
    customer?: { allow_email_change?: boolean };
  } | null;
  default_presentment_currency?:
    | "aed"
    | "all"
    | "amd"
    | "aoa"
    | "ars"
    | "aud"
    | "awg"
    | "azn"
    | "bam"
    | "bbd"
    | "bdt"
    | "bif"
    | "bmd"
    | "bnd"
    | "bob"
    | "brl"
    | "bsd"
    | "bwp"
    | "bzd"
    | "cad"
    | "cdf"
    | "chf"
    | "clp"
    | "cny"
    | "cop"
    | "crc"
    | "cve"
    | "czk"
    | "djf"
    | "dkk"
    | "dop"
    | "dzd"
    | "egp"
    | "etb"
    | "eur"
    | "fjd"
    | "fkp"
    | "gbp"
    | "gel"
    | "gip"
    | "gmd"
    | "gnf"
    | "gtq"
    | "gyd"
    | "hkd"
    | "hnl"
    | "htg"
    | "huf"
    | "idr"
    | "ils"
    | "inr"
    | "isk"
    | "jmd"
    | "jpy"
    | "kes"
    | "kgs"
    | "khr"
    | "kmf"
    | "krw"
    | "kyd"
    | "kzt"
    | "lak"
    | "lkr"
    | "lrd"
    | "lsl"
    | "mad"
    | "mdl"
    | "mga"
    | "mkd"
    | "mnt"
    | "mop"
    | "mur"
    | "mvr"
    | "mwk"
    | "mxn"
    | "myr"
    | "mzn"
    | "nad"
    | "ngn"
    | "nio"
    | "nok"
    | "npr"
    | "nzd"
    | "pab"
    | "pen"
    | "pgk"
    | "php"
    | "pkr"
    | "pln"
    | "pyg"
    | "qar"
    | "ron"
    | "rsd"
    | "rwf"
    | "sar"
    | "sbd"
    | "scr"
    | "sek"
    | "sgd"
    | "shp"
    | "sos"
    | "srd"
    | "szl"
    | "thb"
    | "tjs"
    | "top"
    | "try"
    | "ttd"
    | "twd"
    | "tzs"
    | "uah"
    | "ugx"
    | "usd"
    | "uyu"
    | "uzs"
    | "vnd"
    | "vuv"
    | "wst"
    | "xaf"
    | "xcd"
    | "xcg"
    | "xof"
    | "xpf"
    | "yer"
    | "zar"
    | "zmw"
    | null;
  default_tax_behavior?: "location" | "inclusive" | "exclusive" | null;
  sso_enforced?: boolean | null;
}
export const OrganizationsupdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    avatar_url: Schema.optional(Schema.NullOr(Schema.String)),
    email: Schema.optional(Schema.NullOr(Schema.String)),
    website: Schema.optional(Schema.NullOr(Schema.String)),
    socials: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            platform: Schema.Literals([
              "x",
              "github",
              "facebook",
              "instagram",
              "youtube",
              "tiktok",
              "linkedin",
              "threads",
              "discord",
              "other",
            ]),
            url: Schema.String,
          }),
        ),
      ),
    ),
    details: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          about: Schema.optional(Schema.NullOr(Schema.String)),
          product_description: Schema.optional(Schema.NullOr(Schema.String)),
          selling_categories: Schema.optional(Schema.Array(Schema.String)),
          pricing_models: Schema.optional(Schema.Array(Schema.String)),
          intended_use: Schema.optional(Schema.NullOr(Schema.String)),
          customer_acquisition: Schema.optional(Schema.Array(Schema.String)),
          future_annual_revenue: Schema.optional(Schema.NullOr(Schema.Number)),
          switching: Schema.optional(Schema.Boolean),
          switching_from: Schema.optional(
            Schema.NullOr(
              Schema.Literals([
                "paddle",
                "lemon_squeezy",
                "gumroad",
                "stripe",
                "other",
              ]),
            ),
          ),
          previous_annual_revenue: Schema.optional(
            Schema.NullOr(Schema.Number),
          ),
        }),
      ),
    ),
    country: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "AD",
          "AE",
          "AF",
          "AG",
          "AI",
          "AL",
          "AM",
          "AO",
          "AQ",
          "AR",
          "AS",
          "AT",
          "AU",
          "AW",
          "AX",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BL",
          "BM",
          "BN",
          "BO",
          "BQ",
          "BR",
          "BS",
          "BT",
          "BV",
          "BW",
          "BY",
          "BZ",
          "CA",
          "CC",
          "CD",
          "CF",
          "CG",
          "CH",
          "CI",
          "CK",
          "CL",
          "CM",
          "CN",
          "CO",
          "CR",
          "CV",
          "CW",
          "CX",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "EH",
          "ER",
          "ES",
          "ET",
          "FI",
          "FJ",
          "FK",
          "FM",
          "FO",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GF",
          "GG",
          "GH",
          "GI",
          "GL",
          "GM",
          "GN",
          "GP",
          "GQ",
          "GR",
          "GS",
          "GT",
          "GU",
          "GW",
          "GY",
          "HK",
          "HM",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IM",
          "IN",
          "IO",
          "IQ",
          "IS",
          "IT",
          "JE",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KR",
          "KW",
          "KY",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MF",
          "MG",
          "MH",
          "MK",
          "ML",
          "MM",
          "MN",
          "MO",
          "MP",
          "MQ",
          "MR",
          "MS",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NC",
          "NE",
          "NF",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NU",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PF",
          "PG",
          "PH",
          "PK",
          "PL",
          "PM",
          "PN",
          "PR",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RE",
          "RO",
          "RS",
          "RW",
          "SA",
          "SB",
          "SC",
          "SD",
          "SE",
          "SG",
          "SH",
          "SI",
          "SJ",
          "SK",
          "SL",
          "SM",
          "SN",
          "SO",
          "SR",
          "SS",
          "ST",
          "SV",
          "SX",
          "SZ",
          "TC",
          "TD",
          "TF",
          "TG",
          "TH",
          "TJ",
          "TK",
          "TL",
          "TM",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "UM",
          "US",
          "UY",
          "UZ",
          "VA",
          "VC",
          "VE",
          "VG",
          "VI",
          "VN",
          "VU",
          "WF",
          "WS",
          "YE",
          "YT",
          "ZA",
          "ZM",
          "ZW",
        ]),
      ),
    ),
    feature_settings: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          seat_based_pricing_enabled: Schema.optional(Schema.Boolean),
          member_model_enabled: Schema.optional(Schema.Boolean),
          checkout_localization_enabled: Schema.optional(Schema.Boolean),
          overview_metrics: Schema.optional(
            Schema.NullOr(Schema.Array(Schema.String)),
          ),
        }),
      ),
    ),
    subscription_settings: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          allow_multiple_subscriptions: Schema.Boolean,
          proration_behavior: Schema.Literals([
            "invoice",
            "prorate",
            "next_period",
          ]),
          benefit_revocation_grace_period: Schema.Number,
          prevent_trial_abuse: Schema.Boolean,
          allow_customer_updates: Schema.Boolean,
        }),
      ),
    ),
    customer_email_settings: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          order_confirmation: Schema.Boolean,
          subscription_cancellation: Schema.Boolean,
          subscription_confirmation: Schema.Boolean,
          subscription_cycled: Schema.Boolean,
          subscription_cycled_after_trial: Schema.Boolean,
          subscription_past_due: Schema.Boolean,
          subscription_paused: Schema.Boolean,
          subscription_resumed: Schema.Boolean,
          subscription_renewal_reminder: Schema.Boolean,
          subscription_revoked: Schema.Boolean,
          subscription_trial_conversion_reminder: Schema.Boolean,
          subscription_uncanceled: Schema.Boolean,
          subscription_updated: Schema.Boolean,
        }),
      ),
    ),
    customer_portal_settings: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          usage: Schema.Struct({
            show: Schema.Boolean,
          }),
          subscription: Schema.Struct({
            update_seats: Schema.Boolean,
            update_plan: Schema.Boolean,
            pause: Schema.optional(Schema.Boolean),
          }),
          customer: Schema.optional(
            Schema.Struct({
              allow_email_change: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
    ),
    default_presentment_currency: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "aed",
          "all",
          "amd",
          "aoa",
          "ars",
          "aud",
          "awg",
          "azn",
          "bam",
          "bbd",
          "bdt",
          "bif",
          "bmd",
          "bnd",
          "bob",
          "brl",
          "bsd",
          "bwp",
          "bzd",
          "cad",
          "cdf",
          "chf",
          "clp",
          "cny",
          "cop",
          "crc",
          "cve",
          "czk",
          "djf",
          "dkk",
          "dop",
          "dzd",
          "egp",
          "etb",
          "eur",
          "fjd",
          "fkp",
          "gbp",
          "gel",
          "gip",
          "gmd",
          "gnf",
          "gtq",
          "gyd",
          "hkd",
          "hnl",
          "htg",
          "huf",
          "idr",
          "ils",
          "inr",
          "isk",
          "jmd",
          "jpy",
          "kes",
          "kgs",
          "khr",
          "kmf",
          "krw",
          "kyd",
          "kzt",
          "lak",
          "lkr",
          "lrd",
          "lsl",
          "mad",
          "mdl",
          "mga",
          "mkd",
          "mnt",
          "mop",
          "mur",
          "mvr",
          "mwk",
          "mxn",
          "myr",
          "mzn",
          "nad",
          "ngn",
          "nio",
          "nok",
          "npr",
          "nzd",
          "pab",
          "pen",
          "pgk",
          "php",
          "pkr",
          "pln",
          "pyg",
          "qar",
          "ron",
          "rsd",
          "rwf",
          "sar",
          "sbd",
          "scr",
          "sek",
          "sgd",
          "shp",
          "sos",
          "srd",
          "szl",
          "thb",
          "tjs",
          "top",
          "try",
          "ttd",
          "twd",
          "tzs",
          "uah",
          "ugx",
          "usd",
          "uyu",
          "uzs",
          "vnd",
          "vuv",
          "wst",
          "xaf",
          "xcd",
          "xcg",
          "xof",
          "xpf",
          "yer",
          "zar",
          "zmw",
        ]),
      ),
    ),
    default_tax_behavior: Schema.optional(
      Schema.NullOr(Schema.Literals(["location", "inclusive", "exclusive"])),
    ),
    sso_enforced: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/organizations/{id}" }),
  ) as unknown as Schema.Codec<OrganizationsupdateInput>;

// Output Schema
export interface OrganizationsupdateOutput {
  created_at: string;
  modified_at: string | null;
  id: string;
  name: string;
  slug: string;
  avatar_url: string | null;
  proration_behavior: "invoice" | "prorate" | "next_period" | "reset";
  allow_customer_updates: boolean;
  email: string | null;
  website: string | null;
  socials: ReadonlyArray<{
    platform:
      | "x"
      | "github"
      | "facebook"
      | "instagram"
      | "youtube"
      | "tiktok"
      | "linkedin"
      | "threads"
      | "discord"
      | "other";
    url: string;
  }>;
  status:
    | "created"
    | "review"
    | "snoozed"
    | "denied"
    | "active"
    | "blocked"
    | "offboarding"
    | "offboarded";
  details_submitted_at: string | null;
  sso_enforced: boolean;
  default_presentment_currency: string;
  default_tax_behavior: "location" | "inclusive" | "exclusive";
  feature_settings: {
    issue_funding_enabled?: boolean;
    seat_based_pricing_enabled?: boolean;
    wallets_enabled?: boolean;
    member_model_enabled?: boolean;
    checkout_localization_enabled?: boolean;
    overview_metrics?: ReadonlyArray<string> | null;
    reset_proration_behavior_enabled?: boolean;
    off_session_charges_enabled?: boolean;
    slack_benefit_enabled?: boolean;
    preview_access_enabled?: boolean;
    disputes_enabled?: boolean;
    sso_enabled?: boolean;
    compass_enabled?: boolean;
    merchant_migration_enabled?: boolean;
  } | null;
  subscription_settings: {
    allow_multiple_subscriptions: boolean;
    proration_behavior: "invoice" | "prorate" | "next_period";
    benefit_revocation_grace_period: number;
    prevent_trial_abuse: boolean;
    allow_customer_updates: boolean;
  };
  customer_email_settings: {
    order_confirmation: boolean;
    subscription_cancellation: boolean;
    subscription_confirmation: boolean;
    subscription_cycled: boolean;
    subscription_cycled_after_trial: boolean;
    subscription_past_due: boolean;
    subscription_paused: boolean;
    subscription_resumed: boolean;
    subscription_renewal_reminder: boolean;
    subscription_revoked: boolean;
    subscription_trial_conversion_reminder: boolean;
    subscription_uncanceled: boolean;
    subscription_updated: boolean;
  };
  customer_portal_settings: {
    usage: { show: boolean };
    subscription: {
      update_seats: boolean;
      update_plan: boolean;
      pause?: boolean;
    };
    customer?: { allow_email_change?: boolean };
  };
  country?:
    | "AD"
    | "AE"
    | "AF"
    | "AG"
    | "AI"
    | "AL"
    | "AM"
    | "AO"
    | "AQ"
    | "AR"
    | "AS"
    | "AT"
    | "AU"
    | "AW"
    | "AX"
    | "AZ"
    | "BA"
    | "BB"
    | "BD"
    | "BE"
    | "BF"
    | "BG"
    | "BH"
    | "BI"
    | "BJ"
    | "BL"
    | "BM"
    | "BN"
    | "BO"
    | "BQ"
    | "BR"
    | "BS"
    | "BT"
    | "BV"
    | "BW"
    | "BY"
    | "BZ"
    | "CA"
    | "CC"
    | "CD"
    | "CF"
    | "CG"
    | "CH"
    | "CI"
    | "CK"
    | "CL"
    | "CM"
    | "CN"
    | "CO"
    | "CR"
    | "CU"
    | "CV"
    | "CW"
    | "CX"
    | "CY"
    | "CZ"
    | "DE"
    | "DJ"
    | "DK"
    | "DM"
    | "DO"
    | "DZ"
    | "EC"
    | "EE"
    | "EG"
    | "EH"
    | "ER"
    | "ES"
    | "ET"
    | "FI"
    | "FJ"
    | "FK"
    | "FM"
    | "FO"
    | "FR"
    | "GA"
    | "GB"
    | "GD"
    | "GE"
    | "GF"
    | "GG"
    | "GH"
    | "GI"
    | "GL"
    | "GM"
    | "GN"
    | "GP"
    | "GQ"
    | "GR"
    | "GS"
    | "GT"
    | "GU"
    | "GW"
    | "GY"
    | "HK"
    | "HM"
    | "HN"
    | "HR"
    | "HT"
    | "HU"
    | "ID"
    | "IE"
    | "IL"
    | "IM"
    | "IN"
    | "IO"
    | "IQ"
    | "IR"
    | "IS"
    | "IT"
    | "JE"
    | "JM"
    | "JO"
    | "JP"
    | "KE"
    | "KG"
    | "KH"
    | "KI"
    | "KM"
    | "KN"
    | "KP"
    | "KR"
    | "KW"
    | "KY"
    | "KZ"
    | "LA"
    | "LB"
    | "LC"
    | "LI"
    | "LK"
    | "LR"
    | "LS"
    | "LT"
    | "LU"
    | "LV"
    | "LY"
    | "MA"
    | "MC"
    | "MD"
    | "ME"
    | "MF"
    | "MG"
    | "MH"
    | "MK"
    | "ML"
    | "MM"
    | "MN"
    | "MO"
    | "MP"
    | "MQ"
    | "MR"
    | "MS"
    | "MT"
    | "MU"
    | "MV"
    | "MW"
    | "MX"
    | "MY"
    | "MZ"
    | "NA"
    | "NC"
    | "NE"
    | "NF"
    | "NG"
    | "NI"
    | "NL"
    | "NO"
    | "NP"
    | "NR"
    | "NU"
    | "NZ"
    | "OM"
    | "PA"
    | "PE"
    | "PF"
    | "PG"
    | "PH"
    | "PK"
    | "PL"
    | "PM"
    | "PN"
    | "PR"
    | "PS"
    | "PT"
    | "PW"
    | "PY"
    | "QA"
    | "RE"
    | "RO"
    | "RS"
    | "RU"
    | "RW"
    | "SA"
    | "SB"
    | "SC"
    | "SD"
    | "SE"
    | "SG"
    | "SH"
    | "SI"
    | "SJ"
    | "SK"
    | "SL"
    | "SM"
    | "SN"
    | "SO"
    | "SR"
    | "SS"
    | "ST"
    | "SV"
    | "SX"
    | "SY"
    | "SZ"
    | "TC"
    | "TD"
    | "TF"
    | "TG"
    | "TH"
    | "TJ"
    | "TK"
    | "TL"
    | "TM"
    | "TN"
    | "TO"
    | "TR"
    | "TT"
    | "TV"
    | "TW"
    | "TZ"
    | "UA"
    | "UG"
    | "UM"
    | "US"
    | "UY"
    | "UZ"
    | "VA"
    | "VC"
    | "VE"
    | "VG"
    | "VI"
    | "VN"
    | "VU"
    | "WF"
    | "WS"
    | "YE"
    | "YT"
    | "ZA"
    | "ZM"
    | "ZW"
    | null;
  account_id: string | null;
  payout_account_id: string | null;
  capabilities: {
    checkout_payments: boolean;
    subscription_renewals: boolean;
    payouts: boolean;
    refunds: boolean;
    api_access: boolean;
    dashboard_access: boolean;
  };
}
export const OrganizationsupdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    id: Schema.String,
    name: Schema.String,
    slug: Schema.String,
    avatar_url: Schema.NullOr(Schema.String),
    proration_behavior: Schema.Literals([
      "invoice",
      "prorate",
      "next_period",
      "reset",
    ]),
    allow_customer_updates: Schema.Boolean,
    email: Schema.NullOr(Schema.String),
    website: Schema.NullOr(Schema.String),
    socials: Schema.Array(
      Schema.Struct({
        platform: Schema.Literals([
          "x",
          "github",
          "facebook",
          "instagram",
          "youtube",
          "tiktok",
          "linkedin",
          "threads",
          "discord",
          "other",
        ]),
        url: Schema.String,
      }),
    ),
    status: Schema.Literals([
      "created",
      "review",
      "snoozed",
      "denied",
      "active",
      "blocked",
      "offboarding",
      "offboarded",
    ]),
    details_submitted_at: Schema.NullOr(Schema.String),
    sso_enforced: Schema.Boolean,
    default_presentment_currency: Schema.String,
    default_tax_behavior: Schema.Literals([
      "location",
      "inclusive",
      "exclusive",
    ]),
    feature_settings: Schema.NullOr(
      Schema.Struct({
        issue_funding_enabled: Schema.optional(Schema.Boolean),
        seat_based_pricing_enabled: Schema.optional(Schema.Boolean),
        wallets_enabled: Schema.optional(Schema.Boolean),
        member_model_enabled: Schema.optional(Schema.Boolean),
        checkout_localization_enabled: Schema.optional(Schema.Boolean),
        overview_metrics: Schema.optional(
          Schema.NullOr(Schema.Array(Schema.String)),
        ),
        reset_proration_behavior_enabled: Schema.optional(Schema.Boolean),
        off_session_charges_enabled: Schema.optional(Schema.Boolean),
        slack_benefit_enabled: Schema.optional(Schema.Boolean),
        preview_access_enabled: Schema.optional(Schema.Boolean),
        disputes_enabled: Schema.optional(Schema.Boolean),
        sso_enabled: Schema.optional(Schema.Boolean),
        compass_enabled: Schema.optional(Schema.Boolean),
        merchant_migration_enabled: Schema.optional(Schema.Boolean),
      }),
    ),
    subscription_settings: Schema.Struct({
      allow_multiple_subscriptions: Schema.Boolean,
      proration_behavior: Schema.Literals([
        "invoice",
        "prorate",
        "next_period",
      ]),
      benefit_revocation_grace_period: Schema.Number,
      prevent_trial_abuse: Schema.Boolean,
      allow_customer_updates: Schema.Boolean,
    }),
    customer_email_settings: Schema.Struct({
      order_confirmation: Schema.Boolean,
      subscription_cancellation: Schema.Boolean,
      subscription_confirmation: Schema.Boolean,
      subscription_cycled: Schema.Boolean,
      subscription_cycled_after_trial: Schema.Boolean,
      subscription_past_due: Schema.Boolean,
      subscription_paused: Schema.Boolean,
      subscription_resumed: Schema.Boolean,
      subscription_renewal_reminder: Schema.Boolean,
      subscription_revoked: Schema.Boolean,
      subscription_trial_conversion_reminder: Schema.Boolean,
      subscription_uncanceled: Schema.Boolean,
      subscription_updated: Schema.Boolean,
    }),
    customer_portal_settings: Schema.Struct({
      usage: Schema.Struct({
        show: Schema.Boolean,
      }),
      subscription: Schema.Struct({
        update_seats: Schema.Boolean,
        update_plan: Schema.Boolean,
        pause: Schema.optional(Schema.Boolean),
      }),
      customer: Schema.optional(
        Schema.Struct({
          allow_email_change: Schema.optional(Schema.Boolean),
        }),
      ),
    }),
    country: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "AD",
          "AE",
          "AF",
          "AG",
          "AI",
          "AL",
          "AM",
          "AO",
          "AQ",
          "AR",
          "AS",
          "AT",
          "AU",
          "AW",
          "AX",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BL",
          "BM",
          "BN",
          "BO",
          "BQ",
          "BR",
          "BS",
          "BT",
          "BV",
          "BW",
          "BY",
          "BZ",
          "CA",
          "CC",
          "CD",
          "CF",
          "CG",
          "CH",
          "CI",
          "CK",
          "CL",
          "CM",
          "CN",
          "CO",
          "CR",
          "CU",
          "CV",
          "CW",
          "CX",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "EH",
          "ER",
          "ES",
          "ET",
          "FI",
          "FJ",
          "FK",
          "FM",
          "FO",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GF",
          "GG",
          "GH",
          "GI",
          "GL",
          "GM",
          "GN",
          "GP",
          "GQ",
          "GR",
          "GS",
          "GT",
          "GU",
          "GW",
          "GY",
          "HK",
          "HM",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IM",
          "IN",
          "IO",
          "IQ",
          "IR",
          "IS",
          "IT",
          "JE",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KP",
          "KR",
          "KW",
          "KY",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MF",
          "MG",
          "MH",
          "MK",
          "ML",
          "MM",
          "MN",
          "MO",
          "MP",
          "MQ",
          "MR",
          "MS",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NC",
          "NE",
          "NF",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NU",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PF",
          "PG",
          "PH",
          "PK",
          "PL",
          "PM",
          "PN",
          "PR",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RE",
          "RO",
          "RS",
          "RU",
          "RW",
          "SA",
          "SB",
          "SC",
          "SD",
          "SE",
          "SG",
          "SH",
          "SI",
          "SJ",
          "SK",
          "SL",
          "SM",
          "SN",
          "SO",
          "SR",
          "SS",
          "ST",
          "SV",
          "SX",
          "SY",
          "SZ",
          "TC",
          "TD",
          "TF",
          "TG",
          "TH",
          "TJ",
          "TK",
          "TL",
          "TM",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "UM",
          "US",
          "UY",
          "UZ",
          "VA",
          "VC",
          "VE",
          "VG",
          "VI",
          "VN",
          "VU",
          "WF",
          "WS",
          "YE",
          "YT",
          "ZA",
          "ZM",
          "ZW",
        ]),
      ),
    ),
    account_id: Schema.NullOr(Schema.String),
    payout_account_id: Schema.NullOr(Schema.String),
    capabilities: Schema.Struct({
      checkout_payments: Schema.Boolean,
      subscription_renewals: Schema.Boolean,
      payouts: Schema.Boolean,
      refunds: Schema.Boolean,
      api_access: Schema.Boolean,
      dashboard_access: Schema.Boolean,
    }),
  }) as unknown as Schema.Codec<OrganizationsupdateOutput>;

// The operation
/**
 * Update Organization
 *
 * Update an organization.
 * **Scopes**: `organizations:write`
 */
export const organizationsupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrganizationsupdateInput,
  outputSchema: OrganizationsupdateOutput,
}));
