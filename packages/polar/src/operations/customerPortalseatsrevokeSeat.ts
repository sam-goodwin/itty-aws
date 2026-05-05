import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalseatsrevokeSeatInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    seat_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/customer-portal/seats/{seat_id}" }),
  );
export type CustomerPortalseatsrevokeSeatInput =
  typeof CustomerPortalseatsrevokeSeatInput.Type;

// Output Schema
export const CustomerPortalseatsrevokeSeatOutput =
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
export type CustomerPortalseatsrevokeSeatOutput =
  typeof CustomerPortalseatsrevokeSeatOutput.Type;

// The operation
/**
 * Revoke Seat
 */
export const customerPortalseatsrevokeSeat =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalseatsrevokeSeatInput,
    outputSchema: CustomerPortalseatsrevokeSeatOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
