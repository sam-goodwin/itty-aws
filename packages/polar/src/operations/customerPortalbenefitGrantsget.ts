import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalbenefitGrantsgetInput {
  id: string;
}
export const CustomerPortalbenefitGrantsgetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customer-portal/benefit-grants/{id}" }),
  ) as unknown as Schema.Codec<CustomerPortalbenefitGrantsgetInput>;

// Output Schema
export type CustomerPortalbenefitGrantsgetOutput = unknown;
export const CustomerPortalbenefitGrantsgetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<CustomerPortalbenefitGrantsgetOutput>;

// The operation
/**
 * Get Benefit Grant
 *
 * Get a benefit grant by ID for the authenticated customer.
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 *
 * @param id - The benefit grant ID.
 */
export const customerPortalbenefitGrantsget =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalbenefitGrantsgetInput,
    outputSchema: CustomerPortalbenefitGrantsgetOutput,
  }));
