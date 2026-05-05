import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const MembersgetMemberInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/members/{id}" }));
export type MembersgetMemberInput = typeof MembersgetMemberInput.Type;

// Output Schema
export const MembersgetMemberOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    customer_id: Schema.String,
    email: Schema.String,
    name: Schema.NullOr(Schema.String),
    external_id: Schema.NullOr(Schema.String),
    role: Schema.Literals(["owner", "billing_manager", "member"]),
  },
);
export type MembersgetMemberOutput = typeof MembersgetMemberOutput.Type;

// The operation
/**
 * Get Member
 *
 * Get a member by ID.
 * The authenticated user or organization must have access to the member's organization.
 * **Scopes**: `members:read` `members:write`
 */
export const membersgetMember = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MembersgetMemberInput,
  outputSchema: MembersgetMemberOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
