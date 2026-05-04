import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomersgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/customers/{id}" }));
export type CustomersgetInput = typeof CustomersgetInput.Type;

// Output Schema
export const CustomersgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type CustomersgetOutput = typeof CustomersgetOutput.Type;

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
  errors: [NotFound, UnprocessableEntity] as const,
}));
