import * as Schema from "effect/Schema";
import { treasury_received_creditSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetTreasuryReceivedCreditsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    financial_account: Schema.String,
    limit: Schema.optional(Schema.Number),
    linked_flows: Schema.optional(Schema.String),
    starting_after: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Literals(["failed", "succeeded"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/treasury/received_credits",
      contentType: "form-urlencoded",
    }),
  );
export type GetTreasuryReceivedCreditsInput =
  typeof GetTreasuryReceivedCreditsInput.Type;

// Output Schema
export const GetTreasuryReceivedCreditsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => treasury_received_creditSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetTreasuryReceivedCreditsOutput =
  typeof GetTreasuryReceivedCreditsOutput.Type;

// The operation
/**
 * List all ReceivedCredits
 *
 * <p>Returns a list of ReceivedCredits.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param financial_account - The FinancialAccount that received the funds.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param linked_flows - Only return ReceivedCredits described by the flow.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param status - Only return ReceivedCredits that have the given status: `succeeded` or `failed`.
 */
export const GetTreasuryReceivedCredits = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetTreasuryReceivedCreditsInput,
    outputSchema: GetTreasuryReceivedCreditsOutput,
  }),
);
