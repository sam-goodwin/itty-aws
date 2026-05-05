import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalcustomerMeterslistInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meter_id: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    sorting: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v1/customer-portal/meters/" }));
export type CustomerPortalcustomerMeterslistInput =
  typeof CustomerPortalcustomerMeterslistInput.Type;

// Output Schema
export const CustomerPortalcustomerMeterslistOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        modified_at: Schema.NullOr(Schema.String),
        customer_id: Schema.String,
        meter_id: Schema.String,
        consumed_units: Schema.Number,
        credited_units: Schema.Number,
        balance: Schema.Number,
        meter: Schema.Struct({
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          id: Schema.String,
          name: Schema.String,
        }),
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  });
export type CustomerPortalcustomerMeterslistOutput =
  typeof CustomerPortalcustomerMeterslistOutput.Type;

// The operation
/**
 * List Meters
 *
 * List meters of the authenticated customer.
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 *
 * @param meter_id - Filter by meter ID.
 * @param query - Filter by meter name.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const customerPortalcustomerMeterslist =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalcustomerMeterslistInput,
    outputSchema: CustomerPortalcustomerMeterslistOutput,
    errors: [UnprocessableEntity] as const,
  }));
