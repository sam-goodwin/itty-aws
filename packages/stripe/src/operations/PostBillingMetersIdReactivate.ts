import * as Schema from "effect/Schema";
import {
  billing_meter_resource_aggregation_settingsSchema,
  billing_meter_resource_billing_meter_status_transitionsSchema,
  billing_meter_resource_billing_meter_valueSchema,
  billing_meter_resource_customer_mapping_settingsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostBillingMetersIdReactivateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/billing/meters/{id}/reactivate",
      contentType: "form-urlencoded",
    }),
  );
export type PostBillingMetersIdReactivateInput =
  typeof PostBillingMetersIdReactivateInput.Type;

// Output Schema
export const PostBillingMetersIdReactivateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    customer_mapping: Schema.suspend(
      () => billing_meter_resource_customer_mapping_settingsSchema,
    ),
    default_aggregation: Schema.suspend(
      () => billing_meter_resource_aggregation_settingsSchema,
    ),
    display_name: Schema.String,
    event_name: Schema.String,
    event_time_window: Schema.NullOr(Schema.Literals(["day", "hour"])),
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["billing.meter"]),
    status: Schema.Literals(["active", "inactive"]),
    status_transitions: Schema.suspend(
      () => billing_meter_resource_billing_meter_status_transitionsSchema,
    ),
    updated: Schema.Number,
    value_settings: Schema.suspend(
      () => billing_meter_resource_billing_meter_valueSchema,
    ),
  });
export type PostBillingMetersIdReactivateOutput =
  typeof PostBillingMetersIdReactivateOutput.Type;

// The operation
/**
 * Reactivate a billing meter
 *
 * <p>When a meter is reactivated, events for this meter can be accepted and you can attach the meter to a price.</p>
 */
export const PostBillingMetersIdReactivate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostBillingMetersIdReactivateInput,
    outputSchema: PostBillingMetersIdReactivateOutput,
  }));
