import * as Schema from "effect/Schema";
import { credit_noteSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetCreditNotesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created: Schema.optional(Schema.String),
  customer: Schema.optional(Schema.String),
  customer_account: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  invoice: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  starting_after: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/credit_notes",
    contentType: "form-urlencoded",
  }),
);
export type GetCreditNotesInput = typeof GetCreditNotesInput.Type;

// Output Schema
export const GetCreditNotesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(Schema.suspend(() => credit_noteSchema)),
  has_more: Schema.Boolean,
  object: Schema.Literals(["list"]),
  url: Schema.String,
});
export type GetCreditNotesOutput = typeof GetCreditNotesOutput.Type;

// The operation
/**
 * List all credit notes
 *
 * <p>Returns a list of credit notes.</p>
 *
 * @param created - Only return credit notes that were created during the given date interval.
 * @param customer - Only return credit notes for the customer specified by this customer ID.
 * @param customer_account - Only return credit notes for the account representing the customer specified by this account ID.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param invoice - Only return credit notes for the invoice specified by this invoice ID.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetCreditNotes = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetCreditNotesInput,
  outputSchema: GetCreditNotesOutput,
}));
