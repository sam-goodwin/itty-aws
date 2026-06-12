import * as Schema from "effect/Schema";
import { treasury_received_debitSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetTreasuryReceivedDebitsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    financial_account: Schema.String,
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Literals(["failed", "succeeded"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/treasury/received_debits",
      contentType: "form-urlencoded",
    }),
  );
export type GetTreasuryReceivedDebitsInput =
  typeof GetTreasuryReceivedDebitsInput.Type;

// Output Schema
export const GetTreasuryReceivedDebitsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => treasury_received_debitSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetTreasuryReceivedDebitsOutput =
  typeof GetTreasuryReceivedDebitsOutput.Type;

// The operation
/**
 * List all ReceivedDebits
 *
 * <p>Returns a list of ReceivedDebits.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param financial_account - The FinancialAccount that funds were pulled from.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param status - Only return ReceivedDebits that have the given status: `succeeded` or `failed`.
 */
export const GetTreasuryReceivedDebits = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetTreasuryReceivedDebitsInput,
    outputSchema: GetTreasuryReceivedDebitsOutput,
  }),
);
