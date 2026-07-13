import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface OrderslistInput {
  organization_id?: string | ReadonlyArray<string> | null;
  product_id?: string | ReadonlyArray<string> | null;
  product_billing_type?:
    | "one_time"
    | "recurring"
    | ReadonlyArray<"one_time" | "recurring">
    | null;
  discount_id?: string | ReadonlyArray<string> | null;
  customer_id?: string | ReadonlyArray<string> | null;
  external_customer_id?: string | ReadonlyArray<string> | null;
  checkout_id?: string | ReadonlyArray<string> | null;
  subscription_id?: string | ReadonlyArray<string> | null;
  page?: number;
  limit?: number;
  sorting?: ReadonlyArray<
    | "created_at"
    | "-created_at"
    | "status"
    | "-status"
    | "invoice_number"
    | "-invoice_number"
    | "amount"
    | "-amount"
    | "net_amount"
    | "-net_amount"
    | "customer"
    | "-customer"
    | "product"
    | "-product"
    | "discount"
    | "-discount"
    | "subscription"
    | "-subscription"
  > | null;
  metadata?: Record<
    string,
    | string
    | number
    | boolean
    | ReadonlyArray<string>
    | ReadonlyArray<number>
    | ReadonlyArray<boolean>
  > | null;
}
export const OrderslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  product_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  product_billing_type: Schema.optional(
    Schema.NullOr(
      Schema.Union([
        Schema.Literals(["one_time", "recurring"]),
        Schema.Array(Schema.Literals(["one_time", "recurring"])),
      ]),
    ),
  ),
  discount_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  customer_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  external_customer_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  checkout_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  subscription_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "created_at",
          "-created_at",
          "status",
          "-status",
          "invoice_number",
          "-invoice_number",
          "amount",
          "-amount",
          "net_amount",
          "-net_amount",
          "customer",
          "-customer",
          "product",
          "-product",
          "discount",
          "-discount",
          "subscription",
          "-subscription",
        ]),
      ),
    ),
  ),
  metadata: Schema.optional(
    Schema.NullOr(
      Schema.Record(
        Schema.String,
        Schema.Union([
          Schema.String,
          Schema.Number,
          Schema.Boolean,
          Schema.Array(Schema.String),
          Schema.Array(Schema.Number),
          Schema.Array(Schema.Boolean),
        ]),
      ),
    ),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/v1/orders/" }),
) as unknown as Schema.Codec<OrderslistInput>;

// Output Schema
export interface OrderslistOutput {
  items: ReadonlyArray<{
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
    metadata: Record<string, string | number | boolean>;
    custom_field_data?: Record<string, string | number | boolean | null>;
    platform_fee_amount: number;
    platform_fee_currency: string | null;
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
    product: {
      metadata: Record<string, string | number | boolean>;
      id: string;
      created_at: string;
      modified_at: string | null;
      trial_interval: "day" | "week" | "month" | "year" | null;
      trial_interval_count: number | null;
      name: string;
      description: string | null;
      visibility: "draft" | "private" | "public";
      recurring_interval: "day" | "week" | "month" | "year" | null;
      recurring_interval_count: number | null;
      meter_interval: "day" | "week" | "month" | "year" | null;
      meter_interval_count: number | null;
      is_recurring: boolean;
      is_archived: boolean;
      organization_id: string;
    } | null;
    discount:
      | {
          duration: "once" | "forever" | "repeating";
          type: "fixed" | "percentage";
          amount: number;
          currency: string;
          amounts: Record<string, number>;
          created_at: string;
          modified_at: string | null;
          id: string;
          metadata: Record<string, string | number | boolean>;
          name: string;
          code: string | null;
          starts_at: string | null;
          ends_at: string | null;
          max_redemptions: number | null;
          redemptions_count: number;
          organization_id: string;
        }
      | {
          duration: "once" | "forever" | "repeating";
          duration_in_months: number;
          type: "fixed" | "percentage";
          amount: number;
          currency: string;
          amounts: Record<string, number>;
          created_at: string;
          modified_at: string | null;
          id: string;
          metadata: Record<string, string | number | boolean>;
          name: string;
          code: string | null;
          starts_at: string | null;
          ends_at: string | null;
          max_redemptions: number | null;
          redemptions_count: number;
          organization_id: string;
        }
      | {
          duration: "once" | "forever" | "repeating";
          type: "fixed" | "percentage";
          basis_points: number;
          created_at: string;
          modified_at: string | null;
          id: string;
          metadata: Record<string, string | number | boolean>;
          name: string;
          code: string | null;
          starts_at: string | null;
          ends_at: string | null;
          max_redemptions: number | null;
          redemptions_count: number;
          organization_id: string;
        }
      | {
          duration: "once" | "forever" | "repeating";
          duration_in_months: number;
          type: "fixed" | "percentage";
          basis_points: number;
          created_at: string;
          modified_at: string | null;
          id: string;
          metadata: Record<string, string | number | boolean>;
          name: string;
          code: string | null;
          starts_at: string | null;
          ends_at: string | null;
          max_redemptions: number | null;
          redemptions_count: number;
          organization_id: string;
        }
      | null;
    subscription: {
      metadata: Record<string, string | number | boolean>;
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
  }>;
  pagination: { total_count: number; max_page: number };
}
export const OrderslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
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
      metadata: Schema.Record(
        Schema.String,
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
      ),
      custom_field_data: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.NullOr(
            Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
          ),
        ),
      ),
      platform_fee_amount: Schema.Number,
      platform_fee_currency: Schema.NullOr(Schema.String),
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
      product: Schema.NullOr(
        Schema.Struct({
          metadata: Schema.Record(
            Schema.String,
            Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
          ),
          id: Schema.String,
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          trial_interval: Schema.NullOr(
            Schema.Literals(["day", "week", "month", "year"]),
          ),
          trial_interval_count: Schema.NullOr(Schema.Number),
          name: Schema.String,
          description: Schema.NullOr(Schema.String),
          visibility: Schema.Literals(["draft", "private", "public"]),
          recurring_interval: Schema.NullOr(
            Schema.Literals(["day", "week", "month", "year"]),
          ),
          recurring_interval_count: Schema.NullOr(Schema.Number),
          meter_interval: Schema.NullOr(
            Schema.Literals(["day", "week", "month", "year"]),
          ),
          meter_interval_count: Schema.NullOr(Schema.Number),
          is_recurring: Schema.Boolean,
          is_archived: Schema.Boolean,
          organization_id: Schema.String,
        }),
      ),
      discount: Schema.NullOr(
        Schema.Union([
          Schema.Struct({
            duration: Schema.Literals(["once", "forever", "repeating"]),
            type: Schema.Literals(["fixed", "percentage"]),
            amount: Schema.Number,
            currency: Schema.String,
            amounts: Schema.Record(Schema.String, Schema.Number),
            created_at: Schema.String,
            modified_at: Schema.NullOr(Schema.String),
            id: Schema.String,
            metadata: Schema.Record(
              Schema.String,
              Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
            ),
            name: Schema.String,
            code: Schema.NullOr(Schema.String),
            starts_at: Schema.NullOr(Schema.String),
            ends_at: Schema.NullOr(Schema.String),
            max_redemptions: Schema.NullOr(Schema.Number),
            redemptions_count: Schema.Number,
            organization_id: Schema.String,
          }),
          Schema.Struct({
            duration: Schema.Literals(["once", "forever", "repeating"]),
            duration_in_months: Schema.Number,
            type: Schema.Literals(["fixed", "percentage"]),
            amount: Schema.Number,
            currency: Schema.String,
            amounts: Schema.Record(Schema.String, Schema.Number),
            created_at: Schema.String,
            modified_at: Schema.NullOr(Schema.String),
            id: Schema.String,
            metadata: Schema.Record(
              Schema.String,
              Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
            ),
            name: Schema.String,
            code: Schema.NullOr(Schema.String),
            starts_at: Schema.NullOr(Schema.String),
            ends_at: Schema.NullOr(Schema.String),
            max_redemptions: Schema.NullOr(Schema.Number),
            redemptions_count: Schema.Number,
            organization_id: Schema.String,
          }),
          Schema.Struct({
            duration: Schema.Literals(["once", "forever", "repeating"]),
            type: Schema.Literals(["fixed", "percentage"]),
            basis_points: Schema.Number,
            created_at: Schema.String,
            modified_at: Schema.NullOr(Schema.String),
            id: Schema.String,
            metadata: Schema.Record(
              Schema.String,
              Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
            ),
            name: Schema.String,
            code: Schema.NullOr(Schema.String),
            starts_at: Schema.NullOr(Schema.String),
            ends_at: Schema.NullOr(Schema.String),
            max_redemptions: Schema.NullOr(Schema.Number),
            redemptions_count: Schema.Number,
            organization_id: Schema.String,
          }),
          Schema.Struct({
            duration: Schema.Literals(["once", "forever", "repeating"]),
            duration_in_months: Schema.Number,
            type: Schema.Literals(["fixed", "percentage"]),
            basis_points: Schema.Number,
            created_at: Schema.String,
            modified_at: Schema.NullOr(Schema.String),
            id: Schema.String,
            metadata: Schema.Record(
              Schema.String,
              Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
            ),
            name: Schema.String,
            code: Schema.NullOr(Schema.String),
            starts_at: Schema.NullOr(Schema.String),
            ends_at: Schema.NullOr(Schema.String),
            max_redemptions: Schema.NullOr(Schema.Number),
            redemptions_count: Schema.Number,
            organization_id: Schema.String,
          }),
        ]),
      ),
      subscription: Schema.NullOr(
        Schema.Struct({
          metadata: Schema.Record(
            Schema.String,
            Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
          ),
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
    }),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
}) as unknown as Schema.Codec<OrderslistOutput>;

// The operation
/**
 * List Orders
 *
 * List orders.
 * **Scopes**: `orders:read`
 *
 * @param organization_id - Filter by organization ID.
 * @param product_id - Filter by product ID.
 * @param product_billing_type - Filter by product billing type. `recurring` will filter data corresponding to subscriptions creations or renewals. `one_time` will filter data corresponding to one-time purchases.
 * @param discount_id - Filter by discount ID.
 * @param customer_id - Filter by customer ID.
 * @param external_customer_id - Filter by customer external ID.
 * @param checkout_id - Filter by checkout ID.
 * @param subscription_id - Filter by subscription ID.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 * @param metadata - Filter by metadata key-value pairs. It uses the `deepObject` style, e.g. `?metadata[key]=value`.
 */
export const orderslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrderslistInput,
  outputSchema: OrderslistOutput,
}));
