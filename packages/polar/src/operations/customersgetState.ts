import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomersgetStateInput {
  id: string;
}
export const CustomersgetStateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({ method: "GET", path: "/v1/customers/{id}/state" }),
) as unknown as Schema.Codec<CustomersgetStateInput>;

// Output Schema
export type CustomersgetStateOutput = unknown;
export const CustomersgetStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<CustomersgetStateOutput>;

// The operation
/**
 * Get Customer State
 *
 * Get a customer state by ID.
 * The customer state includes information about
 * the customer's active subscriptions and benefits.
 * It's the ideal endpoint to use when you need to get a full overview
 * of a customer's status.
 * **Scopes**: `customers:read` `customers:write`
 *
 * @param id - The customer ID.
 */
export const customersgetState = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomersgetStateInput,
  outputSchema: CustomersgetStateOutput,
}));
