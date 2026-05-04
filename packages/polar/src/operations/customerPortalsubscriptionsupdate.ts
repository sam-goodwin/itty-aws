import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalsubscriptionsupdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      product_id: Schema.String,
    }),
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      seats: Schema.Number,
      proration_behavior: Schema.optional(Schema.Unknown),
    }),
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      cancel_at_period_end: Schema.optional(Schema.Unknown),
      cancellation_reason: Schema.optional(Schema.Unknown),
      cancellation_comment: Schema.optional(Schema.Unknown),
    }),
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      pending_update: Schema.Unknown,
    }),
  ]).pipe(
    T.Http({ method: "PATCH", path: "/v1/customer-portal/subscriptions/{id}" }),
  );
export type CustomerPortalsubscriptionsupdateInput =
  typeof CustomerPortalsubscriptionsupdateInput.Type;

// Output Schema
export const CustomerPortalsubscriptionsupdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.Unknown,
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
    trial_start: Schema.Unknown,
    trial_end: Schema.Unknown,
    cancel_at_period_end: Schema.Boolean,
    canceled_at: Schema.Unknown,
    started_at: Schema.Unknown,
    ends_at: Schema.Unknown,
    ended_at: Schema.Unknown,
    customer_id: Schema.String,
    product_id: Schema.String,
    discount_id: Schema.Unknown,
    checkout_id: Schema.Unknown,
    seats: Schema.optional(Schema.Unknown),
    customer_cancellation_reason: Schema.Unknown,
    customer_cancellation_comment: Schema.Unknown,
    product: Schema.Struct({
      id: Schema.String,
      created_at: Schema.String,
      modified_at: Schema.Unknown,
      trial_interval: Schema.Unknown,
      trial_interval_count: Schema.Unknown,
      name: Schema.String,
      description: Schema.Unknown,
      visibility: Schema.Literals(["draft", "private", "public"]),
      recurring_interval: Schema.Unknown,
      recurring_interval_count: Schema.Unknown,
      is_recurring: Schema.Boolean,
      is_archived: Schema.Boolean,
      organization_id: Schema.String,
      prices: Schema.Array(Schema.Unknown),
      benefits: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          created_at: Schema.String,
          modified_at: Schema.Unknown,
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
          storage_version: Schema.Unknown,
          checksum_etag: Schema.Unknown,
          checksum_sha256_base64: Schema.Unknown,
          checksum_sha256_hex: Schema.Unknown,
          last_modified_at: Schema.Unknown,
          version: Schema.Unknown,
          service: Schema.String,
          is_uploaded: Schema.Boolean,
          created_at: Schema.String,
          size_readable: Schema.String,
          public_url: Schema.String,
        }),
      ),
      organization: Schema.Struct({
        created_at: Schema.String,
        modified_at: Schema.Unknown,
        id: Schema.String,
        name: Schema.String,
        slug: Schema.String,
        avatar_url: Schema.Unknown,
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
        modified_at: Schema.Unknown,
        id: Schema.String,
        consumed_units: Schema.Number,
        credited_units: Schema.Number,
        amount: Schema.Number,
        meter_id: Schema.String,
        meter: Schema.Struct({
          created_at: Schema.String,
          modified_at: Schema.Unknown,
          id: Schema.String,
          name: Schema.String,
        }),
      }),
    ),
    pending_update: Schema.Unknown,
  });
export type CustomerPortalsubscriptionsupdateOutput =
  typeof CustomerPortalsubscriptionsupdateOutput.Type;

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
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
