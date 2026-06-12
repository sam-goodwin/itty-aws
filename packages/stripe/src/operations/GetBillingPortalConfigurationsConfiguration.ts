import * as Schema from "effect/Schema";
import {
  portal_business_profileSchema,
  portal_featuresSchema,
  portal_login_pageSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetBillingPortalConfigurationsConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configuration: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/billing_portal/configurations/{configuration}",
      contentType: "form-urlencoded",
    }),
  );
export type GetBillingPortalConfigurationsConfigurationInput =
  typeof GetBillingPortalConfigurationsConfigurationInput.Type;

// Output Schema
export const GetBillingPortalConfigurationsConfigurationOutput =
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
export type GetBillingPortalConfigurationsConfigurationOutput =
  typeof GetBillingPortalConfigurationsConfigurationOutput.Type;

// The operation
/**
 * Retrieve a portal configuration
 *
 * <p>Retrieves a configuration that describes the functionality of the customer portal.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetBillingPortalConfigurationsConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetBillingPortalConfigurationsConfigurationInput,
    outputSchema: GetBillingPortalConfigurationsConfigurationOutput,
  }));
