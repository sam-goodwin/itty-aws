import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalseatslistSeatsInput {
  subscription_id?: string | null;
  order_id?: string | null;
}
export const CustomerPortalseatslistSeatsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscription_id: Schema.optional(Schema.NullOr(Schema.String)),
    order_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customer-portal/seats" }),
  ) as unknown as Schema.Codec<CustomerPortalseatslistSeatsInput>;

// Output Schema
export interface CustomerPortalseatslistSeatsOutput {
  seats: ReadonlyArray<{
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
  }>;
  available_seats: number;
  total_seats: number;
}
export const CustomerPortalseatslistSeatsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    seats: Schema.Array(
      Schema.Struct({
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
    ),
    available_seats: Schema.Number,
    total_seats: Schema.Number,
  }) as unknown as Schema.Codec<CustomerPortalseatslistSeatsOutput>;

// The operation
/**
 * List Seats
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 *
 * @param subscription_id - Subscription ID
 * @param order_id - Order ID
 */
export const customerPortalseatslistSeats =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalseatslistSeatsInput,
    outputSchema: CustomerPortalseatslistSeatsOutput,
  }));
