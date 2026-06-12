import * as Schema from "effect/Schema";
import { refundSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetRefundsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  charge: Schema.optional(Schema.String),
  created: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  payment_intent: Schema.optional(Schema.String),
  starting_after: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/refunds",
    contentType: "form-urlencoded",
  }),
);
export type GetRefundsInput = typeof GetRefundsInput.Type;

// Output Schema
export const GetRefundsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(Schema.suspend(() => refundSchema)),
  has_more: Schema.Boolean,
  object: Schema.Literals(["list"]),
  url: Schema.String,
});
export type GetRefundsOutput = typeof GetRefundsOutput.Type;

// The operation
/**
 * List all refunds
 *
 * <p>Returns a list of all refunds you created. We return the refunds in sorted order, with the most recent refunds appearing first. The 10 most recent refunds are always available by default on the Charge object.</p>
 *
 * @param charge - Only return refunds for the charge specified by this charge ID.
 * @param created - Only return refunds that were created during the given date interval.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param payment_intent - Only return refunds for the PaymentIntent specified by this ID.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetRefunds = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetRefundsInput,
  outputSchema: GetRefundsOutput,
}));
