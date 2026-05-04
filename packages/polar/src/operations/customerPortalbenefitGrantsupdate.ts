import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalbenefitGrantsupdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/v1/customer-portal/benefit-grants/{id}",
    }),
  );
export type CustomerPortalbenefitGrantsupdateInput =
  typeof CustomerPortalbenefitGrantsupdateInput.Type;

// Output Schema
export const CustomerPortalbenefitGrantsupdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type CustomerPortalbenefitGrantsupdateOutput =
  typeof CustomerPortalbenefitGrantsupdateOutput.Type;

// The operation
/**
 * Update Benefit Grant
 *
 * Update a benefit grant for the authenticated customer.
 * **Scopes**: `customer_portal:write`
 *
 * @param id - The benefit grant ID.
 */
export const customerPortalbenefitGrantsupdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalbenefitGrantsupdateInput,
    outputSchema: CustomerPortalbenefitGrantsupdateOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
