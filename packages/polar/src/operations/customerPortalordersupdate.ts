import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalordersupdateInput {
  id: string;
  billing_name?: string | null;
  billing_address?: {
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
      | "ZW";
  } | null;
}
export const CustomerPortalordersupdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    billing_name: Schema.optional(Schema.NullOr(Schema.String)),
    billing_address: Schema.optional(
      Schema.NullOr(
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
        }),
      ),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/customer-portal/orders/{id}" }),
  ) as unknown as Schema.Codec<CustomerPortalordersupdateInput>;

// Output Schema
export interface CustomerPortalordersupdateOutput {
  id: string;
  created_at: string;
  modified_at: string | null;
  status:
    | "draft"
    | "pending"
    | "paid"
    | "refunded"
    | "partially_refunded"
    | "void";
  paid: boolean;
  subtotal_amount: number;
  discount_amount: number;
  net_amount: number;
  tax_amount: number;
  total_amount: number;
  applied_balance_amount: number;
  due_amount: number;
  refunded_amount: number;
  refunded_tax_amount: number;
  currency: string;
  billing_reason:
    | "purchase"
    | "subscription_create"
    | "subscription_cycle"
    | "subscription_update";
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
  invoice_number: string | null;
  is_invoice_generated: boolean;
  receipt_number: string | null;
  seats?: number | null;
  customer_id: string;
  product_id: string | null;
  discount_id: string | null;
  subscription_id: string | null;
  checkout_id: string | null;
  next_payment_attempt_at?: string | null;
  product: unknown;
  subscription: {
    created_at: string;
    modified_at: string | null;
    id: string;
    amount: number;
    currency: string;
    recurring_interval: "day" | "week" | "month" | "year";
    recurring_interval_count: number;
    status:
      | "incomplete"
      | "incomplete_expired"
      | "trialing"
      | "active"
      | "past_due"
      | "canceled"
      | "unpaid"
      | "paused";
    current_period_start: string;
    current_period_end: string;
    current_meter_period_start: string | null;
    current_meter_period_end: string | null;
    trial_start: string | null;
    trial_end: string | null;
    cancel_at_period_end: boolean;
    canceled_at: string | null;
    started_at: string | null;
    ends_at: string | null;
    ended_at: string | null;
    past_due_at?: string | null;
    pause_at_period_end: boolean;
    paused_at: string | null;
    resumes_at: string | null;
    customer_id: string;
    product_id: string;
    discount_id: string | null;
    checkout_id: string | null;
    seats?: number | null;
    customer_cancellation_reason:
      | "customer_service"
      | "low_quality"
      | "missing_features"
      | "switched_service"
      | "too_complex"
      | "too_expensive"
      | "unused"
      | "other"
      | null;
    customer_cancellation_comment: string | null;
  } | null;
  items: ReadonlyArray<{
    created_at: string;
    modified_at: string | null;
    id: string;
    label: string;
    amount: number;
    tax_amount: number;
    proration: boolean;
    product_price_id: string | null;
  }>;
  description: string;
  refundable_amount: number;
  refundable_tax_amount: number;
}
export const CustomerPortalordersupdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    status: Schema.Literals([
      "draft",
      "pending",
      "paid",
      "refunded",
      "partially_refunded",
      "void",
    ]),
    paid: Schema.Boolean,
    subtotal_amount: Schema.Number,
    discount_amount: Schema.Number,
    net_amount: Schema.Number,
    tax_amount: Schema.Number,
    total_amount: Schema.Number,
    applied_balance_amount: Schema.Number,
    due_amount: Schema.Number,
    refunded_amount: Schema.Number,
    refunded_tax_amount: Schema.Number,
    currency: Schema.String,
    billing_reason: Schema.Literals([
      "purchase",
      "subscription_create",
      "subscription_cycle",
      "subscription_update",
    ]),
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
    invoice_number: Schema.NullOr(Schema.String),
    is_invoice_generated: Schema.Boolean,
    receipt_number: Schema.NullOr(Schema.String),
    seats: Schema.optional(Schema.NullOr(Schema.Number)),
    customer_id: Schema.String,
    product_id: Schema.NullOr(Schema.String),
    discount_id: Schema.NullOr(Schema.String),
    subscription_id: Schema.NullOr(Schema.String),
    checkout_id: Schema.NullOr(Schema.String),
    next_payment_attempt_at: Schema.optional(Schema.NullOr(Schema.String)),
    product: Schema.Unknown,
    subscription: Schema.NullOr(
      Schema.Struct({
        created_at: Schema.String,
        modified_at: Schema.NullOr(Schema.String),
        id: Schema.String,
        amount: Schema.Number,
        currency: Schema.String,
        recurring_interval: Schema.Literals(["day", "week", "month", "year"]),
        recurring_interval_count: Schema.Number,
        status: Schema.Literals([
          "incomplete",
          "incomplete_expired",
          "trialing",
          "active",
          "past_due",
          "canceled",
          "unpaid",
          "paused",
        ]),
        current_period_start: Schema.String,
        current_period_end: Schema.String,
        current_meter_period_start: Schema.NullOr(Schema.String),
        current_meter_period_end: Schema.NullOr(Schema.String),
        trial_start: Schema.NullOr(Schema.String),
        trial_end: Schema.NullOr(Schema.String),
        cancel_at_period_end: Schema.Boolean,
        canceled_at: Schema.NullOr(Schema.String),
        started_at: Schema.NullOr(Schema.String),
        ends_at: Schema.NullOr(Schema.String),
        ended_at: Schema.NullOr(Schema.String),
        past_due_at: Schema.optional(Schema.NullOr(Schema.String)),
        pause_at_period_end: Schema.Boolean,
        paused_at: Schema.NullOr(Schema.String),
        resumes_at: Schema.NullOr(Schema.String),
        customer_id: Schema.String,
        product_id: Schema.String,
        discount_id: Schema.NullOr(Schema.String),
        checkout_id: Schema.NullOr(Schema.String),
        seats: Schema.optional(Schema.NullOr(Schema.Number)),
        customer_cancellation_reason: Schema.NullOr(
          Schema.Literals([
            "customer_service",
            "low_quality",
            "missing_features",
            "switched_service",
            "too_complex",
            "too_expensive",
            "unused",
            "other",
          ]),
        ),
        customer_cancellation_comment: Schema.NullOr(Schema.String),
      }),
    ),
    items: Schema.Array(
      Schema.Struct({
        created_at: Schema.String,
        modified_at: Schema.NullOr(Schema.String),
        id: Schema.String,
        label: Schema.String,
        amount: Schema.Number,
        tax_amount: Schema.Number,
        proration: Schema.Boolean,
        product_price_id: Schema.NullOr(Schema.String),
      }),
    ),
    description: Schema.String,
    refundable_amount: Schema.Number,
    refundable_tax_amount: Schema.Number,
  }) as unknown as Schema.Codec<CustomerPortalordersupdateOutput>;

// The operation
/**
 * Update Order
 *
 * Update an order for the authenticated customer.
 *
 * @param id - The order ID.
 */
export const customerPortalordersupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerPortalordersupdateInput,
    outputSchema: CustomerPortalordersupdateOutput,
  }),
);
