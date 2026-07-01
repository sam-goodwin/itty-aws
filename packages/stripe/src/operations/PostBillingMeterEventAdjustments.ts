import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostBillingMeterEventAdjustmentsInput {
  cancel?: { identifier?: string };
  event_name: string;
  expand?: string[];
  type: "cancel";
}
export const PostBillingMeterEventAdjustmentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cancel: Schema.optional(
      Schema.Struct({
        identifier: Schema.optional(Schema.String),
      }),
    ),
    event_name: Schema.String,
    expand: Schema.optional(Schema.Array(Schema.String)),
    type: Schema.Literals(["cancel"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/billing/meter_event_adjustments",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostBillingMeterEventAdjustmentsInput>;

// Output Schema
export interface PostBillingMeterEventAdjustmentsOutput {
  cancel: { identifier: string | null } | null;
  event_name: string;
  livemode: boolean;
  object: "billing.meter_event_adjustment";
  status: "complete" | "pending";
  type: "cancel";
}
export const PostBillingMeterEventAdjustmentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cancel: Schema.NullOr(
      Schema.Struct({
        identifier: Schema.NullOr(Schema.String),
      }),
    ),
    event_name: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["billing.meter_event_adjustment"]),
    status: Schema.Literals(["complete", "pending"]),
    type: Schema.Literals(["cancel"]),
  }) as unknown as Schema.Codec<PostBillingMeterEventAdjustmentsOutput>;

// The operation
/**
 * Create a billing meter event adjustment
 *
 * <p>Creates a billing meter event adjustment.</p>
 */
export const PostBillingMeterEventAdjustments =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostBillingMeterEventAdjustmentsInput,
    outputSchema: PostBillingMeterEventAdjustmentsOutput,
  }));
