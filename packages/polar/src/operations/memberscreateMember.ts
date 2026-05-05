import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const MemberscreateMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer_id: Schema.String,
    email: Schema.String,
    name: Schema.optional(Schema.NullOr(Schema.String)),
    external_id: Schema.optional(Schema.NullOr(Schema.String)),
    role: Schema.optional(Schema.Literals(["member", "billing_manager"])),
  }).pipe(T.Http({ method: "POST", path: "/v1/members/" }));
export type MemberscreateMemberInput = typeof MemberscreateMemberInput.Type;

// Output Schema
export const MemberscreateMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    customer_id: Schema.String,
    email: Schema.String,
    name: Schema.NullOr(Schema.String),
    external_id: Schema.NullOr(Schema.String),
    role: Schema.Literals(["owner", "billing_manager", "member"]),
  });
export type MemberscreateMemberOutput = typeof MemberscreateMemberOutput.Type;

// The operation
/**
 * Create Member
 *
 * Create a new member for a customer.
 * Only B2B customers with the member management feature enabled can add members.
 * The authenticated user or organization must have access to the customer's organization.
 * **Scopes**: `members:write`
 */
export const memberscreateMember = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MemberscreateMemberInput,
  outputSchema: MemberscreateMemberOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
