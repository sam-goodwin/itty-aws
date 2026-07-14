import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface RemoveOrganizationMemberInput {
  org_id: string;
  member_id: string;
}
export const RemoveOrganizationMemberInput =
  /*@__PURE__*/ Schema.Struct({
    org_id: Schema.String.pipe(T.PathParam()),
    member_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organizations/{org_id}/members/{member_id}",
    }),
  ) as unknown as Schema.Codec<RemoveOrganizationMemberInput>;

// Output Schema
export interface RemoveOrganizationMemberOutput {}
export const RemoveOrganizationMemberOutput =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as unknown as Schema.Codec<RemoveOrganizationMemberOutput>;

// The operation
/**
 * Remove organization member
 *
 * Removes the specified member from the organization.
 * Only organization admins can perform this action.
 * The last admin in an organization cannot be removed.
 *
 * @param org_id - The Neon organization ID
 * @param member_id - The Neon organization member ID
 */
export const removeOrganizationMember = /*@__PURE__*/ API.make(() => ({
  inputSchema: RemoveOrganizationMemberInput,
  outputSchema: RemoveOrganizationMemberOutput,
}));
