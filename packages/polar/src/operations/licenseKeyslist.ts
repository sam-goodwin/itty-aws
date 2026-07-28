import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface LicenseKeyslistInput {
  organization_id?: string | ReadonlyArray<string> | null;
  benefit_id?: string | ReadonlyArray<string> | null;
  status?:
    | "granted"
    | "revoked"
    | "disabled"
    | ReadonlyArray<"granted" | "revoked" | "disabled">
    | null;
  page?: number;
  limit?: number;
}
export const LicenseKeyslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  benefit_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  status: Schema.optional(
    Schema.NullOr(
      Schema.Union([
        Schema.Literals(["granted", "revoked", "disabled"]),
        Schema.Array(Schema.Literals(["granted", "revoked", "disabled"])),
      ]),
    ),
  ),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/v1/license-keys/" }),
) as unknown as Schema.Codec<LicenseKeyslistInput>;

// Output Schema
export interface LicenseKeyslistOutput {
  items: ReadonlyArray<{
    id: string;
    created_at: string;
    modified_at: string | null;
    organization_id: string;
    customer_id: string;
    customer: {
      id: string;
      created_at: string;
      modified_at: string | null;
      metadata: Record<string, string | number | boolean>;
      external_id?: string | null;
      email?: string | null;
      email_verified: boolean;
      type: "individual" | "team";
      name: string | null;
      billing_name: string | null;
      billing_address: {
        line1?: string | null;
        line2?: string | null;
        postal_code?: string | null;
        city?: string | null;
        state?: string | null;
        country:
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
          | "ZW";
      } | null;
      tax_id: ReadonlyArray<unknown> | null;
      locale?: string | null;
      organization_id: string;
      default_payment_method_id?: string | null;
      deleted_at: string | null;
      avatar_url: string | null;
    };
    benefit_id: string;
    key: string;
    display_key: string;
    status: "granted" | "revoked" | "disabled";
    limit_activations: number | null;
    usage: number;
    limit_usage: number | null;
    validations: number;
    last_validated_at: string | null;
    expires_at: string | null;
  }>;
  pagination: { total_count: number; max_page: number };
}
export const LicenseKeyslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
      organization_id: Schema.String,
      customer_id: Schema.String,
      customer: Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        modified_at: Schema.NullOr(Schema.String),
        metadata: Schema.Record(
          Schema.String,
          Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
        ),
        external_id: Schema.optional(Schema.NullOr(Schema.String)),
        email: Schema.optional(Schema.NullOr(Schema.String)),
        email_verified: Schema.Boolean,
        type: Schema.Literals(["individual", "team"]),
        name: Schema.NullOr(Schema.String),
        billing_name: Schema.NullOr(Schema.String),
        billing_address: Schema.NullOr(
          Schema.Struct({
            line1: Schema.optional(Schema.NullOr(Schema.String)),
            line2: Schema.optional(Schema.NullOr(Schema.String)),
            postal_code: Schema.optional(Schema.NullOr(Schema.String)),
            city: Schema.optional(Schema.NullOr(Schema.String)),
            state: Schema.optional(Schema.NullOr(Schema.String)),
            country: Schema.Literals([
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
          }),
        ),
        tax_id: Schema.NullOr(Schema.Array(Schema.Unknown)),
        locale: Schema.optional(Schema.NullOr(Schema.String)),
        organization_id: Schema.String,
        default_payment_method_id: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        deleted_at: Schema.NullOr(Schema.String),
        avatar_url: Schema.NullOr(Schema.String),
      }),
      benefit_id: Schema.String,
      key: Schema.String,
      display_key: Schema.String,
      status: Schema.Literals(["granted", "revoked", "disabled"]),
      limit_activations: Schema.NullOr(Schema.Number),
      usage: Schema.Number,
      limit_usage: Schema.NullOr(Schema.Number),
      validations: Schema.Number,
      last_validated_at: Schema.NullOr(Schema.String),
      expires_at: Schema.NullOr(Schema.String),
    }),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
}) as unknown as Schema.Codec<LicenseKeyslistOutput>;

// The operation
/**
 * List License Keys
 *
 * Get license keys connected to the given organization & filters.
 * **Scopes**: `license_keys:read` `license_keys:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param benefit_id - Filter by benefit ID.
 * @param status - Filter by license key status.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 */
export const licenseKeyslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LicenseKeyslistInput,
  outputSchema: LicenseKeyslistOutput,
}));
