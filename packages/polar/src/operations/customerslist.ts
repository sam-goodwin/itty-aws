import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(Schema.String),
  email: Schema.optional(Schema.String),
  query: Schema.optional(Schema.String),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v1/customers/" }));
export type CustomerslistInput = typeof CustomerslistInput.Type;

// Output Schema
export const CustomerslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(Schema.Unknown),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
});
export type CustomerslistOutput = typeof CustomerslistOutput.Type;

// The operation
/**
 * List Customers
 *
 * List customers.
 * **Scopes**: `customers:read` `customers:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param email - Filter by exact email.
 * @param query - Filter by name, email, or external ID.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 * @param metadata - Filter by metadata key-value pairs. It uses the `deepObject` style, e.g. `?metadata[key]=value`.
 */
export const customerslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomerslistInput,
  outputSchema: CustomerslistOutput,
  errors: [UnprocessableEntity] as const,
}));
