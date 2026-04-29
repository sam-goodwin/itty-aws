import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const UserlandUserInvitesControllerGetByTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/user_management/invitations/by_token/{token}",
    }),
  );
export type UserlandUserInvitesControllerGetByTokenInput =
  typeof UserlandUserInvitesControllerGetByTokenInput.Type;

// Output Schema
export const UserlandUserInvitesControllerGetByTokenOutput =
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
export type UserlandUserInvitesControllerGetByTokenOutput =
  typeof UserlandUserInvitesControllerGetByTokenOutput.Type;

// The operation
/**
 * Find an invitation by token
 *
 * Retrieve an existing invitation using the token.
 *
 * @param token - The token used to accept the invitation.
 */
export const UserlandUserInvitesControllerGetByToken =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserInvitesControllerGetByTokenInput,
    outputSchema: UserlandUserInvitesControllerGetByTokenOutput,
    errors: [NotFound] as const,
  }));
