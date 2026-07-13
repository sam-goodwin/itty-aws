import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomersexportInput {
  organization_id?: string | ReadonlyArray<string> | null;
}
export const CustomersexportInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/v1/customers/export" }),
) as unknown as Schema.Codec<CustomersexportInput>;

// Output Schema
export type CustomersexportOutput = void;
export const CustomersexportOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomersexportOutput>;

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
}));
