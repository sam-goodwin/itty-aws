import * as Schema from "effect/Schema";
import { eventSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetEventsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created: Schema.optional(Schema.String),
  delivery_success: Schema.optional(Schema.Boolean),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  starting_after: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  types: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/v1/events", contentType: "form-urlencoded" }),
);
export type GetEventsInput = typeof GetEventsInput.Type;

// Output Schema
export const GetEventsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(Schema.suspend(() => eventSchema)),
  has_more: Schema.Boolean,
  object: Schema.Literals(["list"]),
  url: Schema.String,
});
export type GetEventsOutput = typeof GetEventsOutput.Type;

// The operation
/**
 * List all events
 *
 * <p>List events, going back up to 30 days. Each event data is rendered according to Stripe API version at its creation time, specified in <a href="https://docs.stripe.com/api/events/object">event object</a> <code>api_version</code> attribute (not according to your current Stripe API version or <code>Stripe-Version</code> header).</p>
 *
 * @param created - Only return events that were created during the given date interval.
 * @param delivery_success - Filter events by whether all webhooks were successfully delivered. If false, events which are still pending or have failed all delivery attempts to a webhook endpoint will be returned.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param type - A string containing a specific event name, or group of events using * as a wildcard. The list will be filtered to include only events with a matching event property.
 * @param types - An array of up to 20 strings containing specific event names. The list will be filtered to include only events with a matching event property. You may pass either `type` or `types`, but not both.
 */
export const GetEvents = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetEventsInput,
  outputSchema: GetEventsOutput,
}));
