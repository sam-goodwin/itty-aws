import * as Schema from "effect/Schema";
import {
  subscription_schedule_phase_configurationSchema,
  subscription_schedules_resource_default_settingsSchema,
  subscriptions_resource_billing_modeSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostSubscriptionSchedulesScheduleReleaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schedule: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    preserve_cancel_date: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/subscription_schedules/{schedule}/release",
      contentType: "form-urlencoded",
    }),
  );
export type PostSubscriptionSchedulesScheduleReleaseInput =
  typeof PostSubscriptionSchedulesScheduleReleaseInput.Type;

// Output Schema
export const PostSubscriptionSchedulesScheduleReleaseOutput =
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
export type PostSubscriptionSchedulesScheduleReleaseOutput =
  typeof PostSubscriptionSchedulesScheduleReleaseOutput.Type;

// The operation
/**
 * Release a schedule
 *
 * <p>Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is <code>not_started</code> or <code>active</code>. If the subscription schedule is currently associated with a subscription, releasing it will remove its <code>subscription</code> property and set the subscription’s ID to the <code>released_subscription</code> property.</p>
 */
export const PostSubscriptionSchedulesScheduleRelease =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostSubscriptionSchedulesScheduleReleaseInput,
    outputSchema: PostSubscriptionSchedulesScheduleReleaseOutput,
  }));
