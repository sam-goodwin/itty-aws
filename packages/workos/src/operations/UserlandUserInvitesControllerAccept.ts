import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const UserlandUserInvitesControllerAcceptInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/user_management/invitations/{id}/accept",
    }),
  );
export type UserlandUserInvitesControllerAcceptInput =
  typeof UserlandUserInvitesControllerAcceptInput.Type;

// Output Schema
export const UserlandUserInvitesControllerAcceptOutput =
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
export type UserlandUserInvitesControllerAcceptOutput =
  typeof UserlandUserInvitesControllerAcceptOutput.Type;

// The operation
/**
 * Accept an invitation
 *
 * Accepts an invitation and, if linked to an organization, activates the user's membership in that organization.
 *
 * @param id - The unique ID of the invitation.
 */
export const UserlandUserInvitesControllerAccept =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserInvitesControllerAcceptInput,
    outputSchema: UserlandUserInvitesControllerAcceptOutput,
    errors: [BadRequest, NotFound] as const,
  }));
