import * as Schema from "effect/Schema";
import { issuing_cardSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetIssuingCardsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cardholder: Schema.optional(Schema.String),
  created: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  exp_month: Schema.optional(Schema.Number),
  exp_year: Schema.optional(Schema.Number),
  expand: Schema.optional(Schema.String),
  last4: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  personalization_design: Schema.optional(Schema.String),
  starting_after: Schema.optional(Schema.String),
  status: Schema.optional(Schema.Literals(["active", "canceled", "inactive"])),
  type: Schema.optional(Schema.Literals(["physical", "virtual"])),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/issuing/cards",
    contentType: "form-urlencoded",
  }),
);
export type GetIssuingCardsInput = typeof GetIssuingCardsInput.Type;

// Output Schema
export const GetIssuingCardsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(Schema.suspend(() => issuing_cardSchema)),
  has_more: Schema.Boolean,
  object: Schema.Literals(["list"]),
  url: Schema.String,
});
export type GetIssuingCardsOutput = typeof GetIssuingCardsOutput.Type;

// The operation
/**
 * List all cards
 *
 * <p>Returns a list of Issuing <code>Card</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 *
 * @param cardholder - Only return cards belonging to the Cardholder with the provided ID.
 * @param created - Only return cards that were issued during the given date interval.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param exp_month - Only return cards that have the given expiration month.
 * @param exp_year - Only return cards that have the given expiration year.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param last4 - Only return cards that have the given last four digits.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param status - Only return cards that have the given status. One of `active`, `inactive`, or `canceled`.
 * @param type - Only return cards that have the given type. One of `virtual` or `physical`.
 */
export const GetIssuingCards = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetIssuingCardsInput,
  outputSchema: GetIssuingCardsOutput,
}));
