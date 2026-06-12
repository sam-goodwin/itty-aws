import * as Schema from "effect/Schema";
import { climate_orderSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetClimateOrdersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  starting_after: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/climate/orders",
    contentType: "form-urlencoded",
  }),
);
export type GetClimateOrdersInput = typeof GetClimateOrdersInput.Type;

// Output Schema
export const GetClimateOrdersOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    data: Schema.Array(Schema.suspend(() => climate_orderSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  },
);
export type GetClimateOrdersOutput = typeof GetClimateOrdersOutput.Type;

// The operation
/**
 * List orders
 *
 * <p>Lists all Climate order objects. The orders are returned sorted by creation date, with the
 * most recently created orders appearing first.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetClimateOrders = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetClimateOrdersInput,
  outputSchema: GetClimateOrdersOutput,
}));
