import * as Schema from "effect/Schema";
import { itemSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetCheckoutSessionsSessionLineItemsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.PathParam()),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/checkout/sessions/{session}/line_items",
      contentType: "form-urlencoded",
    }),
  );
export type GetCheckoutSessionsSessionLineItemsInput =
  typeof GetCheckoutSessionsSessionLineItemsInput.Type;

// Output Schema
export const GetCheckoutSessionsSessionLineItemsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => itemSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetCheckoutSessionsSessionLineItemsOutput =
  typeof GetCheckoutSessionsSessionLineItemsOutput.Type;

// The operation
/**
 * Retrieve a Checkout Session's line items
 *
 * <p>When retrieving a Checkout Session, there is an includable <strong>line_items</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetCheckoutSessionsSessionLineItems =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetCheckoutSessionsSessionLineItemsInput,
    outputSchema: GetCheckoutSessionsSessionLineItemsOutput,
  }));
