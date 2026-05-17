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
export const CustomerSeatsassignSeatInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscription_id: Schema.optional(Schema.NullOr(Schema.String)),
    checkout_id: Schema.optional(Schema.NullOr(Schema.String)),
    checkout_client_secret: Schema.optional(Schema.NullOr(Schema.String)),
    order_id: Schema.optional(Schema.NullOr(Schema.String)),
    email: Schema.optional(Schema.NullOr(Schema.String)),
    external_customer_id: Schema.optional(Schema.NullOr(Schema.String)),
    customer_id: Schema.optional(Schema.NullOr(Schema.String)),
    external_member_id: Schema.optional(Schema.NullOr(Schema.String)),
    member_id: Schema.optional(Schema.NullOr(Schema.String)),
    metadata: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    immediate_claim: Schema.optional(Schema.Boolean),
  }).pipe(T.Http({ method: "POST", path: "/v1/customer-seats" }));
export type CustomerSeatsassignSeatInput =
  typeof CustomerSeatsassignSeatInput.Type;

// Output Schema
export const CustomerSeatsassignSeatOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    invitation_token_expires_at: Schema.optional(Schema.NullOr(Schema.String)),
    claimed_at: Schema.optional(Schema.NullOr(Schema.String)),
    revoked_at: Schema.optional(Schema.NullOr(Schema.String)),
    seat_metadata: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  });
export type CustomerSeatsassignSeatOutput =
  typeof CustomerSeatsassignSeatOutput.Type;

// The operation
/**
 * Assign Seat
 *
 * **Scopes**: `customer_seats:write`
 */
export const customerSeatsassignSeat = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerSeatsassignSeatInput,
    outputSchema: CustomerSeatsassignSeatOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
