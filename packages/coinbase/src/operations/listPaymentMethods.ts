import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListPaymentMethodsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v2/payment-methods" }));
export type ListPaymentMethodsInput = typeof ListPaymentMethodsInput.Type;

// Output Schema
export const ListPaymentMethodsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paymentMethods: Schema.Array(Schema.Unknown),
    nextPageToken: Schema.optional(Schema.String),
  });
export type ListPaymentMethodsOutput = typeof ListPaymentMethodsOutput.Type;

// The operation
/**
 * List payment methods
 *
 * List payment methods linked to your entity. Payment methods represent external financial instruments that can be used as a target for transfers. The list will not include disabled or deleted payment methods.
 * **Currently Supported Types:**
 * - `fedwire`: Domestic USD wire transfers
 * - `swift`: International wire transfers
 * - `sepa`: SEPA EUR transfers
 * **Note:** Payment methods are created and verified through your linked CDP entity. Currently, fetching payment methods is only supported for Prime investment vehicles linked to CDP.
 *
 * @param pageSize - The number of resources to return per page.
 * @param pageToken - The token for the next page of resources, if any.
 */
export const listPaymentMethods = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListPaymentMethodsInput,
  outputSchema: ListPaymentMethodsOutput,
}));
