import * as Schema from "effect/Schema";
import { setup_intentSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetSetupIntentsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  attach_to_self: Schema.optional(Schema.Boolean),
  created: Schema.optional(Schema.String),
  customer: Schema.optional(Schema.String),
  customer_account: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  payment_method: Schema.optional(Schema.String),
  starting_after: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/setup_intents",
    contentType: "form-urlencoded",
  }),
);
export type GetSetupIntentsInput = typeof GetSetupIntentsInput.Type;

// Output Schema
export const GetSetupIntentsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(Schema.suspend(() => setup_intentSchema)),
  has_more: Schema.Boolean,
  object: Schema.Literals(["list"]),
  url: Schema.String,
});
export type GetSetupIntentsOutput = typeof GetSetupIntentsOutput.Type;

// The operation
/**
 * List all SetupIntents
 *
 * <p>Returns a list of SetupIntents.</p>
 *
 * @param attach_to_self - If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.

It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
 * @param created - A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
 * @param customer - Only return SetupIntents for the customer specified by this customer ID.
 * @param customer_account - Only return SetupIntents for the account specified by this customer ID.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param payment_method - Only return SetupIntents that associate with the specified payment method.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetSetupIntents = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetSetupIntentsInput,
  outputSchema: GetSetupIntentsOutput,
}));
