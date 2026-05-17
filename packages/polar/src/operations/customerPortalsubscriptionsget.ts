import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalsubscriptionsgetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customer-portal/subscriptions/{id}" }),
  );
export type CustomerPortalsubscriptionsgetInput =
  typeof CustomerPortalsubscriptionsgetInput.Type;

// Output Schema
export const CustomerPortalsubscriptionsgetOutput =
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
    ]),
    current_period_start: Schema.String,
    current_period_end: Schema.String,
    trial_start: Schema.NullOr(Schema.String),
    trial_end: Schema.NullOr(Schema.String),
    cancel_at_period_end: Schema.Boolean,
    canceled_at: Schema.NullOr(Schema.String),
    started_at: Schema.NullOr(Schema.String),
    ends_at: Schema.NullOr(Schema.String),
    ended_at: Schema.NullOr(Schema.String),
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
          service: Schema.Literal("product_media"),
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
          }),
        ),
      }),
    }),
    prices: Schema.Array(Schema.Unknown),
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
  });
export type CustomerPortalsubscriptionsgetOutput =
  typeof CustomerPortalsubscriptionsgetOutput.Type;

// The operation
/**
 * Get Subscription
 *
 * Get a subscription for the authenticated customer.
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 *
 * @param id - The subscription ID.
 */
export const customerPortalsubscriptionsget =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalsubscriptionsgetInput,
    outputSchema: CustomerPortalsubscriptionsgetOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
