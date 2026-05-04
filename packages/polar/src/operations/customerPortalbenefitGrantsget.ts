import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalbenefitGrantsgetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customer-portal/benefit-grants/{id}" }),
  );
export type CustomerPortalbenefitGrantsgetInput =
  typeof CustomerPortalbenefitGrantsgetInput.Type;

// Output Schema
export const CustomerPortalbenefitGrantsgetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type CustomerPortalbenefitGrantsgetOutput =
  typeof CustomerPortalbenefitGrantsgetOutput.Type;

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
    errors: [NotFound, UnprocessableEntity] as const,
  }));
