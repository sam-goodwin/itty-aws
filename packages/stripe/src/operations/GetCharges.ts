import * as Schema from "effect/Schema";
import { chargeSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetChargesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created: Schema.optional(Schema.String),
  customer: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  payment_intent: Schema.optional(Schema.String),
  starting_after: Schema.optional(Schema.String),
  transfer_group: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/charges",
    contentType: "form-urlencoded",
  }),
);
export type GetChargesInput = typeof GetChargesInput.Type;

// Output Schema
export const GetChargesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(Schema.suspend(() => chargeSchema)),
  has_more: Schema.Boolean,
  object: Schema.Literals(["list"]),
  url: Schema.String,
});
export type GetChargesOutput = typeof GetChargesOutput.Type;

// The operation
/**
 * List all charges
 *
 * <p>Returns a list of charges you’ve previously created. The charges are returned in sorted order, with the most recent charges appearing first.</p>
 *
 * @param created - Only return charges that were created during the given date interval.
 * @param customer - Only return charges for the customer specified by this customer ID.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param payment_intent - Only return charges that were created by the PaymentIntent specified by this PaymentIntent ID.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param transfer_group - Only return charges for this transfer group, limited to 100.
 */
export const GetCharges = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetChargesInput,
  outputSchema: GetChargesOutput,
}));
