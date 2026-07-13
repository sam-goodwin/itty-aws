import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DisputeslistInput {
  organization_id?: string | ReadonlyArray<string> | null;
  order_id?: string | ReadonlyArray<string> | null;
  status?:
    | "prevented"
    | "early_warning"
    | "needs_response"
    | "under_review"
    | "lost"
    | "won"
    | ReadonlyArray<
        | "prevented"
        | "early_warning"
        | "needs_response"
        | "under_review"
        | "lost"
        | "won"
      >
    | null;
  page?: number;
  limit?: number;
  sorting?: ReadonlyArray<
    "created_at" | "-created_at" | "amount" | "-amount"
  > | null;
}
export const DisputeslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  order_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  status: Schema.optional(
    Schema.NullOr(
      Schema.Union([
        Schema.Literals([
          "prevented",
          "early_warning",
          "needs_response",
          "under_review",
          "lost",
          "won",
        ]),
        Schema.Array(
          Schema.Literals([
            "prevented",
            "early_warning",
            "needs_response",
            "under_review",
            "lost",
            "won",
          ]),
        ),
      ]),
    ),
  ),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.Literals(["created_at", "-created_at", "amount", "-amount"]),
      ),
    ),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/v1/disputes/" }),
) as unknown as Schema.Codec<DisputeslistInput>;

// Output Schema
export interface DisputeslistOutput {
  items: ReadonlyArray<{
    created_at: string;
    modified_at: string | null;
    id: string;
    status:
      | "prevented"
      | "early_warning"
      | "needs_response"
      | "under_review"
      | "lost"
      | "won";
    resolved: boolean;
    closed: boolean;
    amount: number;
    tax_amount: number;
    currency: string;
    reason: string | null;
    evidence_due_by: string | null;
    past_due: boolean;
    order_id: string;
    payment_id: string;
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
    case_id: string | null;
  }>;
  pagination: { total_count: number; max_page: number };
}
export const DisputeslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
      id: Schema.String,
      status: Schema.Literals([
        "prevented",
        "early_warning",
        "needs_response",
        "under_review",
        "lost",
        "won",
      ]),
      resolved: Schema.Boolean,
      closed: Schema.Boolean,
      amount: Schema.Number,
      tax_amount: Schema.Number,
      currency: Schema.String,
      reason: Schema.NullOr(Schema.String),
      evidence_due_by: Schema.NullOr(Schema.String),
      past_due: Schema.Boolean,
      order_id: Schema.String,
      payment_id: Schema.String,
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
      case_id: Schema.NullOr(Schema.String),
    }),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
}) as unknown as Schema.Codec<DisputeslistOutput>;

// The operation
/**
 * List Disputes
 *
 * List disputes.
 * **Scopes**: `disputes:read` `disputes:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param order_id - Filter by order ID.
 * @param status - Filter by dispute status.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const disputeslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisputeslistInput,
  outputSchema: DisputeslistOutput,
}));
