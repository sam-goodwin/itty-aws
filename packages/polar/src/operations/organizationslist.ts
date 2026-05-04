import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const OrganizationslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    slug: Schema.optional(Schema.String),
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    sorting: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "GET", path: "/v1/organizations/" }));
export type OrganizationslistInput = typeof OrganizationslistInput.Type;

// Output Schema
export const OrganizationslistOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
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
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  });
export type OrganizationslistOutput = typeof OrganizationslistOutput.Type;

// The operation
/**
 * List Organizations
 *
 * List organizations.
 * **Scopes**: `organizations:read` `organizations:write`
 *
 * @param slug - Filter by slug.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const organizationslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrganizationslistInput,
  outputSchema: OrganizationslistOutput,
  errors: [UnprocessableEntity] as const,
}));
