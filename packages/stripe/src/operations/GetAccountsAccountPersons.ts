import * as Schema from "effect/Schema";
import { personSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetAccountsAccountPersonsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String.pipe(T.PathParam()),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    relationship: Schema.optional(Schema.String),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/accounts/{account}/persons",
      contentType: "form-urlencoded",
    }),
  );
export type GetAccountsAccountPersonsInput =
  typeof GetAccountsAccountPersonsInput.Type;

// Output Schema
export const GetAccountsAccountPersonsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => personSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetAccountsAccountPersonsOutput =
  typeof GetAccountsAccountPersonsOutput.Type;

// The operation
/**
 * List all persons
 *
 * <p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param relationship - Filters on the list of people returned based on the person's relationship to the account's company.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetAccountsAccountPersons = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetAccountsAccountPersonsInput,
    outputSchema: GetAccountsAccountPersonsOutput,
  }),
);
