import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const GroupMembershipsControllerAddMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    groupId: Schema.String.pipe(T.PathParam()),
    organization_membership_id: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/organizations/{organizationId}/groups/{groupId}/organization-memberships",
    }),
  );
export type GroupMembershipsControllerAddMemberInput =
  typeof GroupMembershipsControllerAddMemberInput.Type;

// Output Schema
export const GroupMembershipsControllerAddMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    organization_id: Schema.String,
    name: Schema.String,
    description: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type GroupMembershipsControllerAddMemberOutput =
  typeof GroupMembershipsControllerAddMemberOutput.Type;

// The operation
/**
 * Add a member to a Group
 *
 * Add an organization membership to a group.
 *
 * @param organizationId - Unique identifier of the Organization.
 * @param groupId - Unique identifier of the Group.
 */
export const GroupMembershipsControllerAddMember =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GroupMembershipsControllerAddMemberInput,
    outputSchema: GroupMembershipsControllerAddMemberOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
