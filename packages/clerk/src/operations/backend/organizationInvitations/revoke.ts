import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const RevokeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  invitation_id: Schema.String.pipe(T.PathParam()),
  requesting_user_id: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/organizations/{organization_id}/invitations/{invitation_id}/revoke",
  }),
);
export type RevokeInput = typeof RevokeInput.Type;

// Output Schema
export const RevokeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type RevokeOutput = typeof RevokeOutput.Type;

// The operation
/**
 * Revoke a pending organization invitation
 *
 * Use this request to revoke a previously issued organization invitation.
 * Revoking an organization invitation makes it invalid; the invited user will no longer be able to join the organization with the revoked invitation.
 * Only organization invitations with "pending" status can be revoked.
 * The request accepts the `requesting_user_id` parameter to specify the user which revokes the invitation.
 * Only users with "admin" role can revoke invitations.
 *
 * @param organization_id - The organization ID.
 * @param invitation_id - The organization invitation ID.
 */
export const revoke = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RevokeInput,
  outputSchema: RevokeOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
