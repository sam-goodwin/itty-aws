import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetOrganizationInvitationsInput {
  org_id: string;
}
export const GetOrganizationInvitationsInput =
  /*@__PURE__*/ Schema.Struct({
    org_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/organizations/{org_id}/invitations" }),
  ) as unknown as Schema.Codec<GetOrganizationInvitationsInput>;

// Output Schema
export interface GetOrganizationInvitationsOutput {
  invitations: {
    id: string;
    email: string;
    org_id: string;
    invited_by: string;
    invited_at: string;
    role: "admin" | "member" | "editor" | "viewer" | "collaborator";
  }[];
}
export const GetOrganizationInvitationsOutput =
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
  }) as unknown as Schema.Codec<GetOrganizationInvitationsOutput>;

// The operation
/**
 * List organization invitations
 *
 * Retrieves pending and accepted invitations for the specified organization.
 *
 * @param org_id - The Neon organization ID
 */
export const getOrganizationInvitations = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetOrganizationInvitationsInput,
  outputSchema: GetOrganizationInvitationsOutput,
}));
