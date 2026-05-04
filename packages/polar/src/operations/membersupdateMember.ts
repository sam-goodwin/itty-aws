import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const MembersupdateMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.Unknown),
    role: Schema.optional(Schema.Unknown),
  }).pipe(T.Http({ method: "PATCH", path: "/v1/members/{id}" }));
export type MembersupdateMemberInput = typeof MembersupdateMemberInput.Type;

// Output Schema
export const MembersupdateMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.Unknown,
    customer_id: Schema.String,
    email: Schema.String,
    name: Schema.Unknown,
    external_id: Schema.Unknown,
    role: Schema.Literals(["owner", "billing_manager", "member"]),
  });
export type MembersupdateMemberOutput = typeof MembersupdateMemberOutput.Type;

// The operation
/**
 * Update Member
 *
 * Update a member.
 * Only name and role can be updated.
 * The authenticated user or organization must have access to the member's organization.
 * **Scopes**: `members:write`
 */
export const membersupdateMember = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MembersupdateMemberInput,
  outputSchema: MembersupdateMemberOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
