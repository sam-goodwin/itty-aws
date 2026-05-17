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
export const CustomerPortalmembersupdateMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    role: Schema.optional(
      Schema.NullOr(Schema.Literals(["owner", "billing_manager", "member"])),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/customer-portal/members/{id}" }),
  );
export type CustomerPortalmembersupdateMemberInput =
  typeof CustomerPortalmembersupdateMemberInput.Type;

// Output Schema
export const CustomerPortalmembersupdateMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    id: Schema.String,
    email: Schema.String,
    name: Schema.NullOr(Schema.String),
    role: Schema.Literals(["owner", "billing_manager", "member"]),
  });
export type CustomerPortalmembersupdateMemberOutput =
  typeof CustomerPortalmembersupdateMemberOutput.Type;

// The operation
/**
 * Update Member
 *
 * Update a member's role.
 * Only available to owners and billing managers of team customers.
 * Rules:
 * - Cannot modify your own role (to prevent self-demotion)
 * - Customer must have exactly one owner at all times
 */
export const customerPortalmembersupdateMember =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalmembersupdateMemberInput,
    outputSchema: CustomerPortalmembersupdateMemberOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
