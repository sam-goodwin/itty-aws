import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface UserlandUserInvitesControllerGetByTokenInput {
  token: string;
}
export const UserlandUserInvitesControllerGetByTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/user_management/invitations/by_token/{token}",
    }),
  ) as unknown as Schema.Codec<UserlandUserInvitesControllerGetByTokenInput>;

// Output Schema
export interface UserlandUserInvitesControllerGetByTokenOutput {
  object?: string;
  id?: string;
  email?: string;
  state?: "pending" | "accepted" | "expired" | "revoked";
  accepted_at?: string | null;
  revoked_at?: string | null;
  expires_at?: string;
  organization_id?: string | null;
  inviter_user_id?: string | null;
  accepted_user_id?: string | null;
  role_slug?: string | null;
  created_at?: string;
  updated_at?: string;
  token?: string;
  accept_invitation_url?: string;
}
export const UserlandUserInvitesControllerGetByTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    state: Schema.optional(
      Schema.Literals(["pending", "accepted", "expired", "revoked"]),
    ),
    accepted_at: Schema.optional(Schema.NullOr(Schema.String)),
    revoked_at: Schema.optional(Schema.NullOr(Schema.String)),
    expires_at: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    inviter_user_id: Schema.optional(Schema.NullOr(Schema.String)),
    accepted_user_id: Schema.optional(Schema.NullOr(Schema.String)),
    role_slug: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    token: Schema.optional(Schema.String),
    accept_invitation_url: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<UserlandUserInvitesControllerGetByTokenOutput>;

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
