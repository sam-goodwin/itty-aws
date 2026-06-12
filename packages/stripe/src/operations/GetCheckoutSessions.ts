import * as Schema from "effect/Schema";
import { checkout_sessionSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetCheckoutSessionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.optional(Schema.String),
    customer: Schema.optional(Schema.String),
    customer_account: Schema.optional(Schema.String),
    customer_details: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    payment_intent: Schema.optional(Schema.String),
    payment_link: Schema.optional(Schema.String),
    starting_after: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Literals(["complete", "expired", "open"])),
    subscription: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/checkout/sessions",
      contentType: "form-urlencoded",
    }),
  );
export type GetCheckoutSessionsInput = typeof GetCheckoutSessionsInput.Type;

// Output Schema
export const GetCheckoutSessionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => checkout_sessionSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetCheckoutSessionsOutput = typeof GetCheckoutSessionsOutput.Type;

// The operation
/**
 * List all Checkout Sessions
 *
 * <p>Returns a list of Checkout Sessions.</p>
 *
 * @param created - Only return Checkout Sessions that were created during the given date interval.
 * @param customer - Only return the Checkout Sessions for the Customer specified.
 * @param customer_account - Only return the Checkout Sessions for the Account specified.
 * @param customer_details - Only return the Checkout Sessions for the Customer details specified.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param payment_intent - Only return the Checkout Session for the PaymentIntent specified.
 * @param payment_link - Only return the Checkout Sessions for the Payment Link specified.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param status - Only return the Checkout Sessions matching the given status.
 * @param subscription - Only return the Checkout Session for the subscription specified.
 */
export const GetCheckoutSessions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetCheckoutSessionsInput,
  outputSchema: GetCheckoutSessionsOutput,
}));
