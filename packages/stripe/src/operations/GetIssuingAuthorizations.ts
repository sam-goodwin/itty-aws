import * as Schema from "effect/Schema";
import { issuing_authorizationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetIssuingAuthorizationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    card: Schema.optional(Schema.String),
    cardholder: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["closed", "expired", "pending", "reversed"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/issuing/authorizations",
      contentType: "form-urlencoded",
    }),
  );
export type GetIssuingAuthorizationsInput =
  typeof GetIssuingAuthorizationsInput.Type;

// Output Schema
export const GetIssuingAuthorizationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => issuing_authorizationSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetIssuingAuthorizationsOutput =
  typeof GetIssuingAuthorizationsOutput.Type;

// The operation
/**
 * List all authorizations
 *
 * <p>Returns a list of Issuing <code>Authorization</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 *
 * @param card - Only return authorizations that belong to the given card.
 * @param cardholder - Only return authorizations that belong to the given cardholder.
 * @param created - Only return authorizations that were created during the given date interval.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param status - Only return authorizations with the given status. One of `pending`, `closed`, or `reversed`.
 */
export const GetIssuingAuthorizations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetIssuingAuthorizationsInput,
    outputSchema: GetIssuingAuthorizationsOutput,
  }),
);
