import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetCustomersCustomerInput {
  customer: string;
  expand?: string;
}
export const GetCustomersCustomerInput =
  /*@__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customers/{customer}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetCustomersCustomerInput>;

// Output Schema
export type GetCustomersCustomerOutput = unknown;
export const GetCustomersCustomerOutput =
  /*@__PURE__*/ Schema.Unknown as unknown as Schema.Codec<GetCustomersCustomerOutput>;

// The operation
/**
 * Retrieve a customer
 *
 * <p>Retrieves a Customer object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetCustomersCustomer = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetCustomersCustomerInput,
  outputSchema: GetCustomersCustomerOutput,
}));
