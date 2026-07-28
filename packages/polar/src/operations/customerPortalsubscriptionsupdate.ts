import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalsubscriptionsupdateInput {
  id: string;
  product_id?: string;
  seats?: number;
  cancel_at_period_end?: boolean | null;
  cancellation_reason?:
    | "customer_service"
    | "low_quality"
    | "missing_features"
    | "switched_service"
    | "too_complex"
    | "too_expensive"
    | "unused"
    | "other"
    | null;
  cancellation_comment?: string | null;
  pause_at_period_end?: boolean;
  resumes_at?: string | null;
  resume?: boolean;
  pending_update?: unknown;
}
export const CustomerPortalsubscriptionsupdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    product_id: Schema.optional(Schema.String),
    seats: Schema.optional(Schema.Number),
    cancel_at_period_end: Schema.optional(Schema.NullOr(Schema.Boolean)),
    cancellation_reason: Schema.optional(
      Schema.NullOr(
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
    ),
    cancellation_comment: Schema.optional(Schema.NullOr(Schema.String)),
    pause_at_period_end: Schema.optional(Schema.Boolean),
    resumes_at: Schema.optional(Schema.NullOr(Schema.String)),
    resume: Schema.optional(Schema.Boolean),
    pending_update: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/customer-portal/subscriptions/{id}" }),
  ) as unknown as Schema.Codec<CustomerPortalsubscriptionsupdateInput>;

// Output Schema
export interface CustomerPortalsubscriptionsupdateOutput {
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
    organization: {
      created_at: string;
      modified_at: string | null;
      id: string;
      name: string;
      slug: string;
      avatar_url: string | null;
      proration_behavior: "invoice" | "prorate" | "next_period" | "reset";
      allow_customer_updates: boolean;
      customer_portal_settings: {
        usage: { show: boolean };
        subscription: {
          update_seats: boolean;
          update_plan: boolean;
          pause?: boolean;
        };
        customer?: { allow_email_change?: boolean };
      };
      organization_features?: {
        member_model_enabled?: boolean;
        checkout_localization_enabled?: boolean;
      };
    };
  };
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
      created_at: string;
      modified_at: string | null;
      id: string;
      name: string;
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
export const CustomerPortalsubscriptionsupdateOutput =
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
      organization: Schema.Struct({
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
        organization_features: Schema.optional(
          Schema.Struct({
            member_model_enabled: Schema.optional(Schema.Boolean),
            checkout_localization_enabled: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
    }),
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
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          id: Schema.String,
          name: Schema.String,
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
  }) as unknown as Schema.Codec<CustomerPortalsubscriptionsupdateOutput>;

// The operation
/**
 * Update Subscription
 *
 * Update a subscription of the authenticated customer.
 *
 * @param id - The subscription ID.
 */
export const customerPortalsubscriptionsupdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalsubscriptionsupdateInput,
    outputSchema: CustomerPortalsubscriptionsupdateOutput,
  }));
