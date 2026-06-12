import * as Schema from "effect/Schema";
import { subscriptionSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetSubscriptionsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  automatic_tax: Schema.optional(Schema.String),
  collection_method: Schema.optional(
    Schema.Literals(["charge_automatically", "send_invoice"]),
  ),
  created: Schema.optional(Schema.String),
  current_period_end: Schema.optional(Schema.String),
  current_period_start: Schema.optional(Schema.String),
  customer: Schema.optional(Schema.String),
  customer_account: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  plan: Schema.optional(Schema.String),
  price: Schema.optional(Schema.String),
  starting_after: Schema.optional(Schema.String),
  status: Schema.optional(
    Schema.Literals([
      "active",
      "all",
      "canceled",
      "ended",
      "incomplete",
      "incomplete_expired",
      "past_due",
      "paused",
      "trialing",
      "unpaid",
    ]),
  ),
  test_clock: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/subscriptions",
    contentType: "form-urlencoded",
  }),
);
export type GetSubscriptionsInput = typeof GetSubscriptionsInput.Type;

// Output Schema
export const GetSubscriptionsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    data: Schema.Array(Schema.suspend(() => subscriptionSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  },
);
export type GetSubscriptionsOutput = typeof GetSubscriptionsOutput.Type;

// The operation
/**
 * List subscriptions
 *
 * <p>By default, returns a list of subscriptions that have not been canceled. In order to list canceled subscriptions, specify <code>status=canceled</code>.</p>
 *
 * @param automatic_tax - Filter subscriptions by their automatic tax settings.
 * @param collection_method - The collection method of the subscriptions to retrieve. Either `charge_automatically` or `send_invoice`.
 * @param created - Only return subscriptions that were created during the given date interval.
 * @param current_period_end - Only return subscriptions whose minimum item current_period_end falls within the given date interval.
 * @param current_period_start - Only return subscriptions whose maximum item current_period_start falls within the given date interval.
 * @param customer - The ID of the customer whose subscriptions you're retrieving.
 * @param customer_account - The ID of the account representing the customer whose subscriptions you're retrieving.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param plan - The ID of the plan whose subscriptions will be retrieved.
 * @param price - Filter for subscriptions that contain this recurring price ID.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param status - The status of the subscriptions to retrieve. Passing in a value of `canceled` will return all canceled subscriptions, including those belonging to deleted customers. Pass `ended` to find subscriptions that are canceled and subscriptions that are expired due to [incomplete payment](https://docs.stripe.com/billing/subscriptions/overview#subscription-statuses). Passing in a value of `all` will return subscriptions of all statuses. If no value is supplied, all subscriptions that have not been canceled are returned.
 * @param test_clock - Filter for subscriptions that are associated with the specified test clock. The response will not include subscriptions with test clocks if this and the customer parameter is not set.
 */
export const GetSubscriptions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetSubscriptionsInput,
  outputSchema: GetSubscriptionsOutput,
}));
