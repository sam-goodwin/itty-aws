import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AddOrgTeamUserInput {
  orgId: string;
  teamId: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const AddOrgTeamUserInput = /*@__PURE__*/ Schema.Struct({
  orgId: Schema.String.pipe(T.PathParam()),
  teamId: Schema.String.pipe(T.PathParam()),
  envelope: Schema.optional(Schema.Boolean),
  pretty: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "POST",
    path: "/api/atlas/v2/orgs/{orgId}/teams/{teamId}:addUser",
  }),
) as unknown as Schema.Codec<AddOrgTeamUserInput>;

// Output Schema
export type AddOrgTeamUserOutput = void;
export const AddOrgTeamUserOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AddOrgTeamUserOutput>;

// The operation
/**
 * Add One MongoDB Cloud User to One Team
 *
 * Adds one MongoDB Cloud user to one team. You can add an active user or a user that has not yet accepted the invitation to join the organization.
 * **Note**: This resource cannot be used to add a user invited via the deprecated Invite One MongoDB Cloud User to Join One Project endpoint.
 * A user whose only organization invitation has `EXPIRED` or been `REJECTED` is treated as not belonging to the organization (`USER_NOT_IN_ORG`); re-invite them to the organization first (which creates a new pending invitation), then add them to the team.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param orgId - Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [`/orgs`](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param teamId - Unique 24-hexadecimal digit string that identifies the team to add the MongoDB Cloud user to.
 */
export const addOrgTeamUser = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddOrgTeamUserInput,
  outputSchema: AddOrgTeamUserOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
