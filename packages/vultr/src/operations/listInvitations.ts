import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const ListInvitationsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v2/invitation" }));
export type ListInvitationsInput = typeof ListInvitationsInput.Type;

// Output Schema
export const ListInvitationsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  invitations: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        inviter_name: Schema.optional(Schema.String),
        inviter_email: Schema.optional(Schema.String),
        email_invited: Schema.optional(Schema.String),
        email_registered: Schema.optional(Schema.String),
        permissions: Schema.optional(Schema.String),
        org_id: Schema.optional(Schema.String),
        org_name: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        date_responded: Schema.optional(Schema.String),
        expiration_date: Schema.optional(Schema.String),
        invite_status: Schema.optional(Schema.String),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      total: Schema.optional(Schema.Number),
      links: Schema.optional(
        Schema.Struct({
          next: Schema.optional(Schema.String),
          prev: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
});
export type ListInvitationsOutput = typeof ListInvitationsOutput.Type;

// The operation
/**
 * List Invitations
 *
 * List all pending invitations for your organization.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listInvitations = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListInvitationsInput,
  outputSchema: ListInvitationsOutput,
  errors: [Forbidden] as const,
}));
