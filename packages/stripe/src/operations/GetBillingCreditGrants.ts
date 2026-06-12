import * as Schema from "effect/Schema";
import { billing_credit_grantSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetBillingCreditGrantsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String),
    customer_account: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/billing/credit_grants",
      contentType: "form-urlencoded",
    }),
  );
export type GetBillingCreditGrantsInput =
  typeof GetBillingCreditGrantsInput.Type;

// Output Schema
export const GetBillingCreditGrantsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => billing_credit_grantSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetBillingCreditGrantsOutput =
  typeof GetBillingCreditGrantsOutput.Type;

// The operation
/**
 * List credit grants
 *
 * <p>Retrieve a list of credit grants.</p>
 *
 * @param customer - Only return credit grants for this customer.
 * @param customer_account - Only return credit grants for this account representing the customer.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetBillingCreditGrants = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetBillingCreditGrantsInput,
    outputSchema: GetBillingCreditGrantsOutput,
  }),
);
