import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ListInvitationsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(
    Schema.Literals(["pending", "accepted", "revoked", "expired"]),
  ),
  query: Schema.optional(Schema.String),
  order_by: Schema.optional(Schema.String),
  paginated: Schema.optional(Schema.Boolean),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/invitations" }));
export type ListInvitationsInput = typeof ListInvitationsInput.Type;

// Output Schema
export const ListInvitationsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    object: Schema.Literals(["invitation"]),
    id: Schema.String,
    email_address: Schema.String,
    public_metadata: Schema.Record(Schema.String, Schema.Unknown),
    revoked: Schema.optional(Schema.Boolean),
    status: Schema.Literals(["pending", "accepted", "revoked", "expired"]),
    url: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.NullOr(Schema.Number)),
    created_at: Schema.Number,
    updated_at: Schema.Number,
  }),
);
export type ListInvitationsOutput = typeof ListInvitationsOutput.Type;

// The operation
/**
 * List all invitations
 *
 * Returns all non-revoked invitations for your application, sorted by creation date
 *
 * @param status - Filter invitations based on their status
 * @param query - Filter invitations based on their `email_address` or `id`
 * @param order_by - Allows to return invitations in a particular order.
At the moment, you can order the returned invitations either by their `created_at`, `email_address` or `expires_at`.
In order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.
For example, if you want invitations to be returned in descending order according to their `created_at` property, you can use `-created_at`.
If you don't use `+` or `-`, then `+` is implied.
Defaults to `-created_at`.
 * @param paginated - Whether to paginate the results.
If true, the results will be paginated.
If false, the results will not be paginated.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 */
export const ListInvitations = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListInvitationsInput,
  outputSchema: ListInvitationsOutput,
}));
