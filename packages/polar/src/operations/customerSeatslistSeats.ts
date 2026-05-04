import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerSeatslistSeatsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscription_id: Schema.optional(Schema.String),
    order_id: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v1/customer-seats" }));
export type CustomerSeatslistSeatsInput =
  typeof CustomerSeatslistSeatsInput.Type;

// Output Schema
export const CustomerSeatslistSeatsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    seats: Schema.Array(
      Schema.Struct({
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
    ),
    available_seats: Schema.Number,
    total_seats: Schema.Number,
  });
export type CustomerSeatslistSeatsOutput =
  typeof CustomerSeatslistSeatsOutput.Type;

// The operation
/**
 * List Seats
 *
 * **Scopes**: `customer_seats:write`
 */
export const customerSeatslistSeats = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerSeatslistSeatsInput,
    outputSchema: CustomerSeatslistSeatsOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
