import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  PaymentRequired,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const CreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  email_address: Schema.String,
  inviter_user_id: Schema.optional(Schema.NullOr(Schema.String)),
  role: Schema.String,
  public_metadata: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  private_metadata: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  redirect_url: Schema.optional(Schema.NullOr(Schema.String)),
  expires_in_days: Schema.optional(Schema.NullOr(Schema.Number)),
  notify: Schema.optional(Schema.NullOr(Schema.Boolean)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/organizations/{organization_id}/invitations",
  }),
);
export type CreateInput = typeof CreateInput.Type;

// Output Schema
export const CreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type CreateOutput = typeof CreateOutput.Type;

// The operation
/**
 * Create and send an organization invitation
 *
 * Creates a new organization invitation and sends an email to the provided `email_address` with a link to accept the invitation and join the organization.
 * You can specify the `role` for the invited organization member.
 * New organization invitations get a "pending" status until they are revoked by an organization administrator or accepted by the invitee.
 * The request body supports passing an optional `redirect_url` parameter.
 * When the invited user clicks the link to accept the invitation, they will be redirected to the URL provided.
 * Use this parameter to implement a custom invitation acceptance flow.
 * You can specify the ID of the user that will send the invitation with the `inviter_user_id` parameter.
 * That user must be a member with administrator privileges in the organization.
 * Only "admin" members can create organization invitations.
 * You can optionally provide public and private metadata for the organization invitation.
 * The public metadata are visible by both the Frontend and the Backend whereas the private ones only by the Backend.
 * When the organization invitation is accepted, the metadata will be transferred to the newly created organization membership.
 *
 * @param organization_id - The ID of the organization for which to send the invitation
 */
export const create = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateInput,
  outputSchema: CreateOutput,
  errors: [
    BadRequest,
    PaymentRequired,
    Forbidden,
    NotFound,
    UnprocessableEntity,
  ] as const,
}));
