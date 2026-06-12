import * as Schema from "effect/Schema";
import {
  subscription_schedule_phase_configurationSchema,
  subscription_schedules_resource_default_settingsSchema,
  subscriptions_resource_billing_modeSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostSubscriptionSchedulesScheduleCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schedule: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    invoice_now: Schema.optional(Schema.Boolean),
    prorate: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/subscription_schedules/{schedule}/cancel",
      contentType: "form-urlencoded",
    }),
  );
export type PostSubscriptionSchedulesScheduleCancelInput =
  typeof PostSubscriptionSchedulesScheduleCancelInput.Type;

// Output Schema
export const PostSubscriptionSchedulesScheduleCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application: Schema.Unknown,
    billing_mode: Schema.suspend(
      () => subscriptions_resource_billing_modeSchema,
    ),
    canceled_at: Schema.NullOr(Schema.Number),
    completed_at: Schema.NullOr(Schema.Number),
    created: Schema.Number,
    current_phase: Schema.Unknown,
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    default_settings: Schema.suspend(
      () => subscription_schedules_resource_default_settingsSchema,
    ),
    end_behavior: Schema.Literals(["cancel", "none", "release", "renew"]),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    object: Schema.Literals(["subscription_schedule"]),
    phases: Schema.Array(
      Schema.suspend(() => subscription_schedule_phase_configurationSchema),
    ),
    released_at: Schema.NullOr(Schema.Number),
    released_subscription: Schema.NullOr(Schema.String),
    status: Schema.Literals([
      "active",
      "canceled",
      "completed",
      "not_started",
      "released",
    ]),
    subscription: Schema.Unknown,
    test_clock: Schema.Unknown,
  });
export type PostSubscriptionSchedulesScheduleCancelOutput =
  typeof PostSubscriptionSchedulesScheduleCancelOutput.Type;

// The operation
/**
 * Cancel a schedule
 *
 * <p>Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is <code>not_started</code> or <code>active</code>.</p>
 */
export const PostSubscriptionSchedulesScheduleCancel =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostSubscriptionSchedulesScheduleCancelInput,
    outputSchema: PostSubscriptionSchedulesScheduleCancelOutput,
  }));
