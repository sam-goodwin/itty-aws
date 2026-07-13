import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalmembersaddMemberInput {
  email: string;
  name?: string | null;
  role?: "owner" | "billing_manager" | "member";
}
export const CustomerPortalmembersaddMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.String,
    name: Schema.optional(Schema.NullOr(Schema.String)),
    role: Schema.optional(
      Schema.Literals(["owner", "billing_manager", "member"]),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/customer-portal/members" }),
  ) as unknown as Schema.Codec<CustomerPortalmembersaddMemberInput>;

// Output Schema
export interface CustomerPortalmembersaddMemberOutput {
  created_at: string;
  modified_at: string | null;
  id: string;
  email: string;
  name: string | null;
  role: "owner" | "billing_manager" | "member";
}
export const CustomerPortalmembersaddMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    id: Schema.String,
    email: Schema.String,
    name: Schema.NullOr(Schema.String),
    role: Schema.Literals(["owner", "billing_manager", "member"]),
  }) as unknown as Schema.Codec<CustomerPortalmembersaddMemberOutput>;

// The operation
/**
 * Add Member
 *
 * Add a new member to the customer's team.
 * Only available to owners and billing managers of team customers.
 * Rules:
 * - Cannot add a member with the owner role (there must be exactly one owner)
 * - If a member with this email already exists, the existing member is returned
 */
export const customerPortalmembersaddMember =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalmembersaddMemberInput,
    outputSchema: CustomerPortalmembersaddMemberOutput,
  }));
