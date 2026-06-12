import * as Schema from "effect/Schema";
import { radar_value_listSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetRadarValueListsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alias: Schema.optional(Schema.String),
    contains: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/radar/value_lists",
      contentType: "form-urlencoded",
    }),
  );
export type GetRadarValueListsInput = typeof GetRadarValueListsInput.Type;

// Output Schema
export const GetRadarValueListsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => radar_value_listSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetRadarValueListsOutput = typeof GetRadarValueListsOutput.Type;

// The operation
/**
 * List all value lists
 *
 * <p>Returns a list of <code>ValueList</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 *
 * @param alias - The alias used to reference the value list when writing rules.
 * @param contains - A value contained within a value list - returns all value lists containing this value.
 * @param created - Only return value lists that were created during the given date interval.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetRadarValueLists = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetRadarValueListsInput,
  outputSchema: GetRadarValueListsOutput,
}));
