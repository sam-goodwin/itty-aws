import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CreateOrganizationInvitationsInput {
  org_id: string;
  invitations: {
    email: string;
    role: "admin" | "member" | "editor" | "viewer" | "collaborator";
  }[];
}
export const CreateOrganizationInvitationsInput =
  /*@__PURE__*/ Schema.Struct({
    org_id: Schema.String.pipe(T.PathParam()),
    invitations: Schema.Array(
      Schema.Struct({
        email: Schema.String,
        role: Schema.Literals([
          "admin",
          "member",
          "editor",
          "viewer",
          "collaborator",
        ]),
      }),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "/organizations/{org_id}/invitations" }),
  ) as unknown as Schema.Codec<CreateOrganizationInvitationsInput>;

// Output Schema
export interface CreateOrganizationInvitationsOutput {
  invitations: {
    id: string;
    email: string;
    org_id: string;
    invited_by: string;
    invited_at: string;
    role: "admin" | "member" | "editor" | "viewer" | "collaborator";
  }[];
}
export const CreateOrganizationInvitationsOutput =
  /*@__PURE__*/ Schema.Struct({
    invitations: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        email: Schema.String,
        org_id: Schema.String,
        invited_by: Schema.String,
        invited_at: Schema.String,
        role: Schema.Literals([
          "admin",
          "member",
          "editor",
          "viewer",
          "collaborator",
        ]),
      }),
    ),
  }) as unknown as Schema.Codec<CreateOrganizationInvitationsOutput>;

// The operation
/**
 * Create organization invitations
 *
 * Creates invitations for a specific organization.
 * If the invited user has an existing account, they automatically join as a member.
 * If they don't yet have an account, they are invited to create one, after which they become a member.
 * Each invited user receives an email notification.
 *
 * @param org_id - The Neon organization ID
 */
export const createOrganizationInvitations =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CreateOrganizationInvitationsInput,
    outputSchema: CreateOrganizationInvitationsOutput,
  }));
