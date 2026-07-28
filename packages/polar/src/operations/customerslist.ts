import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerslistInput {
  organization_id?: string | ReadonlyArray<string> | null;
  email?: string | null;
  query?: string | null;
  active?: boolean | null;
  page?: number;
  limit?: number;
  sorting?: ReadonlyArray<
    "created_at" | "-created_at" | "email" | "-email" | "name" | "-name"
  > | null;
  metadata?: Record<
    string,
    | string
    | number
    | boolean
    | ReadonlyArray<string>
    | ReadonlyArray<number>
    | ReadonlyArray<boolean>
  > | null;
}
export const CustomerslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  email: Schema.optional(Schema.NullOr(Schema.String)),
  query: Schema.optional(Schema.NullOr(Schema.String)),
  active: Schema.optional(Schema.NullOr(Schema.Boolean)),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "created_at",
          "-created_at",
          "email",
          "-email",
          "name",
          "-name",
        ]),
      ),
    ),
  ),
  metadata: Schema.optional(
    Schema.NullOr(
      Schema.Record(
        Schema.String,
        Schema.Union([
          Schema.String,
          Schema.Number,
          Schema.Boolean,
          Schema.Array(Schema.String),
          Schema.Array(Schema.Number),
          Schema.Array(Schema.Boolean),
        ]),
      ),
    ),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/v1/customers/" }),
) as unknown as Schema.Codec<CustomerslistInput>;

// Output Schema
export interface CustomerslistOutput {
  items: ReadonlyArray<unknown>;
  pagination: { total_count: number; max_page: number };
}
export const CustomerslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(Schema.Unknown),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
}) as unknown as Schema.Codec<CustomerslistOutput>;

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
 * @param active - Filter by active customers, i.e. customers with at least one trialing, active or past_due subscription.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 * @param metadata - Filter by metadata key-value pairs. It uses the `deepObject` style, e.g. `?metadata[key]=value`.
 */
export const customerslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomerslistInput,
  outputSchema: CustomerslistOutput,
}));
