import * as Schema from "effect/Schema";
import { issuing_disputeSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetIssuingDisputesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["expired", "lost", "submitted", "unsubmitted", "won"]),
    ),
    transaction: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/issuing/disputes",
      contentType: "form-urlencoded",
    }),
  );
export type GetIssuingDisputesInput = typeof GetIssuingDisputesInput.Type;

// Output Schema
export const GetIssuingDisputesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => issuing_disputeSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetIssuingDisputesOutput = typeof GetIssuingDisputesOutput.Type;

// The operation
/**
 * List all disputes
 *
 * <p>Returns a list of Issuing <code>Dispute</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 *
 * @param created - Only return Issuing disputes that were created during the given date interval.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param status - Select Issuing disputes with the given status.
 * @param transaction - Select the Issuing dispute for the given transaction.
 */
export const GetIssuingDisputes = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetIssuingDisputesInput,
  outputSchema: GetIssuingDisputesOutput,
}));
