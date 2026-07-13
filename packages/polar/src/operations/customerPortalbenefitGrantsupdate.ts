import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalbenefitGrantsupdateInput {
  id: string;
  benefit_type: string;
  properties?: { invited_email: string };
}
export const CustomerPortalbenefitGrantsupdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    benefit_type: Schema.String,
    properties: Schema.optional(
      Schema.Struct({
        invited_email: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/v1/customer-portal/benefit-grants/{id}",
    }),
  ) as unknown as Schema.Codec<CustomerPortalbenefitGrantsupdateInput>;

// Output Schema
export type CustomerPortalbenefitGrantsupdateOutput = unknown;
export const CustomerPortalbenefitGrantsupdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<CustomerPortalbenefitGrantsupdateOutput>;

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
  }));
