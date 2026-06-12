import * as Schema from "effect/Schema";
import { issuing_cardholderSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetIssuingCardholdersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    phone_number: Schema.optional(Schema.String),
    starting_after: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Literals(["active", "blocked", "inactive"])),
    type: Schema.optional(Schema.Literals(["company", "individual"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/issuing/cardholders",
      contentType: "form-urlencoded",
    }),
  );
export type GetIssuingCardholdersInput = typeof GetIssuingCardholdersInput.Type;

// Output Schema
export const GetIssuingCardholdersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => issuing_cardholderSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetIssuingCardholdersOutput =
  typeof GetIssuingCardholdersOutput.Type;

// The operation
/**
 * List all cardholders
 *
 * <p>Returns a list of Issuing <code>Cardholder</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 *
 * @param created - Only return cardholders that were created during the given date interval.
 * @param email - Only return cardholders that have the given email address.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param phone_number - Only return cardholders that have the given phone number.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param status - Only return cardholders that have the given status. One of `active`, `inactive`, or `blocked`.
 * @param type - Only return cardholders that have the given type. One of `individual` or `company`.
 */
export const GetIssuingCardholders = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetIssuingCardholdersInput,
    outputSchema: GetIssuingCardholdersOutput,
  }),
);
