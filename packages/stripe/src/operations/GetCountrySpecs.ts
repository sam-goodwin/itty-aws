import * as Schema from "effect/Schema";
import { country_specSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetCountrySpecsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  starting_after: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/country_specs",
    contentType: "form-urlencoded",
  }),
);
export type GetCountrySpecsInput = typeof GetCountrySpecsInput.Type;

// Output Schema
export const GetCountrySpecsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(Schema.suspend(() => country_specSchema)),
  has_more: Schema.Boolean,
  object: Schema.Literals(["list"]),
  url: Schema.String,
});
export type GetCountrySpecsOutput = typeof GetCountrySpecsOutput.Type;

// The operation
/**
 * List Country Specs
 *
 * <p>Lists all Country Spec objects available in the API.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetCountrySpecs = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetCountrySpecsInput,
  outputSchema: GetCountrySpecsOutput,
}));
