import * as Schema from "effect/Schema";
import {
  portal_business_profileSchema,
  portal_featuresSchema,
  portal_login_pageSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostBillingPortalConfigurationsConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configuration: Schema.String.pipe(T.PathParam()),
    active: Schema.optional(Schema.Boolean),
    business_profile: Schema.optional(
      Schema.Struct({
        headline: Schema.optional(Schema.Unknown),
        privacy_policy_url: Schema.optional(Schema.Unknown),
        terms_of_service_url: Schema.optional(Schema.Unknown),
      }),
    ),
    default_return_url: Schema.optional(Schema.Unknown),
    expand: Schema.optional(Schema.Array(Schema.String)),
    features: Schema.optional(
      Schema.Struct({
        customer_update: Schema.optional(
          Schema.Struct({
            allowed_updates: Schema.optional(Schema.Unknown),
            enabled: Schema.optional(Schema.Boolean),
          }),
        ),
        invoice_history: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
          }),
        ),
        payment_method_update: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
            payment_method_configuration: Schema.optional(Schema.Unknown),
          }),
        ),
        subscription_cancel: Schema.optional(
          Schema.Struct({
            cancellation_reason: Schema.optional(
              Schema.Struct({
                enabled: Schema.Boolean,
                options: Schema.optional(Schema.Unknown),
              }),
            ),
            enabled: Schema.optional(Schema.Boolean),
            mode: Schema.optional(
              Schema.Literals(["at_period_end", "immediately"]),
            ),
            proration_behavior: Schema.optional(
              Schema.Literals(["always_invoice", "create_prorations", "none"]),
            ),
          }),
        ),
        subscription_update: Schema.optional(
          Schema.Struct({
            billing_cycle_anchor: Schema.optional(
              Schema.Literals(["now", "unchanged"]),
            ),
            default_allowed_updates: Schema.optional(Schema.Unknown),
            enabled: Schema.optional(Schema.Boolean),
            products: Schema.optional(Schema.Unknown),
            proration_behavior: Schema.optional(
              Schema.Literals(["always_invoice", "create_prorations", "none"]),
            ),
            schedule_at_period_end: Schema.optional(
              Schema.Struct({
                conditions: Schema.optional(Schema.Unknown),
              }),
            ),
            trial_update_behavior: Schema.optional(
              Schema.Literals(["continue_trial", "end_trial"]),
            ),
          }),
        ),
      }),
    ),
    login_page: Schema.optional(
      Schema.Struct({
        enabled: Schema.Boolean,
      }),
    ),
    metadata: Schema.optional(Schema.Unknown),
    name: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/billing_portal/configurations/{configuration}",
      contentType: "form-urlencoded",
    }),
  );
export type PostBillingPortalConfigurationsConfigurationInput =
  typeof PostBillingPortalConfigurationsConfigurationInput.Type;

// Output Schema
export const PostBillingPortalConfigurationsConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.Boolean,
    application: Schema.Unknown,
    business_profile: Schema.suspend(() => portal_business_profileSchema),
    created: Schema.Number,
    default_return_url: Schema.NullOr(Schema.String),
    features: Schema.suspend(() => portal_featuresSchema),
    id: Schema.String,
    is_default: Schema.Boolean,
    livemode: Schema.Boolean,
    login_page: Schema.suspend(() => portal_login_pageSchema),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    name: Schema.NullOr(Schema.String),
    object: Schema.Literals(["billing_portal.configuration"]),
    updated: Schema.Number,
  });
export type PostBillingPortalConfigurationsConfigurationOutput =
  typeof PostBillingPortalConfigurationsConfigurationOutput.Type;

// The operation
/**
 * Update a portal configuration
 *
 * <p>Updates a configuration that describes the functionality of the customer portal.</p>
 */
export const PostBillingPortalConfigurationsConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostBillingPortalConfigurationsConfigurationInput,
    outputSchema: PostBillingPortalConfigurationsConfigurationOutput,
  }));
