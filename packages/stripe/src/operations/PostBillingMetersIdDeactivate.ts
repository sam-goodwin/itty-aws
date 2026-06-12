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
export const PostBillingMetersIdDeactivateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/billing/meters/{id}/deactivate",
      contentType: "form-urlencoded",
    }),
  );
export type PostBillingMetersIdDeactivateInput =
  typeof PostBillingMetersIdDeactivateInput.Type;

// Output Schema
export const PostBillingMetersIdDeactivateOutput =
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
export type PostBillingMetersIdDeactivateOutput =
  typeof PostBillingMetersIdDeactivateOutput.Type;

// The operation
/**
 * Deactivate a billing meter
 *
 * <p>When a meter is deactivated, no more meter events will be accepted for this meter. You can’t attach a deactivated meter to a price.</p>
 */
export const PostBillingMetersIdDeactivate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostBillingMetersIdDeactivateInput,
    outputSchema: PostBillingMetersIdDeactivateOutput,
  }));
