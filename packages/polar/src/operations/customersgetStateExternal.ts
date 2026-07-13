import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomersgetStateExternalInput {
  external_id: string;
}
export const CustomersgetStateExternalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customers/external/{external_id}/state",
    }),
  ) as unknown as Schema.Codec<CustomersgetStateExternalInput>;

// Output Schema
export type CustomersgetStateExternalOutput = unknown;
export const CustomersgetStateExternalOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<CustomersgetStateExternalOutput>;

// The operation
/**
 * Get Customer State by External ID
 *
 * Get a customer state by external ID.
 * The customer state includes information about
 * the customer's active subscriptions and benefits.
 * It's the ideal endpoint to use when you need to get a full overview
 * of a customer's status.
 * **Scopes**: `customers:read` `customers:write`
 *
 * @param external_id - The customer external ID.
 */
export const customersgetStateExternal = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomersgetStateExternalInput,
    outputSchema: CustomersgetStateExternalOutput,
  }),
);
