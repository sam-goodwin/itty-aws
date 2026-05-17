import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const CustomerSeatsgetClaimInfoInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invitation_token: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customer-seats/claim/{invitation_token}",
    }),
  );
export type CustomerSeatsgetClaimInfoInput =
  typeof CustomerSeatsgetClaimInfoInput.Type;

// Output Schema
export const CustomerSeatsgetClaimInfoOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    product_name: Schema.String,
    product_id: Schema.String,
    organization_name: Schema.String,
    organization_slug: Schema.String,
    customer_email: Schema.String,
    can_claim: Schema.Boolean,
  });
export type CustomerSeatsgetClaimInfoOutput =
  typeof CustomerSeatsgetClaimInfoOutput.Type;

// The operation
/**
 * Get Claim Info
 */
export const customerSeatsgetClaimInfo = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerSeatsgetClaimInfoInput,
    outputSchema: CustomerSeatsgetClaimInfoOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
