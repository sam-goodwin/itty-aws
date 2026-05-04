import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerscreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "POST", path: "/v1/customers/" }));
export type CustomerscreateInput = typeof CustomerscreateInput.Type;

// Output Schema
export const CustomerscreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type CustomerscreateOutput = typeof CustomerscreateOutput.Type;

// The operation
/**
 * Create Customer
 *
 * Create a customer.
 * **Scopes**: `customers:write`
 */
export const customerscreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomerscreateInput,
  outputSchema: CustomerscreateOutput,
  errors: [UnprocessableEntity] as const,
}));
