import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomersgetInput {
  id: string;
}
export const CustomersgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/customers/{id}" }),
) as unknown as Schema.Codec<CustomersgetInput>;

// Output Schema
export type CustomersgetOutput = unknown;
export const CustomersgetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<CustomersgetOutput>;

// The operation
/**
 * Get Customer
 *
 * Get a customer by ID.
 * **Scopes**: `customers:read` `customers:write`
 *
 * @param id - The customer ID.
 */
export const customersget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomersgetInput,
  outputSchema: CustomersgetOutput,
}));
