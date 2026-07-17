import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface DeleteOrganizationInviteByEmailV2Input {
  organizationSlug: string;
  email: string;
}
export const DeleteOrganizationInviteByEmailV2Input =
  /*@__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    email: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v2/organizations/{organizationSlug}/invites/{email}",
    }),
  ) as unknown as Schema.Codec<DeleteOrganizationInviteByEmailV2Input>;

// Output Schema
export type DeleteOrganizationInviteByEmailV2Output = void;
export const DeleteOrganizationInviteByEmailV2Output =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteOrganizationInviteByEmailV2Output>;

// The operation
/**
 * Delete Invite
 *
 * Delete a pending invite for the organization by email.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const deleteOrganizationInviteByEmailV2 =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteOrganizationInviteByEmailV2Input,
    outputSchema: DeleteOrganizationInviteByEmailV2Output,
    errors: [NotFound] as const,
  }));
