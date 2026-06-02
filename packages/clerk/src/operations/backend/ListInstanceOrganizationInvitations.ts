import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const ListInstanceOrganizationInvitationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    order_by: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["pending", "accepted", "revoked", "expired"]),
    ),
    query: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/organization_invitations" }));
export type ListInstanceOrganizationInvitationsInput =
  typeof ListInstanceOrganizationInvitationsInput.Type;

// Output Schema
export const ListInstanceOrganizationInvitationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        object: Schema.optional(Schema.Literals(["organization_invitation"])),
        id: Schema.optional(Schema.String),
        email_address: Schema.optional(Schema.String),
        role: Schema.optional(Schema.String),
        role_name: Schema.optional(Schema.String),
        organization_id: Schema.optional(Schema.String),
        inviter_id: Schema.optional(Schema.NullOr(Schema.String)),
        public_inviter_data: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              user_id: Schema.String,
              first_name: Schema.NullOr(Schema.String),
              last_name: Schema.NullOr(Schema.String),
              image_url: Schema.String,
              has_image: Schema.Boolean,
              identifier: Schema.String,
            }),
          ),
        ),
        status: Schema.optional(Schema.String),
        public_metadata: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        private_metadata: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        url: Schema.optional(Schema.NullOr(Schema.String)),
        expires_at: Schema.optional(Schema.NullOr(Schema.Number)),
        created_at: Schema.optional(Schema.Number),
        updated_at: Schema.optional(Schema.Number),
        public_organization_data: Schema.optional(
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
            slug: Schema.String,
            image_url: Schema.optional(Schema.String),
            has_image: Schema.Boolean,
          }),
        ),
      }),
    ),
    total_count: Schema.Number,
  });
export type ListInstanceOrganizationInvitationsOutput =
  typeof ListInstanceOrganizationInvitationsOutput.Type;

// The operation
/**
 * Get a list of organization invitations for the current instance
 *
 * This request returns the list of organization invitations for the instance.
 * Results can be paginated using the optional `limit` and `offset` query parameters.
 * You can filter them by providing the 'status' query parameter, that accepts multiple values.
 * You can change the order by providing the 'order' query parameter, that accepts multiple values.
 * You can filter by the invited user email address providing the `query` query parameter.
 * The organization invitations are ordered by descending creation date by default.
 *
 * @param order_by - Allows to return organization invitations in a particular order.
At the moment, you can order the returned organization invitations either by their `created_at` or `email_address`.
In order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.
For example, if you want organization invitations to be returned in descending order according to their `created_at` property, you can use `-created_at`.
If you don't use `+` or `-`, then `+` is implied.
Defaults to `-created_at`.
 * @param status - Filter organization invitations based on their status
 * @param query - Filter organization invitations based on their `email_address`
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 */
export const ListInstanceOrganizationInvitations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListInstanceOrganizationInvitationsInput,
    outputSchema: ListInstanceOrganizationInvitationsOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
