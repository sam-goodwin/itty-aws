import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const OrganizationsupdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.Unknown),
    avatar_url: Schema.optional(Schema.Unknown),
    email: Schema.optional(Schema.Unknown),
    website: Schema.optional(Schema.Unknown),
    socials: Schema.optional(Schema.Unknown),
    details: Schema.optional(Schema.Unknown),
    country: Schema.optional(Schema.Unknown),
    feature_settings: Schema.optional(Schema.Unknown),
    subscription_settings: Schema.optional(Schema.Unknown),
    notification_settings: Schema.optional(Schema.Unknown),
    customer_email_settings: Schema.optional(Schema.Unknown),
    customer_portal_settings: Schema.optional(Schema.Unknown),
    default_presentment_currency: Schema.optional(Schema.Unknown),
    default_tax_behavior: Schema.optional(Schema.Unknown),
  }).pipe(T.Http({ method: "PATCH", path: "/v1/organizations/{id}" }));
export type OrganizationsupdateInput = typeof OrganizationsupdateInput.Type;

// Output Schema
export const OrganizationsupdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    email: Schema.Unknown,
    website: Schema.Unknown,
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
    ]),
    details_submitted_at: Schema.Unknown,
    default_presentment_currency: Schema.String,
    default_tax_behavior: Schema.Literals([
      "location",
      "inclusive",
      "exclusive",
    ]),
    feature_settings: Schema.Unknown,
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
    notification_settings: Schema.Struct({
      new_order: Schema.Boolean,
      new_subscription: Schema.Boolean,
    }),
    customer_email_settings: Schema.Struct({
      order_confirmation: Schema.Boolean,
      subscription_cancellation: Schema.Boolean,
      subscription_confirmation: Schema.Boolean,
      subscription_cycled: Schema.Boolean,
      subscription_cycled_after_trial: Schema.Boolean,
      subscription_past_due: Schema.Boolean,
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
      }),
      customer: Schema.optional(
        Schema.Struct({
          allow_email_change: Schema.optional(Schema.Boolean),
        }),
      ),
    }),
    country: Schema.optional(Schema.Unknown),
    account_id: Schema.Unknown,
    payout_account_id: Schema.Unknown,
    capabilities: Schema.Struct({
      checkout_payments: Schema.Boolean,
      subscription_renewals: Schema.Boolean,
      payouts: Schema.Boolean,
      refunds: Schema.Boolean,
      api_access: Schema.Boolean,
      dashboard_access: Schema.Boolean,
    }),
  });
export type OrganizationsupdateOutput = typeof OrganizationsupdateOutput.Type;

// The operation
/**
 * Update Organization
 *
 * Update an organization.
 */
export const organizationsupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrganizationsupdateInput,
  outputSchema: OrganizationsupdateOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
