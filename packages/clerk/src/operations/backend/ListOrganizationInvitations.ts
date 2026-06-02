import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const ListOrganizationInvitationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    status: Schema.optional(
      Schema.Literals(["pending", "accepted", "revoked", "expired"]),
    ),
    email_address: Schema.optional(Schema.String),
    order_by: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization_id}/invitations",
    }),
  );
export type ListOrganizationInvitationsInput =
  typeof ListOrganizationInvitationsInput.Type;

// Output Schema
export const ListOrganizationInvitationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        object: Schema.Literals(["organization_invitation"]),
        id: Schema.String,
        email_address: Schema.String,
        role: Schema.String,
        role_name: Schema.String,
        organization_id: Schema.optional(Schema.String),
        inviter_id: Schema.NullOr(Schema.String),
        public_inviter_data: Schema.NullOr(
          Schema.Struct({
            user_id: Schema.String,
            first_name: Schema.NullOr(Schema.String),
            last_name: Schema.NullOr(Schema.String),
            image_url: Schema.String,
            has_image: Schema.Boolean,
            identifier: Schema.String,
          }),
        ),
        status: Schema.optional(Schema.String),
        public_metadata: Schema.Record(Schema.String, Schema.Unknown),
        private_metadata: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        url: Schema.NullOr(Schema.String),
        expires_at: Schema.NullOr(Schema.Number),
        created_at: Schema.Number,
        updated_at: Schema.Number,
      }),
    ),
    total_count: Schema.Number,
  });
export type ListOrganizationInvitationsOutput =
  typeof ListOrganizationInvitationsOutput.Type;

// The operation
/**
 * Get a list of organization invitations
 *
 * This request returns the list of organization invitations.
 * Results can be paginated using the optional `limit` and `offset` query parameters.
 * You can filter them by providing the 'status' query parameter, that accepts multiple values.
 * The organization invitations are ordered by descending creation date.
 * Most recent invitations will be returned first.
 * Any invitations created as a result of an Organization Domain are not included in the results.
 *
 * @param organization_id - The organization ID.
 * @param status - Filter organization invitations based on their status
 * @param email_address - Returns organization invitations inviting the specified email address.
 * @param order_by - Allows to return organization invitations in a particular order.
You can order the returned organization invitations either by their `created_at` or `email_address`.
In order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.
For example, if you want organization invitations to be returned in descending order according to their `created_at` property, you can use `-created_at`.
If you don't use `+` or `-`, then `+` is implied.
Defaults to `-created_at`.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 */
export const ListOrganizationInvitations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListOrganizationInvitationsInput,
    outputSchema: ListOrganizationInvitationsOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }),
);
