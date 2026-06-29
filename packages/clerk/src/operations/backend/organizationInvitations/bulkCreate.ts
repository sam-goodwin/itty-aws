import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const BulkCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/organizations/{organization_id}/invitations/bulk",
  }),
);
export type BulkCreateInput = typeof BulkCreateInput.Type;

// Output Schema
export const BulkCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type BulkCreateOutput = typeof BulkCreateOutput.Type;

// The operation
/**
 * Bulk create and send organization invitations
 *
 * Creates new organization invitations in bulk and sends out emails to the provided email addresses with a link to accept the invitation and join the organization.
 * This endpoint is limited to a maximum of 10 invitations per API call. If you need to send more invitations, please make multiple requests.
 * You can specify a different `role` for each invited organization member.
 * New organization invitations get a "pending" status until they are revoked by an organization administrator or accepted by the invitee.
 * The request body supports passing an optional `redirect_url` parameter for each invitation.
 * When the invited user clicks the link to accept the invitation, they will be redirected to the provided URL.
 * Use this parameter to implement a custom invitation acceptance flow.
 * You can specify the ID of the user that will send the invitation with the `inviter_user_id` parameter. Each invitation
 * can have a different inviter user.
 * Inviter users must be members with administrator privileges in the organization.
 * Only "admin" members can create organization invitations.
 * You can optionally provide public and private metadata for each organization invitation. The public metadata are visible
 * by both the Frontend and the Backend, whereas the private metadata are only visible by the Backend.
 * When the organization invitation is accepted, the metadata will be transferred to the newly created organization membership.
 *
 * @param organization_id - The organization ID.
 */
export const bulkCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BulkCreateInput,
  outputSchema: BulkCreateOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
