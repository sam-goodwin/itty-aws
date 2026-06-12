import * as Schema from "effect/Schema";
import { payment_intentSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetPaymentIntentsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    created: Schema.optional(Schema.String),
    customer: Schema.optional(Schema.String),
    customer_account: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/v1/payment_intents",
    contentType: "form-urlencoded",
  }),
);
export type GetPaymentIntentsInput = typeof GetPaymentIntentsInput.Type;

// Output Schema
export const GetPaymentIntentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => payment_intentSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetPaymentIntentsOutput = typeof GetPaymentIntentsOutput.Type;

// The operation
/**
 * List all PaymentIntents
 *
 * <p>Returns a list of PaymentIntents.</p>
 *
 * @param created - A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp or a dictionary with a number of different query options.
 * @param customer - Only return PaymentIntents for the customer that this customer ID specifies.
 * @param customer_account - Only return PaymentIntents for the account representing the customer that this ID specifies.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetPaymentIntents = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetPaymentIntentsInput,
  outputSchema: GetPaymentIntentsOutput,
}));
