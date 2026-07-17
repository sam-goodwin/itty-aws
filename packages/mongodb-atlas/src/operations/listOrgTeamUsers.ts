import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface ListOrgTeamUsersInput {
  orgId: string;
  teamId: string;
  envelope?: boolean;
  itemsPerPage?: number;
  pageNum?: number;
  pretty?: boolean;
  username?: string;
  orgMembershipStatus?: string;
  orgMembershipStatuses?: string;
  userId?: string;
}
export const ListOrgTeamUsersInput = /*@__PURE__*/ Schema.Struct({
  orgId: Schema.String.pipe(T.PathParam()),
  teamId: Schema.String.pipe(T.PathParam()),
  envelope: Schema.optional(Schema.Boolean),
  itemsPerPage: Schema.optional(Schema.Number),
  pageNum: Schema.optional(Schema.Number),
  pretty: Schema.optional(Schema.Boolean),
  username: Schema.optional(Schema.String),
  orgMembershipStatus: Schema.optional(Schema.String),
  orgMembershipStatuses: Schema.optional(Schema.String),
  userId: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/atlas/v2/orgs/{orgId}/teams/{teamId}/users",
  }),
) as unknown as Schema.Codec<ListOrgTeamUsersInput>;

// Output Schema
export type ListOrgTeamUsersOutput = void;
export const ListOrgTeamUsersOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ListOrgTeamUsersOutput>;

// The operation
/**
 * Return All MongoDB Cloud Users Assigned to One Team
 *
 * Returns details about the pending and active MongoDB Cloud users associated with the specified team in the organization. Teams enable you to grant project access roles to MongoDB Cloud users.
 * **Note**: This resource cannot be used to view details about users invited via the deprecated [Invite One MongoDB Cloud User to Join One Project](#tag/Projects/operation/createProjectInvitation) endpoint.
 * **Note**: To return both pending and active users, use v2-{2025-02-19} or later. If using a deprecated version, only active users will be returned. Deprecated versions: v2-{2023-01-01}
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param itemsPerPage - Number of items that the response returns per page.
 * @param orgId - Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [`/orgs`](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
 * @param pageNum - Number of the page that displays the current set of the total objects that the response returns.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param teamId - Unique 24-hexadecimal digit string that identifies the team whose application users you want to return.
 * @param username - Email address to filter users by. Not supported in deprecated versions.
 * @param orgMembershipStatus - Deprecated: Use `orgMembershipStatuses` instead. Organization membership status to filter users by. Allowed values: `ACTIVE`, `PENDING`, `INVITATION_EXPIRED`, `INVITATION_REJECTED`. If you exclude this parameter, this resource returns ACTIVE and PENDING users. Not supported in deprecated versions.
 * @param orgMembershipStatuses - Organization membership status to filter users by. You can supply this parameter multiple times. Allowed values: `ACTIVE`, `PENDING`, `INVITATION_EXPIRED`, `INVITATION_REJECTED`. Replaces the deprecated `orgMembershipStatus` parameter. If you exclude this parameter, this resource returns ACTIVE and PENDING users. Cannot be combined with `orgMembershipStatus`. Not supported in deprecated versions.
 * @param userId - Unique 24-hexadecimal digit string to filter users by. Not supported in deprecated versions.
 */
export const listOrgTeamUsers = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListOrgTeamUsersInput,
  outputSchema: ListOrgTeamUsersOutput,
  errors: [BadRequest, Forbidden, NotFound, Conflict] as const,
}));
