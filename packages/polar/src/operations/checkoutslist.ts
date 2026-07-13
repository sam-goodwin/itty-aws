import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface CheckoutslistInput {
  organization_id?: string | ReadonlyArray<string> | null;
  product_id?: string | ReadonlyArray<string> | null;
  customer_id?: string | ReadonlyArray<string> | null;
  external_customer_id?: string | ReadonlyArray<string> | null;
  status?:
    | "open"
    | "expired"
    | "confirmed"
    | "succeeded"
    | "failed"
    | ReadonlyArray<"open" | "expired" | "confirmed" | "succeeded" | "failed">
    | null;
  query?: string | null;
  page?: number;
  limit?: number;
  sorting?: ReadonlyArray<
    | "created_at"
    | "-created_at"
    | "expires_at"
    | "-expires_at"
    | "status"
    | "-status"
  > | null;
}
export const CheckoutslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  product_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  customer_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  external_customer_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  status: Schema.optional(
    Schema.NullOr(
      Schema.Union([
        Schema.Literals([
          "open",
          "expired",
          "confirmed",
          "succeeded",
          "failed",
        ]),
        Schema.Array(
          Schema.Literals([
            "open",
            "expired",
            "confirmed",
            "succeeded",
            "failed",
          ]),
        ),
      ]),
    ),
  ),
  query: Schema.optional(Schema.NullOr(Schema.String)),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "created_at",
          "-created_at",
          "expires_at",
          "-expires_at",
          "status",
          "-status",
        ]),
      ),
    ),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/v1/checkouts/" }),
) as unknown as Schema.Codec<CheckoutslistInput>;

// Output Schema
export interface CheckoutslistOutput {
  items: ReadonlyArray<{
    id: string;
    created_at: string;
    modified_at: string | null;
    custom_field_data?: Record<string, string | number | boolean | null>;
    payment_processor: "stripe";
    status: "open" | "expired" | "confirmed" | "succeeded" | "failed";
    client_secret: Redacted.Redacted<string>;
    url: string;
    expires_at: string;
    success_url: string;
    return_url: string | null;
    embed_origin: string | null;
    amount: number;
    seats?: number | null;
    min_seats?: number | null;
    max_seats?: number | null;
    discount_amount: number;
    net_amount: number;
    tax_amount: number | null;
    tax_behavior: "inclusive" | "exclusive" | null;
    total_amount: number;
    currency: string;
    allow_trial: boolean | null;
    active_trial_interval: "day" | "week" | "month" | "year" | null;
    active_trial_interval_count: number | null;
    trial_end: string | null;
    organization_id: string;
    product_id: string | null;
    product_price_id: string | null;
    discount_id: string | null;
    allow_discount_codes: boolean;
    require_billing_address: boolean;
    is_discount_applicable: boolean;
    is_free_product_price: boolean;
    is_payment_required: boolean;
    is_payment_setup_required: boolean;
    is_payment_form_required: boolean;
    customer_id: string | null;
    is_business_customer: boolean;
    customer_name: string | null;
    customer_email: string | null;
    customer_ip_address: string | null;
    customer_billing_name: string | null;
    customer_billing_address: {
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
    customer_tax_id: string | null;
    locale?: string | null;
    payment_processor_metadata: Record<string, string>;
    billing_address_fields: {
      country: "required" | "optional" | "disabled";
      state: "required" | "optional" | "disabled";
      city: "required" | "optional" | "disabled";
      postal_code: "required" | "optional" | "disabled";
      line1: "required" | "optional" | "disabled";
      line2: "required" | "optional" | "disabled";
    };
    trial_interval: "day" | "week" | "month" | "year" | null;
    trial_interval_count: number | null;
    metadata: Record<string, string | number | boolean>;
    external_customer_id: string | null;
    products: ReadonlyArray<{
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
      prices: ReadonlyArray<
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            type: string;
            recurring_interval: "day" | "week" | "month" | "year";
            price_amount: number;
            legacy: boolean;
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            type: string;
            recurring_interval: "day" | "week" | "month" | "year";
            minimum_amount: number;
            maximum_amount: number | null;
            preset_amount: number | null;
            legacy: boolean;
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            price_amount: number;
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            minimum_amount: number;
            maximum_amount: number | null;
            preset_amount: number | null;
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            seat_tiers: {
              seat_tier_type?: "volume" | "graduated";
              tiers: ReadonlyArray<{
                min_seats: number;
                max_seats?: number | null;
                price_per_seat: number;
              }>;
              minimum_seats: number;
              maximum_seats: number | null;
            };
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            unit_amount: string;
            cap_amount: number | null;
            meter_id: string;
            meter: {
              id: string;
              name: string;
              unit: "scalar" | "token" | "custom";
              custom_label: string | null;
              custom_multiplier: number | null;
            };
          }
      >;
      benefits: ReadonlyArray<{
        id: string;
        created_at: string;
        modified_at: string | null;
        type:
          | "custom"
          | "discord"
          | "github_repository"
          | "downloadables"
          | "license_keys"
          | "meter_credit"
          | "feature_flag"
          | "slack_shared_channel";
        description: string;
        selectable: boolean;
        deletable: boolean;
        is_deleted: boolean;
        organization_id: string;
      }>;
      medias: ReadonlyArray<{
        id: string;
        organization_id: string;
        name: string;
        path: string;
        mime_type: string;
        size: number;
        storage_version: string | null;
        checksum_etag: string | null;
        checksum_sha256_base64: string | null;
        checksum_sha256_hex: string | null;
        last_modified_at: string | null;
        version: string | null;
        service: string;
        is_uploaded: boolean;
        created_at: string;
        size_readable: string;
        public_url: string;
      }>;
    }>;
    product: {
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
      prices: ReadonlyArray<
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            type: string;
            recurring_interval: "day" | "week" | "month" | "year";
            price_amount: number;
            legacy: boolean;
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            type: string;
            recurring_interval: "day" | "week" | "month" | "year";
            minimum_amount: number;
            maximum_amount: number | null;
            preset_amount: number | null;
            legacy: boolean;
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            price_amount: number;
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            minimum_amount: number;
            maximum_amount: number | null;
            preset_amount: number | null;
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            seat_tiers: {
              seat_tier_type?: "volume" | "graduated";
              tiers: ReadonlyArray<{
                min_seats: number;
                max_seats?: number | null;
                price_per_seat: number;
              }>;
              minimum_seats: number;
              maximum_seats: number | null;
            };
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            unit_amount: string;
            cap_amount: number | null;
            meter_id: string;
            meter: {
              id: string;
              name: string;
              unit: "scalar" | "token" | "custom";
              custom_label: string | null;
              custom_multiplier: number | null;
            };
          }
      >;
      benefits: ReadonlyArray<{
        id: string;
        created_at: string;
        modified_at: string | null;
        type:
          | "custom"
          | "discord"
          | "github_repository"
          | "downloadables"
          | "license_keys"
          | "meter_credit"
          | "feature_flag"
          | "slack_shared_channel";
        description: string;
        selectable: boolean;
        deletable: boolean;
        is_deleted: boolean;
        organization_id: string;
      }>;
      medias: ReadonlyArray<{
        id: string;
        organization_id: string;
        name: string;
        path: string;
        mime_type: string;
        size: number;
        storage_version: string | null;
        checksum_etag: string | null;
        checksum_sha256_base64: string | null;
        checksum_sha256_hex: string | null;
        last_modified_at: string | null;
        version: string | null;
        service: string;
        is_uploaded: boolean;
        created_at: string;
        size_readable: string;
        public_url: string;
      }>;
    } | null;
    product_price:
      | {
          created_at: string;
          modified_at: string | null;
          id: string;
          source: "catalog" | "ad_hoc";
          amount_type: string;
          price_currency: string;
          tax_behavior: "location" | "inclusive" | "exclusive" | null;
          is_archived: boolean;
          product_id: string;
          type: string;
          recurring_interval: "day" | "week" | "month" | "year";
          price_amount: number;
          legacy: boolean;
        }
      | {
          created_at: string;
          modified_at: string | null;
          id: string;
          source: "catalog" | "ad_hoc";
          amount_type: string;
          price_currency: string;
          tax_behavior: "location" | "inclusive" | "exclusive" | null;
          is_archived: boolean;
          product_id: string;
          type: string;
          recurring_interval: "day" | "week" | "month" | "year";
          minimum_amount: number;
          maximum_amount: number | null;
          preset_amount: number | null;
          legacy: boolean;
        }
      | {
          created_at: string;
          modified_at: string | null;
          id: string;
          source: "catalog" | "ad_hoc";
          amount_type: string;
          price_currency: string;
          tax_behavior: "location" | "inclusive" | "exclusive" | null;
          is_archived: boolean;
          product_id: string;
          price_amount: number;
        }
      | {
          created_at: string;
          modified_at: string | null;
          id: string;
          source: "catalog" | "ad_hoc";
          amount_type: string;
          price_currency: string;
          tax_behavior: "location" | "inclusive" | "exclusive" | null;
          is_archived: boolean;
          product_id: string;
          minimum_amount: number;
          maximum_amount: number | null;
          preset_amount: number | null;
        }
      | {
          created_at: string;
          modified_at: string | null;
          id: string;
          source: "catalog" | "ad_hoc";
          amount_type: string;
          price_currency: string;
          tax_behavior: "location" | "inclusive" | "exclusive" | null;
          is_archived: boolean;
          product_id: string;
          seat_tiers: {
            seat_tier_type?: "volume" | "graduated";
            tiers: ReadonlyArray<{
              min_seats: number;
              max_seats?: number | null;
              price_per_seat: number;
            }>;
            minimum_seats: number;
            maximum_seats: number | null;
          };
        }
      | {
          created_at: string;
          modified_at: string | null;
          id: string;
          source: "catalog" | "ad_hoc";
          amount_type: string;
          price_currency: string;
          tax_behavior: "location" | "inclusive" | "exclusive" | null;
          is_archived: boolean;
          product_id: string;
          unit_amount: string;
          cap_amount: number | null;
          meter_id: string;
          meter: {
            id: string;
            name: string;
            unit: "scalar" | "token" | "custom";
            custom_label: string | null;
            custom_multiplier: number | null;
          };
        }
      | null;
    prices: Record<
      string,
      ReadonlyArray<
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            type: string;
            recurring_interval: "day" | "week" | "month" | "year";
            price_amount: number;
            legacy: boolean;
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            type: string;
            recurring_interval: "day" | "week" | "month" | "year";
            minimum_amount: number;
            maximum_amount: number | null;
            preset_amount: number | null;
            legacy: boolean;
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            price_amount: number;
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            minimum_amount: number;
            maximum_amount: number | null;
            preset_amount: number | null;
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            seat_tiers: {
              seat_tier_type?: "volume" | "graduated";
              tiers: ReadonlyArray<{
                min_seats: number;
                max_seats?: number | null;
                price_per_seat: number;
              }>;
              minimum_seats: number;
              maximum_seats: number | null;
            };
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            unit_amount: string;
            cap_amount: number | null;
            meter_id: string;
            meter: {
              id: string;
              name: string;
              unit: "scalar" | "token" | "custom";
              custom_label: string | null;
              custom_multiplier: number | null;
            };
          }
      >
    > | null;
    discount:
      | {
          duration: "once" | "forever" | "repeating";
          type: "fixed" | "percentage";
          amount: number;
          currency: string;
          amounts: Record<string, number>;
          id: string;
          name: string;
          code: string | null;
        }
      | {
          duration: "once" | "forever" | "repeating";
          duration_in_months: number;
          type: "fixed" | "percentage";
          amount: number;
          currency: string;
          amounts: Record<string, number>;
          id: string;
          name: string;
          code: string | null;
        }
      | {
          duration: "once" | "forever" | "repeating";
          type: "fixed" | "percentage";
          basis_points: number;
          id: string;
          name: string;
          code: string | null;
        }
      | {
          duration: "once" | "forever" | "repeating";
          duration_in_months: number;
          type: "fixed" | "percentage";
          basis_points: number;
          id: string;
          name: string;
          code: string | null;
        }
      | null;
    subscription_id: string | null;
    attached_custom_fields: ReadonlyArray<{
      custom_field_id: string;
      custom_field:
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            metadata: Record<string, string | number | boolean>;
            type: string;
            slug: string;
            name: string;
            organization_id: string;
            properties: {
              form_label?: string;
              form_help_text?: string;
              form_placeholder?: string;
              textarea?: boolean;
              min_length?: number;
              max_length?: number;
            };
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            metadata: Record<string, string | number | boolean>;
            type: string;
            slug: string;
            name: string;
            organization_id: string;
            properties: {
              form_label?: string;
              form_help_text?: string;
              form_placeholder?: string;
              ge?: number;
              le?: number;
            };
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            metadata: Record<string, string | number | boolean>;
            type: string;
            slug: string;
            name: string;
            organization_id: string;
            properties: {
              form_label?: string;
              form_help_text?: string;
              form_placeholder?: string;
            };
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            metadata: Record<string, string | number | boolean>;
            type: string;
            slug: string;
            name: string;
            organization_id: string;
            properties: {
              form_label?: string;
              form_help_text?: string;
              form_placeholder?: string;
              options: ReadonlyArray<{ value: string; label: string }>;
            };
          };
      order: number;
      required: boolean;
    }> | null;
    customer_metadata: Record<string, string | number | boolean>;
  }>;
  pagination: { total_count: number; max_page: number };
}
export const CheckoutslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
      custom_field_data: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.NullOr(
            Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
          ),
        ),
      ),
      payment_processor: Schema.Literals(["stripe"]),
      status: Schema.Literals([
        "open",
        "expired",
        "confirmed",
        "succeeded",
        "failed",
      ]),
      client_secret: SensitiveOutputString,
      url: Schema.String,
      expires_at: Schema.String,
      success_url: Schema.String,
      return_url: Schema.NullOr(Schema.String),
      embed_origin: Schema.NullOr(Schema.String),
      amount: Schema.Number,
      seats: Schema.optional(Schema.NullOr(Schema.Number)),
      min_seats: Schema.optional(Schema.NullOr(Schema.Number)),
      max_seats: Schema.optional(Schema.NullOr(Schema.Number)),
      discount_amount: Schema.Number,
      net_amount: Schema.Number,
      tax_amount: Schema.NullOr(Schema.Number),
      tax_behavior: Schema.NullOr(Schema.Literals(["inclusive", "exclusive"])),
      total_amount: Schema.Number,
      currency: Schema.String,
      allow_trial: Schema.NullOr(Schema.Boolean),
      active_trial_interval: Schema.NullOr(
        Schema.Literals(["day", "week", "month", "year"]),
      ),
      active_trial_interval_count: Schema.NullOr(Schema.Number),
      trial_end: Schema.NullOr(Schema.String),
      organization_id: Schema.String,
      product_id: Schema.NullOr(Schema.String),
      product_price_id: Schema.NullOr(Schema.String),
      discount_id: Schema.NullOr(Schema.String),
      allow_discount_codes: Schema.Boolean,
      require_billing_address: Schema.Boolean,
      is_discount_applicable: Schema.Boolean,
      is_free_product_price: Schema.Boolean,
      is_payment_required: Schema.Boolean,
      is_payment_setup_required: Schema.Boolean,
      is_payment_form_required: Schema.Boolean,
      customer_id: Schema.NullOr(Schema.String),
      is_business_customer: Schema.Boolean,
      customer_name: Schema.NullOr(Schema.String),
      customer_email: Schema.NullOr(Schema.String),
      customer_ip_address: Schema.NullOr(Schema.String),
      customer_billing_name: Schema.NullOr(Schema.String),
      customer_billing_address: Schema.NullOr(
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
      customer_tax_id: Schema.NullOr(Schema.String),
      locale: Schema.optional(Schema.NullOr(Schema.String)),
      payment_processor_metadata: Schema.Record(Schema.String, Schema.String),
      billing_address_fields: Schema.Struct({
        country: Schema.Literals(["required", "optional", "disabled"]),
        state: Schema.Literals(["required", "optional", "disabled"]),
        city: Schema.Literals(["required", "optional", "disabled"]),
        postal_code: Schema.Literals(["required", "optional", "disabled"]),
        line1: Schema.Literals(["required", "optional", "disabled"]),
        line2: Schema.Literals(["required", "optional", "disabled"]),
      }),
      trial_interval: Schema.NullOr(
        Schema.Literals(["day", "week", "month", "year"]),
      ),
      trial_interval_count: Schema.NullOr(Schema.Number),
      metadata: Schema.Record(
        Schema.String,
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
      ),
      external_customer_id: Schema.NullOr(Schema.String),
      products: Schema.Array(
        Schema.Struct({
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
          prices: Schema.Array(Schema.Unknown),
          benefits: Schema.Array(
            Schema.Struct({
              id: Schema.String,
              created_at: Schema.String,
              modified_at: Schema.NullOr(Schema.String),
              type: Schema.Literals([
                "custom",
                "discord",
                "github_repository",
                "downloadables",
                "license_keys",
                "meter_credit",
                "feature_flag",
                "slack_shared_channel",
              ]),
              description: Schema.String,
              selectable: Schema.Boolean,
              deletable: Schema.Boolean,
              is_deleted: Schema.Boolean,
              organization_id: Schema.String,
            }),
          ),
          medias: Schema.Array(
            Schema.Struct({
              id: Schema.String,
              organization_id: Schema.String,
              name: Schema.String,
              path: Schema.String,
              mime_type: Schema.String,
              size: Schema.Number,
              storage_version: Schema.NullOr(Schema.String),
              checksum_etag: Schema.NullOr(Schema.String),
              checksum_sha256_base64: Schema.NullOr(Schema.String),
              checksum_sha256_hex: Schema.NullOr(Schema.String),
              last_modified_at: Schema.NullOr(Schema.String),
              version: Schema.NullOr(Schema.String),
              service: Schema.String,
              is_uploaded: Schema.Boolean,
              created_at: Schema.String,
              size_readable: Schema.String,
              public_url: Schema.String,
            }),
          ),
        }),
      ),
      product: Schema.NullOr(
        Schema.Struct({
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
          prices: Schema.Array(Schema.Unknown),
          benefits: Schema.Array(
            Schema.Struct({
              id: Schema.String,
              created_at: Schema.String,
              modified_at: Schema.NullOr(Schema.String),
              type: Schema.Literals([
                "custom",
                "discord",
                "github_repository",
                "downloadables",
                "license_keys",
                "meter_credit",
                "feature_flag",
                "slack_shared_channel",
              ]),
              description: Schema.String,
              selectable: Schema.Boolean,
              deletable: Schema.Boolean,
              is_deleted: Schema.Boolean,
              organization_id: Schema.String,
            }),
          ),
          medias: Schema.Array(
            Schema.Struct({
              id: Schema.String,
              organization_id: Schema.String,
              name: Schema.String,
              path: Schema.String,
              mime_type: Schema.String,
              size: Schema.Number,
              storage_version: Schema.NullOr(Schema.String),
              checksum_etag: Schema.NullOr(Schema.String),
              checksum_sha256_base64: Schema.NullOr(Schema.String),
              checksum_sha256_hex: Schema.NullOr(Schema.String),
              last_modified_at: Schema.NullOr(Schema.String),
              version: Schema.NullOr(Schema.String),
              service: Schema.String,
              is_uploaded: Schema.Boolean,
              created_at: Schema.String,
              size_readable: Schema.String,
              public_url: Schema.String,
            }),
          ),
        }),
      ),
      product_price: Schema.NullOr(
        Schema.Union([
          Schema.Union([
            Schema.Struct({
              created_at: Schema.String,
              modified_at: Schema.NullOr(Schema.String),
              id: Schema.String,
              source: Schema.Literals(["catalog", "ad_hoc"]),
              amount_type: Schema.String,
              price_currency: Schema.String,
              tax_behavior: Schema.NullOr(
                Schema.Literals(["location", "inclusive", "exclusive"]),
              ),
              is_archived: Schema.Boolean,
              product_id: Schema.String,
              type: Schema.String,
              recurring_interval: Schema.Literals([
                "day",
                "week",
                "month",
                "year",
              ]),
              price_amount: Schema.Number,
              legacy: Schema.Boolean,
            }),
            Schema.Struct({
              created_at: Schema.String,
              modified_at: Schema.NullOr(Schema.String),
              id: Schema.String,
              source: Schema.Literals(["catalog", "ad_hoc"]),
              amount_type: Schema.String,
              price_currency: Schema.String,
              tax_behavior: Schema.NullOr(
                Schema.Literals(["location", "inclusive", "exclusive"]),
              ),
              is_archived: Schema.Boolean,
              product_id: Schema.String,
              type: Schema.String,
              recurring_interval: Schema.Literals([
                "day",
                "week",
                "month",
                "year",
              ]),
              minimum_amount: Schema.Number,
              maximum_amount: Schema.NullOr(Schema.Number),
              preset_amount: Schema.NullOr(Schema.Number),
              legacy: Schema.Boolean,
            }),
          ]),
          Schema.Union([
            Schema.Struct({
              created_at: Schema.String,
              modified_at: Schema.NullOr(Schema.String),
              id: Schema.String,
              source: Schema.Literals(["catalog", "ad_hoc"]),
              amount_type: Schema.String,
              price_currency: Schema.String,
              tax_behavior: Schema.NullOr(
                Schema.Literals(["location", "inclusive", "exclusive"]),
              ),
              is_archived: Schema.Boolean,
              product_id: Schema.String,
              price_amount: Schema.Number,
            }),
            Schema.Struct({
              created_at: Schema.String,
              modified_at: Schema.NullOr(Schema.String),
              id: Schema.String,
              source: Schema.Literals(["catalog", "ad_hoc"]),
              amount_type: Schema.String,
              price_currency: Schema.String,
              tax_behavior: Schema.NullOr(
                Schema.Literals(["location", "inclusive", "exclusive"]),
              ),
              is_archived: Schema.Boolean,
              product_id: Schema.String,
              minimum_amount: Schema.Number,
              maximum_amount: Schema.NullOr(Schema.Number),
              preset_amount: Schema.NullOr(Schema.Number),
            }),
            Schema.Struct({
              created_at: Schema.String,
              modified_at: Schema.NullOr(Schema.String),
              id: Schema.String,
              source: Schema.Literals(["catalog", "ad_hoc"]),
              amount_type: Schema.String,
              price_currency: Schema.String,
              tax_behavior: Schema.NullOr(
                Schema.Literals(["location", "inclusive", "exclusive"]),
              ),
              is_archived: Schema.Boolean,
              product_id: Schema.String,
              seat_tiers: Schema.Struct({
                seat_tier_type: Schema.optional(
                  Schema.Literals(["volume", "graduated"]),
                ),
                tiers: Schema.Array(
                  Schema.Struct({
                    min_seats: Schema.Number,
                    max_seats: Schema.optional(Schema.NullOr(Schema.Number)),
                    price_per_seat: Schema.Number,
                  }),
                ),
                minimum_seats: Schema.Number,
                maximum_seats: Schema.NullOr(Schema.Number),
              }),
            }),
            Schema.Struct({
              created_at: Schema.String,
              modified_at: Schema.NullOr(Schema.String),
              id: Schema.String,
              source: Schema.Literals(["catalog", "ad_hoc"]),
              amount_type: Schema.String,
              price_currency: Schema.String,
              tax_behavior: Schema.NullOr(
                Schema.Literals(["location", "inclusive", "exclusive"]),
              ),
              is_archived: Schema.Boolean,
              product_id: Schema.String,
              unit_amount: Schema.String,
              cap_amount: Schema.NullOr(Schema.Number),
              meter_id: Schema.String,
              meter: Schema.Struct({
                id: Schema.String,
                name: Schema.String,
                unit: Schema.Literals(["scalar", "token", "custom"]),
                custom_label: Schema.NullOr(Schema.String),
                custom_multiplier: Schema.NullOr(Schema.Number),
              }),
            }),
          ]),
        ]),
      ),
      prices: Schema.Unknown,
      discount: Schema.NullOr(
        Schema.Union([
          Schema.Struct({
            duration: Schema.Literals(["once", "forever", "repeating"]),
            type: Schema.Literals(["fixed", "percentage"]),
            amount: Schema.Number,
            currency: Schema.String,
            amounts: Schema.Record(Schema.String, Schema.Number),
            id: Schema.String,
            name: Schema.String,
            code: Schema.NullOr(Schema.String),
          }),
          Schema.Struct({
            duration: Schema.Literals(["once", "forever", "repeating"]),
            duration_in_months: Schema.Number,
            type: Schema.Literals(["fixed", "percentage"]),
            amount: Schema.Number,
            currency: Schema.String,
            amounts: Schema.Record(Schema.String, Schema.Number),
            id: Schema.String,
            name: Schema.String,
            code: Schema.NullOr(Schema.String),
          }),
          Schema.Struct({
            duration: Schema.Literals(["once", "forever", "repeating"]),
            type: Schema.Literals(["fixed", "percentage"]),
            basis_points: Schema.Number,
            id: Schema.String,
            name: Schema.String,
            code: Schema.NullOr(Schema.String),
          }),
          Schema.Struct({
            duration: Schema.Literals(["once", "forever", "repeating"]),
            duration_in_months: Schema.Number,
            type: Schema.Literals(["fixed", "percentage"]),
            basis_points: Schema.Number,
            id: Schema.String,
            name: Schema.String,
            code: Schema.NullOr(Schema.String),
          }),
        ]),
      ),
      subscription_id: Schema.NullOr(Schema.String),
      attached_custom_fields: Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            custom_field_id: Schema.String,
            custom_field: Schema.Union([
              Schema.Struct({
                created_at: Schema.String,
                modified_at: Schema.NullOr(Schema.String),
                id: Schema.String,
                metadata: Schema.Record(
                  Schema.String,
                  Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
                ),
                type: Schema.String,
                slug: Schema.String,
                name: Schema.String,
                organization_id: Schema.String,
                properties: Schema.Struct({
                  form_label: Schema.optional(Schema.String),
                  form_help_text: Schema.optional(Schema.String),
                  form_placeholder: Schema.optional(Schema.String),
                  textarea: Schema.optional(Schema.Boolean),
                  min_length: Schema.optional(Schema.Number),
                  max_length: Schema.optional(Schema.Number),
                }),
              }),
              Schema.Struct({
                created_at: Schema.String,
                modified_at: Schema.NullOr(Schema.String),
                id: Schema.String,
                metadata: Schema.Record(
                  Schema.String,
                  Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
                ),
                type: Schema.String,
                slug: Schema.String,
                name: Schema.String,
                organization_id: Schema.String,
                properties: Schema.Struct({
                  form_label: Schema.optional(Schema.String),
                  form_help_text: Schema.optional(Schema.String),
                  form_placeholder: Schema.optional(Schema.String),
                  ge: Schema.optional(Schema.Number),
                  le: Schema.optional(Schema.Number),
                }),
              }),
              Schema.Struct({
                created_at: Schema.String,
                modified_at: Schema.NullOr(Schema.String),
                id: Schema.String,
                metadata: Schema.Record(
                  Schema.String,
                  Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
                ),
                type: Schema.String,
                slug: Schema.String,
                name: Schema.String,
                organization_id: Schema.String,
                properties: Schema.Struct({
                  form_label: Schema.optional(Schema.String),
                  form_help_text: Schema.optional(Schema.String),
                  form_placeholder: Schema.optional(Schema.String),
                }),
              }),
              Schema.Struct({
                created_at: Schema.String,
                modified_at: Schema.NullOr(Schema.String),
                id: Schema.String,
                metadata: Schema.Record(
                  Schema.String,
                  Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
                ),
                type: Schema.String,
                slug: Schema.String,
                name: Schema.String,
                organization_id: Schema.String,
                properties: Schema.Struct({
                  form_label: Schema.optional(Schema.String),
                  form_help_text: Schema.optional(Schema.String),
                  form_placeholder: Schema.optional(Schema.String),
                  options: Schema.Array(
                    Schema.Struct({
                      value: Schema.String,
                      label: Schema.String,
                    }),
                  ),
                }),
              }),
            ]),
            order: Schema.Number,
            required: Schema.Boolean,
          }),
        ),
      ),
      customer_metadata: Schema.Record(
        Schema.String,
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
      ),
    }),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
}) as unknown as Schema.Codec<CheckoutslistOutput>;

// The operation
/**
 * List Checkout Sessions
 *
 * List checkout sessions.
 * **Scopes**: `checkouts:read` `checkouts:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param product_id - Filter by product ID.
 * @param customer_id - Filter by customer ID.
 * @param external_customer_id - Filter by customer external ID.
 * @param status - Filter by checkout session status.
 * @param query - Filter by customer email.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const checkoutslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CheckoutslistInput,
  outputSchema: CheckoutslistOutput,
}));
