import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerSeatsclaimSeatInput {
  invitation_token: string;
}
export const CustomerSeatsclaimSeatInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invitation_token: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/v1/customer-seats/claim" }),
  ) as unknown as Schema.Codec<CustomerSeatsclaimSeatInput>;

// Output Schema
export interface CustomerSeatsclaimSeatOutput {
  seat: {
    created_at: string;
    modified_at: string | null;
    id: string;
    subscription_id: string | null;
    order_id: string | null;
    status: "pending" | "claimed" | "revoked";
    customer_id: string | null;
    member_id: string | null;
    member: {
      id: string;
      created_at: string;
      modified_at: string | null;
      customer_id: string;
      email: string;
      name: string | null;
      external_id: string | null;
      role: "owner" | "billing_manager" | "member";
    } | null;
    email: string | null;
    customer_email: string | null;
    invitation_token_expires_at: string | null;
    claimed_at: string | null;
    revoked_at: string | null;
    seat_metadata: Record<string, unknown> | null;
  };
  customer_session_token: string;
}
export const CustomerSeatsclaimSeatOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    seat: Schema.Struct({
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
      id: Schema.String,
      subscription_id: Schema.NullOr(Schema.String),
      order_id: Schema.NullOr(Schema.String),
      status: Schema.Literals(["pending", "claimed", "revoked"]),
      customer_id: Schema.NullOr(Schema.String),
      member_id: Schema.NullOr(Schema.String),
      member: Schema.NullOr(
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
      email: Schema.NullOr(Schema.String),
      customer_email: Schema.NullOr(Schema.String),
      invitation_token_expires_at: Schema.NullOr(Schema.String),
      claimed_at: Schema.NullOr(Schema.String),
      revoked_at: Schema.NullOr(Schema.String),
      seat_metadata: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    }),
    customer_session_token: Schema.String,
  }) as unknown as Schema.Codec<CustomerSeatsclaimSeatOutput>;

// The operation
/**
 * Claim Seat
 */
export const customerSeatsclaimSeat = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerSeatsclaimSeatInput,
    outputSchema: CustomerSeatsclaimSeatOutput,
  }),
);
