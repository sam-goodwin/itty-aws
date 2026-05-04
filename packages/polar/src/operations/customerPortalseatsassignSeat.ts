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
export const CustomerPortalseatsassignSeatInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscription_id: Schema.optional(Schema.Unknown),
    checkout_id: Schema.optional(Schema.Unknown),
    checkout_client_secret: Schema.optional(Schema.Unknown),
    order_id: Schema.optional(Schema.Unknown),
    email: Schema.optional(Schema.Unknown),
    external_customer_id: Schema.optional(Schema.Unknown),
    customer_id: Schema.optional(Schema.Unknown),
    external_member_id: Schema.optional(Schema.Unknown),
    member_id: Schema.optional(Schema.Unknown),
    metadata: Schema.optional(Schema.Unknown),
    immediate_claim: Schema.optional(Schema.Boolean),
  }).pipe(T.Http({ method: "POST", path: "/v1/customer-portal/seats" }));
export type CustomerPortalseatsassignSeatInput =
  typeof CustomerPortalseatsassignSeatInput.Type;

// Output Schema
export const CustomerPortalseatsassignSeatOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.Unknown,
    id: Schema.String,
    subscription_id: Schema.optional(Schema.Unknown),
    order_id: Schema.optional(Schema.Unknown),
    status: Schema.Literals(["pending", "claimed", "revoked"]),
    customer_id: Schema.optional(Schema.Unknown),
    member_id: Schema.optional(Schema.Unknown),
    member: Schema.optional(Schema.Unknown),
    email: Schema.optional(Schema.Unknown),
    customer_email: Schema.optional(Schema.Unknown),
    invitation_token_expires_at: Schema.optional(Schema.Unknown),
    claimed_at: Schema.optional(Schema.Unknown),
    revoked_at: Schema.optional(Schema.Unknown),
    seat_metadata: Schema.optional(Schema.Unknown),
  });
export type CustomerPortalseatsassignSeatOutput =
  typeof CustomerPortalseatsassignSeatOutput.Type;

// The operation
/**
 * Assign Seat
 */
export const customerPortalseatsassignSeat =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalseatsassignSeatInput,
    outputSchema: CustomerPortalseatsassignSeatOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
