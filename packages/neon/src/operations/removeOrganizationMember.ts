import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const RemoveOrganizationMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    org_id: Schema.String.pipe(T.PathParam()),
    member_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organizations/{org_id}/members/{member_id}",
    }),
  );
export type RemoveOrganizationMemberInput =
  typeof RemoveOrganizationMemberInput.Type;

// Output Schema
export const RemoveOrganizationMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export type RemoveOrganizationMemberOutput =
  typeof RemoveOrganizationMemberOutput.Type;

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
export const removeOrganizationMember = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RemoveOrganizationMemberInput,
    outputSchema: RemoveOrganizationMemberOutput,
  }),
);
