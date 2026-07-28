import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface SubscriptionscreateInput {
  metadata?: Record<string, string | number | boolean>;
  product_id: string;
  customer_id?: string;
  external_customer_id?: string;
}
export const SubscriptionscreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
      ),
    ),
    product_id: Schema.String,
    customer_id: Schema.optional(Schema.String),
    external_customer_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/subscriptions/" }),
  ) as unknown as Schema.Codec<SubscriptionscreateInput>;

// Output Schema
export interface SubscriptionscreateOutput {
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
  metadata: Record<string, string | number | boolean>;
  custom_field_data?: Record<string, string | number | boolean | null>;
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
    metadata: Record<string, string | number | boolean>;
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
    benefits: ReadonlyArray<
      | {
          id: string;
          created_at: string;
          modified_at: string | null;
          type: string;
          description: string;
          selectable: boolean;
          deletable: boolean;
          is_deleted: boolean;
          organization_id: string;
          metadata: Record<string, string | number | boolean>;
          visibility: "draft" | "private" | "public";
          properties: { note: string | null | null };
          visibility_configurable: boolean;
        }
      | {
          id: string;
          created_at: string;
          modified_at: string | null;
          type: string;
          description: string;
          selectable: boolean;
          deletable: boolean;
          is_deleted: boolean;
          organization_id: string;
          metadata: Record<string, string | number | boolean>;
          visibility: "draft" | "private" | "public";
          properties: {
            guild_id: string;
            role_id: string;
            kick_member: boolean;
            guild_token: string;
          };
          visibility_configurable: boolean;
        }
      | {
          id: string;
          created_at: string;
          modified_at: string | null;
          type: string;
          description: string;
          selectable: boolean;
          deletable: boolean;
          is_deleted: boolean;
          organization_id: string;
          metadata: Record<string, string | number | boolean>;
          visibility: "draft" | "private" | "public";
          properties: {
            repository_owner: string;
            repository_name: string;
            permission: "pull" | "triage" | "push" | "maintain" | "admin";
          };
          visibility_configurable: boolean;
        }
      | {
          id: string;
          created_at: string;
          modified_at: string | null;
          type: string;
          description: string;
          selectable: boolean;
          deletable: boolean;
          is_deleted: boolean;
          organization_id: string;
          metadata: Record<string, string | number | boolean>;
          visibility: "draft" | "private" | "public";
          properties: {
            archived: Record<string, boolean>;
            files: ReadonlyArray<string>;
          };
          visibility_configurable: boolean;
        }
      | {
          id: string;
          created_at: string;
          modified_at: string | null;
          type: string;
          description: string;
          selectable: boolean;
          deletable: boolean;
          is_deleted: boolean;
          organization_id: string;
          metadata: Record<string, string | number | boolean>;
          visibility: "draft" | "private" | "public";
          properties: {
            prefix: string | null;
            expires: {
              ttl: number;
              timeframe: "year" | "month" | "day";
            } | null;
            activations: {
              limit: number;
              enable_customer_admin: boolean;
            } | null;
            limit_usage: number | null;
          };
          visibility_configurable: boolean;
        }
      | {
          id: string;
          created_at: string;
          modified_at: string | null;
          type: string;
          description: string;
          selectable: boolean;
          deletable: boolean;
          is_deleted: boolean;
          organization_id: string;
          metadata: Record<string, string | number | boolean>;
          visibility: "draft" | "private" | "public";
          properties: { units: number; rollover: boolean; meter_id: string };
          visibility_configurable: boolean;
        }
      | {
          id: string;
          created_at: string;
          modified_at: string | null;
          type: string;
          description: string;
          selectable: boolean;
          deletable: boolean;
          is_deleted: boolean;
          organization_id: string;
          metadata: Record<string, string | number | boolean>;
          visibility: "draft" | "private" | "public";
          properties: {};
          visibility_configurable: boolean;
        }
      | {
          id: string;
          created_at: string;
          modified_at: string | null;
          type: string;
          description: string;
          selectable: boolean;
          deletable: boolean;
          is_deleted: boolean;
          organization_id: string;
          metadata: Record<string, string | number | boolean>;
          visibility: "draft" | "private" | "public";
          properties: {
            slack_integration_id: string;
            channel_name_template: string;
            private?: boolean;
            welcome_message?: string | null;
            archive_on_revoke?: boolean;
            team_invitees?: ReadonlyArray<string>;
          };
          visibility_configurable: boolean;
        }
    >;
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
    }>;
  };
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
  meters: ReadonlyArray<{
    created_at: string;
    modified_at: string | null;
    id: string;
    consumed_units: number;
    credited_units: number;
    amount: number;
    meter_id: string;
    meter: {
      metadata: Record<string, string | number | boolean>;
      created_at: string;
      modified_at: string | null;
      id: string;
      name: string;
      unit: "scalar" | "token" | "custom";
      custom_label?: string | null;
      custom_multiplier?: number | null;
      filter: {
        conjunction: "and" | "or";
        clauses: ReadonlyArray<
          | {
              property: string;
              operator:
                | "eq"
                | "ne"
                | "gt"
                | "gte"
                | "lt"
                | "lte"
                | "like"
                | "not_like";
              value: string | number | boolean;
            }
          | unknown
        >;
      };
      aggregation:
        | { func?: string }
        | { func: "sum" | "max" | "min" | "avg"; property: string }
        | { func?: string; property: string };
      organization_id: string;
      archived_at?: string | null;
    };
  }>;
  pending_update: {
    created_at: string;
    modified_at: string | null;
    id: string;
    applies_at: string;
    product_id: string | null;
    seats: number | null;
  } | null;
}
export const SubscriptionscreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      default_payment_method_id: Schema.optional(Schema.NullOr(Schema.String)),
      deleted_at: Schema.NullOr(Schema.String),
      avatar_url: Schema.NullOr(Schema.String),
    }),
    product: Schema.Struct({
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
      metadata: Schema.Record(
        Schema.String,
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
      ),
      prices: Schema.Array(
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
      benefits: Schema.Array(Schema.Unknown),
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
      attached_custom_fields: Schema.Array(
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
    }),
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
    prices: Schema.Array(
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
    meters: Schema.Array(
      Schema.Struct({
        created_at: Schema.String,
        modified_at: Schema.NullOr(Schema.String),
        id: Schema.String,
        consumed_units: Schema.Number,
        credited_units: Schema.Number,
        amount: Schema.Number,
        meter_id: Schema.String,
        meter: Schema.Struct({
          metadata: Schema.Record(
            Schema.String,
            Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
          ),
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          id: Schema.String,
          name: Schema.String,
          unit: Schema.Literals(["scalar", "token", "custom"]),
          custom_label: Schema.optional(Schema.NullOr(Schema.String)),
          custom_multiplier: Schema.optional(Schema.NullOr(Schema.Number)),
          filter: Schema.Struct({
            conjunction: Schema.Literals(["and", "or"]),
            clauses: Schema.Array(
              Schema.Union([
                Schema.Struct({
                  property: Schema.String,
                  operator: Schema.Literals([
                    "eq",
                    "ne",
                    "gt",
                    "gte",
                    "lt",
                    "lte",
                    "like",
                    "not_like",
                  ]),
                  value: Schema.Union([
                    Schema.String,
                    Schema.Number,
                    Schema.Boolean,
                  ]),
                }),
                Schema.Unknown,
              ]),
            ),
          }),
          aggregation: Schema.Union([
            Schema.Struct({
              func: Schema.optional(Schema.String),
            }),
            Schema.Struct({
              func: Schema.Literals(["sum", "max", "min", "avg"]),
              property: Schema.String,
            }),
            Schema.Struct({
              func: Schema.optional(Schema.String),
              property: Schema.String,
            }),
          ]),
          organization_id: Schema.String,
          archived_at: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      }),
    ),
    pending_update: Schema.NullOr(
      Schema.Struct({
        created_at: Schema.String,
        modified_at: Schema.NullOr(Schema.String),
        id: Schema.String,
        applies_at: Schema.String,
        product_id: Schema.NullOr(Schema.String),
        seats: Schema.NullOr(Schema.Number),
      }),
    ),
  }) as unknown as Schema.Codec<SubscriptionscreateOutput>;

// The operation
/**
 * Create Subscription
 *
 * Create a subscription programmatically.
 * This endpoint only allows to create subscription on free products.
 * For paid products, use the checkout flow.
 * No initial order will be created and no confirmation email will be sent.
 * **Scopes**: `subscriptions:write`
 */
export const subscriptionscreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SubscriptionscreateInput,
  outputSchema: SubscriptionscreateOutput,
}));
