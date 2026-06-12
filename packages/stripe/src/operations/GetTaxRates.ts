import * as Schema from "effect/Schema";
import { tax_rateSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetTaxRatesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  active: Schema.optional(Schema.Boolean),
  created: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  inclusive: Schema.optional(Schema.Boolean),
  limit: Schema.optional(Schema.Number),
  starting_after: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/tax_rates",
    contentType: "form-urlencoded",
  }),
);
export type GetTaxRatesInput = typeof GetTaxRatesInput.Type;

// Output Schema
export const GetTaxRatesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(Schema.suspend(() => tax_rateSchema)),
  has_more: Schema.Boolean,
  object: Schema.Literals(["list"]),
  url: Schema.String,
});
export type GetTaxRatesOutput = typeof GetTaxRatesOutput.Type;

// The operation
/**
 * List all tax rates
 *
 * <p>Returns a list of your tax rates. Tax rates are returned sorted by creation date, with the most recently created tax rates appearing first.</p>
 *
 * @param active - Optional flag to filter by tax rates that are either active or inactive (archived).
 * @param created - Optional range for filtering created date.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param inclusive - Optional flag to filter by tax rates that are inclusive (or those that are not inclusive).
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetTaxRates = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetTaxRatesInput,
  outputSchema: GetTaxRatesOutput,
}));
