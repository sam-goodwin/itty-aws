import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalmembersupdateMemberInput {
  id: string;
  name?: string | null;
  role?: "owner" | "billing_manager" | "member" | null;
}
export const CustomerPortalmembersupdateMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    role: Schema.optional(
      Schema.NullOr(Schema.Literals(["owner", "billing_manager", "member"])),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/customer-portal/members/{id}" }),
  ) as unknown as Schema.Codec<CustomerPortalmembersupdateMemberInput>;

// Output Schema
export interface CustomerPortalmembersupdateMemberOutput {
  created_at: string;
  modified_at: string | null;
  id: string;
  email: string;
  name: string | null;
  role: "owner" | "billing_manager" | "member";
}
export const CustomerPortalmembersupdateMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    id: Schema.String,
    email: Schema.String,
    name: Schema.NullOr(Schema.String),
    role: Schema.Literals(["owner", "billing_manager", "member"]),
  }) as unknown as Schema.Codec<CustomerPortalmembersupdateMemberOutput>;

// The operation
/**
 * Update Member
 *
 * Update a member's name or role.
 * Only available to owners and billing managers of team customers.
 * Rules:
 * - Cannot modify your own role (to prevent self-demotion)
 * - Customer must have exactly one owner at all times
 */
export const customerPortalmembersupdateMember =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalmembersupdateMemberInput,
    outputSchema: CustomerPortalmembersupdateMemberOutput,
  }));
