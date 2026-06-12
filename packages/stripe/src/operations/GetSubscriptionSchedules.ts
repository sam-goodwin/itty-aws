import * as Schema from "effect/Schema";
import { subscription_scheduleSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetSubscriptionSchedulesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canceled_at: Schema.optional(Schema.String),
    completed_at: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    customer: Schema.optional(Schema.String),
    customer_account: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    released_at: Schema.optional(Schema.String),
    scheduled: Schema.optional(Schema.Boolean),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/subscription_schedules",
      contentType: "form-urlencoded",
    }),
  );
export type GetSubscriptionSchedulesInput =
  typeof GetSubscriptionSchedulesInput.Type;

// Output Schema
export const GetSubscriptionSchedulesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => subscription_scheduleSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetSubscriptionSchedulesOutput =
  typeof GetSubscriptionSchedulesOutput.Type;

// The operation
/**
 * List all schedules
 *
 * <p>Retrieves the list of your subscription schedules.</p>
 *
 * @param canceled_at - Only return subscription schedules that were created canceled the given date interval.
 * @param completed_at - Only return subscription schedules that completed during the given date interval.
 * @param created - Only return subscription schedules that were created during the given date interval.
 * @param customer - Only return subscription schedules for the given customer.
 * @param customer_account - Only return subscription schedules for the given account.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param released_at - Only return subscription schedules that were released during the given date interval.
 * @param scheduled - Only return subscription schedules that have not started yet.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetSubscriptionSchedules = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetSubscriptionSchedulesInput,
    outputSchema: GetSubscriptionSchedulesOutput,
  }),
);
