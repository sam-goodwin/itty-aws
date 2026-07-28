import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerSeatsgetClaimInfoInput {
  invitation_token: string;
}
export const CustomerSeatsgetClaimInfoInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invitation_token: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customer-seats/claim/{invitation_token}",
    }),
  ) as unknown as Schema.Codec<CustomerSeatsgetClaimInfoInput>;

// Output Schema
export interface CustomerSeatsgetClaimInfoOutput {
  product_name: string;
  product_id: string;
  organization_name: string;
  organization_slug: string;
  customer_email: string;
  can_claim: boolean;
}
export const CustomerSeatsgetClaimInfoOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    product_name: Schema.String,
    product_id: Schema.String,
    organization_name: Schema.String,
    organization_slug: Schema.String,
    customer_email: Schema.String,
    can_claim: Schema.Boolean,
  }) as unknown as Schema.Codec<CustomerSeatsgetClaimInfoOutput>;

// The operation
/**
 * Get Claim Info
 */
export const customerSeatsgetClaimInfo = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerSeatsgetClaimInfoInput,
    outputSchema: CustomerSeatsgetClaimInfoOutput,
  }),
);
