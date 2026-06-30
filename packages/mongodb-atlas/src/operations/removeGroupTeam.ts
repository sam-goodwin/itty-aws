import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface RemoveGroupTeamInput {
  groupId: string;
  teamId: string;
  envelope?: boolean;
}
export const RemoveGroupTeamInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groupId: Schema.String.pipe(T.PathParam()),
  teamId: Schema.String.pipe(T.PathParam()),
  envelope: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/atlas/v2/groups/{groupId}/teams/{teamId}",
  }),
) as unknown as Schema.Codec<RemoveGroupTeamInput>;

// Output Schema
export type RemoveGroupTeamOutput = void;
export const RemoveGroupTeamOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RemoveGroupTeamOutput>;

// The operation
/**
 * Remove One Team from One Project
 *
 * Removes one team specified using its unique 24-hexadecimal digit identifier from the project specified using its unique 24-hexadecimal digit identifier.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param teamId - Unique 24-hexadecimal digit string that identifies the team that you want to remove from the specified project.
 */
export const removeGroupTeam = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RemoveGroupTeamInput,
  outputSchema: RemoveGroupTeamOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
