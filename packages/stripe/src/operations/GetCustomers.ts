import * as Schema from "effect/Schema";
import { customerSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetCustomersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created: Schema.optional(Schema.String),
  email: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  starting_after: Schema.optional(Schema.String),
  test_clock: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/customers",
    contentType: "form-urlencoded",
  }),
);
export type GetCustomersInput = typeof GetCustomersInput.Type;

// Output Schema
export const GetCustomersOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(Schema.suspend(() => customerSchema)),
  has_more: Schema.Boolean,
  object: Schema.Literals(["list"]),
  url: Schema.String,
});
export type GetCustomersOutput = typeof GetCustomersOutput.Type;

// The operation
/**
 * List all customers
 *
 * <p>Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.</p>
 *
 * @param created - Only return customers that were created during the given date interval.
 * @param email - A case-sensitive filter on the list based on the customer's `email` field. The value must be a string.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param test_clock - Provides a list of customers that are associated with the specified test clock. The response will not include customers with test clocks if this parameter is not set.
 */
export const GetCustomers = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetCustomersInput,
  outputSchema: GetCustomersOutput,
}));
