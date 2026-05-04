import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalcustomerMetersgetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/v1/customer-portal/meters/{id}" }));
export type CustomerPortalcustomerMetersgetInput =
  typeof CustomerPortalcustomerMetersgetInput.Type;

// Output Schema
export const CustomerPortalcustomerMetersgetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.Unknown,
    customer_id: Schema.String,
    meter_id: Schema.String,
    consumed_units: Schema.Number,
    credited_units: Schema.Number,
    balance: Schema.Number,
    meter: Schema.Struct({
      created_at: Schema.String,
      modified_at: Schema.Unknown,
      id: Schema.String,
      name: Schema.String,
    }),
  });
export type CustomerPortalcustomerMetersgetOutput =
  typeof CustomerPortalcustomerMetersgetOutput.Type;

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
    errors: [NotFound, UnprocessableEntity] as const,
  }));
