import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GroupMembershipsControllerRemoveMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    groupId: Schema.String.pipe(T.PathParam()),
    omId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organizations/{organizationId}/groups/{groupId}/organization-memberships/{omId}",
    }),
  );
export type GroupMembershipsControllerRemoveMemberInput =
  typeof GroupMembershipsControllerRemoveMemberInput.Type;

// Output Schema
export const GroupMembershipsControllerRemoveMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GroupMembershipsControllerRemoveMemberOutput =
  typeof GroupMembershipsControllerRemoveMemberOutput.Type;

// The operation
/**
 * Remove a member from a Group
 *
 * Remove an organization membership from a group.
 *
 * @param organizationId - Unique identifier of the Organization.
 * @param groupId - Unique identifier of the Group.
 * @param omId - Unique identifier of the Organization Membership.
 */
export const GroupMembershipsControllerRemoveMember =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GroupMembershipsControllerRemoveMemberInput,
    outputSchema: GroupMembershipsControllerRemoveMemberOutput,
    errors: [Forbidden, NotFound] as const,
  }));
