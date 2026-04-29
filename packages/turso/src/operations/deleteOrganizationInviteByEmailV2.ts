import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteOrganizationInviteByEmailV2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    email: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v2/organizations/{organizationSlug}/invites/{email}",
    }),
  );
export type DeleteOrganizationInviteByEmailV2Input =
  typeof DeleteOrganizationInviteByEmailV2Input.Type;

// Output Schema
export const DeleteOrganizationInviteByEmailV2Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteOrganizationInviteByEmailV2Output =
  typeof DeleteOrganizationInviteByEmailV2Output.Type;

// The operation
/**
 * Delete Invite
 *
 * Delete a pending invite for the organization by email.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const deleteOrganizationInviteByEmailV2 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteOrganizationInviteByEmailV2Input,
    outputSchema: DeleteOrganizationInviteByEmailV2Output,
    errors: [NotFound] as const,
  }));
