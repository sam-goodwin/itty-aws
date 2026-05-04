import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomersexportInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v1/customers/export" }));
export type CustomersexportInput = typeof CustomersexportInput.Type;

// Output Schema
export const CustomersexportOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type CustomersexportOutput = typeof CustomersexportOutput.Type;

// The operation
/**
 * Export Customers
 *
 * Export customers as a CSV file.
 * **Scopes**: `customers:read` `customers:write`
 *
 * @param organization_id - Filter by organization ID.
 */
export const customersexport = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomersexportInput,
  outputSchema: CustomersexportOutput,
  errors: [UnprocessableEntity] as const,
}));
