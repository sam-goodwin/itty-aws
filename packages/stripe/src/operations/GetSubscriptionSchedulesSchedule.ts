import * as Schema from "effect/Schema";
import {
  subscription_schedule_phase_configurationSchema,
  subscription_schedules_resource_default_settingsSchema,
  subscriptions_resource_billing_modeSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetSubscriptionSchedulesScheduleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schedule: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/subscription_schedules/{schedule}",
      contentType: "form-urlencoded",
    }),
  );
export type GetSubscriptionSchedulesScheduleInput =
  typeof GetSubscriptionSchedulesScheduleInput.Type;

// Output Schema
export const GetSubscriptionSchedulesScheduleOutput =
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
export type GetSubscriptionSchedulesScheduleOutput =
  typeof GetSubscriptionSchedulesScheduleOutput.Type;

// The operation
/**
 * Retrieve a schedule
 *
 * <p>Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetSubscriptionSchedulesSchedule =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetSubscriptionSchedulesScheduleInput,
    outputSchema: GetSubscriptionSchedulesScheduleOutput,
  }));
