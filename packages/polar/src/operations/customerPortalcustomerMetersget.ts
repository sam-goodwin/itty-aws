import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalcustomerMetersgetInput {
  id: string;
}
export const CustomerPortalcustomerMetersgetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customer-portal/meters/{id}" }),
  ) as unknown as Schema.Codec<CustomerPortalcustomerMetersgetInput>;

// Output Schema
export interface CustomerPortalcustomerMetersgetOutput {
  id: string;
  created_at: string;
  modified_at: string | null;
  customer_id: string;
  meter_id: string;
  consumed_units: number;
  credited_units: number;
  balance: number;
  meter: {
    created_at: string;
    modified_at: string | null;
    id: string;
    name: string;
  };
}
export const CustomerPortalcustomerMetersgetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CustomerPortalcustomerMetersgetOutput>;

// The operation
/**
 * Get Customer Meter
 *
 * Get a meter by ID for the authenticated customer.
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 *
 * @param id - The customer meter ID.
 */
export const customerPortalcustomerMetersget =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalcustomerMetersgetInput,
    outputSchema: CustomerPortalcustomerMetersgetOutput,
  }));
