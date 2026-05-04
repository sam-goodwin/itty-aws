import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerSeatsrevokeSeatInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    seat_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/v1/customer-seats/{seat_id}" }));
export type CustomerSeatsrevokeSeatInput =
  typeof CustomerSeatsrevokeSeatInput.Type;

// Output Schema
export const CustomerSeatsrevokeSeatOutput =
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
export type CustomerSeatsrevokeSeatOutput =
  typeof CustomerSeatsrevokeSeatOutput.Type;

// The operation
/**
 * Revoke Seat
 *
 * **Scopes**: `customer_seats:write`
 */
export const customerSeatsrevokeSeat = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerSeatsrevokeSeatInput,
    outputSchema: CustomerSeatsrevokeSeatOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
