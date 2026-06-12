import * as Schema from "effect/Schema";
import { billing_portal_configurationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetBillingPortalConfigurationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.optional(Schema.Boolean),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    is_default: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/billing_portal/configurations",
      contentType: "form-urlencoded",
    }),
  );
export type GetBillingPortalConfigurationsInput =
  typeof GetBillingPortalConfigurationsInput.Type;

// Output Schema
export const GetBillingPortalConfigurationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.suspend(() => billing_portal_configurationSchema),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetBillingPortalConfigurationsOutput =
  typeof GetBillingPortalConfigurationsOutput.Type;

// The operation
/**
 * List portal configurations
 *
 * <p>Returns a list of configurations that describe the functionality of the customer portal.</p>
 *
 * @param active - Only return configurations that are active or inactive (e.g., pass `true` to only list active configurations).
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param is_default - Only return the default or non-default configurations (e.g., pass `true` to only list the default configuration).
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetBillingPortalConfigurations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetBillingPortalConfigurationsInput,
    outputSchema: GetBillingPortalConfigurationsOutput,
  }));
