import * as Schema from "effect/Schema";
import { payment_attempt_recordSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetPaymentAttemptRecordsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    payment_record: Schema.String,
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/payment_attempt_records",
      contentType: "form-urlencoded",
    }),
  );
export type GetPaymentAttemptRecordsInput =
  typeof GetPaymentAttemptRecordsInput.Type;

// Output Schema
export const GetPaymentAttemptRecordsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => payment_attempt_recordSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetPaymentAttemptRecordsOutput =
  typeof GetPaymentAttemptRecordsOutput.Type;

// The operation
/**
 * List Payment Attempt Records
 *
 * <p>List all the Payment Attempt Records attached to the specified Payment Record.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param payment_record - The ID of the Payment Record.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetPaymentAttemptRecords = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetPaymentAttemptRecordsInput,
    outputSchema: GetPaymentAttemptRecordsOutput,
  }),
);
