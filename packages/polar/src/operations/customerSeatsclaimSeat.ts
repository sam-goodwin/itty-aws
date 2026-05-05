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
      modified_at: Schema.NullOr(Schema.String),
      id: Schema.String,
      subscription_id: Schema.optional(Schema.NullOr(Schema.String)),
      order_id: Schema.optional(Schema.NullOr(Schema.String)),
      status: Schema.Literals(["pending", "claimed", "revoked"]),
      customer_id: Schema.optional(Schema.NullOr(Schema.String)),
      member_id: Schema.optional(Schema.NullOr(Schema.String)),
      member: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            id: Schema.String,
            created_at: Schema.String,
            modified_at: Schema.NullOr(Schema.String),
            customer_id: Schema.String,
            email: Schema.String,
            name: Schema.NullOr(Schema.String),
            external_id: Schema.NullOr(Schema.String),
            role: Schema.Literals(["owner", "billing_manager", "member"]),
          }),
        ),
      ),
      email: Schema.optional(Schema.NullOr(Schema.String)),
      customer_email: Schema.optional(Schema.NullOr(Schema.String)),
      invitation_token_expires_at: Schema.optional(
        Schema.NullOr(Schema.String),
      ),
      claimed_at: Schema.optional(Schema.NullOr(Schema.String)),
      revoked_at: Schema.optional(Schema.NullOr(Schema.String)),
      seat_metadata: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
      ),
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
