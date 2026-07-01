import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostV2BillingMeterEventAdjustmentsInput {
  cancel: { identifier: string };
  event_name: string;
  type: "cancel";
}
export const PostV2BillingMeterEventAdjustmentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cancel: Schema.Struct({
      identifier: Schema.String,
    }),
    event_name: Schema.String,
    type: Schema.Literals(["cancel"]),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/billing/meter_event_adjustments" }),
  ) as unknown as Schema.Codec<PostV2BillingMeterEventAdjustmentsInput>;

// Output Schema
export interface PostV2BillingMeterEventAdjustmentsOutput {
  cancel: { identifier: string };
  created: string;
  event_name: string;
  id: string;
  livemode: boolean;
  object: "v2.billing.meter_event_adjustment";
  status: "complete" | "pending";
  type: "cancel";
}
export const PostV2BillingMeterEventAdjustmentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cancel: Schema.Struct({
      identifier: Schema.String,
    }),
    created: Schema.String,
    event_name: Schema.String,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["v2.billing.meter_event_adjustment"]),
    status: Schema.Literals(["complete", "pending"]),
    type: Schema.Literals(["cancel"]),
  }) as unknown as Schema.Codec<PostV2BillingMeterEventAdjustmentsOutput>;

// The operation
/**
 * Create a Meter Event Adjustment
 *
 * Creates a meter event adjustment to cancel a previously sent meter event.
 */
export const PostV2BillingMeterEventAdjustments =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostV2BillingMeterEventAdjustmentsInput,
    outputSchema: PostV2BillingMeterEventAdjustmentsOutput,
  }));
