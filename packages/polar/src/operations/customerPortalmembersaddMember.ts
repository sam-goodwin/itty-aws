import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalmembersaddMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.String,
    name: Schema.optional(Schema.NullOr(Schema.String)),
    role: Schema.optional(
      Schema.Literals(["owner", "billing_manager", "member"]),
    ),
  }).pipe(T.Http({ method: "POST", path: "/v1/customer-portal/members" }));
export type CustomerPortalmembersaddMemberInput =
  typeof CustomerPortalmembersaddMemberInput.Type;

// Output Schema
export const CustomerPortalmembersaddMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    id: Schema.String,
    email: Schema.String,
    name: Schema.NullOr(Schema.String),
    role: Schema.Literals(["owner", "billing_manager", "member"]),
  });
export type CustomerPortalmembersaddMemberOutput =
  typeof CustomerPortalmembersaddMemberOutput.Type;

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
    errors: [BadRequest, Forbidden, UnprocessableEntity] as const,
  }));
