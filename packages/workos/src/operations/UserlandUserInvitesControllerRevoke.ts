import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const UserlandUserInvitesControllerRevokeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/user_management/invitations/{id}/revoke",
    }),
  );
export type UserlandUserInvitesControllerRevokeInput =
  typeof UserlandUserInvitesControllerRevokeInput.Type;

// Output Schema
export const UserlandUserInvitesControllerRevokeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    email: Schema.String,
    state: Schema.Literals(["pending", "accepted", "expired", "revoked"]),
    accepted_at: Schema.NullOr(Schema.String),
    revoked_at: Schema.NullOr(Schema.String),
    expires_at: Schema.String,
    organization_id: Schema.NullOr(Schema.String),
    inviter_user_id: Schema.NullOr(Schema.String),
    accepted_user_id: Schema.NullOr(Schema.String),
    role_slug: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
    token: Schema.String,
    accept_invitation_url: Schema.String,
  });
export type UserlandUserInvitesControllerRevokeOutput =
  typeof UserlandUserInvitesControllerRevokeOutput.Type;

// The operation
/**
 * Revoke an invitation
 *
 * Revokes an existing invitation.
 *
 * @param id - The unique ID of the invitation.
 */
export const UserlandUserInvitesControllerRevoke =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserInvitesControllerRevokeInput,
    outputSchema: UserlandUserInvitesControllerRevokeOutput,
    errors: [BadRequest] as const,
  }));
