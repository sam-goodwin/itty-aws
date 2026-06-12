import * as Schema from "effect/Schema";
import { topupSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetTopupsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.optional(Schema.String),
  created: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  starting_after: Schema.optional(Schema.String),
  status: Schema.optional(
    Schema.Literals(["canceled", "failed", "pending", "succeeded"]),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/v1/topups", contentType: "form-urlencoded" }),
);
export type GetTopupsInput = typeof GetTopupsInput.Type;

// Output Schema
export const GetTopupsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(Schema.suspend(() => topupSchema)),
  has_more: Schema.Boolean,
  object: Schema.Literals(["list"]),
  url: Schema.String,
});
export type GetTopupsOutput = typeof GetTopupsOutput.Type;

// The operation
/**
 * List all top-ups
 *
 * <p>Returns a list of top-ups.</p>
 *
 * @param amount - A positive integer representing how much to transfer.
 * @param created - A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param status - Only return top-ups that have the given status. One of `canceled`, `failed`, `pending` or `succeeded`.
 */
export const GetTopups = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetTopupsInput,
  outputSchema: GetTopupsOutput,
}));
