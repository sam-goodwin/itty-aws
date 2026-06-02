import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const RevokeInvitationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  invitation_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "POST", path: "/invitations/{invitation_id}/revoke" }),
);
export type RevokeInvitationInput = typeof RevokeInvitationInput.Type;

// Output Schema
export const RevokeInvitationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    object: Schema.Literals(["invitation"]),
    id: Schema.String,
    email_address: Schema.String,
    public_metadata: Schema.Record(Schema.String, Schema.Unknown),
    revoked: Schema.optional(Schema.Literals(["true"])),
    status: Schema.Literals(["revoked"]),
    url: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.NullOr(Schema.Number)),
    created_at: Schema.Number,
    updated_at: Schema.Number,
  },
);
export type RevokeInvitationOutput = typeof RevokeInvitationOutput.Type;

// The operation
/**
 * Revokes an invitation
 *
 * Revokes the given invitation.
 * Revoking an invitation will prevent the user from using the invitation link that was sent to them.
 * However, it doesn't prevent the user from signing up if they follow the sign up flow.
 * Only active (i.e. non-revoked) invitations can be revoked.
 *
 * @param invitation_id - The ID of the invitation to be revoked
 */
export const RevokeInvitation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RevokeInvitationInput,
  outputSchema: RevokeInvitationOutput,
  errors: [BadRequest, NotFound] as const,
}));
