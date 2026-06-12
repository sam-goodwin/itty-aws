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
export const PostBillingMetersIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    display_name: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/billing/meters/{id}",
      contentType: "form-urlencoded",
    }),
  );
export type PostBillingMetersIdInput = typeof PostBillingMetersIdInput.Type;

// Output Schema
export const PostBillingMetersIdOutput =
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
export type PostBillingMetersIdOutput = typeof PostBillingMetersIdOutput.Type;

// The operation
/**
 * Update a billing meter
 *
 * <p>Updates a billing meter.</p>
 */
export const PostBillingMetersId = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostBillingMetersIdInput,
  outputSchema: PostBillingMetersIdOutput,
}));
