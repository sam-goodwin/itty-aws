import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerSeatsclaimSeatInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invitation_token: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/v1/customer-seats/claim" }));
export type CustomerSeatsclaimSeatInput =
  typeof CustomerSeatsclaimSeatInput.Type;

// Output Schema
export const CustomerSeatsclaimSeatOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    seat: Schema.Struct({
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
    }),
    customer_session_token: Schema.String,
  });
export type CustomerSeatsclaimSeatOutput =
  typeof CustomerSeatsclaimSeatOutput.Type;

// The operation
/**
 * Claim Seat
 */
export const customerSeatsclaimSeat = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerSeatsclaimSeatInput,
    outputSchema: CustomerSeatsclaimSeatOutput,
    errors: [BadRequest, Forbidden, UnprocessableEntity] as const,
  }),
);
