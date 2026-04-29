import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const UserlandUserInvitesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/user_management/invitations/{id}" }));
export type UserlandUserInvitesControllerGetInput =
  typeof UserlandUserInvitesControllerGetInput.Type;

// Output Schema
export const UserlandUserInvitesControllerGetOutput =
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
export type UserlandUserInvitesControllerGetOutput =
  typeof UserlandUserInvitesControllerGetOutput.Type;

// The operation
/**
 * Get an invitation
 *
 * Get the details of an existing invitation.
 *
 * @param id - The unique ID of the invitation.
 */
export const UserlandUserInvitesControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserInvitesControllerGetInput,
    outputSchema: UserlandUserInvitesControllerGetOutput,
    errors: [NotFound] as const,
  }));
